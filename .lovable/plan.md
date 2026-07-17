# Fix invisible pre-footer CTA + site-wide contrast audit

## Root cause

The pre-footer CTA is NOT a shared component — it's duplicated inline on every page. Four instances render `text-offwhite` (white) on a section with **no background set**, so it inherits the page's paper-white → white text on white paper → invisible.

| Page | Section bg | Text color | Result |
|---|---|---|---|
| Home `/` | `bg-[var(--paper)]` | `text-[var(--ink)]` | Correct |
| About `/about` | none (paper) | `text-offwhite` | Invisible (H2 + `<p>`) |
| Products `/products` | none (paper) | `text-offwhite` | Invisible (H2 + `<p>`) |
| Why Nicwin `/why-nicwin` | none (paper) | `text-offwhite` | Invisible (H2 only) |
| Product categories (uPVC/Aluminium/Steel via `ProductCategoryPage`) | `CinematicScene variant="night"` (dark blue) | `text-offwhite` | Correct |
| Gallery, Contact | no pre-footer CTA of this shape | — | N/A |

The "sometimes blank, sometimes faintly visible" difference the user saw is not conditional rendering — it's that Why-Nicwin has H2 only (no `<p>`) while About/Products have both, so the blank-looking one is just a shorter block.

## Fix

### 1. Create one shared component

New file `src/components/site/FinalCTA.tsx` — a single pre-footer CTA block used by every page that needs one. Props: `eyebrow?`, `headline`, `sub?`, `primaryLabel?` (default "Talk to us on WhatsApp"), `secondary?: { label, to }`. Renders on `--paper` with `--ink` headline, `--ink-soft` sub, red accent word optional. Matches the homepage's Scene 10 treatment so the whole site closes on the same beat.

### 2. Replace the four broken inline instances

- `src/routes/about.tsx` lines 243-264 → `<FinalCTA headline="Come see the workshop." sub="Deoghar factory. Deoghar Experience Center & Showroom. And a WhatsApp always open." secondary={{ label: "Plan a visit", to: "/contact" }} />`
- `src/routes/products.tsx` lines 97-112 → `<FinalCTA eyebrow="Not sure where to start?" headline="Tell us the room. We'll suggest the frame." secondary={{ label: "Get a quote", to: "/contact" }} />`
- `src/routes/why-nicwin.tsx` lines 135-151 → `<FinalCTA headline="Bring the better home." secondary={{ label: "See the range", to: "/products" }} />`
- `src/routes/index.tsx` Scene 10 (lines 401-424) → keep the existing correct block, but swap to `<FinalCTA>` for consistency (optional; low risk since it already renders correctly).

`ProductCategoryPage.tsx`'s CTA already sits on a dark `CinematicScene` and reads fine — leave it alone.

### 3. Site-wide contrast audit (single pass)

Grep every route + shared component for the two failure patterns and confirm each hit:

1. `text-offwhite` / `text-white` inside a section with no explicit dark bg — flag and darken to `--ink`.
2. `text-ink` / `text-[var(--ink)]` inside a `bg-ink`, `bg-charcoal`, `mesh-charcoal`, or `CinematicScene` (all dark) — flag and lighten to `--offwhite`.

Sections to walk through: `routes/index.tsx` (all 10 scenes), `about.tsx`, `why-nicwin.tsx`, `gallery.tsx`, `contact.tsx`, `products.tsx`, `products.upvc.tsx`, `products.aluminium.tsx`, `products.steel.tsx`, and the four `products.*.windows/doors/colors.tsx`; plus shared `ProductShowcase.tsx`, `AutoCarousel.tsx`, `Marquee.tsx`, `Footer.tsx`, `Nav.tsx`. Fix in place — no design changes, just token swaps to match each section's actual background.

### 4. Verify

Playwright: load `/`, `/about`, `/products`, `/products/upvc`, `/why-nicwin`, `/gallery`, `/contact`; screenshot each pre-footer area at 1280×1800 and confirm the headline is legible. Also assert `getComputedStyle` on each final-CTA H2 returns `rgb(23, 24, 28)` (ink), not white.

## Out of scope

- Redesigning the CTA copy or layout.
- Touching the homepage hero, product category hero, or any working dark section.
- Placeholder factory/showroom media cards (still awaiting client assets).
