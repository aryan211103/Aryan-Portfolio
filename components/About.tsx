"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" label="ABOUT">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="grid gap-12 md:grid-cols-12 md:gap-16"
      >
        <p className="text-xl leading-relaxed text-ink md:col-span-8 md:text-2xl lg:text-3xl">
        I'm a graduate student at Northeastern's Khoury College of Computer Science, focused on machine learning and the distributed systems that run it in production. Before this, I have spent a summer at Tech Mahindra's Maker's Lab building transformer-based NLP pipelines and evaluating how well large language models handle low-resource languages like Sanskrit. I also have a research paper published in IEEE Xplore which I presented at ICCCNT 2025 on building recommendation systems using XGBoost and collaborative filtering.
        </p>
        <div className="space-y-6 md:col-span-4">
          <div>
            <p className="font-mono text-[11px] tracking-widest text-dim">FOCUS</p>
            <p className="mt-2 text-base text-ink/80">
              Distributed systems, applied ML, backend infrastructure
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-widest text-dim">BASED IN</p>
            <p className="mt-2 text-base text-ink/80">Boston, Massachusetts</p>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-widest text-dim">AVAILABLE</p>
            <p className="mt-2 text-base text-ink/80">May 2026 — open to remote &amp; on-site</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
