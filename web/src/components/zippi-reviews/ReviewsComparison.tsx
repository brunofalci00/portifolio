"use client";

import { Compare } from "@/components/ui/compare";
import { motion } from "framer-motion";

export function ReviewsComparison() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Antes e Depois
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Veja a transformação das reviews da Zippi após a implementação das estratégias de CX
          </p>
        </motion.div>

        {/* Compare Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Compare
            firstImage="/assets/zippi/review-after.png"
            secondImage="/assets/zippi/review-before.png"
            firstImageClassName="object-cover"
            secondImageClassname="object-cover"
            className="h-[600px] w-full rounded-xl border border-neutral-800"
            slideMode="hover"
            autoplay={false}
            alt="Comparação de reviews Zippi"
          />
        </motion.div>

        {/* Labels */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 flex justify-between max-w-4xl mx-auto text-sm"
        >
          <span className="text-emerald-400 font-medium">← DEPOIS</span>
          <span className="text-red-400 font-medium">ANTES →</span>
        </motion.div>
      </div>
    </section>
  );
}
