import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RECENT_PROJECTS } from "@/lib/projects";
import nicwinLogo from "@/assets/brand/nicwin-logo.png.asset.json";

const INTERVAL_MS = 5500;

export function RecentProjects() {
  const projects = RECENT_PROJECTS;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const count = projects.length;

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + count) % count),
    [count],
  );
  const goTo = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);

  useEffect(() => {
    if (paused || reduce || count < 2) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL_MS);
    return () => window.clearInterval(t);
  }, [paused, reduce, count]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") go(1);
    else if (e.key === "ArrowLeft") go(-1);
  };

  const current = projects[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      onKeyDown={onKey}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Recent Nicwin projects"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[color:var(--ink)] shadow-[0_30px_80px_-30px_rgba(14,59,115,0.35)] ring-1 ring-[color:var(--line)] md:aspect-[16/9]">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: reduce ? 1 : 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 1.1, ease: [0.22, 0.61, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              src={current.image}
              alt={`${current.name}, ${current.location} — work done by Nicwin`}
              className="h-full w-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            {/* legibility scrim: stronger on left/bottom where text sits */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />

            {/* Overlay lockup */}
            <div className="absolute inset-0 flex items-end p-6 md:items-center md:p-14">
              <div className="max-w-md text-left">
                <h3 className="font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-[color:var(--nicwin-red)] md:text-6xl">
                  {current.name}
                </h3>
                <p className="mt-2 font-display text-lg font-semibold uppercase tracking-[0.08em] text-[color:var(--nicwin-blue)] md:text-2xl [text-shadow:0_1px_0_rgba(255,255,255,0.6)]">
                  {current.location}
                </p>
                <div className="mt-4 h-[2px] w-16 bg-[color:var(--nicwin-red)]" />
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 md:text-xs">
                    Work done by
                  </span>
                  <img
                    src={nicwinLogo.url}
                    alt="Nicwin"
                    className="h-8 w-auto rounded bg-white/95 px-2 py-1 md:h-10"
                  />
                </div>
                {current.caption && (
                  <p className="mt-4 hidden max-w-sm text-sm leading-relaxed text-white/85 sm:block md:text-base">
                    {current.caption}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous project"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition hover:bg-black/70 md:left-5 md:p-3"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next project"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition hover:bg-black/70 md:right-5 md:p-3"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </>
        )}
      </div>

      {/* Dot indicators */}
      {count > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2" role="tablist">
          {projects.map((p, i) => {
            const active = i === index;
            return (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Go to ${p.name}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  active
                    ? "w-8 bg-[color:var(--nicwin-red)]"
                    : "w-2 bg-[color:var(--ink-soft)]/40 hover:bg-[color:var(--ink-soft)]/70"
                }`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
