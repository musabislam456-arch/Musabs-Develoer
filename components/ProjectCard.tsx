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
import Image from "next/image";
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
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
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
        <div className="relative mb-5 h-44 sm:h-48 overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-accent/6 to-primary-soft/6">
          {project.screenshot ? (
            <div className="relative w-full h-full">
              <Image
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          ) : (
            <iframe
              src={project.liveUrl}
              title={project.title}
              loading="lazy"
              className="w-full h-full border-0"
              sandbox="allow-scripts allow-forms allow-same-origin"
            />
          )}

          <span className="absolute left-3 top-3 rounded-full glass px-3 py-1 font-mono text-[11px] font-semibold text-ink">
            {project.tag}
          </span>

          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-black/10 opacity-40" />
        </div>

        <h3 className="font-display text-xl font-semibold text-ink">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          {project.description}
        </p>

        <div className="mt-3 hidden sm:block text-sm text-ink-soft">
          {project.experience?.challenge && (
            <div className="mb-2">
              <div className="font-semibold text-ink">Challenge</div>
              <div className="text-sm">{project.experience.challenge}</div>
            </div>
          )}
          {project.experience?.solution && (
            <div className="mb-2">
              <div className="font-semibold text-ink">Solution</div>
              <div className="text-sm">{project.experience.solution}</div>
            </div>
          )}
          {project.experience?.results && (
            <div>
              <div className="font-semibold text-ink">Results</div>
              <div className="text-sm">{project.experience.results}</div>
            </div>
          )}
        </div>

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
