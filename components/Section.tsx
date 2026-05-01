"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Section({
  id,
  label,
  children,
  tightBottom,
}: {
  id?: string;
  label?: string;
  children: ReactNode;
  tightBottom?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative px-6 sm:px-8 md:px-12 ${
        tightBottom
          ? "pb-12 pt-24 sm:pb-16 sm:pt-32 md:pb-20 md:pt-40"
          : "py-24 sm:py-32 md:py-40"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        {label && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 font-mono text-xs tracking-widest text-dim md:mb-16 md:text-sm"
          >
            <span className="mr-3 inline-block h-px w-6 bg-accent align-middle" />
            {label}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}