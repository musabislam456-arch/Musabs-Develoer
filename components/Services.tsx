"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="section relative bg-canvas-alt/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Services
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            What I can <span className="text-gradient">build for you</span>
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            Whether you need a sleek landing page or a full AI-powered web
            app, I&apos;ve got you covered.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative h-full overflow-hidden rounded-2xl glass p-7 shadow-glass hover:shadow-glass-lg"
                >
                  <div
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary/15 to-accent/10 blur-2xl transition-transform duration-500 group-hover:scale-150"
                    aria-hidden="true"
                  />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-glow">
                    <Icon size={22} />
                  </span>
                  <h3 className="relative mt-5 font-display text-lg font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
