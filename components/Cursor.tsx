"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const cursorX = useSpring(x, { damping: 25, stiffness: 250, mass: 0.5 });
  const cursorY = useSpring(y, { damping: 25, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      !window.matchMedia("(hover: hover)").matches
    ) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], .interactive")) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
    };
  }, [x, y, visible]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100]"
      style={{ x: cursorX, y: cursorY, opacity: visible ? 1 : 0 }}
    >
      <motion.div
        className="rounded-full bg-accent"
        animate={{
          width: hovering ? 28 : 8,
          height: hovering ? 28 : 8,
          x: hovering ? -14 : -4,
          y: hovering ? -14 : -4,
          opacity: hovering ? 0.4 : 0.9,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </motion.div>
  );
}
