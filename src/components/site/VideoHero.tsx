import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  src: string;
  poster?: string;
  children: ReactNode;
};

export function VideoHero({ src, poster, children }: Props) {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduce) return;
    v.play().catch(() => {});
  }, [reduce]);

  return (
    <section className="relative h-[100svh] min-h-[100svh] w-full overflow-hidden bg-ink">
      {/* Video / poster */}
      {reduce ? (
        poster ? (
          <img
            src={poster}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
          />
        ) : null
      ) : (
        <video
          ref={videoRef}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
          style={{ zIndex: 0 }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={poster}
          onLoadedData={() => setLoaded(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {/* Cinematic overlays */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,11,0.65) 0%, rgba(10,10,11,0.15) 35%, rgba(10,10,11,0.05) 55%, rgba(10,10,11,0.75) 85%, rgba(10,10,11,0.95) 100%)",
        }}
      />
      {/* Vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      {/* Film grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] mix-blend-overlay"
        style={{
          opacity: 0.07,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.9'/></svg>\")",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded || reduce ? 1 : 1 }}
        className="relative z-[3] flex h-full w-full flex-col"
      >
        {children}
      </motion.div>
    </section>
  );
}
