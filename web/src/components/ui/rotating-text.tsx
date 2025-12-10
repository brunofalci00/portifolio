"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Transition } from "framer-motion";
import { cn } from "@/lib/utils";

interface RotatingTextProps {
  /** Array of texts to rotate through */
  texts: string[];
  /** Class name for the main container */
  mainClassName?: string;
  /** Direction to stagger from */
  staggerFrom?: "first" | "last" | "center";
  /** Initial animation state */
  initial?: { y?: string | number; opacity?: number };
  /** Animate to state */
  animate?: { y?: string | number; opacity?: number };
  /** Exit animation state */
  exit?: { y?: string | number; opacity?: number };
  /** Duration between each letter stagger */
  staggerDuration?: number;
  /** Class name for each split level (letter container) */
  splitLevelClassName?: string;
  /** Transition configuration */
  transition?: Transition;
  /** Interval between rotations in ms */
  rotationInterval?: number;
}

export function RotatingText({
  texts,
  mainClassName,
  staggerFrom = "first",
  initial = { y: "100%" },
  animate = { y: 0 },
  exit = { y: "-120%" },
  staggerDuration = 0.025,
  splitLevelClassName,
  transition = { type: "spring", damping: 30, stiffness: 400 },
  rotationInterval = 2000,
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  const getStaggerDelay = useCallback(
    (index: number, totalLength: number) => {
      switch (staggerFrom) {
        case "last":
          return (totalLength - 1 - index) * staggerDuration;
        case "center":
          const center = Math.floor(totalLength / 2);
          return Math.abs(center - index) * staggerDuration;
        case "first":
        default:
          return index * staggerDuration;
      }
    },
    [staggerFrom, staggerDuration]
  );

  const currentText = texts[currentIndex];
  const letters = currentText.split("");

  return (
    <span className={cn("inline-flex", mainClassName)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className="inline-flex"
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {letters.map((letter, index) => (
            <span
              key={`${currentIndex}-${index}`}
              className={cn("inline-block", splitLevelClassName)}
            >
              <motion.span
                className="inline-block"
                variants={{
                  initial: initial,
                  animate: animate,
                  exit: exit,
                }}
                transition={{
                  ...transition,
                  delay: getStaggerDelay(index, letters.length),
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            </span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default RotatingText;
