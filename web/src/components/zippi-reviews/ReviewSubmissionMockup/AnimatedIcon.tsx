"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Check } from "lucide-react";

interface AnimatedIconProps {
  isCompleted: boolean;
}

export function AnimatedIcon({ isCompleted }: AnimatedIconProps) {
  return (
    <AnimatePresence mode="wait">
      {!isCompleted ? (
        // Progress state: Rotating star
        <motion.div
          key="star-icon"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
            rotate: {
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center z-20"
        >
          <div className="p-2 rounded-full bg-neutral-900 ring-1 ring-white/10">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          </div>
        </motion.div>
      ) : (
        // Completed state: Success checkmark with bounce
        <motion.div
          key="check-icon"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            opacity: { duration: 0.4 },
            scale: {
              duration: 0.6,
              type: "spring",
              stiffness: 200,
              damping: 15,
            },
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center z-20"
        >
          <div className="p-2 rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30">
            <Check className="w-4 h-4 text-emerald-400" strokeWidth={3} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
