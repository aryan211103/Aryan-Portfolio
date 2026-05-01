"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  layer: number;
  pulse: number;
};

type Edge = {
  from: number;
  to: number;
  weight: number;
  signal: number;
};

export default function NeuralNet() {
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
    let nodes: Node[] = [];
    let edges: Edge[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      build();
    };

    const build = () => {
      // Layered network: 3 - 4 - 3 - 2
      const layers = [3, 4, 3, 2];
      const layerSpacing = width / (layers.length + 1);
      nodes = [];
      layers.forEach((count, li) => {
        const x = layerSpacing * (li + 1);
        const span = height * 0.7;
        const startY = (height - span) / 2 + span / (count + 1);
        for (let i = 0; i < count; i++) {
          const y = startY + (span / (count + 1)) * i;
          nodes.push({
            x,
            y,
            baseX: x,
            baseY: y,
            layer: li,
            pulse: Math.random(),
          });
        }
      });

      // Fully connect adjacent layers
      edges = [];
      let offset = 0;
      for (let li = 0; li < layers.length - 1; li++) {
        const cur = layers[li];
        const next = layers[li + 1];
        for (let i = 0; i < cur; i++) {
          for (let j = 0; j < next; j++) {
            edges.push({
              from: offset + i,
              to: offset + cur + j,
              weight: 0.2 + Math.random() * 0.5,
              signal: 0,
            });
          }
        }
        offset += cur;
      }
    };

    let lastTime = performance.now();
    let signalTimer = 0;

    const draw = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      // Drift nodes gently
      nodes.forEach((n, i) => {
        n.pulse += dt * 0.3;
        n.x = n.baseX + Math.sin(n.pulse + i) * 1.5;
        n.y = n.baseY + Math.cos(n.pulse * 0.7 + i) * 1.5;
      });

      // Trigger occasional signals propagating left to right
      signalTimer += dt;
      if (signalTimer > 1.2) {
        signalTimer = 0;
        // Pick a few edges from the first layer to fire
        const firingLayer = Math.floor(Math.random() * 3);
        edges.forEach((e) => {
          const from = nodes[e.from];
          if (from.layer === firingLayer && Math.random() < 0.5) {
            e.signal = 1;
          }
        });
      }

      // Draw edges
      edges.forEach((e) => {
        const a = nodes[e.from];
        const b = nodes[e.to];
        const baseAlpha = e.weight * 0.35;
        const signalAlpha = e.signal * 0.6;
        ctx.strokeStyle = `rgba(77, 158, 255, ${baseAlpha + signalAlpha})`;
        ctx.lineWidth = 0.5 + e.signal * 0.5;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();

        // Decay signal and propagate
        if (e.signal > 0) {
          e.signal -= dt * 1.2;
          if (e.signal < 0) e.signal = 0;
          // Propagate to next layer when signal drops below threshold
          if (e.signal > 0.5 && e.signal < 0.6) {
            edges.forEach((e2) => {
              if (e2.from === e.to && Math.random() < 0.6) {
                e2.signal = Math.max(e2.signal, 0.9);
              }
            });
          }
        }
      });

      // Draw nodes
      nodes.forEach((n) => {
        const incoming = edges.filter((e) => e.to === nodes.indexOf(n));
        const activation = incoming.reduce((s, e) => s + e.signal, 0) / Math.max(1, incoming.length);

        // Outer glow when active
        if (activation > 0.1) {
          ctx.fillStyle = `rgba(77, 158, 255, ${activation * 0.2})`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 8, 0, Math.PI * 2);
          ctx.fill();
        }

        // Core dot
        const baseColor = activation > 0.1 ? `rgba(77, 158, 255, ${0.7 + activation * 0.3})` : "rgba(180, 180, 180, 0.7)";
        ctx.fillStyle = baseColor;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2.5, 0, Math.PI * 2);
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
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
