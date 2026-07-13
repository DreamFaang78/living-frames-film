
# Nicwin — Cinematic Website Build Plan

## Stack note (important)
Your brief asks for Next.js App Router. This Lovable project runs on **TanStack Start + React 19 + Vite + Tailwind v4**, which is functionally equivalent (file-based routing in `src/routes/`, SSR, server functions). All motion libraries (Framer Motion, Lenis, GSAP) work identically. I'll build on TanStack Start — swapping to Next.js would mean discarding the working shell. If you need Next.js specifically, tell me and I'll flag it before starting.

## Videos & imagery
You didn't upload video files. I'll wire the site with **curated royalty-free cinematic loops** (Pexels / Coverr / Mixkit — rain on glass, modern interiors, factory craft) referenced by URL, plus poster stills generated via imagegen. Every `<video>` will have a clearly labelled `src` constant in one file (`src/lib/media.ts`) so you can swap in your own footage later in one place. Product "recolorizer" mockups will be generated PNGs with CSS blend-mode tinting driven by swatch clicks.

## Scope — Phase 1 (this build)
Full site, all routes, all content rewritten from the audit, all motion. Not included: real CMS, real form backend (form will POST to a TanStack server function that logs + returns success; WhatsApp deep-link is the primary conversion), analytics, blog article pages (index only), i18n.

## Design system (`src/styles.css`)
- Tokens: `--charcoal #0A0A0B`, `--offwhite #F7F5F2`, `--teal #0D7377`, `--champagne #C9A227`, `--warm-grey #E8E4DF`, plus derived surfaces/overlays/rings.
- Type: **Fraunces** (display, editorial serif with slight poetry) + **Plus Jakarta Sans** (body), loaded via `<link>` in `__root.tsx` head (never `@import` a URL in v4).
- Radius scale, grain-overlay utility, vignette utility, gold scroll-progress bar utility.
- Reduced-motion: `@media (prefers-reduced-motion)` disables Lenis, scrub animations, and video autoplay (posters shown instead).

## Global chrome (`src/routes/__root.tsx` + components)
- `<SmoothScroll>` — Lenis provider, RAF loop, disabled under reduced-motion.
- `<ScrollProgress>` — 2px gold line, `scaleX` from Framer `useScroll`.
- `<Nav>` — glassmorphic sticky, solidifies past 40px scroll, **mega-menu** for Products with video thumbnails that play on hover (muted, loop, `playsInline`).
- `<WhatsAppBubble>` — fixed bottom-right, soft pulse via Framer keyframes, `href=https://wa.me/919234233892`.
- `<Footer>` — dark cinematic, unified contact block, real socials only (YouTube/FB/IG), newsletter (email → server fn).
- `<CustomCursor>` — desktop only, subtle dot + ring, magnetic interaction on `[data-magnetic]` buttons.
- SEO: per-route `head()` with title/description/og, `LocalBusiness` JSON-LD on root.

## Routes
```
src/routes/
  __root.tsx                     shell, providers, SEO defaults, LocalBusiness JSON-LD
  index.tsx                      Homepage (the film opens)
  about.tsx                      Heritage rewrite, mission/vision/values/philosophy, pillars
  why-nicwin.tsx                 4 pillar deep-dive: climate/acoustic/security/craft
  gallery.tsx                    Filterable immersive gallery
  contact.tsx                    Form + map split + WhatsApp
  products.tsx                   Products landing (3 universes)
  products.upvc.tsx              uPVC overview
  products.upvc.windows.tsx      6 types
  products.upvc.doors.tsx        5 types
  products.upvc.colors.tsx       7 colors + recolorizer
  products.aluminium.tsx         Aluminium overview
  products.aluminium.windows.tsx 5 types
  products.aluminium.doors.tsx   5 types
  products.aluminium.colors.tsx  5 colors + recolorizer
  products.steel.tsx             Expanded steel (Security Solid, Designer Panel, Glass Insert, Fortified Entry, Heritage)
  api/contact.ts                 Server route for form POST
  api/newsletter.ts              Server route for newsletter POST
```

## Homepage scenes (all `useScroll` scrubbed where noted)
1. **Cinematic Hero** — 100vh full-bleed muted loop (interior + rain), grain + vignette overlay, giant Fraunces headline "Always looking for the better.", sub-line, dual CTAs (WhatsApp gold, Catalogue ghost), scroll cue with easing.
2. **Stats bar** — 5+ / 70+ / 35+ / 20+ count-up on `useInView`, thin gold dividers.
3. **Product Universe** — three horizontal cinematic cards (uPVC / Aluminium / Steel), each with looping video, poetic tagline, `Explore` with magnetic hover.
4. **Why the Better Matters** — 4 scroll-triggered pillars, icons assemble from 3 stroked lines via `pathLength` interpolation as user scrolls each pillar into view.
5. **Immersive Gallery** — chip filters (All/Windows/Doors/uPVC/Aluminium/Steel), masonry of video stills, `layoutId` shared-element transition into product routes.
6. **Testimonials** — premium cards, real-voice copy about festivals/monsoons/quiet.
7. **Final CTA band** — night video, "Your home deserves better.", oversized WhatsApp CTA.

## Product page template (`src/components/ProductCategoryPage.tsx`)
Category video hero → 60–80 word intro → interactive type cards (each with unique short loop + unique benefit copy — content authored per type, zero duplication) → benefits strip (Energy/Sound/Security/Weather with animated meters) → **color recolorizer** (swatches drive CSS `filter`/`mix-blend-mode` on a base mockup with spring transition) → technical confidence section (spec chips, animated section drawing SVG) → enquiry CTA. Fixes applied: no "uPVC" strings on aluminium pages, "Gold Sampain" → "Gold Champagne", steel expanded to 5 types.

## Contact
Zod-validated form (Name/Phone/City/Product multi-chip/Project type/Message) → server fn → success state with WhatsApp deep-link. Split layout with embedded Google Map iframe (Deoghar + Jamui toggler). All numbers `tel:` clickable. Hours Mon–Sat 9:30–18:30.

## Content
All copy rewritten from `nicwin-content-audit.md` and PRD in the confident/architectural/warm voice specified. No lorem, no leftover brief instructions, unified contact block, typo `gamil.com` corrected.

## Technical section
- **Dependencies to add:** `framer-motion`, `lenis`, `zod` (already present likely), `react-intersection-observer`.
- **Media strategy:** single `src/lib/media.ts` exports `{ heroVideo, productLoops: {...}, posterImages: {...} }` all as URLs; posters generated with imagegen; videos are external Pexels/Coverr URLs (documented, user can swap).
- **Perf:** all `<video>` are `muted playsInline loop preload="metadata"` with `poster`; below-the-fold videos lazy-mounted via `useInView`. Framer motion values memoized. Lenis disabled on touch + reduced-motion.
- **A11y:** semantic landmarks, single `<h1>` per route, focus rings on all interactive, `aria-label` on icon buttons, magnetic effects skip keyboard focus, reduced-motion honored.
- **SEO:** per-route `head()` (title <60ch, desc <160ch, og), LocalBusiness JSON-LD (address, geo, phones, hours) on root, sitemap-ready route structure, `<canonical>` per leaf.

## Build order
1. Design tokens + fonts + global utilities.
2. Global chrome (SmoothScroll, Nav+MegaMenu, ScrollProgress, WhatsAppBubble, Footer, CustomCursor).
3. Home route (all 7 scenes).
4. Product template + all 11 product routes with authored per-type copy.
5. About, Why Nicwin, Gallery, Contact.
6. Server routes for contact + newsletter.
7. SEO/JSON-LD + reduced-motion pass + a11y pass.

## Known trade-offs
- No custom video footage — using licensed stock loops until you provide files.
- Google Map is an embedded iframe (no API key needed); switch to Maps JS if you want interactive markers.
- Blog is index-only placeholder — full CMS out of scope for this pass.

Ready to build on approval.
