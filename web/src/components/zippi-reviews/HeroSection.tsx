"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function HeroSection() {
  return (
    <section id="topo" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/zippi/hero-background.png"
        alt="Zippi Reviews Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/70 to-neutral-950/95" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
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
          <span className="text-neutral-300">Zippi Reviews</span>
        </motion.div>

        {/* Main Content - Two Column Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -30 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10"
            >
              <span className="text-xs lg:text-sm text-neutral-300">
                Case Study · CX Growth · 2023
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.1]"
            >
              Como transformei reviews negativos em{" "}
              <span className="text-emerald-400">motor de crescimento</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg lg:text-xl text-neutral-400"
            >
              Gestão de comunidade, feedback loop estruturado e resposta proativa.
              De crise de reputação a case de sucesso em CX.
            </motion.p>
          </div>

          {/* Right Column - Rating Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: 30 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="relative order-2 lg:order-none"
          >
            {/* Rating Impact Visual */}
            <div className="inline-flex items-center gap-4 px-8 py-6 rounded-2xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10">
              {/* Before Rating */}
              <div className="flex items-center gap-2">
                <span className="text-3xl font-light text-neutral-400">3.5</span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < 3
                          ? "text-neutral-400 fill-neutral-400"
                          : i === 3
                          ? "text-neutral-400 fill-neutral-400/50"
                          : "text-neutral-700"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="text-3xl text-emerald-400">&rarr;</div>

              {/* After Rating */}
              <div className="flex items-center gap-2">
                <span className="text-3xl font-light text-emerald-400">4.5</span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < 4
                          ? "text-emerald-400 fill-emerald-400"
                          : i === 4
                          ? "text-emerald-400 fill-emerald-400/50"
                          : "text-neutral-700"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-16 max-w-3xl mx-auto"
        >
          <div className="p-6 rounded-xl bg-neutral-900/70 backdrop-blur-sm ring-1 ring-white/10 hover:ring-emerald-500/30 transition-all">
            <div className="text-3xl font-light text-emerald-400 mb-2">+29%</div>
            <p className="text-sm text-neutral-300">Melhoria no Rating</p>
          </div>
          <div className="p-6 rounded-xl bg-neutral-900/70 backdrop-blur-sm ring-1 ring-white/10 hover:ring-emerald-500/30 transition-all">
            <div className="text-3xl font-light text-emerald-400 mb-2">-45%</div>
            <p className="text-sm text-neutral-300">Churn de Suporte</p>
          </div>
          <div className="p-6 rounded-xl bg-neutral-900/70 backdrop-blur-sm ring-1 ring-white/10 hover:ring-emerald-500/30 transition-all">
            <div className="text-3xl font-light text-emerald-400 mb-2">+70%</div>
            <p className="text-sm text-neutral-300">Reviews Positivos</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
