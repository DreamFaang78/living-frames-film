Plan: Homepage "Visit Our Showroom" Section

Goal
Add a modern, trust-building showroom section to the homepage that showcases the real NICWIN Experience Center & Showroom, using the uploaded storefront photo. The section should feel premium, load fast, and match the existing white-first / red-blue brand system.

Placement
Insert the new section immediately after the `<VideoHero>` and before the `<Marquee>` in `src/routes/index.tsx`. Current order after the hero is: Marquee → HeroJointSection → Stats → Problem → Products → etc. The new section will sit at the top of the page flow as section 2.

Step 1 — Prepare the image asset
- The uploaded image is `Gemini_Generated_Image_4koope4koope4koo.png` (896 × 1195 px, portrait 3:4).
- Convert it to WebP using a local image encoder (e.g. `cwebp` or Pillow) with quality tuned for fast loading and no visible loss.
- Create Lovable Asset pointers for both the WebP and PNG versions:
  - `src/assets/showroom/showroom-experience-center.webp.asset.json`
  - `src/assets/showroom/showroom-experience-center.png.asset.json` (fallback)
- Keep original binaries out of the repo; only the `.asset.json` pointer files live in source.

Step 2 — Build the `ShowroomSection` component
Create `src/components/site/ShowroomSection.tsx` with:
- Layout: white (`--paper`) background, generous vertical padding (`py-24 md:py-32`), and a max-width container.
- Two-column grid on desktop (`md:grid-cols-[1fr_1.05fr]` or `md:grid-cols-2`), single column on mobile.
- Left side: eyebrow, headline, sub-headline, description, and two CTAs.
- Right side: the showroom image in a framed container.

Content
- Eyebrow: "Visit us"
- Headline: "Visit Our Showroom"
- Sub-headline: "Experience Premium uPVC, Aluminium & Steel Window & Door Solutions"
- Description: "Step into our modern showroom to explore our premium collection of uPVC, Aluminium, and Steel Window & Door Systems. Experience product quality firsthand, receive expert consultation, and discover customized solutions for residential and commercial projects."
- CTA 1: "Visit Showroom" — external link to Google Maps using `SITE.showroom.mapQuery` (opens in a new tab).
- CTA 2: "Contact Us" — internal link to `/contact`.

Image presentation
- Container: `rounded-2xl` to `rounded-3xl` (16–20 px radius), `overflow-hidden`, subtle shadow (`shadow-soft-blue` or `shadow-2xl`), and a thin border (`--line`).
- Image: `w-full h-full object-cover` with a smooth `scale-105` hover zoom via `group-hover:scale-105` transition.
- Use a fixed aspect ratio container (e.g. `aspect-[3/4]` on mobile, `aspect-[4/3]` or `aspect-square` on desktop depending on layout balance) so the image never causes layout shift.

Step 3 — Performance & SEO optimization
Because this project is TanStack Start + Vite (not Next.js), we will replicate Next.js Image optimization using a responsive `<picture>` element:
- `<source srcSet={showroomWebp.url} type="image/webp" />` for modern browsers.
- `<img src={showroomPng.url} alt="..." />` as the fallback.
- Explicit `width={896}` and `height={1195}` attributes on the `<img>`.
- `loading="lazy"` and `decoding="async"`.
- `sizes` attribute so the browser picks the right intrinsic width for each viewport.
- Semantic HTML: wrap the image in `<figure>` with a `<figcaption>` if needed, or use `<section>` with `aria-labelledby`.
- Alt text: "NICWIN Window & Door Systems modern showroom displaying premium uPVC, aluminium and steel doors and windows."
- Descriptive asset filename: `showroom-experience-center.webp` / `.png`.

Step 4 — Animation
Use the existing `Reveal` / `Stagger` Framer Motion utilities for subtle fade-in + slide-up:
- Section wrapper animates on viewport entry.
- Text content staggers in from the left side.
- Image container slides/fades in from the right side (or bottom on mobile).
- Respect `prefers-reduced-motion` via the existing CSS reset.

Step 5 — Homepage integration
- Import `ShowroomSection` in `src/routes/index.tsx`.
- Insert it right after `<VideoHero>` and before `<Marquee />`.
- Remove any unused imports added during the edit if necessary.

Step 6 — Verification
- Run the dev build/typecheck to confirm the new component and assets compile.
- Open the preview and check the section at desktop, tablet, and mobile widths.
- Confirm the image loads, lazy-attributes are present, and no layout shift occurs on load.

Notes / constraints
- No Next.js `Image` component is available in this TanStack Start project; the `<picture>` + explicit dimensions + Lovable Assets approach achieves the same CLS/Lighthouse goals.
- Keep the existing brand palette: white base, `--nicwin-red` (#E31E24) for primary CTA, `--nicwin-blue` (#1B5FAE) for accents/links, and `--ink` for text.
- The section should not duplicate any existing contact/showroom content; it is a hero-level teaser that links to the full contact page and Google Maps.