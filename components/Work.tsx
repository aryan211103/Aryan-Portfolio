"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import Connect4 from "./Connect4";
import { projects } from "@/lib/projects";

export default function Work() {
  return (
    <Section id="work" label="SELECTED WORK">
      <div className="space-y-24 md:space-y-32">
        {projects.map((p) => (
          <motion.article
            key={p.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative grid gap-6 md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-2">
              <p className="font-mono text-xs tracking-widest text-dim">{p.num}</p>
            </div>

            <div className="md:col-span-7">
              <h3 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl md:text-[2.25rem] md:leading-[1.1]">
                {p.title}
              </h3>
              <p className="mt-3 text-base text-accent md:text-lg">{p.tagline}</p>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-[15px]">
                {p.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[10px] tracking-wider text-ink/70"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-ink/70 transition-colors hover:text-accent"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.2.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 3-.4s2 .1 3 .4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.8-5.8 7.8-10.9C23.5 5.7 18.3.5 12 .5z" />
                    </svg>
                    <span>VIEW ON GITHUB</span>
                    <span className="transition-transform group-hover/link:translate-x-0.5">→</span>
                  </a>
                )}
                {p.highlight && (
                  <p className="font-mono text-[11px] tracking-widest text-accent">
                    → {p.highlight}
                  </p>
                )}
              </div>
            </div>

            {/* Connect 4 ambient board sits next to project 03 */}
            <div className="md:col-span-3">
              {p.title === "Connect 4 AI" && (
                <div className="md:sticky md:top-32">
                  <Connect4 />
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
