"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReviewCard } from "./ReviewCard";
import { StarRating } from "./StarRating";
import { AnimatedIcon } from "./AnimatedIcon";

export function ReviewSubmissionMockup() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [loopCount, setLoopCount] = useState(0);

  useEffect(() => {
    // Reset state on each loop
    setIsCompleted(false);

    const timers: NodeJS.Timeout[] = [];

    // Transition to completed @ 1.5s
    const completeTimer = setTimeout(() => {
      setIsCompleted(true);
    }, 1500);
    timers.push(completeTimer);

    // Reset loop @ 2.5s (total cycle: 1s for completed state display)
    const resetTimer = setTimeout(() => {
      setLoopCount((prev) => prev + 1);
    }, 2500);
    timers.push(resetTimer);

    // Cleanup function
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [loopCount]);

  return (
    <div className="w-full max-w-sm mx-auto">
      <AnimatePresence mode="wait">
        {/* Relative container for positioning the central icon */}
        <div className="relative" key={`review-container-${loopCount}`}>
          {/* Cards container with animated gap */}
          <motion.div
            layout
            className="flex flex-col gap-4 transition-all"
            animate={{
              gap: isCompleted ? "8px" : "16px",
            }}
            transition={{
              gap: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            {/* Card 1: Select Rating */}
            <ReviewCard
              title={isCompleted ? "Review Submitted" : "Select Your Rating"}
              isCompleted={isCompleted}
              subtitle={isCompleted ? "Thank you for your feedback!" : undefined}
            >
              {isCompleted ? (
                // Success state: Show all stars filled + success text
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <StarRating rating={5} delay={0} />
                </motion.div>
              ) : (
                // Progress state: Show stars filling progressively
                <StarRating rating={5} delay={0} />
              )}
            </ReviewCard>

            {/* Card 2: Submit Review */}
            <ReviewCard
              title={isCompleted ? "Rating Confirmed" : "Submit Review"}
              isCompleted={isCompleted}
              subtitle={isCompleted ? "5.0 ★ Rating" : undefined}
            >
              <motion.p
                animate={{
                  color: isCompleted ? "#10b981" : "#9ca3af",
                  opacity: isCompleted ? 0.8 : 0.6,
                }}
                transition={{ duration: 0.4 }}
                className="text-xs"
              >
                {isCompleted ? "✓ Successfully submitted" : "Ready to send"}
              </motion.p>
            </ReviewCard>
          </motion.div>

          {/* Central animated icon (absolute positioned between cards) */}
          <div className="relative h-0 -my-8 pointer-events-none">
            <AnimatedIcon isCompleted={isCompleted} />
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}
