"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

// ========== INTERFACES (SIMPLIFICADAS) ==========
export interface CardData {
  id: number;
  keyword: string;
  title?: string;
  subtitle?: string;
  image: string;
  backgroundColor?: string;
}

export interface CardStackProps {
  cards: CardData[];
  className?: string;
  initialExpanded?: boolean;
  onCardClick?: (id: number) => void;
}

// ========== COMPONENT ==========
export function CardStack({
  cards,
  className,
  initialExpanded = false,
  onCardClick,
}: CardStackProps) {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);

  // Variantes de animação - OFFSETS CORRIGIDOS PARA CARDS GRANDES
  const cardVariants = {
    stacked: (index: number) => ({
      x: index * 12,
      y: index * -15,
      scale: 1 - index * 0.03,
      rotate: index * 1.5,
      zIndex: cards.length - index,
      transition: {
        type: "spring" as const,
        stiffness: 350,
        damping: 30,
        mass: 0.8,
      },
    }),
    expanded: (index: number) => ({
      x: index * 80,
      y: 0,
      scale: 1,
      rotate: (index - (cards.length - 1) / 2) * 3,
      zIndex: cards.length - index,
      transition: {
        type: "spring" as const,
        stiffness: 350,
        damping: 30,
        mass: 0.8,
      },
    }),
  };

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={cn(
        "relative w-full min-h-[400px] overflow-visible",
        className
      )}
      style={{ perspective: "1000px" }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          custom={index}
          variants={cardVariants}
          initial="stacked"
          animate={isExpanded ? "expanded" : "stacked"}
          onClick={() => {
            handleClick();
            onCardClick?.(card.id);
          }}
          className="absolute top-0 left-0 cursor-pointer"
          role="button"
          tabIndex={0}
          aria-expanded={isExpanded}
          aria-label={`Card ${index + 1}: ${card.keyword}. Click to ${
            isExpanded ? "collapse" : "expand"
          }`}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleClick();
              onCardClick?.(card.id);
            }
          }}
        >
          {/* TODOS OS CARDS - ESTRUTURA: TOP BAR + IMAGE + BOTTOM BAR */}
          <div className="h-[360px] w-[380px] rounded-2xl bg-neutral-900/80 backdrop-blur-sm ring-1 ring-white/10 group hover:ring-white/20 transition-all overflow-hidden flex flex-col">
            {/* TOP BAR (cinza) - Keyword */}
            <div className="flex-shrink-0 bg-neutral-800/60 px-6 py-3 border-b border-white/5 flex items-center justify-end">
              <h3 className="text-sm font-light text-emerald-400 leading-tight">
                {card.keyword}
              </h3>
            </div>

            {/* IMAGE AREA (flex-grow) */}
            <div className="relative flex-grow overflow-hidden">
              <img
                src={card.image}
                alt={card.keyword}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900/40" />
            </div>

            {/* BOTTOM BAR (cinza) - Title + Subtitle (apenas para primeiro card) */}
            {index === 0 && (
              <div className="flex-shrink-0 bg-neutral-800/60 px-6 py-4 border-t border-white/5 space-y-1">
                {card.title && (
                  <p className="text-sm text-neutral-300 font-light leading-snug">
                    {card.title}
                  </p>
                )}
                {card.subtitle && (
                  <p className="text-xs text-neutral-500 font-light line-clamp-2 leading-snug">
                    {card.subtitle}
                  </p>
                )}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default CardStack;
