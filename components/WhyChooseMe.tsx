"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { whyChooseMe } from "@/lib/data";

export default function WhyChooseMe() {
  return (
    <section className="section relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Why Choose Me
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Built for clients who expect{" "}
            <span className="text-gradient">more</span>
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            Every project is treated with the same care, attention, and
            attention to detail &mdash; no matter the size.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseMe.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex h-full items-start gap-4 rounded-2xl glass p-6 shadow-glass hover:shadow-glass-lg"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
