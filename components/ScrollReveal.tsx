"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
};

const getVariants = (direction: ScrollRevealProps["direction"]): Variants => {
  const offset = 32;
  const hidden: Record<string, number> = { opacity: 0 };

  switch (direction) {
    case "up":
      hidden.y = offset;
      break;
    case "down":
      hidden.y = -offset;
      break;
    case "left":
      hidden.x = offset;
      break;
    case "right":
      hidden.x = -offset;
      break;
    default:
      break;
  }

  return {
    hidden,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={getVariants(direction)}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
