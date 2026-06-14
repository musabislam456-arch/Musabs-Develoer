"use client"

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function HeroPortrait() {
  const ref = useRef<HTMLDivElement | null>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const translateX = useTransform(px, (v) => (v - 0.5) * 18);
  const translateY = useTransform(py, (v) => (v - 0.5) * 12);
  const rotateY = useTransform(px, (v) => (v - 0.5) * 8);
  const rotateX = useTransform(py, (v) => (0.5 - v) * 8);

  const sX = useSpring(translateX, { stiffness: 220, damping: 26 });
  const sY = useSpring(translateY, { stiffness: 220, damping: 26 });
  const rX = useSpring(rotateX, { stiffness: 220, damping: 26 });
  const rY = useSpring(rotateY, { stiffness: 220, damping: 26 });

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    px.set(x);
    py.set(y);
  }

  function handleLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <div className="relative mx-auto w-full max-w-[540px]">
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ x: sX, y: sY, rotateX: rX, rotateY: rY, transformStyle: "preserve-3d" }}
        className="relative select-none"
      >
        {/* Aurora background */}
        <div className="absolute -inset-6 -z-20 rounded-3xl pointer-events-none">
          <div className="absolute left-[-6%] top-[-12%] h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-300/10 blur-3xl opacity-80" />
          <div className="absolute right-[-8%] bottom-[-6%] h-72 w-72 rounded-full bg-gradient-to-tr from-pink-400/10 to-violet-500/8 blur-3xl opacity-70" />
        </div>

        {/* Portrait frame */}
        <div className="relative overflow-hidden rounded-3xl bg-white/3 ring-1 ring-white/6 shadow-glass-lg">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[520px]">
            <Image
              src="/images/profile.svg"
              alt="Musab Bin Umair portrait"
              fill
              sizes="(max-width: 640px) 100vw, 40vw"
              className="object-cover"
              priority
            />
            {/* soft radial glow */}
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-3xl"
              style={{
                background: "radial-gradient(400px circle at 50% 35%, rgba(111,92,255,0.12), transparent 40%)",
                mixBlendMode: "screen",
              }}
            />
          </div>

          {/* Glass border */}
          <div className="absolute inset-3 rounded-2xl border border-white/6 pointer-events-none" />
        </div>

        {/* Floating glass badges */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute -left-6 -top-6 hidden items-center gap-2 rounded-2xl glass-strong px-4 py-3 shadow-glass-lg sm:flex animate-float-slow"
        >
          <div className="h-3 w-3 rounded-full bg-primary" />
          <div className="font-mono text-xs font-medium text-ink">Next.js 15</div>
        </motion.div>
      </motion.div>
    </div>
  );
}
