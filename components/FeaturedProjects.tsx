"use client"

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 14 } },
};

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-16">
      <div className="absolute -z-10 left-0 top-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -left-40 -top-16 w-96 h-96 rounded-full bg-gradient-to-br from-[#6f5cff] to-[#2dd4bf] opacity-10 blur-3xl" />
        <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-gradient-to-tr from-[#ff8fb3] to-[#7c3aed] opacity-8 blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} variants={container}>
          <motion.div variants={item} className="mb-6 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500">
              Featured Projects
            </h2>
            <p className="mt-3 text-ink-soft">
              A curated selection of recent work — agency-grade design, production-ready code, and measurable results.
            </p>
          </motion.div>

          <motion.div variants={item} className="mb-8 flex gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-full bg-ink/95 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:scale-105 transition-transform"
            >
              View Case Studies
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full glass px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:translate-y-[-2px]"
            >
              Start a Project
            </a>
          </motion.div>

          <motion.div variants={container} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((p) => (
              <motion.div key={p.title} variants={item}>
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
