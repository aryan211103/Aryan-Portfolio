"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const items = [
  {
    role: "AI Intern",
    org: "Tech Mahindra · Maker's Lab",
    when: "Jun 2024 — Sep 2024",
    where: "Pune, India",
    bullets: [
      "Fine-tuned BERT on a 15,000-sample low-resource corpus, lifting multi-class classification accuracy from 71% to 88% across 6 categories",
      "Built an NLP pipeline to extract, clean, and translate text from large document corpora, generating structured Q&A pairs with GPT-3.5",
      "Benchmarked multilingual models (mBERT, LLaMA, XLM-R, GPT-4) on low-resource Sanskrit text, identifying mBERT as the top performer for downstream classification",
    ],
  },
  {
    role: "Personalised Module Recommendation System Using AI",
    org: "IEEE ICCCNT 2025 · Paper No. 2794",
    when: "Jul 2025",
    where: "IEEE Xplore (in press)",
    bullets: [
      "Presented at the 16th International Conference on Computing, Communication and Networking Technologies",
      "Accepted for publication in IEEE Xplore",
    ],
    isPublication: true,
  },
];

export default function Experience() {
  return (
    <Section id="experience" label="EXPERIENCE & PUBLICATIONS">
      <div className="space-y-16 md:space-y-20">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-6 border-t border-line pt-10 md:grid-cols-12 md:gap-8 md:pt-12"
          >
            <div className="md:col-span-3">
              <p className="font-mono text-xs tracking-widest text-dim">{item.when}</p>
              <p className="mt-1 font-mono text-xs tracking-widest text-dim">{item.where}</p>
              {item.isPublication && (
                <p className="mt-3 font-mono text-[11px] tracking-widest text-accent">
                  PUBLICATION
                </p>
              )}
            </div>
            <div className="md:col-span-9">
              <h3 className="text-xl font-medium text-ink sm:text-2xl md:text-[1.625rem] md:leading-snug">
                {item.role}
              </h3>
              <p className="mt-2 text-base text-muted">{item.org}</p>
              <ul className="mt-6 space-y-3">
                {item.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-base leading-relaxed text-ink/80 md:text-[15px]">
                    <span className="mt-2.5 inline-block h-px w-3 shrink-0 bg-accent/60" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
