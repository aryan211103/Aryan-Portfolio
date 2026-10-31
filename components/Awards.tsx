"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const awards = [
  {
    title: "1st Place, IBM SkillsBuild AI Builders Challenge",
    issuer: "IBM SkillsBuild",
    when: "May 2026",
  },
  {
    title: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    when: "Mar 2026",
    href: "https://verify.skilljar.com/c/n5mvf87m889s",
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    when: "Mar 2026",
    href: "https://verify.skilljar.com/c/3jk6qrvro9qc",
  },
];

export default function Awards() {
  return (
    <Section id="awards" label="AWARDS & CERTIFICATIONS">
      <div className="space-y-10 md:space-y-12">
        {awards.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-4 border-t border-line pt-8 md:grid-cols-12 md:gap-8 md:pt-10"
          >
            <div className="md:col-span-3">
              <p className="font-mono text-xs tracking-widest text-dim">{a.when}</p>
            </div>
            <div className="md:col-span-9">
              <h3 className="text-xl font-medium text-ink sm:text-2xl md:leading-snug">
                {a.title}
              </h3>
              <p className="mt-2 text-base text-muted">{a.issuer}</p>
              {a.href && (
                <a
                  href={a.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link mt-4 inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-ink/70 transition-colors hover:text-accent"
                >
                  <span>VERIFY</span>
                  <span className="transition-transform group-hover/link:translate-x-0.5">→</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
