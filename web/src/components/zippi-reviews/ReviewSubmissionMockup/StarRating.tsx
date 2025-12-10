"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number; // 0 to 5
  delay?: number;
}

export function StarRating({ rating, delay = 0 }: StarRatingProps) {
  const stars = [1, 2, 3, 4, 5];
  // Non-linear stagger delays: [0.2s, 0.4s, 0.7s, 1.1s, 1.5s]
  const staggerDelays = [0.2, 0.4, 0.7, 1.1, 1.5];

  return (
    <div className="flex gap-2">
      {stars.map((star, idx) => {
        const isFilled = idx < rating;
        const starDelay = delay + staggerDelays[idx];

        return (
          <motion.div
            key={star}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              opacity: { duration: 0.3, delay: starDelay },
              scale: { duration: 0.4, delay: starDelay },
            }}
          >
            <Star
              className={`w-5 h-5 transition-all ${
                isFilled
                  ? "text-amber-400 fill-amber-400"
                  : "text-neutral-700"
              }`}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
