"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section relative bg-canvas-alt/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Skills &amp; Expertise
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            A toolkit built for{" "}
            <span className="text-gradient">modern web products</span>
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            From pixel-perfect interfaces to intelligent backend systems,
            here&apos;s what I bring to every project.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <ScrollReveal key={category.title} delay={i * 0.08}>
                <div className="glass h-full rounded-2xl p-6 shadow-glass transition-all hover:-translate-y-1.5 hover:shadow-glass-lg sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-glow">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {category.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-ink-soft">
                    {category.description}
                  </p>

                  <div className="mt-6 space-y-4">
                    {category.skills.map((skill, idx) => (
                      <div key={skill.name}>
                        <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-ink-soft">
                          <span>{skill.name}</span>
                          <span className="font-mono text-ink-faint">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink/[0.06]">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                              duration: 1,
                              delay: 0.2 + idx * 0.1,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
