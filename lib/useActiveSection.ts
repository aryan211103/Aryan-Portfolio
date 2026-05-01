"use client";

import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibility = new Map<string, number>();

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visibility.set(id, entry.intersectionRatio);
          });
          // Pick whichever is most visible right now
          let best: string | null = null;
          let bestRatio = 0;
          visibility.forEach((ratio, key) => {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              best = key;
            }
          });
          if (bestRatio > 0.15) setActive(best);
        },
        {
          // Trigger across many thresholds so we pick the most-visible section as you scroll
          threshold: [0, 0.15, 0.3, 0.5, 0.75, 1],
          rootMargin: "-10% 0px -30% 0px",
        }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}
