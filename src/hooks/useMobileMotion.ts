import { useEffect, useState } from "react";

export function useMobileMotion() {
  const [state, setState] = useState({ isMobile: false, reduce: false, lowEnd: false });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 768px)");
    const rq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cores = (navigator as { hardwareConcurrency?: number }).hardwareConcurrency ?? 8;

    const update = () =>
      setState({ isMobile: mq.matches, reduce: rq.matches, lowEnd: cores < 4 });

    update();
    mq.addEventListener("change", update);
    rq.addEventListener("change", update);
    return () => {
      mq.removeEventListener("change", update);
      rq.removeEventListener("change", update);
    };
  }, []);

  return state;
}
