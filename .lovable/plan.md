# Recent Projects Slideshow

Add a new full-width slideshow section on the homepage, placed directly after the Testimonials section and before the Gallery, built to scale as more real project photos come in.

## Assets

Upload the two provided project photos as Lovable Assets (CDN pointers, not repo binaries):
- `src/assets/projects/dsu-university-deoghar.jpg.asset.json`
- `src/assets/projects/hotel-jeesa-deoghar.jpg.asset.json`

Source images already carry the DSU/Hotel Jeesa/Nicwin lockup baked in, but we will re-render the text overlay in HTML so it stays crisp, responsive, and editable — the raw building photo underneath is what we keep. If needed we crop the left third of the source (which is flat sky/background) so the overlay text sits over clean space on desktop and the building remains the hero on mobile.

## Data

New file `src/lib/projects.ts` — a single `RECENT_PROJECTS` array. Each entry:

```ts
{
  id: string;
  name: string;       // "DSU University Project"
  location: string;   // "Deoghar"
  caption?: string;   // short one-liner, optional
  image: string;      // CDN url from .asset.json
}
```

Seeded with the two real projects and the two optional captions from the brief. Adding a third project later = one entry in this array, no layout work.

## Component

New `src/components/site/RecentProjects.tsx`:

- Full-bleed slide, single project at a time, `aspect-[16/9]` on desktop, `aspect-[4/5]` on mobile so the building stays readable in portrait.
- Framer Motion `AnimatePresence` crossfade between slides (opacity + subtle 1.02 → 1 scale on the incoming image for a cinematic feel, no hard cuts).
- Auto-advance every 5.5s via `setInterval`, cleared on unmount.
- Pause on hover (desktop) and on touchstart/focus (mobile/keyboard).
- Prev / Next arrow buttons pinned to the vertical middle of the slide, white icon on a translucent ink pill, visible on desktop, larger tap targets on mobile.
- Dot indicators centered below the slide: one dot per project, active dot widens into a short bar (`w-8` vs `w-2`), so the control reads correctly with 2 dots today and 12 dots later without redesign.
- Keyboard support: `←` / `→` when the slideshow is focused.
- `prefers-reduced-motion`: disable auto-advance and use instant fade.

### Overlay layout (matches the source-image lockup)

Positioned bottom-left on desktop, bottom-center on mobile, inside a soft dark-to-transparent gradient scrim so text stays legible over both the bright DSU shot and the dusk Hotel Jeesa shot:

- Eyebrow-free — the section eyebrow lives above the slideshow, not on each slide.
- Project name in **Nicwin red** (`--nicwin-red`), display font, large.
- Location in **Nicwin blue** (`--nicwin-blue`), smaller, tracked.
- Thin red divider.
- "WORK DONE BY" micro-label in white + the existing Nicwin logo lockup (reuse the same logo asset already used in the nav/footer).
- Optional caption line in white/85 opacity below the lockup, hidden on very narrow screens if it would wrap awkwardly.

## Section wrapper on the homepage

New block in `src/routes/index.tsx`, inserted after Testimonials and before Gallery:

- Eyebrow: `RECENT PROJECTS`
- Heading: `Homes we've already built for.`
- Subheading: `A look at the buildings, homes, and businesses Nicwin has already completed.`
- Then `<RecentProjects />`.

Copy stays in the plain, simple style already established across the site.

## Scope guardrails

- Homepage-only change plus one new component, one new data file, two new asset pointers. No route changes, no nav changes, no business logic.
- Hero, product cards, testimonials, and every other section stay exactly as they are.
- Contrast is verified against both photos at desktop and mobile crops before shipping, per the contrast-check discipline already applied earlier on this project.
