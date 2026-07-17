## Root cause

`CinematicScene`'s `teal` and `gold` variants use Tailwind arbitrary values with commas inside `radial-gradient(...)` — Tailwind v4 doesn't parse those, so the mesh div renders transparent. The only thing you see on the uPVC and Steel cards is the `vignette` layer (transparent center → deep-blue edges) sitting on the page's white background, which reads as "light card with a blue vignette." White text on that white center is invisible. The Aluminium card uses `mesh-charcoal` (a real `@utility`), so it renders correctly dark and the white text is fine.

The pre-footer CTA on `/products` already renders correctly (`FinalCTA` is wired and readable) — no fix needed there this turn; the stale report is from a pre-fix screenshot.

## Fix

Honor the user's stated preference: keep the light/dark/light rhythm across the three cards, and pair text color to background.

1. **`src/styles.css`** — add two new utilities:
   - `mesh-cool-light`: white base with a soft blue radial wash (for uPVC card).
   - `mesh-warm-light`: warm off-white base with a soft amber+red radial wash (for Steel card). No brand-red saturation, kept at ~4–6% alpha so it reads as a finish, not an alert.
   - Also add proper dark `mesh-teal` and `mesh-gold` utilities so the existing `variant="teal"` / `variant="gold"` no longer silently fails elsewhere (product hero scenes rely on them).

2. **`src/components/site/CinematicScene.tsx`** — add two new variant values, `cool-light` and `warm-light`, that map to the new utilities. Also fix the broken `teal` and `gold` variants to reference the new proper utilities instead of arbitrary Tailwind gradients. No behavior change to `night` / `warm`.

3. **`src/routes/products.tsx`** — change the three universe cards:
   - uPVC → `variant="cool-light"`, text uses `--ink` / `--ink-soft`, kicker stays red (`--nicwin-red`), CTA arrow uses `--nicwin-blue-deep`.
   - Aluminium → stays `variant="night"`, keeps current white text (already correct).
   - Steel → `variant="warm-light"`, same dark-text treatment as uPVC.
   - Render text color conditionally off the variant (a small `isLight` boolean in the map) so headline, subtext line ("6 windows…", "Secure solid…"), and the "Explore →" CTA all switch together. Do NOT hardcode `text-offwhite` on the card.

4. **Sitewide contrast pass (scoped, not a rewrite)** — grep for `text-offwhite`, `text-champagne`, `text-white` and confirm every occurrence sits on a truly dark background (`mesh-charcoal`, `bg-ink`, `bg-[color:var(--nicwin-blue-deep)]`, or a `CinematicScene` variant that resolves to dark). Fix any that sit on `--paper` / `--paper-warm` / `mesh-paper` / `mesh-warm` / bare white sections. Report any additional instances found so we don't ship another round of invisible-text bugs.

## Not doing

- Not making all three cards dark ("sidestep") — explicitly rejected by the user.
- Not touching `FinalCTA` — it already renders correctly on `/products` in the current build.
- No copy changes, no motion changes, no layout changes to the cards beyond text-color pairing.

## Verification

After the edit, screenshot `/products` (top of grid + bottom pre-footer) via Playwright and confirm: (a) uPVC and Steel headlines/subtext are readable dark text on light cards, (b) Aluminium card unchanged, (c) FinalCTA still renders. Run `tsgo` to confirm the new variant union compiles across all `CinematicScene` call sites.