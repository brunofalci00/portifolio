"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  Users,
  DollarSign,
  Instagram,
} from "lucide-react";
import { ParallaxElement } from "@/components/scroll/ParallaxElement";

const heroStats = [
  { label: "Receita Digital", value: "R$100k", icon: DollarSign },
  { label: "Seguidores", value: "10k", icon: Users },
  { label: "Engajamento", value: "+400%", icon: TrendingUp },
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
          <span className="text-neutral-300">Trendly</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Badge única */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -30 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10"
            >
              <span className="text-xs lg:text-sm text-neutral-300">
                Case Study · Growth Marketing · 2023
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-5xl sm:text-6xl lg:text-6xl font-light text-white leading-[1.1]"
            >
              De R$0 a{" "}
              <span className="text-emerald-400">R$100k</span>
              <br />
              <span className="text-neutral-500 text-5xl">em 6 meses</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base text-neutral-300 max-w-lg leading-relaxed"
            >
              Como transformei um especialista invisível em autoridade digital: estratégia de conteúdo, funil de vendas e IA gerando receita real.
            </motion.p>

            {/* Stats cards - inline with left content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-3 pt-2"
            >
              {heroStats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 ring-1 ring-white/10 hover:ring-emerald-500/30 transition-all duration-300 group"
                  >
                    <Icon className="w-4 h-4 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-lg font-light text-white mb-0.5">
                      {stat.value}
                    </p>
                    <p className="text-xs text-neutral-400">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </motion.div>

            {/* Client info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-2 space-y-3 border-t border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 bg-emerald-400 rounded-full" />
                <p className="text-neutral-400 text-sm">
                  <span className="font-medium text-white">Alfredo Novais</span> — Especialista em Comércio Exterior
                </p>
              </div>
              <div className="flex items-center gap-3 ml-4">
                <a
                  href="https://www.instagram.com/alfredonovais/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-pink-600/20 hover:bg-pink-600/40 transition-colors flex-shrink-0"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-500" />
                </a>
                <p className="text-xs text-neutral-400">
                  10k seguidores • 2.5% engajamento • R$100k mentoria
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right content - Only Image */}
          <div>
            <ParallaxElement speed={0.08}>
              <motion.div
                initial={{ opacity: 0, y: 30, x: 30 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="relative"
              >
                {/* Professional image */}
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden group mb-6">
                  <Image
                    src="/media/trendly/trendly_hero.jpeg"
                    alt="Professional Marketing"
                    fill
                    className={`object-cover grayscale brightness-[0.7] group-hover:grayscale-[30%] group-hover:brightness-90 transition-all duration-700 ${imageShadow}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />

                  {/* Overlay badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="absolute bottom-0 left-0 right-0 p-6"
                  >
                    <div className="p-5 rounded-2xl bg-gradient-to-r from-neutral-950/90 to-neutral-900/80 backdrop-blur-md ring-1 ring-emerald-500/20 border border-emerald-400/10">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <p className="text-xs text-emerald-400 font-medium">Resultados Alcançados</p>
                      </div>
                      <p className="text-lg font-light text-white">
                        De invisível a autoridade
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </ParallaxElement>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
