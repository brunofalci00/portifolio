"use client";

import { motion } from "framer-motion";
import { GlowingButton, GlowingButtonLink } from "@/components/ui/glowing-button";
import { RotatingText } from "@/components/ui/rotating-text";
import { ArrowRight, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onScrollToProjects: () => void;
}

export function HeroSection({ onScrollToProjects }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle diagonal lines - decorative */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute -left-20 top-10 h-px w-[140%] rotate-[20deg] bg-neutral-600/20" />
        <span className="absolute -right-24 top-1/3 h-px w-[150%] -rotate-[18deg] bg-neutral-600/20" />
        <span className="absolute -left-10 bottom-12 h-px w-[130%] rotate-[10deg] bg-neutral-600/15" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 relative z-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-10 md:col-start-2 flex flex-col justify-center">
            <div className="space-y-8">
              {/* Status pill */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm ring-1 ring-white/10"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-sm text-neutral-200">Disponível para projetos</span>
              </motion.div>

              {/* H1 - Main Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="leading-tight text-[32px] sm:text-[44px] md:text-[56px] lg:text-[68px] xl:text-[80px] font-light tracking-tighter font-display text-white">
                  O Product Builder{" "}
                  <span className="text-emerald-400">Customer-Centric</span>
                </h1>
              </motion.div>

              {/* H2 - Value Proposition with Rotating Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              >
                <h2 className="leading-tight text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-light tracking-tight font-display text-neutral-300">
                  Transformo Estratégia em{" "}
                  <RotatingText
                    texts={["Produto", "Growth", "Resultados", "Experiências"]}
                    mainClassName="px-2 sm:px-3 md:px-4 bg-emerald-400 text-neutral-950 overflow-hidden py-1 sm:py-1.5 md:py-2 rounded-lg inline-flex"
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2500}
                  />{" "}
                  <span className="block sm:inline mt-2 sm:mt-0">Escaláveis.</span>
                </h2>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-xl md:text-base lg:text-lg leading-relaxed font-medium text-neutral-50/90 mt-4"
              >
                Profissional de Marketing e Produto com 4 anos de experiência em
                Growth, IA e desenvolvimento full-stack. Especializado em
                estruturar estratégias de Go-to-Market e construir produtos que crescem.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <GlowingButton onClick={onScrollToProjects}>
                  <span>Ver Projetos</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </GlowingButton>

                <GlowingButtonLink href="#contato">
                  <span>Enviar Mensagem</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </GlowingButtonLink>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={onScrollToProjects}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mx-auto mt-16 flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}

export default HeroSection;
