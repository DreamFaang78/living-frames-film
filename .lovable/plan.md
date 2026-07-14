# Nicwin — White-First Cinematic Rebuild

Rebuilding the site on a **true-white base** with red + blue as structural accents, matching the psychological order in the brief. Evolves the existing Lovable project (routes, components, media pointers all stay) — no clean slate, no lost history.

## Direction pivot (from the current dark-navy build)

- Base surface flips from dark charcoal to `#FFFFFF` / `#FAFAFA`; ink text on white
- Red stays the single action color (buttons, top hairline, active states) — never a large field
- Blue reserved for trust cues + exactly **one** deep-blue anchor section per page
- Fraunces (display) + Hanken Grotesk (UI/body, free General Sans equivalent)
- Section padding minimums: 96px desktop / 56px mobile
- Soft, tinted shadows (blue/red whisper, never neutral grey)

## Scope this pass (homepage first, tokens sitewide)

Sitewide token + shell:
1. `src/styles.css` — rewrite tokens to white-first palette, swap `mesh-*`, `vignette`, `grain` utilities to work on white; add tinted shadow tokens; keep legacy token aliases so product pages don't break
2. `src/routes/__root.tsx` — swap fonts to Fraunces + Hanken Grotesk, update theme-color, body bg to `--paper`
3. `src/components/site/Nav.tsx` — invert default state (ink on white, transparent-over-hero → white+red-hairline on scroll)
4. `src/components/site/Footer.tsx` — keep deep-blue (this is the sanctioned anchor), tighten to real socials only, fix `gamil.com` typo in `src/lib/site.ts`
5. `src/components/site/CTAButton.tsx` — primary red on white, ghost = ink outline
6. `src/components/site/Marquee.tsx` — white bg, ink text, red dot separators (was red bg)
7. `src/components/site/ScrollProgress.tsx` — 2px red line under header (already red, verify placement)

Homepage rebuild in the psychological order (`src/routes/index.tsx`):
1. **Hero** — keep existing video, overlay flips to lighter wash so headline is ink+red on light glass; add subtle 3D window corner (Three.js/TSL) lazy-mounted with reduced-motion + mobile fallback to existing video loop
2. **Marquee** — credibility strip (materials · Made in Jharkhand · Monsoon-engineered)
3. **Stat bar** — count-up on scroll (Years / Projects / Clients / Team) — this is the one deep-blue anchor section
4. **Problem strip** — 2-3 lines, regional specificity ("Deoghar monsoons. Ranchi summers. Wooden frames don't survive either.")
5. **Product categories** — uPVC / Aluminium / Steel, hover tilt + video loop on hover
6. **Why Choose Us** — 4 pillars (Climate / Acoustic / Security / Craft) on warm-white
7. **Colors** — swatch teaser linking to `/products/upvc/colors`
8. **Testimonials** — 3 regionally-specific quotes, scroll-snap carousel
9. **Gallery teaser** — 4 captioned tiles → `/gallery`
10. **CTA + Contact quick-form** → link to `/contact`

Motion system (one consistent pattern, GSAP + Framer Motion already installed):
- Section reveal: 24px rise + fade, 0.7s, 0.06s stagger
- Header state change under 300ms
- Stat counters finish in ≤1.2s
- All motion behind `prefers-reduced-motion`

## Deferred to follow-up passes (out of scope this turn — call out in closing)

- Rewriting every product page's copy to be genuinely unique (6 distinct one-liners per category × 3 categories = 18 lines) — big content pass
- Steel doors SKU breakdown
- Regenerating hero + per-category background videos via Video Creator skill
- Full Three.js window model (this pass ships the mount point + a clean CSS/SVG placeholder that reads as engineered; upgrade to real geometry next pass)
- Google Maps embed on contact
- Final Accessibility + SEO skill runs (do after content is locked)

## Technical notes

- Reuses existing `framer-motion` + `lenis`; adds `gsap` for ScrollTrigger timelines
- `SmoothScroll`, `WhatsAppBubble`, `Reveal`, `CountUp`, `CinematicScene` all kept — restyled via tokens, not rewritten
- Product routes inherit new tokens automatically via the legacy alias layer, so they won't break mid-migration — their bespoke rebuild happens in the follow-up copy pass
