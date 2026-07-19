# Unify navbar across the site

The current Nav swaps between two states — transparent with white text (top of page over dark hero) and white with ink text (after scroll). On the About page (and any light-hero page) the transparent+white state makes the links nearly invisible against the pale background.

Fix: make the navbar look identical on every page and every scroll position — one singular treatment.

## Change

`src/components/site/Nav.tsx`
- Drop the `scrolled` conditional styling. Always render:
  - Header background: solid white (`bg-white/95 backdrop-blur-xl`) with the subtle hairline shadow underneath.
  - Nav link text: `--ink` with red hover.
  - Mobile menu button: ink color.
  - Logo wrapper: transparent (no white plate needed since header itself is white).
- Keep `scrolled` state only if still useful for the mega-menu panel styling; otherwise remove it entirely and hardcode the light-theme mega panel.
- Header `top` stays at `28` (under the TopBar). No layout height changes.

## Hero pages that assumed a transparent nav

The homepage hero (`VideoHero`) and any full-bleed hero currently sit under a transparent nav. With a solid white nav they'll no longer have the top ~72px of video/image visible edge-to-edge. Accept this — the client explicitly wants a single consistent navbar. No hero rework in this pass.

## Out of scope

Anything else — no copy, layout, carousel, or logo changes in this round.
