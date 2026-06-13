"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="section relative bg-canvas-alt/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Testimonials
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Trusted by <span className="text-gradient">clients worldwide</span>
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            A few words from people I&apos;ve had the pleasure of working
            with.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex h-full flex-col rounded-2xl glass p-6 shadow-glass hover:shadow-glass-lg"
              >
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <FiStar key={idx} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent font-display text-sm font-semibold text-white">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-ink-soft">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
