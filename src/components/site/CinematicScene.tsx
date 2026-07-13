import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

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
  variant?: "night" | "warm" | "teal" | "gold";
  rain?: boolean;
  children?: ReactNode;
  overlay?: ReactNode;
  parallax?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1.0, 1.05]);

  const bg =
    variant === "night"
      ? "mesh-charcoal"
      : variant === "warm"
        ? "mesh-warm"
        : variant === "teal"
          ? "bg-[radial-gradient(at_20%_20%,rgba(13,115,119,0.55),transparent_60%),radial-gradient(at_80%_70%,rgba(9,74,77,0.7),transparent_60%),#0A0A0B]"
          : "bg-[radial-gradient(at_15%_15%,rgba(201,162,39,0.5),transparent_60%),radial-gradient(at_85%_85%,rgba(20,20,22,0.9),transparent_60%),#0A0A0B]";

  return (
    <div ref={ref} className={cn("relative isolate overflow-hidden", className)}>
      <motion.div
        aria-hidden
        style={parallax ? { y, scale } : undefined}
        className={cn("absolute inset-0 scene-drift", bg)}
      />
      {rain && <div aria-hidden className="absolute inset-0 scene-rain" />}
      {overlay}
      <div aria-hidden className="absolute inset-0 grain" />
      <div aria-hidden className="absolute inset-0 vignette" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
