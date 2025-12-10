"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Users,
  DollarSign,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <section className="relative min-h-screen overflow-hidden bg-neutral-950">
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

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10">
            <span className="text-sm text-neutral-300">Case Study</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20">
            <span className="text-sm text-emerald-400">Growth Marketing</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-start">
          {/* Left content */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1]"
            >
              De R$0 a{" "}
              <span className="text-emerald-400">R$100k em 6 meses</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-neutral-400 max-w-2xl"
            >
              Como transformei um especialista invisível em autoridade digital:
              estratégia de conteúdo, funil de vendas e IA gerando receita real.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-neutral-500 max-w-2xl flex flex-wrap gap-1 items-center"
            >
              <span>
                Alfredo Novais tinha anos de expertise em comércio exterior, mas
                ninguém sabia disso. Em 6 meses, ele saiu de menos de 5 mil
                seguidores e zero receita digital para 10 mil seguidores
              </span>
              <a
                href="https://www.instagram.com/alfredonovais/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-pink-600 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <span>, 2.5% de engajamento e R$100 mil em mentoria.</span>
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                asChild
                className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-6"
              >
                <Link href="/#contato">
                  Vamos conversar
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="rounded-full border-white/10 hover:bg-white/5"
              >
                <Link href="/#projetos">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right content - Stats card + Image */}
          <div className="space-y-6">
            <ParallaxElement speed={0.08}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Professional image */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src="/media/trendly/trendly_hero.jpeg"
                    alt="Professional Marketing"
                    fill
                    className={`object-cover grayscale brightness-[0.7] hover:grayscale-[20%] hover:brightness-100 transition-all duration-500 ${imageShadow}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

                  {/* Overlay badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="p-4 rounded-xl bg-neutral-950/80 backdrop-blur-sm ring-1 ring-white/10">
                      <p className="text-sm text-neutral-400 mb-1">
                        Transformação em 6 meses
                      </p>
                      <p className="text-white font-medium">
                        De invisível a autoridade
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats card */}
                <div className="p-6 rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 backdrop-blur-sm">
                  <p className="text-sm text-neutral-500 mb-4">
                    Resultados alcançados
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {heroStats.map((stat, idx) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                        className="text-center p-3 rounded-xl bg-neutral-950/50 ring-1 ring-white/5"
                      >
                        <stat.icon className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                        <p className="text-2xl font-light text-white">
                          {stat.value}
                        </p>
                        <p className="text-xs text-neutral-500 mt-1">
                          {stat.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
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
