import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: 0.4 });
  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[70] h-[2px] w-full origin-left"
      style={{
        scaleX: x,
        background: "linear-gradient(90deg, transparent, var(--champagne) 40%, var(--champagne-soft))",
      }}
    />
  );
}
