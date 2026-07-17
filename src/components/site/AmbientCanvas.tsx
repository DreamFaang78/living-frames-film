import { useEffect, useRef } from "react";
import { useMobileMotion } from "@/hooks/useMobileMotion";

/**
 * A fixed, GPU-cheap dust-mote layer that drifts behind content on mobile.
 * Hue shifts subtly with vertical scroll: warm at top → cool blue mid → deep blue near footer.
 */
export function AmbientCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const { isMobile, reduce, lowEnd } = useMobileMotion();

  useEffect(() => {
    if (!isMobile || reduce || lowEnd) return;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(dpr, dpr);

    type Mote = { x: number; y: number; r: number; vy: number; vx: number; a: number };
    const motes: Mote[] = Array.from({ length: 28 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 0.6 + Math.random() * 1.8,
      vy: -0.05 - Math.random() * 0.15,
      vx: (Math.random() - 0.5) * 0.08,
      a: 0.1 + Math.random() * 0.35,
    }));

    let raf = 0;
    let running = true;
    const onResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    window.addEventListener("resize", onResize);

    const onVis = () => {
      running = document.visibilityState === "visible";
      if (running) raf = requestAnimationFrame(draw);
    };
    document.addEventListener("visibilitychange", onVis);

    const draw = () => {
      if (!running) return;
      const scrollY = window.scrollY;
      const doc = document.documentElement.scrollHeight - window.innerHeight || 1;
      const p = Math.min(1, Math.max(0, scrollY / doc));
      // Warm (35) → cool blue (215) → deep blue (220)
      const hue = 35 + p * 185;
      const sat = 60 - p * 20;
      const light = 62 - p * 8;

      ctx.clearRect(0, 0, w, h);
      for (const m of motes) {
        m.y += m.vy;
        m.x += m.vx;
        if (m.y < -4) {
          m.y = h + 4;
          m.x = Math.random() * w;
        }
        if (m.x < -4) m.x = w + 4;
        if (m.x > w + 4) m.x = -4;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${hue}, ${sat}%, ${light}%, ${m.a})`;
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [isMobile, reduce, lowEnd]);

  if (!isMobile || reduce || lowEnd) return null;
  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] mix-blend-screen opacity-70"
    />
  );
}
