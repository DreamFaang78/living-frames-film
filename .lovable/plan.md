# Broaden Copy to Pan-India Voice

Scope: text-only edits. No component, layout, or style changes. Preserve tone (short, confident, wry). Keep every factual location (factory address, showroom, testimonial city tags, structured data, footer, contact page).

## 1. `src/routes/index.tsx` — Homepage

**Problem strip (line 204):** replace the Kanpur/Deoghar headline.
- New H2: `45°C summers. Lashing monsoons. Dust that gets into everything. <span red>Wooden frames don't survive any of it.</span>`
- Keep sub-paragraph (lines 208–212) as-is — already universal.

**Gallery teaser (line 391):** replace `Homes across Jharkhand and Bihar.`
- New: `Homes across India. Made one frame at a time.`

**Hero pill (line 124):** keep `Nicwin · Deoghar, Jharkhand` — provenance marker, matches the "Made in Jharkhand, built for India" framing.

**Testimonials (lines 97, 102):** keep city tags untouched.

## 2. `src/routes/why-nicwin.tsx`

**Pillar 04 body (line 62):** keep `In-house fabrication in Deoghar` — factual/provenance. No change needed. (Spot-check other pillar bodies already in file; only line 62 names a place and it's the factory, which stays.)

## 3. `src/routes/about.tsx`

**Hero subline (lines 81–85):** keep the `15,000 sq ft plant in Deoghar` factual reference, but extend with the national-delivery framing.
- New: `High-quality uPVC and aluminium doors and windows that combine modern design, durability, and affordability — built in a fully automated 15,000 sq ft plant in Deoghar, Jharkhand, and delivered to homes across India.`

**Story paragraphs (lines 104–130):** minor edit to paragraph 3 (line 118) to add the national-reach line explicitly:
- Append to that paragraph: `From this single plant in Jharkhand, we deliver to homes across India.`

**Values card "Craftsmanship" (line 58):** keep — factual (factory location).

**Factory & Experience Center section (lines 210–221):** keep — factual.

**FinalCTA sub (line 246):** keep — factual.

## 4. `src/routes/gallery.tsx`

**Intro (line 25):** replace `Real Nicwin installations across Jharkhand and Bihar — labelled by product type, material and location.`
- New: `Real Nicwin installations in homes across India — labelled by product type, material and location.`

**Individual `place` fields (lines 47–96):** keep — real project locations are credibility.

## 5. `src/lib/site.ts`

**Site description (line 6):** replace `...from Deoghar, Jharkhand.`
- New: `Engineered for Indian climate. Designed for modern Indian life. Premium uPVC, Aluminium and Steel windows and doors — made in Deoghar, Jharkhand, delivered across India.`

Addresses (lines 17–25): keep.

## 6. Files intentionally NOT changed

- `src/components/site/Footer.tsx` line 94 — already correct framing.
- `src/components/site/Marquee.tsx` — "Made in Jharkhand" is provenance, keep.
- `src/routes/__root.tsx` — JSON-LD LocalBusiness address must stay factual.
- `src/routes/contact.tsx` — city/address specificity belongs here.
- Product routes (`products.*.tsx`) — already spec-driven; grep confirms no city references.

## Checklist against user's brief

- [x] Kanpur/Deoghar problem line broadened to India-wide climate description
- [x] "Made in Deoghar · Delivered across India" framing pulled up into About hero + story, not only footer
- [x] Gallery teaser and gallery intro no longer say "Jharkhand and Bihar"
- [x] Testimonial city tags untouched
- [x] Factory, showroom, contact, JSON-LD untouched
- [x] Tone preserved (short sentences, wry cadence)
