import { useEffect, useRef } from "react";
import { useMobileMotion } from "@/hooks/useMobileMotion";

/**
 * Mobile-only scroll cinematics orchestrator.
 * - Registers GSAP ScrollTrigger reveals for sections
 * - Syncs ScrollTrigger with Lenis
 * - Triggers a subtle haptic pulse when a new "scene" enters
 * All effects are gated behind `(max-width: 768px)` via gsap.matchMedia
 * and auto-disabled for prefers-reduced-motion.
 */
export function MobileCinematics() {
  const { isMobile, reduce } = useMobileMotion();
  const booted = useRef(false);

  useEffect(() => {
    if (!isMobile || reduce || booted.current) return;
    booted.current = true;

    let cleanup: (() => void) | undefined;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);

      // Sync ScrollTrigger with Lenis if present
      const lenis = (window as unknown as { __lenis?: { on: (e: string, cb: () => void) => void } })
        .__lenis;
      if (lenis) {
        lenis.on("scroll", ScrollTrigger.update);
      }

      const mm = gsap.matchMedia();

      mm.add("(max-width: 768px)", () => {
        // 1) Section reveal batch — every top-level section drifts up + fades in
        const sections = gsap.utils
          .toArray<HTMLElement>("main section, main [data-scene]")
          .filter((el) => !el.hasAttribute("data-hero"));

        sections.forEach((el, i) => {
          gsap.fromTo(
            el,
            { autoAlpha: 0.001, y: 60, scale: 0.985, filter: "blur(6px)" },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: 1.05,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 82%",
                end: "top 40%",
                toggleActions: "play none none reverse",
                onEnter: () => {
                  if (i > 0 && "vibrate" in navigator) {
                    try { navigator.vibrate?.(6); } catch { /* noop */ }
                  }
                },
              },
            },
          );

          // Parallax any hero image inside the section
          const img = el.querySelector<HTMLElement>("img, video");
          if (img && !el.matches("[data-no-parallax]")) {
            gsap.fromTo(
              img,
              { yPercent: -4 },
              {
                yPercent: 6,
                ease: "none",
                scrollTrigger: {
                  trigger: el,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              },
            );
          }
        });

        // 2) Section headings get a soft brand sweep once in view
        const heads = gsap.utils.toArray<HTMLElement>("main h2, main h3");
        heads.forEach((h) => {
          gsap.fromTo(
            h,
            { backgroundPositionX: "100%" },
            {
              backgroundPositionX: "0%",
              ease: "power2.out",
              duration: 1.2,
              scrollTrigger: { trigger: h, start: "top 85%", once: true },
            },
          );
        });

        return () => {
          ScrollTrigger.getAll().forEach((s) => s.kill());
        };
      });

      cleanup = () => mm.revert();
    })();

    return () => {
      cleanup?.();
      booted.current = false;
    };
  }, [isMobile, reduce]);

  return null;
}
