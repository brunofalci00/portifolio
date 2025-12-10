"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface DecryptedTextProps {
  /** The text to display */
  text: string;
  /** Animation speed in ms */
  speed?: number;
  /** Maximum iterations before revealing */
  maxIterations?: number;
  /** Characters to use for the encrypted effect */
  characters?: string;
  /** Class name for the revealed text */
  className?: string;
  /** Class name for the parent container */
  parentClassName?: string;
  /** Class name for encrypted characters */
  encryptedClassName?: string;
  /** When to trigger the animation */
  animateOn?: "hover" | "view";
  /** Direction to reveal the text */
  revealDirection?: "start" | "end" | "center";
  /** Whether the animation should only run once */
  once?: boolean;
}

export function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?",
  className,
  parentClassName,
  encryptedClassName,
  animateOn = "hover",
  revealDirection = "start",
  once = true,
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once, margin: "-50px" });

  const getRandomChar = useCallback(() => {
    return characters[Math.floor(Math.random() * characters.length)];
  }, [characters]);

  const animate = useCallback(() => {
    if (isAnimating || (once && hasAnimated)) return;

    setIsAnimating(true);
    setHasAnimated(true);

    const textArray = text.split("");
    const length = textArray.length;
    let iterations = 0;

    const getRevealIndex = (iteration: number) => {
      const progress = iteration / maxIterations;

      switch (revealDirection) {
        case "end":
          return Math.floor((1 - progress) * length);
        case "center":
          const center = Math.floor(length / 2);
          const radius = Math.floor(progress * center);
          return { start: center - radius, end: center + radius };
        case "start":
        default:
          return Math.floor(progress * length);
      }
    };

    const interval = setInterval(() => {
      iterations++;

      const newText = textArray
        .map((char, index) => {
          if (char === " ") return " ";

          const revealIndex = getRevealIndex(iterations);

          if (revealDirection === "center") {
            const { start, end } = revealIndex as { start: number; end: number };
            if (index >= start && index <= end) {
              return char;
            }
          } else {
            const idx = revealIndex as number;
            if (revealDirection === "start" && index < idx) {
              return char;
            }
            if (revealDirection === "end" && index >= idx) {
              return char;
            }
          }

          return getRandomChar();
        })
        .join("");

      setDisplayText(newText);

      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, maxIterations, revealDirection, getRandomChar, isAnimating, once, hasAnimated]);

  // Handle view animation
  useEffect(() => {
    if (animateOn === "view" && isInView && !hasAnimated) {
      animate();
    }
  }, [animateOn, isInView, animate, hasAnimated]);

  // Handle hover animation
  const handleMouseEnter = () => {
    if (animateOn === "hover") {
      animate();
    }
  };

  return (
    <motion.span
      ref={containerRef}
      className={cn("inline-block", parentClassName)}
      onMouseEnter={handleMouseEnter}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayText.split("").map((char, index) => {
        const isRevealed = char === text[index];
        return (
          <span
            key={index}
            className={cn(
              "inline-block transition-all duration-100",
              isRevealed ? className : encryptedClassName
            )}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </motion.span>
  );
}

export default DecryptedText;
