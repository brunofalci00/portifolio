"use client";

import { motion } from "framer-motion";
import { Clock, AlertTriangle, TrendingUp, Target } from "lucide-react";
import { RadialBeforeAfterChart } from "./RadialBeforeAfterChart";

const customEase = [0.25, 0.46, 0.45, 0.94] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: customEase
    }
  }
};

export function ContextSection() {
  const painPoints = [
    {
      icon: Clock,
      title: "Tempo Perdido",
      description: "4 horas semanais em tarefas repetitivas que poderiam ser automatizadas",
    },
    {
      icon: AlertTriangle,
      title: "Processo Manual",
      description: "Consolidação manual de dados de 300+ franquias sem padronização",
    },
    {
      icon: TrendingUp,
      title: "Escala Impossível",
      description: "Crescimento de lojas tornava processo cada vez mais insustentável",
    },
  ];

  return (
    <section id="contexto" className="relative py-24 px-6 bg-neutral-900/50">

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="space-y-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10">
              <span className="text-sm text-neutral-300">O Contexto</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              O Desafio
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Como um processo manual estava travando a operação de 300+ franquias.
            </p>
          </motion.div>

          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-8 rounded-2xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10"
          >
            <blockquote className="text-xl sm:text-2xl text-white font-light text-center">
              &ldquo;Gastávamos mais tempo organizando dados do que analisando eles. O
              processo era tão demorado que quando terminávamos,{" "}
              <span className="text-emerald-400">as informações já estavam desatualizadas</span>
              .&rdquo;
            </blockquote>
            <p className="text-center text-sm text-neutral-500 mt-4">
              — Cenário típico do back-office Track&Field
            </p>
          </motion.div>

          {/* Pain Points */}
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {painPoints.map((point) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  variants={cardVariants}
                  whileHover={{
                    y: -4,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 20
                    }
                  }}
                  className="p-6 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10 hover:ring-emerald-500/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{point.title}</h3>
                  <p className="text-sm text-neutral-400">{point.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Before/After Visual Comparison */}
          <RadialBeforeAfterChart />

          {/* Goal Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent ring-1 ring-emerald-500/20 overflow-hidden"
          >
            {/* Decorative glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-light text-white">A Meta</h3>
              </div>

              <div className="text-center space-y-4">
                <p className="text-3xl sm:text-4xl font-light text-white">
                  De <span className="text-neutral-500">4 horas</span> para{" "}
                  <span className="text-emerald-400">30 minutos</span>
                </p>
                <p className="text-lg text-neutral-400">em 2 meses</p>
              </div>

              {/* SMART Badges */}
              <div className="flex flex-wrap justify-center gap-2 pt-4">
                {[
                  { label: "Específico", desc: "Reduzir tempo de 4h → 30min" },
                  { label: "Mensurável", desc: "Métricas claras de tempo" },
                  { label: "Atingível", desc: "Com automação no-code" },
                  { label: "Relevante", desc: "Impacta 300+ franquias" },
                  { label: "Temporal", desc: "Prazo de 2 meses" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                    className="px-3 py-1.5 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20 text-xs text-emerald-400"
                    title={item.desc}
                  >
                    {item.label}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="grid grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {[
              { value: "208h", label: "Economia/ano" },
              { value: "80%", label: "Automatizado" },
              { value: "300+", label: "Franquias" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10"
              >
                <p className="text-2xl sm:text-3xl font-light text-emerald-400">
                  {stat.value}
                </p>
                <p className="text-xs text-neutral-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContextSection;
