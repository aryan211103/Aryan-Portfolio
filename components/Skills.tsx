"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const groups = [
  {
    label: "LANGUAGES",
    items: ["Python", "Java", "JavaScript / TypeScript", "SQL"],
  },
  {
    label: "FRAMEWORKS",
    items: ["Spring Boot", "React / Next.js", "Flask", "PyTorch", "TensorFlow", "LangChain"],
  },
  {
    label: "DISTRIBUTED SYSTEMS",
    items: ["Apache Kafka", "Redis", "Docker", "Microservices", "REST APIs"],
  },
  {
    label: "DATA & ML",
    items: [
      "PostgreSQL",
      "MongoDB",
      "RAG Pipelines",
      "MCP",
      "Sentence Embeddings",
      "Collaborative Filtering",
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills" label="STACK">
      <div className="grid gap-10 md:grid-cols-2 md:gap-12">
        {groups.map((g, i) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-line pt-6"
          >
            <p className="font-mono text-xs tracking-widest text-dim">{g.label}</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {g.items.map((s) => (
                <span key={s} className="text-base text-ink/85 md:text-lg">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
