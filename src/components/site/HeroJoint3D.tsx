import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroVideo from "@/assets/nicwin_hero_doors_opening.mp4.asset.json";

type Mode = "loading" | "webgpu" | "fallback";

export function HeroJoint3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mode, setMode] = useState<Mode>("loading");
  const [hintVisible, setHintVisible] = useState(true);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let cancelled = false;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const hasGPU = typeof navigator !== "undefined" && "gpu" in navigator;

    if (reduce || !hasGPU || !canvasRef.current) {
      setMode("fallback");
      return;
    }

    (async () => {
      try {
        const { mountJointScene } = await import("./hero-joint/Scene");
        if (cancelled || !canvasRef.current) return;
        cleanup = await mountJointScene(canvasRef.current);
        if (!cancelled) setMode("webgpu");
      } catch (err) {
        console.warn("WebGPU joint scene failed, falling back:", err);
        if (!cancelled) setMode("fallback");
      }
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  const handleInteract = () => setHintVisible(false);

  if (mode === "fallback") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[color:var(--paper)]">
        <video
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-90"
          aria-label="Nicwin window corner detail"
        />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <canvas
        ref={canvasRef}
        onPointerDown={handleInteract}
        onKeyDown={handleInteract}
        role="img"
        aria-label="Interactive 3D window corner joint — drag to rotate"
        className="block h-full w-full cursor-grab touch-none rounded-2xl outline-none active:cursor-grabbing focus-visible:ring-2 focus-visible:ring-[color:var(--nicwin-blue)]"
      />
      <AnimatePresence>
        {mode === "webgpu" && hintVisible && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur"
          >
            Drag to rotate
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
