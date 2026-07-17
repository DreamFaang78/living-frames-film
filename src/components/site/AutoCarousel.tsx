import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CarouselSlide = {
  src: string;
  alt: string;
  productType: string;
  place: string;
};

type Props = {
  slides: CarouselSlide[];
  intervalMs?: number;
  className?: string;
};

/**
 * Auto-advancing image carousel with pause-on-interaction, keyboard support
 * and reduced-motion opt-out. Restores the auto-slide behaviour the client
 * asked for from the previous site.
 */
export function AutoCarousel({ slides, intervalMs = 5000, className = "" }: Props) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useRef(false);
  const wrap = useRef<HTMLDivElement | null>(null);

  const n = slides.length;
  const go = useCallback(
    (delta: number) => setI((v) => (v + delta + n) % n),
    [n],
  );
  const goTo = useCallback((k: number) => setI(((k % n) + n) % n), [n]);

  useEffect(() => {
    reduce.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reduce.current || n <= 1) return;
    const t = window.setInterval(() => go(1), intervalMs);
    return () => window.clearInterval(t);
  }, [paused, n, intervalMs, go]);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [go]);

  if (n === 0) return null;
  const slide = slides[i];

  return (
    <div
      ref={wrap}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Recent Nicwin projects"
      className={`group relative overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--paper-warm)] shadow-[0_30px_80px_-40px_rgba(14,59,115,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--nicwin-red)] ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="relative aspect-[16/9] w-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={slide.src + i}
            src={slide.src}
            alt={slide.alt}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        {/* Bottom scrim for caption legibility only */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/25 to-transparent"
        />

        {/* Caption */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 px-6 pb-6 md:px-10 md:pb-8">
          <div className="text-[10px] uppercase tracking-[0.28em] text-white/85">
            {slide.productType}
          </div>
          <div className="font-display text-2xl text-white md:text-3xl">
            {slide.place}
          </div>
        </div>

        {/* Prev / Next */}
        {n > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/85 p-2 text-[color:var(--ink)] shadow transition hover:bg-white md:block"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/85 p-2 text-[color:var(--ink)] shadow transition hover:bg-white md:block"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {n > 1 && (
        <div className="flex items-center justify-center gap-2 py-4">
          {slides.map((_, k) => (
            <button
              key={k}
              type="button"
              aria-label={`Go to slide ${k + 1}`}
              aria-current={k === i}
              onClick={() => goTo(k)}
              className={`h-1.5 rounded-full transition-all ${
                k === i
                  ? "w-8 bg-[color:var(--nicwin-red)]"
                  : "w-1.5 bg-[color:var(--ink)]/25 hover:bg-[color:var(--ink)]/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
