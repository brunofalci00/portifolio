"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Quote,
  CheckCircle,
  Lightbulb,
  Users,
  BarChart,
  Heart,
  Zap,
  Target,
} from "lucide-react";

const reflexao = {
  title: "O que este projeto significou",
  subtitle: "(além dos números)",
  intro:
    "Transformar expertise em autoridade digital não é só sobre posts e métricas. É sobre entender profundamente o cliente, construir um sistema sustentável e criar uma parceria real onde todos ganham.",
  meta: "Resultados quantitativos importam, mas os aprendizados qualitativos moldam os próximos projetos.",
  bullets: [
    {
      text: "Estratégia sem execução é teoria; execução sem estratégia é ativismo.",
      icon: Target,
    },
    {
      text: "Tecnologia é poderosa, mas autenticidade e empatia movem a agulha.",
      icon: Heart,
    },
    {
      text: "Cada cliente é único: diagnóstico, customização e iteração constantes.",
      icon: Users,
    },
    {
      text: "Resultados quantitativos importam, mas aprendizados qualitativos moldam o futuro.",
      icon: Lightbulb,
    },
  ],
  quote:
    "Este projeto provou que é possível construir autoridade digital de verdade em 6 meses. Não com atalhos, mas com estratégia, consistência e muita parceria.",
};

const imageShadow =
  "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

export function ReflectionSection() {
  return (
    <section id="reflexao" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10">
            <span className="text-sm text-neutral-300">07 — Reflexão</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            {reflexao.title}{" "}
            <span className="text-emerald-400">{reflexao.subtitle}</span>
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/media/trendly/trendly_reflection.png"
                alt="Sucesso e parceria"
                fill
                className={`object-cover grayscale brightness-[0.7] hover:grayscale-[20%] hover:brightness-100 transition-all duration-500 ${imageShadow}`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 via-transparent to-neutral-950/60" />

              {/* Decorative quote icon */}
              <div className="absolute top-6 left-6">
                <div className="p-4 rounded-2xl bg-neutral-950/80 backdrop-blur-sm ring-1 ring-white/10">
                  <Quote className="w-8 h-8 text-emerald-400" />
                </div>
              </div>
            </div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-emerald-500/20 ring-1 ring-emerald-500/30 backdrop-blur-sm"
            >
              <p className="text-3xl font-display font-light text-emerald-400">
                R$100k
              </p>
              <p className="text-sm text-emerald-400/80">em 6 meses</p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-neutral-300 text-lg leading-relaxed">
              {reflexao.intro}
            </p>

            <div className="h-px bg-white/10" />

            <p className="text-neutral-500 leading-relaxed italic">
              &quot;{reflexao.meta}&quot;
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Meses", value: "6", icon: Zap },
                { label: "Receita", value: "R$100k", icon: BarChart },
                { label: "Parceria", value: "Real", icon: Users },
              ].map((stat, idx) => (
                <div
                  key={stat.label}
                  className="p-3 rounded-xl bg-neutral-900/60 ring-1 ring-white/5 text-center"
                >
                  <stat.icon className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                  <p className="text-white font-medium">{stat.value}</p>
                  <p className="text-xs text-neutral-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bullets grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {reflexao.bullets.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex items-start gap-4 p-5 rounded-xl bg-neutral-900/40 ring-1 ring-white/5 hover:ring-emerald-500/20 transition-all"
            >
              <div className="p-2 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                <item.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-neutral-300 leading-relaxed flex-1">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-neutral-900/60 to-emerald-500/5 ring-1 ring-emerald-500/20 overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl" />

          <div className="relative">
            <Quote className="w-10 h-10 text-emerald-400/30 mb-4" />
            <p className="font-display text-xl sm:text-2xl lg:text-3xl font-light text-white leading-relaxed mb-6">
              {reflexao.quote}
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-neutral-800 ring-2 ring-emerald-500/20 flex items-center justify-center">
                <span className="text-lg font-medium text-emerald-400">B</span>
              </div>
              <div>
                <p className="text-white font-medium">Bruno</p>
                <p className="text-sm text-neutral-500">
                  Growth Strategist, Trendly
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ReflectionSection;
