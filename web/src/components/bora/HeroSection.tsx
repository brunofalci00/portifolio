"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users, CheckCircle, Clock } from "lucide-react";
import { ParallaxElement } from "@/components/scroll/ParallaxElement";

const heroStats = [
  { label: "Usuários Ativos", value: "100+", icon: Users },
  { label: "Retenção", value: "44%", icon: CheckCircle },
  { label: "Time-to-Market", value: "26 dias", icon: Clock },
];

const imageShadow =
  "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

export function HeroSection() {
  return (
    <section id="topo" className="relative min-h-screen overflow-hidden bg-neutral-950">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-emerald-400/5 rounded-full blur-[120px]"
          animate={{ scale: [1.1, 1, 1.1], rotate: [20, 0, 20] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-white/5" />
        <div className="absolute bottom-40 left-10 w-32 h-32 rounded-full border border-white/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-sm text-neutral-500 mb-8"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/#projetos" className="hover:text-white transition-colors">
            Projetos
          </Link>
          <span>/</span>
          <span className="text-neutral-300">Bora</span>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-3 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10">
            <span className="text-sm text-neutral-300">Case Study</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20">
            <span className="text-sm text-emerald-400">Full-Stack Product</span>
          </div>
        </motion.div>

        {/* Two column layout - content left, mockup right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            {/* Main heading and description */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.1]"
              >
                Bora: <span className="text-emerald-400">100 usuários</span> usando
                um app que eu criei do zero em 26 dias
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg lg:text-xl text-neutral-400"
              >
                Como eu construí um app de hábitos — do Figma ao código, do design
                ao deploy — e validei a ideia com usuários reais.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-neutral-500"
              >
                Apps de hábitos costumam ser complicados demais. Eu queria criar
                algo diferente: simples, bonito e que realmente ajudasse as
                pessoas. O resultado? Mais de 100 usuários usando em menos de um mês.
              </motion.p>
            </div>

            {/* Metrics cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {heroStats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                  className="group relative p-4 rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 hover:ring-emerald-500/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative flex flex-col items-center text-center">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors mb-2">
                      <stat.icon className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-2xl font-light text-white mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-neutral-400">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right column - Mockup */}
          <ParallaxElement speed={0.08}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden">
                <Image
                  src="/media/projects/bora/portifolio-11.png"
                  alt="Bora App - Interface Principal"
                  fill
                  className={`object-cover grayscale brightness-[0.7] hover:grayscale-[20%] hover:brightness-100 transition-all duration-500 ${imageShadow}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="p-4 rounded-xl bg-neutral-950/80 backdrop-blur-sm ring-1 ring-white/10">
                    <p className="text-sm text-neutral-400 mb-1">Do Figma ao Deploy</p>
                    <p className="text-white font-medium">26 dias de desenvolvimento</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </ParallaxElement>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
