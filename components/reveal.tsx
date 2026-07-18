"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { motion as motionSystem } from "@/lib/motion";
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{
        duration: motionSystem.duration.slow,
        delay,
        ease: motionSystem.ease,
      }}
    >
      {children}
    </motion.div>
  );
}
