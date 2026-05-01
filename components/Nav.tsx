"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useActiveSection } from "@/lib/useActiveSection";

const links = [
  { id: "About", label: "About" },
  { id: "Work", label: "Work" },
  { id: "Experience", label: "Experience" },
  { id: "Skills", label: "Skills" },
  { id: "Contact", label: "Contact" },
];

export default function Nav() {
  const active = useActiveSection(["top", "About", "Work", "Experience", "Skills", "Contact"]);
  const [open, setOpen] = useState(false);

  const isActive = (id: string) => active === id;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div className="flex items-center justify-between px-6 py-5 md:px-12 md:py-6">
        <a
          href="#top"
          className="font-mono text-xs tracking-widest text-ink/70 transition-colors hover:text-ink md:text-sm"
        >
          AH
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 font-mono text-xs tracking-wider md:flex md:text-sm lg:gap-10">
          {links.map((l) => {
            const activeNow = isActive(l.id);
            const isContact = l.id === "contact";
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="group relative flex items-center gap-2 transition-colors"
              >
                <span
                  className={`transition-colors ${
                    activeNow
                      ? "text-accent"
                      : isContact
                      ? "text-accent/80 hover:text-accent"
                      : "text-ink/60 hover:text-ink"
                  }`}
                >
                  {l.label}
                </span>
                <AnimatePresence>
                  {activeNow && (
                    <motion.span
                      key="dot"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(77,158,255,0.8)]"
                    />
                  )}
                </AnimatePresence>
              </a>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`block h-px w-5 bg-ink transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-ink transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-start justify-center gap-8 bg-bg/95 px-8 backdrop-blur-md md:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className={`text-4xl font-medium tracking-tight ${
                  isActive(l.id) ? "text-accent" : "text-ink"
                }`}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}