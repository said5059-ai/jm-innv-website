"use client";

import { motion } from "framer-motion";

export default function HeroEffects() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#08a982]/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 60, 0],
          scale: [1, 1.18, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-120px] top-32 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-3xl"
      />

      <motion.div
        animate={{
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(8,169,130,0.16),transparent_38%)]"
      />
    </div>
  );
}