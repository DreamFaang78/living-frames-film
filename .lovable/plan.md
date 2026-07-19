## Goal
Rewrite every user-visible line of copy on the site in plain, everyday English. Same structure, same design, same motion — only the words change. Keep numbers, specs, testimonials, and section rhythm intact.

## Rule applied everywhere
- Every sentence readable in one pass by a Tier 2/3 buyer with basic-intermediate English.
- Aim for <12–15 words per sentence. Break long ones into two short ones.
- Simpler word wins: "strong" over "robust", "keeps out" over "resists", "lasts long" over "durable".
- No wordplay, no metaphors that need decoding, no inversions.
- Benefit-first, active voice.
- Keep short and confident — simpler, not flatter.

## Files to rewrite (copy only, no logic/layout changes)

Homepage & shared:
- `src/routes/index.tsx` — hero subline, marquee items, stats labels, "Honest bit" problem section, product category cards ("Sealed. Silent. Sumptuous.", "The first hello. The last word.", etc.), joint section headline + body, finishes intro, catalogue intro ("A curated view…"), testimonials intro, gallery/carousel captions, CTA blocks.
- `src/components/site/TopBar.tsx` — marquee tagline strings.
- `src/components/site/Marquee.tsx` — marquee copy if any strings live here.
- `src/components/site/HeroJointSection.tsx` — "Most windows break at the corner. Ours don't." + body.
- `src/components/site/ProductShowcase.tsx` — every card title, caption, spec blurb, bullet.
- `src/components/site/AutoCarousel.tsx` — default captions if hardcoded.
- `src/components/site/FinalCTA.tsx` — headline + subline + button label copy.
- `src/components/site/Footer.tsx` — tagline, column headers, address blurb copy.
- `src/components/site/VideoHero.tsx` — any built-in copy props/defaults.

Pages:
- `src/routes/about.tsx` — hero, story paragraphs, values headers/bodies, stat labels.
- `src/routes/why-nicwin.tsx` — the four pillars (Climate, Acoustic, Security, Craft) — headlines + bodies simplified; keep pillar names but rewrite one-liners.
- `src/routes/gallery.tsx` — intro + every caption.
- `src/routes/contact.tsx` — hero, form labels/help text, address block copy, hours note.
- `src/routes/products.tsx` — intro + the three material cards.

Product category pages (all pass through `ProductCategoryPage`):
- `src/routes/products.upvc.tsx`, `.upvc.windows.tsx`, `.upvc.doors.tsx`, `.upvc.colors.tsx`
- `.aluminium.tsx`, `.aluminium.windows.tsx`, `.aluminium.doors.tsx`, `.aluminium.colors.tsx`
- `.steel.tsx`
- Rewrite each: `kicker`, `headline`, `intro`, every `types[].name/benefit/detail`, every `benefits[].label/copy`, `colorHeading`, and any wordy `spec` values. Keep hex codes, dimensions, U-values, glass thickness, lock types, mm/°C/dB numbers untouched.
- `src/components/site/ProductCategoryPage.tsx` — simplify any hardcoded section labels ("Formats", "Performance", "Finishes", CTA text) if they lean literary.

SEO / meta:
- `src/routes/__root.tsx` and every route's `head()` — title + description in plain words (keep keywords, drop poetic phrasing).
- `src/lib/site.ts` — `SITE.tagline`, `SITE.description`, any nav labels that are wordy.

## Explicit rewrite examples (locked in)
- "Sealed. Silent. Sumptuous." → "No leaks. No noise. Built to last."
- "The first hello. The last word." → "Strong at the door. Strong for years."
- "Thin frames. Widest views." → keep.
- "The joint is where windows fail. Ours doesn't." → "Most windows break at the corner. Ours don't."
- "Multi-chamber profiles and thermal breaks tuned for 45°C summers…" → "Built for 45°C summers and heavy monsoon rain. Keeps the heat out — so your AC bill goes down."
- "Twin gaskets, laminated glass, precise sash tolerances…" → "Double sealing and strong glass keep outside noise out — traffic, loudspeakers, festival sound. Your home stays quiet."
- "Every product. Every detail. Nothing hidden." → keep.
- "A curated view of the windows and doors we build most often." → "The windows and doors people ask for most."
- Site tagline "Always looking for the better." → keep (already simple, brand line).

## What is NOT changed
- Numbers, dimensions, U-values, dB, mm, °C, years, counts.
- Testimonial quotes (customer voice stays as-is).
- Design, layout, motion, images, videos, components, routes, data model.
- Brand name, tagline, contact details, addresses.

## Process
1. Read each file above, rewrite strings in place using `line_replace` (parallel where files are independent).
2. Keep JSX structure identical — only string literals and template contents change.
3. After the pass, spot-check the homepage and one product category page in the preview to confirm nothing broke and tone reads clear.

No code, dependency, or schema changes.
