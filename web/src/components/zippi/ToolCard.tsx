"use client";

import { motion } from "framer-motion";
import { Tilt } from "@/../components/motion-primitives/tilt";

interface ToolCardProps {
  name: string;
  description: string;
  image: string;
  index: number;
}

export function ToolCard({ name, description, image, index }: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Tilt
        rotationFactor={8}
        isRevese={false}
        springOptions={{ stiffness: 26.7, damping: 4.1, mass: 0.2 }}
        className="group flex max-w-sm flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 hover:border-emerald-500/30 transition-all duration-300"
      >
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 p-4">
          <h4 className="font-semibold text-white text-lg leading-snug">
            {name}
          </h4>
          <p className="text-sm text-neutral-400">
            {description}
          </p>
        </div>
      </Tilt>
    </motion.div>
  );
}
