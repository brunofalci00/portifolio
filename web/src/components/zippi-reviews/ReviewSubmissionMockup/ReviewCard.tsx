"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ReviewCardProps {
  title: string;
  children: ReactNode;
  isCompleted?: boolean;
  subtitle?: string;
}

export function ReviewCard({
  title,
  children,
  isCompleted = false,
  subtitle,
}: ReviewCardProps) {
  return (
    <motion.div
      layout
      animate={{
        backgroundColor: isCompleted
          ? "rgba(15, 118, 110, 0.1)"
          : "rgba(23, 23, 23, 0.6)",
      }}
      transition={{
        backgroundColor: { duration: 0.6 },
      }}
      className={`relative p-6 rounded-2xl backdrop-blur-sm transition-all min-h-[120px] flex flex-col justify-center ${
        isCompleted
          ? "ring-1 ring-emerald-500/20 bg-emerald-500/10"
          : "ring-1 ring-white/10 bg-neutral-900/60"
      }`}
    >
      {/* Card title */}
      <motion.h3
        animate={{
          color: isCompleted ? "#10b981" : "#d1d5db",
        }}
        transition={{ duration: 0.4 }}
        className="text-sm font-medium mb-3"
      >
        {title}
      </motion.h3>

      {/* Card content */}
      <div className="space-y-3">{children}</div>

      {/* Success subtitle - appears on completion */}
      {isCompleted && subtitle && (
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-xs text-emerald-400/80 mt-3"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
