import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SceneVariant =
  | "night"
  | "warm"
  | "teal"
  | "gold"
  | "cool-light"
  | "warm-light";

const LIGHT_VARIANTS: SceneVariant[] = ["cool-light", "warm-light"];

const BG_CLASS: Record<SceneVariant, string> = {
  night: "mesh-charcoal",
  warm: "mesh-warm",
  teal: "mesh-teal",
  gold: "mesh-gold",
  "cool-light": "mesh-cool-light",
  "warm-light": "mesh-warm-light",
};

/**
 * Full-bleed cinematic backdrop. Uses CSS gradient meshes + grain + optional
 * animated rain — a stand-in for hosted video. Drop a real <video> in later
 * by using <video> inside `overlay`.
 */
export function CinematicScene({
  className,
  variant = "night",
  rain = false,
  children,
  overlay,
  parallax = true,
}: {
  className?: string;
  variant?: SceneVariant;
  rain?: boolean;
  children?: ReactNode;
  overlay?: ReactNode;
  parallax?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1.0, 1.05]);

  const isLight = LIGHT_VARIANTS.includes(variant);

  return (
    <div ref={ref} className={cn("relative isolate overflow-hidden", className)}>
      <motion.div
        aria-hidden
        style={parallax ? { y, scale } : undefined}
        className={cn("absolute inset-0 scene-drift", BG_CLASS[variant])}
      />
      {rain && <div aria-hidden className="absolute inset-0 scene-rain" />}
      {overlay}
      {!isLight && <div aria-hidden className="absolute inset-0 grain" />}
      {!isLight && <div aria-hidden className="absolute inset-0 vignette" />}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
