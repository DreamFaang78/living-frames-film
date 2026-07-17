
# Mobile Cinematic Scroll Layer — Nicwin

Goal: on phones, scrolling nicwinsystems.com should feel like walking through rooms of a house — each section a portal, each product a reveal. Desktop stays as-is; all new motion is gated behind a mobile media query via `gsap.matchMedia()` and `prefers-reduced-motion`.

## Scope (mobile only, ≤ 768px)

1. **Lenis touch tuning** — enable smooth touch scroll (`smoothTouch: true`, lerp 0.09, gestureOrientation vertical), disable overscroll bounce, hook `ScrollTrigger.update` to Lenis' `scroll` event via `scrollerProxy`.

2. **Hero → Marquee "door opening" handoff**
   - Pin hero for +80vh on mobile.
   - As user scrolls, the existing doors video plays scrubbed (currentTime tied to scroll progress from 0 → fully open).
   - Headline splits (SplitText fallback: manual span wrap) and letters lift + blur-out; subline slides down; a soft white "light bloom" wipes upward revealing the marquee.

3. **Portal section transitions** (between each of the 7 scenes)
   - A full-bleed white/blue radial "iris" mask closes to a 20px dot, section swaps, then irises back open. Implemented with a fixed `<div>` clip-path circle driven by ScrollTrigger.
   - Haptic feedback on supported devices: `navigator.vibrate(8)` at each portal snap.

4. **Product cards — tactile stack**
   - On mobile, ProductShowcase becomes a vertical stack where each card enters with a spring: scale 0.9 → 1, y 60 → 0, subtle 3D tilt (rotateX 8 → 0) based on entry velocity (`ScrollTrigger.getVelocity()`).
   - Image inside each card gets a slow parallax (`yPercent: -12`) tied to card's own ScrollTrigger.
   - Sticky "category label" chip that morphs between uPVC / Aluminium / Steel as the user scrolls past each block.

5. **Stat bar count-up on enter** — trigger CountUp with `ScrollTrigger.batch` so numbers animate only when the row is visibly in view; add a soft red underline draw (`scaleX 0 → 1`) beneath each number.

6. **"Atmosphere" ambient layer**
   - A single fixed canvas behind content with 30-particle drift (dust motes, GPU-cheap). Color shifts hue based on active section (warm gold near hero, cool blue near products, deep blue near footer) using `useMotionValue` interpolated by scroll progress.
   - Auto-disabled on `prefers-reduced-motion` and low-end devices (`navigator.hardwareConcurrency < 4`).

7. **Scroll-driven progress rail**
   - Thin vertical red line pinned to right edge with 7 tick marks (one per scene). Active tick swells + shows scene name on scroll pause (debounced).

8. **Micro-interactions**
   - CTA buttons: press ripple + `vibrate(6)`.
   - Nav: hides on scroll down, slides back on scroll up (Framer `useScroll` + `useTransform` on y).
   - Section headings: gradient text sweep (blue → red) triggered once when 60% in view.

9. **Reduced motion + perf guardrails**
   - `gsap.matchMedia` conditions: `{ isMobile: "(max-width: 768px)", reduceMotion: "(prefers-reduced-motion: reduce)" }`.
   - When `reduceMotion` matches: no portals, no scrub, no particles — plain fades only.
   - All ScrollTriggers reverted via `mm.revert()` on route change (integrate with TanStack Router `useRouter().subscribe('onBeforeNavigate', …)`).

## Technical notes

- Add `@gsap/react` `useGSAP` hook usage inside a new `src/components/site/MobileCinematics.tsx` mounted once from `__root.tsx`.
- Reuse existing `SmoothScroll.tsx` (Lenis) — extend, don't duplicate.
- New files:
  - `src/components/site/MobileCinematics.tsx` (orchestrator)
  - `src/components/site/PortalTransition.tsx` (iris mask)
  - `src/components/site/AmbientCanvas.tsx` (particles + hue)
  - `src/components/site/SceneRail.tsx` (right-edge progress)
  - `src/hooks/useMobileMotion.ts` (matchMedia + reducedMotion gate)
- Desktop code paths untouched. Verify with Playwright at 390×844 (iPhone 14) that hero doesn't jump, portals fire between all 7 sections, and no CLS above 0.05.

## Out of scope

- No new copy, no new imagery, no product data changes.
- No changes to Contact form logic, routing, or CMS structure.
- Desktop hero and layouts remain exactly as approved.

## Deliverable

A single build prompt the user can paste into Lovable to execute the above. Approving this plan will produce and implement it.
