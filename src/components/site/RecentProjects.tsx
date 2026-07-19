import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RECENT_PROJECTS } from "@/lib/projects";

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
      className="relative mx-auto w-full max-w-3xl"
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
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[color:var(--paper-warm)] shadow-[0_20px_60px_-25px_rgba(14,59,115,0.3)] ring-1 ring-[color:var(--line)]">
        <AnimatePresence mode="sync" initial={false}>
          <motion.img
            key={current.id}
            src={current.image}
            alt={`${current.name}, ${current.location} — work done by Nicwin`}
            loading={index === 0 ? "eager" : "lazy"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.9, ease: [0.22, 0.61, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous project"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition hover:bg-black/70"
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next project"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition hover:bg-black/70"
            >
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="mt-5 flex items-center justify-center gap-2" role="tablist">
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
