"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

interface ScrollProgressProps {
  variant?: "bar";
  position?: "top" | "bottom";
}

export function ScrollProgress({
  variant = "bar",
  position = "top",
}: ScrollProgressProps) {
  const progress = useScrollProgress();

  const styles = useMemo(
    () => ({
      top: position === "top" ? 0 : undefined,
      bottom: position === "bottom" ? 0 : undefined,
    }),
    [position]
  );

  if (variant !== "bar") return null;

  return (
    <div
      className="fixed left-0 right-0 z-50 bg-transparent pointer-events-none"
      style={styles}
    >
      <div className="h-1 w-full bg-border/40">
        <motion.div
          className="h-full bg-accent origin-left"
          style={{ scaleX: progress }}
        />
      </div>
    </div>
  );
}

export default ScrollProgress;
