import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

export type GalleryImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export function WindowGallery({
  images,
  kicker = "Windows",
  heading = "See the windows.",
  intro,
}: {
  images: GalleryImage[];
  kicker?: string;
  heading?: string;
  intro?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(
    () => setOpen((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  );
  const prev = useCallback(
    () =>
      setOpen((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, next, prev]);

  return (
    <section className="border-y border-white/5 bg-ink py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-champagne">
            {kicker}
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-4 max-w-3xl font-display text-5xl text-offwhite md:text-6xl">
            {heading}
          </h2>
        </Reveal>
        {intro && (
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-offwhite/70">
              {intro}
            </p>
          </Reveal>
        )}

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <motion.button
              key={img.src}
              type="button"
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-charcoal/60 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
              aria-label={`Open ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={img.width ?? 1200}
                height={img.height ?? 1500}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 translate-y-2 text-left text-sm text-offwhite/90 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={images[open].alt}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-offwhite hover:bg-white/10"
              aria-label="Close"
            >
              Close ✕
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 rounded-full border border-white/20 bg-white/5 p-3 text-offwhite hover:bg-white/10 md:left-8"
              aria-label="Previous image"
            >
              ←
            </button>
            <motion.img
              key={open}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              src={images[open].src}
              alt={images[open].alt}
              className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 rounded-full border border-white/20 bg-white/5 p-3 text-offwhite hover:bg-white/10 md:right-8"
              aria-label="Next image"
            >
              →
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-offwhite/80">
              {open + 1} / {images.length} · {images[open].alt}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
