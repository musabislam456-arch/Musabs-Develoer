"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { FiExternalLink, FiGithub, FiCpu } from "react-icons/fi";
import { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { stiffness: 150, damping: 18, mass: 0.5 };
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);

  const glowX = useTransform(x, (v) => `${v * 100}%`);
  const glowY = useTransform(y, (v) => `${v * 100}%`);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    x.set(px);
    y.set(py);

    rotateY.set((px - 0.5) * 14);
    rotateX.set((0.5 - py) * 14);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-full rounded-2xl glass shadow-glass transition-shadow duration-300 hover:shadow-glass-lg"
    >
      {/* Cursor glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(280px circle at ${glowX} ${glowY}, rgba(91,77,245,0.14), transparent 70%)`,
        }}
      />

      <div style={{ transform: "translateZ(20px)" }} className="relative p-5 sm:p-6">
        {/* Image placeholder */}
        <div className="relative mb-5 flex h-44 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary/15 via-accent/10 to-primary-soft/10 sm:h-48">
          <FiCpu className="text-5xl text-primary/40" />
          <span className="absolute left-3 top-3 rounded-full glass px-3 py-1 font-mono text-[11px] font-semibold text-ink">
            {project.tag}
          </span>
        </div>

        <h3 className="font-display text-xl font-semibold text-ink">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-ink/[0.04] px-3 py-1 font-mono text-[11px] font-medium text-ink-soft"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary"
          >
            Live Demo
            <FiExternalLink size={14} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source on GitHub`}
            className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full glass text-ink transition-colors hover:text-primary"
          >
            <FiGithub size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
