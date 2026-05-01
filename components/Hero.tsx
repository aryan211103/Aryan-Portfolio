"use client";

import { motion } from "framer-motion";
import NeuralNet from "./NeuralNet";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 sm:px-8 md:px-12"
    >
      {/* Neural net occupies upper-right region (full width on mobile, half on desktop) */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-full opacity-40 sm:opacity-70 md:w-[55%] md:opacity-100">
        <NeuralNet />
      </div>

      {/* Vignette to fade the network into the page */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/30 md:via-transparent" />

      <div className="relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-6 font-mono text-[11px] tracking-widest text-dim md:text-xs">
            <span className="mr-3 inline-block h-px w-6 bg-accent align-middle" />
            PORTFOLIO · 2026
          </p>
          <h1 className="text-5xl font-medium tracking-tightest text-ink sm:text-6xl md:text-7xl lg:text-8xl">
            Aryan
            <br />
            Hirlekar
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg md:mt-8 md:text-xl">
          Building
          <span className="text-ink"> backend systems </span>
          and
          <span className="text-ink"> ML pipelines </span>
          that are fast, reliable, and production-ready.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-16"
        >
          <p className="font-mono text-[11px] tracking-widest text-dim md:text-xs">
            <span className="mr-3 inline-block h-px w-6 bg-accent align-middle" />
            CURRENTLY
          </p>
          <p className="mt-4 text-sm text-ink/80 md:text-base">
            MS Computer Science · Northeastern University
          </p>
          <p className="mt-1 text-sm text-muted md:text-base">
            Open to Summer & Fall 2026 Internships and Co-ops
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator — hide on small screens to reduce clutter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-6 z-10 hidden items-center gap-3 sm:flex md:bottom-10 md:left-12"
      >
        <span className="font-mono text-[10px] tracking-widest text-dim">SCROLL</span>
        <motion.span
          className="block h-px w-8 bg-dim"
          animate={{ scaleX: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "left" }}
        />
      </motion.div>
    </section>
  );
}
