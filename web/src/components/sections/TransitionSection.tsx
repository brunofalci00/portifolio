"use client";

import { motion } from "framer-motion";
import { DecryptedText } from "@/components/ui/decrypted-text";

interface TransitionSectionProps {
  title?: string;
  subtitle?: string;
}

export function TransitionSection({
  title = "Jornada",
  subtitle = "Do fundamento à execução",
}: TransitionSectionProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-white/5"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full border border-white/5"
        />
        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-emerald-400/5 blur-3xl" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
      >
        <span className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-4 block">
          {title}
        </span>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white">
          <DecryptedText
            text={subtitle}
            animateOn="view"
            revealDirection="center"
            speed={40}
            maxIterations={15}
            className="text-white"
            encryptedClassName="text-emerald-400/60"
            parentClassName="inline-block"
          />
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 w-24 h-px bg-emerald-400 mx-auto origin-center"
        />
      </motion.div>
    </section>
  );
}

export default TransitionSection;
