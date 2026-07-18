import { useEffect, useRef } from "react";

/**
 * Desktop-only cinematic cursor:
 * - A tiny red dot that tracks the pointer 1:1
 * - A larger deep-blue ring that trails with spring easing
 * - Grows + inverts on interactive elements (a, button, [role=button], input, [data-cursor="hover"])
 * - Squeezes into a soft pulse on scroll to make scrolling feel tactile
 * - Auto-disables on touch devices and when prefers-reduced-motion is set
 */
export function CinematicCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    // Hide the native cursor once ours is active
    document.documentElement.classList.add("cinematic-cursor-active");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let scale = 1;
    let targetScale = 1;
    let visible = false;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }

      // hover detection
      const el = e.target as HTMLElement | null;
      const interactive = el?.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor="hover"]',
      );
      const mediaHover = el?.closest('img, video, [data-cursor="view"]');

      if (interactive) {
        targetScale = 2.4;
        ring.dataset.state = "hover";
        label.textContent = "";
        label.style.opacity = "0";
      } else if (mediaHover) {
        targetScale = 3;
        ring.dataset.state = "view";
        label.textContent = "View";
        label.style.opacity = "1";
      } else {
        targetScale = 1;
        ring.dataset.state = "idle";
        label.style.opacity = "0";
      }
    };

    const onLeave = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onDown = () => {
      ring.dataset.pressed = "true";
    };
    const onUp = () => {
      ring.dataset.pressed = "false";
    };

    let scrollTimer: number | undefined;
    const onScroll = () => {
      ring.dataset.scrolling = "true";
      if (scrollTimer) window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        ring.dataset.scrolling = "false";
      }, 180);
    };

    const tick = () => {
      // Ring trails with easing; dot snaps.
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      scale += (targetScale - scale) * 0.18;

      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${scale.toFixed(3)})`;

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      if (scrollTimer) window.clearTimeout(scrollTimer);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.classList.remove("cinematic-cursor-active");
    };
  }, []);

  return (
    <div aria-hidden className="cinematic-cursor-root">
      <div ref={ringRef} className="cinematic-cursor-ring" data-state="idle">
        <div ref={labelRef} className="cinematic-cursor-label" />
      </div>
      <div ref={dotRef} className="cinematic-cursor-dot" />
    </div>
  );
}

export default CinematicCursor;
