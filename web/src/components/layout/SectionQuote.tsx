"use client";

import { motion } from "framer-motion";

interface SectionQuoteProps {
  /** O texto da citação */
  quote: string;
  /** Autor da citação (opcional) */
  author?: string;
  /** Classes CSS adicionais */
  className?: string;
}

export function SectionQuote({ quote, author, className }: SectionQuoteProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto text-center ${className || ""}`}
    >
      <blockquote className="space-y-6">
        <p className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-neutral-300 leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
        {author && (
          <footer className="text-sm text-neutral-500 uppercase tracking-widest">
            — {author}
          </footer>
        )}
      </blockquote>
    </motion.div>
  );
}

export default SectionQuote;
