"use client";

import * as React from "react";
import { motion, type MotionProps } from "framer-motion";
import { cn } from "./cn";

const EASE = [0.16, 1, 0.3, 1] as const;

export function FadeIn({
  children,
  className,
  ...props
}: MotionProps & { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: EASE }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export const hoverScale = {
  whileHover: { scale: 1.01 },
  transition: { duration: 0.2 },
} as const;

