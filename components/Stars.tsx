"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  alpha: number;
  baseAlpha: number;
  twinkle: number;
  speed: number;
};

export default function Stars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let width = 0;
    let height = 0;
    let stars: Star[] = [];

    const build = () => {
      // Density: ~1 star per 9000px²  → adapts to viewport
      const count = Math.max(40, Math.floor((width * height) / 9000));
      stars = [];
      for (let i = 0; i < count; i++) {
        const baseAlpha = Math.random() * 0.5 + 0.15;
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.1 + 0.3,
          alpha: baseAlpha,
          baseAlpha,
          twinkle: Math.random() * Math.PI * 2,
          speed: 0.0004 + Math.random() * 0.0008,
        });
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      build();
    };

    let lastTime = performance.now();
    const draw = (now: number) => {
      const dt = now - lastTime;
      lastTime = now;
      ctx.clearRect(0, 0, width, height);

      stars.forEach((s) => {
        s.twinkle += s.speed * dt;
        const a = s.baseAlpha + Math.sin(s.twinkle) * 0.15;
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, a)})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
