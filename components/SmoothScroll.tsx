"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Intercept clicks on anchor links and use Lenis to scroll there
    const onAnchorClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const targetId = href.slice(1);
      // Allow "#top" to scroll to the very top
      if (targetId === "top") {
        e.preventDefault();
        lenis.scrollTo(0);
        history.pushState(null, "", "#top");
        return;
      }

      const target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();
      lenis.scrollTo(target, { offset: -20 });
      history.pushState(null, "", `#${targetId}`);
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
    };
  }, []);

  return null;
}