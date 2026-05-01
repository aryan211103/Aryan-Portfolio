"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const links = [
  {
    label: "Email",
    href: "mailto:hirlekar.a@northeastern.edu",
    display: "hirlekar.a@northeastern.edu",
  },
  {
    label: "GitHub",
    href: "https://github.com/aryan211103",
    display: "github.com/aryan211103",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aryan-hirlekar-4a48aa248/",
    display: "linkedin.com/in/aryan-hirlekar",
  },
];

export default function Contact() {
  return (
    <Section id="contact" label="GET IN TOUCH" tightBottom>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="max-w-4xl text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
          Have a system to scale,
          <br />
          a model to train, or a coffee
          <br />
          to grab in Boston?
        </h2>

        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.label !== "Email" ? "_blank" : undefined}
              rel="noreferrer"
              className="group block border-t border-line pt-6 transition-colors hover:border-accent"
            >
              <p className="font-mono text-xs tracking-widest text-dim">
                {l.label.toUpperCase()}
              </p>
              <p className="mt-2 break-all text-base text-ink transition-colors group-hover:text-accent md:text-lg">
                {l.display}{" "}
                <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </p>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-2 border-t border-line pt-6 font-mono text-[10px] tracking-widest text-dim sm:flex-row sm:items-center md:mt-10">
          <span>© {new Date().getFullYear()} ARYAN HIRLEKAR</span>
          <span>
             · BOSTON, MA</span>
        </div>
      </motion.div>
    </Section>
  );
}