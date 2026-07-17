
# Nicwin — Client Feedback Fix Pass

Execute in the priority order the client requested. Do NOT touch the hero video section (client explicitly asked to leave it alone). All work is presentation-layer — no data model or backend changes.

---

## 1. Logo swap (site-wide)

- Fetch the real Nicwin logo from `https://www.nicwinsystems.com/images/LOGO-png.png`, upload via `lovable-assets` as `nicwin-logo.png`, and store the `.asset.json` at `src/assets/brand/nicwin-logo.png.asset.json`.
- Replace the current SVG "N" mark in `src/components/site/Nav.tsx` and `src/components/site/Footer.tsx` with an `<img>` using the CDN URL (height ~40px in nav, ~56px in footer, white background safe — footer already dark blue, so wrap in a small white pill or invert if needed; use the color logo on white nav directly).
- Replace favicon: save the same mark to `public/favicon.png`, update `src/routes/__root.tsx` `links` to `{ rel: "icon", type: "image/png", href: "/favicon.png" }`, and `rm public/favicon.ico`.
- Flag to user: recommend they send a higher-res original later.

## 2. Broken / invisible product images

- **Catalogue overlay bug** — in `src/components/site/ProductShowcase.tsx`, find the card carrying the legacy translucent yellow-green highlight box (the "UPVC — the ultimate in durability" overlay from `upvc-durability.png`). Remove the overlay treatment entirely; render caption text *below* the image, matching the pattern used by neighboring cards (image → tag pill → headline → spec bullets). If the source image has the overlay baked in, swap that card's image to a clean one (`upvc-eco.png` or another clean product shot) and keep the durability copy in the caption instead.
- **Text-over-photo audit** — scan `ProductShowcase.tsx`, `products.*.tsx`, and `gallery.tsx` for any product (not hero) image with text overlaid directly on the photo without a dedicated dark scrim. Move that text into a caption block below the image, or add a targeted bottom-gradient scrim (`from-black/70 via-black/20 to-transparent`) only where the composition genuinely needs it.
- **Entry-door material check** — verify the image used for any "Entry Door" card in the catalogue is a uPVC unit consistent with the section it lives under. If the current asset is ambiguous or aluminium, relabel the card (e.g. move to Aluminium Doors) or swap to a clearly-uPVC image (`french-doors.png` or `casement-door.jpg`).

## 3. Contact info refresh (site-wide)

Update in `src/lib/site.ts` (single source of truth):
- Primary phone: `+91 79090 39070`
- Secondary phone: `+91 92205 33892`
- Remove old numbers (9234233892 / 8002003892 / 9801753892 / 6206697588). Add a build note asking client to confirm if any old number should stay.
- Update WhatsApp target in `src/components/site/WhatsAppBubble.tsx` to `+917909039070`.
- Sweep hardcoded number strings via `rg` across `src/` and route them through the `SITE` constant.

## 4. Experience Center & Showroom replaces "Branch Office"

- In `src/lib/site.ts` addresses: replace the "Branch Office" entry with:
  - Label: **Experience Center & Showroom**
  - Address: `Sparsh Complex, Deoghar College Road, Near Daffodil Garden, Tiwari Chowk, Deoghar, Jharkhand – 814112`
- In `src/routes/contact.tsx` and `Footer.tsx`, render Factory and Experience Center as two equal-weight cards (same visual treatment, side by side). Add a "Visit our showroom" affordance on the Experience Center card.
- Google Maps embed: add a plain `<iframe>` search-embed for each address (no API key needed for `https://www.google.com/maps?q=<encoded address>&output=embed`). Mark a TODO comment where precise pin coordinates should replace address-based search once the client shares them.

## 5. Gallery — captions + auto-sliding carousel

- In `src/routes/gallery.tsx`, extend each project entry with `productType` (e.g. "Tilt & Turn uPVC Window") and `place`. Render a visible caption chip on every card: `{productType} — {place}`.
- Add a new component `src/components/site/AutoCarousel.tsx`:
  - Auto-advance every 5000ms, pause on hover / focus / touch, resume on leave.
  - Prev/Next arrows and dot indicators, keyboard arrow-key support, `prefers-reduced-motion` disables autoplay.
  - Slides render the same image + caption pair used in the grid, so the caption discipline is consistent.
- Mount `AutoCarousel` at the top of the gallery route (above the filter grid) and re-use on the homepage Gallery teaser section.

## 6. Finishes correction

- In the Colors/Finishes section on `src/routes/index.tsx` (and any product finish tiles), remove "Nicwin Red" and "Deep Blue" swatches.
- Replace with 6 real finishes: **Pure White, Anthracite Grey, Golden Oak, Walnut, Jet Black, Diamond Grey**. Keep hex values realistic (matte/wood tones, not brand primaries).
- Change the CTA to "See all finishes" linking to `/products/upvc/colors` (which already exists in the route tree).

## 7. Factory & Showroom asset placeholders

- In `src/routes/about.tsx` (or Contact if better fit), add two clearly-marked placeholder blocks: "Factory — Deoghar" and "Experience Center — Deoghar", each with a dashed-border frame and copy: *"Real photos and walkthrough video coming soon — awaiting client media."*
- Do NOT substitute stock factory imagery. Leave the frames obviously empty so they don't ship as if real.
- Add a `TODO(client-media)` comment at each slot for easy grep-swap later.

## Out of scope for this pass

- Google Business Profile cleanup (client-side task; call it out in the closing message, don't attempt in-app).
- Custom map pins (waiting on exact coordinates — address-based embed is the interim).
- Higher-res logo (using web-res until client sends original).

## Technical notes

- All copy and phone/address changes flow through `src/lib/site.ts` — do not scatter literals.
- Hero video section (`VideoHero.tsx` + first scene of `index.tsx`) is untouched.
- Verify with a build after edits; screenshot the homepage + gallery + contact via Playwright to confirm the logo, caption chips, carousel, and two-address contact block render as intended.
