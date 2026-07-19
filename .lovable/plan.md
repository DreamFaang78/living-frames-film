## Goal

Move from a flat 3-material product structure (uPVC / Aluminium / Steel) to 4 groups covering 8 categories, exposed both in the header mega-menu and the /products page.

## New taxonomy

1. **Windows & Doors** — uPVC Windows & Doors, Aluminium Windows & Doors, Steel Doors, WPC Doors
2. **Mesh & Screens** — Pleated Mesh
3. **Glass Solutions** — Glass Partition, Glass Railing
4. **Facade & Cladding** — ACP Sheet

## Card treatment tiers

- **Full card** (hero image, headline, body copy, bullet specs, CTA): uPVC, Aluminium, Steel. WPC uses full card once real photos exist; until then, light card.
- **Light card** (single hero image — real / AI-generated / icon-led — headline + 1–2 sentence description, single CTA, no bullet list): Pleated Mesh, Glass Partition, Glass Railing, ACP Sheet, and WPC (interim).

All copy stays in the plain-language style already used site-wide.

## Changes

### 1. `src/lib/site.ts` — new `MEGA` shape

Replace the current 3-heading MEGA with 4 groups. Each group has `heading`, optional `tagline`, and `children: { to, label, tier: "full" | "light" }[]`. Preserve existing `/products/upvc`, `/products/aluminium`, `/products/steel` routes; add new placeholder targets that all point to `/products#<slug>` (in-page anchors on the Products page) until dedicated routes are built:

- `/products#wpc-doors`
- `/products#pleated-mesh`
- `/products#glass-partition`
- `/products#glass-railing`
- `/products#acp-sheet`

Keeps navigation working without creating 5 half-empty route files.

### 2. `src/components/site/Nav.tsx` — grouped mega-menu

Update the desktop mega panel to render 4 columns (one per group) with each group's items listed underneath a group label. Mobile menu gets a collapsible "Products" section listing the 4 groups with items nested. Uses the new `MEGA` structure directly.

### 3. `src/routes/products.tsx` — 4 sections, 8 cards

Replace the current single 3-column universes grid with 4 stacked sections, each with its own group header (kicker + short line) matching the existing "One obsession. Three materials." rhythm:

```
Hero (unchanged)
├── Section: Windows & Doors
│    grid: uPVC (full) · Aluminium (full) · Steel Doors (full) · WPC Doors (light)
├── Section: Mesh & Screens
│    grid: Pleated Mesh (light)
├── Section: Glass Solutions
│    grid: Glass Partition (light) · Glass Railing (light)
├── Section: Facade & Cladding
│    grid: ACP Sheet (light)
FinalCTA (unchanged)
```

Each section wrapped in `<section id="{slug}">` so mega-menu anchors resolve. Full and light cards share visual language (rounded frame, same aspect ratio, plain-text hierarchy) — light cards simply omit the bullet spec list and use a shorter body.

### 4. New card components

Add two small presentational components colocated in `src/components/site/`:

- `ProductGroupCard.tsx` — full-tier card (image top, kicker, headline, 1–2 line body, 3-bullet spec list, CTA).
- `ProductLightCard.tsx` — light-tier card (image top, kicker, headline, 1–2 sentence body, single CTA).

Both accept `{ to, kicker, title, body, imageUrl, cta }` and (for full) `specs: string[]`. Both use `aspect-[4/3]` image containers matching the homepage material cards for grid consistency.

### 5. Imagery

Reuse existing assets where they fit:
- uPVC → `material-upvc.jpeg`
- Aluminium → `material-aluminium.jpeg`
- Steel → `material-steel.jpeg`

For the 5 categories without photography (WPC, Pleated Mesh, Glass Partition, Glass Railing, ACP Sheet), generate 5 fast-tier placeholder images (clean lifestyle / product-forward, white-first palette, matching the site's photographic tone) via `imagegen--generate_image` and store them under `src/assets/products/` as `.asset.json` pointers. No icon-only fallback — a single real-feel image per card keeps the grid consistent.

### 6. Copy (plain language, short)

Draft lines for the 5 new cards, e.g.:
- **WPC Doors** — "Water-proof. Termite-proof. Looks like wood without the trouble."
- **Pleated Mesh** — "Keeps mosquitoes out. Folds away when you don't need it."
- **Glass Partition** — "Split a room without losing the light."
- **Glass Railing** — "See-through safety for balconies and stairs."
- **ACP Sheet** — "Clean, modern facades that hold up in Indian weather."

Final wording confirmed during implementation; tone matches existing homepage copy.

## Out of scope

- No new dedicated route pages for the 5 new categories yet (anchors on `/products` are the interim landing). Easy to promote to real routes later without touching Nav.
- Existing `/products/upvc`, `/products/aluminium`, `/products/steel` subtrees and their child routes are untouched.
- Homepage "Three materials" section stays as-is — this restructure is scoped to header nav + `/products`.
