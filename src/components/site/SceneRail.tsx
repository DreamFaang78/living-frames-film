import { useEffect, useState } from "react";
import { useMobileMotion } from "@/hooks/useMobileMotion";

/**
 * Right-edge vertical progress rail with tick marks for each major section.
 * Mobile only. Active tick swells as user passes through it.
 */
export function SceneRail() {
  const { isMobile, reduce } = useMobileMotion();
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(7);

  useEffect(() => {
    if (!isMobile) return;
    const measure = () => {
      const sections = document.querySelectorAll<HTMLElement>("main section, main [data-scene]");
      if (sections.length) setCount(Math.min(9, Math.max(3, sections.length)));
    };
    measure();
    const onScroll = () => {
      const doc = document.documentElement.scrollHeight - window.innerHeight || 1;
      setProgress(Math.min(1, Math.max(0, window.scrollY / doc)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, [isMobile]);

  if (!isMobile || reduce) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed right-2 top-1/2 z-40 flex -translate-y-1/2 flex-col items-center gap-3"
    >
      <div className="relative h-[46vh] w-[2px] overflow-hidden rounded-full bg-black/10">
        <div
          className="absolute inset-x-0 top-0 origin-top bg-[color:var(--nicwin-red)]"
          style={{ height: `${progress * 100}%` }}
        />
      </div>
      <div className="flex flex-col gap-2">
        {Array.from({ length: count }).map((_, i) => {
          const active = Math.floor(progress * count) === i;
          return (
            <span
              key={i}
              className="block rounded-full transition-all duration-300"
              style={{
                width: active ? 8 : 4,
                height: active ? 8 : 4,
                backgroundColor: active ? "var(--nicwin-red)" : "rgba(14,59,115,0.35)",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
