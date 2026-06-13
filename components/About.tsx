"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";
import { aboutHighlights, stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: Intro */}
          <ScrollReveal direction="right">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              About Me
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Crafting digital experiences at the intersection of{" "}
              <span className="text-gradient">design and AI</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
              I&apos;m Musab, a web developer focused on building premium,
              fast, and reliable websites for businesses and individuals. I
              combine clean engineering with thoughtful design and modern AI
              tools to deliver products that don&apos;t just look great, but
              actually help my clients grow.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              From landing pages to full-stack web applications, every
              project is built with performance, accessibility, and
              conversion in mind &mdash; using a modern stack centered on
              Next.js, React, and TypeScript.
            </p>

            <ul className="mt-8 space-y-3">
              {aboutHighlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-3 text-sm text-ink sm:text-base"
                >
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FiCheck size={14} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Right: Stats grid */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="glass rounded-2xl p-6 shadow-glass transition-shadow hover:shadow-glass-lg sm:p-8"
                >
                  <p className="font-display text-3xl font-bold text-ink sm:text-4xl">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="text-gradient"
                    />
                  </p>
                  <p className="mt-2 text-xs font-medium text-ink-soft sm:text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
