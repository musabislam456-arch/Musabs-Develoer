"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiMessageCircle, FiCode } from "react-icons/fi";
import ParticlesBackground from "./ParticlesBackground";
import TypingText from "./TypingText";
import { heroRoles } from "@/lib/data";
import HeroPortrait from "./HeroPortrait";

const codeLines = [
  { indent: 0, text: "const developer = {" },
  { indent: 1, text: "name: 'Musab'," },
  { indent: 1, text: "role: 'AI-Powered Web Developer'," },
  { indent: 1, text: "stack: ['Next.js', 'React', 'AI'], " },
  { indent: 1, text: "available: true," },
  { indent: 0, text: "};" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid pt-28 pb-16 sm:pt-32"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />
      <ParticlesBackground />

      {/* Decorative floating gradient orbs */}
      <div
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float-slow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-float"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left: Text content */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-ink-soft shadow-glass"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for freelance &amp; contract work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl md:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient bg-[length:300%_300%] animate-gradient-shift">
              Musab
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 font-display text-xl font-semibold text-ink-soft sm:text-2xl md:text-3xl"
          >
            <TypingText words={heroRoles} className="text-primary" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            I design and build premium, high-performance websites and web
            applications &mdash; enhanced with AI &mdash; that help
            businesses look professional, work smarter, and convert more
            visitors into clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white shadow-glass-lg transition-all hover:bg-primary hover:shadow-glow"
            >
              View Projects
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold text-ink shadow-glass transition-all hover:border-primary/30 hover:text-primary"
            >
              Contact Me
              <FiMessageCircle className="transition-transform group-hover:scale-110" />
            </a>
          </motion.div>
        </div>

        {/* Right: Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <HeroPortrait />
        </motion.div>
      </div>
    </section>
  );
}

function CodeLine({ text }: { text: string }) {
  // Simple syntax-style coloring for keys vs strings vs punctuation
  const parts = text.split(/(:\s|'[^']*'|\[|\]|\{|\}|,)/g).filter(Boolean);

  return (
    <>
      {parts.map((part, idx) => {
        if (part.startsWith("'")) {
          return (
            <span key={idx} className="text-accent">
              {part}
            </span>
          );
        }
        if (["{", "}", "[", "]", ",", ": "].includes(part)) {
          return (
            <span key={idx} className="text-ink-faint">
              {part}
            </span>
          );
        }
        if (part === "true" || part === "false") {
          return (
            <span key={idx} className="text-primary">
              {part}
            </span>
          );
        }
        return (
          <span key={idx} className="text-ink">
            {part}
          </span>
        );
      })}
    </>
  );
}
