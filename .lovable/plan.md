# WebGPU Corner-Joint Hero Moment

A single interactive 3D scene sitting between the video hero and the marquee: a slowly rotating uPVC window corner-joint (mitred 45° weld) that the visitor can subtly drag to rotate. Uses `three/webgpu` + TSL. Falls back to a looped MP4 for reduced-motion users and browsers without WebGPU.

## Deliverables

1. `bun add three` (+ `@types/three` dev).
2. `src/components/site/hero-joint/buildJoint.ts` — procedural geometry: two extruded uPVC profile bars mitred at 45° forming an L-corner, with a thin glass inset. Pure Three.js BufferGeometry, no assets.
3. `src/components/site/hero-joint/Scene.ts` — framework-free class:
   - `WebGPURenderer` (async `init()`), `PerspectiveCamera`, soft studio lighting (key + rim + ambient).
   - `MeshStandardNodeMaterial` for the frame: `colorNode` = brand white with a subtle TSL fresnel rim tinted `--nicwin-blue`; `roughnessNode` ≈ 0.35. Glass uses `MeshPhysicalNodeMaterial` (transmission, low roughness).
   - Idle motion: gentle sine yaw/pitch via TSL `time`.
   - Pointer drag: quaternion-based rotation with spring damping (rAF); clamp ±25°. Auto-resume idle after 2s of no input.
   - Handles resize + `renderer.dispose()` on unmount.
4. `src/components/site/HeroJoint3D.tsx` — client mount:
   - `useEffect` boots `Scene` into a `<canvas>`; feature-detects `'gpu' in navigator` and lazy-imports `three/webgpu`.
   - On failure or when `matchMedia('(prefers-reduced-motion: reduce)').matches`, renders a `<video autoplay muted loop playsinline>` fallback instead.
   - Overlay hint: "drag to rotate" that fades after first interaction.
5. `src/components/site/HeroJointSection.tsx` — section wrapper with white background, kicker "Engineered at the corner", one-line body, and the 3D canvas at ~70vh. Framer Motion reveal on scroll.
6. Video fallback asset: reuse the existing `nicwin_hero_doors_opening.mp4` for now (no new videogen). A later turn can swap in a dedicated joint clip via `videogen--generate_video` if desired.
7. Wire `<HeroJointSection />` into `src/routes/index.tsx` directly after `<VideoHero />` and before the marquee.

## Technical notes

- Import surface: `import * as THREE from 'three/webgpu'` and TSL helpers from `'three/tsl'` (per the webgpu-threejs-tsl skill). Keep this dynamic-imported so non-WebGPU users don't pay the bundle cost.
- SSR: component is `'use client'`-safe — all Three.js work runs inside `useEffect`; the module never touches `window` at import time.
- Accessibility: canvas gets `role="img"` and an `aria-label`; keyboard users get arrow-key rotate as a bonus.
- Performance: single mesh, no post-processing, capped DPR at 1.75, `powerPreference: 'high-performance'`.

## Out of scope

- No new video generation this turn.
- No changes to other routes or the design tokens.
