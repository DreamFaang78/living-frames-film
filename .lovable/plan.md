# Nicwin feedback pass — logo, top-bar marquee, homepage carousel

Three targeted changes. Tagline copy stays exactly "Always looking for the better." — no wording edits.

## 1. Header logo — bigger, confident

`src/components/site/Nav.tsx`
- Bump logo image from `h-9 md:h-10` to `h-12 md:h-14` (~40% larger).
- Raise the logo wrapper height (`h-11` → `h-14`) so it stays vertically centered, and tighten header padding (`py-4` → `py-3`) so the header bar height stays essentially the same.
- Update width/height attrs proportionally (110×44 → 150×56) to prevent layout shift.

## 2. Restore sliding tagline in the top bar

New persistent top strip on every page (distinct from the lower brand marquee).

`src/components/site/TopBar.tsx` (new)
- Thin red bar (`bg-[color:var(--nicwin-red)]`, height ~28px), white uppercase text, letter-spaced, small type.
- Seamless CSS marquee: duplicate the content twice inside a `flex w-max` track and animate `transform: translateX(-50%)` linearly over ~35s. No jump on loop.
- Content repeats: `Always looking for the better.` · `Made in Deoghar, Jharkhand · Delivered across India` · `WhatsApp +91 79090 39070` — separated by a small red-on-white dot.
- Pause on hover/touch via `group-hover:[animation-play-state:paused]` and `active:[animation-play-state:paused]`.
- Respects `prefers-reduced-motion` (animation disabled, content centered static).

`src/components/site/Nav.tsx`
- Render `<TopBar />` above the header. Shift the sticky header's `top` offset from `0 / 4` to `28 / 28` so the header sits under the top strip. The existing "red strip on scroll" motion becomes redundant with a permanent red bar — remove that inner motion.div to avoid a double red band.
- Ensure `z-index` layering: TopBar `z-[60]`, header `z-50`.

Route pages that add top padding to clear the fixed header (hero sections using `pt-*`) already account for header height via the hero being `100dvh` absolute — verify no visual regression on `/about`, `/contact`, `/products` (they use standard section padding, unaffected by the extra 28px).

## 3. Auto-sliding window carousel on the home page

Reuse the existing `AutoCarousel` component (already used on Gallery — same captioned, pause-on-interaction, reduced-motion-aware behavior; add prev/next arrows are already built in).

`src/routes/index.tsx`
- Add a new "Recent installations" section positioned after `ProductShowcase` and before the Gallery CTA block.
- Populate with 5 slides using existing product assets (`luxury-interior`, `french-doors`, `tilt-turn`, `slide-fold`, `casement-door`) with real captions (product type + place — e.g. "Tilt & Turn uPVC · Private residence, Ranchi").
- Wrap in a max-w container, aspect-video framing, soft drop shadow, section heading "Recently delivered across India" and a short subline.
- `intervalMs={4500}` for the cinematic 4-5s cadence the client asked for.

## 4. Motion polish (the "wow" bar)

- Marquee uses linear easing, GPU transform, seamless loop (duplicated content + 50% translate), no jitter.
- Carousel already uses Framer Motion crossfade — verify `AnimatePresence` mode is `wait` isn't blocking auto-advance; if slides feel abrupt, extend transition to 0.9s ease.
- Add subtle `mask-image` fade at the left/right edges of the top-bar marquee so text softly fades in/out instead of hard-clipping at the viewport edges.

## Out of scope for this pass

Finish-colors correction, factory/showroom media, mobile scroll polish, contact-info additional edits — deferred to next round per the client's explicit "close this round out cleanly" note.
