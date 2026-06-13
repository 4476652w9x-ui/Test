"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import * as React from "react";

/**
 * Reveal — tasteful scroll-in animation (fade + small slide). Honours
 * prefers-reduced-motion (renders instantly, no transform) and never delays
 * content visibility enough to hurt CLS. Use `delay` for simple staggering, or
 * wrap children in <Stagger> for automatic staggering.
 */
type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Render as a list item etc. Defaults to div. */
  as?: "div" | "li" | "section" | "article";
  y?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  y = 16,
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </MotionTag>
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
};

/** Stagger container — children should be <StaggerItem>. */
export function Stagger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
