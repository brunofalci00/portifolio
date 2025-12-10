"use client";

import { motion } from "framer-motion";
import { Star, MessageSquareX, Clock, TrendingDown, Target, AlertCircle } from "lucide-react";
import { ReviewsComparison } from "./ReviewsComparison";

export function ContextSection() {
  const problems = [
    {
      icon: Star,
      title: "Rating Baixo",
      description: "Nota 3.5 na App Store afetava credibilidade e aquisicao de novos leads",
    },
    {
      icon: MessageSquareX,
      title: "Reviews Negativos",
      description: "65% das avaliacoes eram reclamacoes sobre falta de retorno e comunicacao",
    },
    {
      icon: Clock,
      title: "Resposta Lenta",
      description: "Tempo de resposta acima de 48h deixava usuarios frustrados e ignorados",
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
              Silencio gerava raiva. Raiva gerava reviews negativos. Reviews negativos afetavam aquisicao.
            </p>
          </motion.div>

          {/* Reviews Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ReviewsComparison />
          </motion.div>

          {/* Problem Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-light text-white text-center">
              Tres Problemas Principais
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <motion.div
                    key={problem.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="p-6 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10 hover:ring-white/20 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h4 className="text-lg font-medium text-white mb-2">{problem.title}</h4>
                    <p className="text-sm text-neutral-400">{problem.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Goal Statement - SMART Resumido */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent ring-1 ring-emerald-500/20 overflow-hidden"
          >
            {/* Decorative glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />

            <div className="relative z-10 space-y-4 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20">
                <Target className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-emerald-400">Meta SMART</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white max-w-3xl mx-auto">
                Elevar o rating de <span className="text-neutral-500">3.5</span> para{" "}
                <span className="text-emerald-400">4.5 estrelas</span> em{" "}
                <span className="text-emerald-400">6 meses</span>
              </h3>

              <p className="text-neutral-400 max-w-2xl mx-auto">
                Foco em gestao ativa de comunidade, resposta rapida a reviews negativos
                e transformacao de feedback em melhorias de produto.
              </p>

              {/* SMART metrics compact */}
              <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto pt-6">
                <div className="text-center">
                  <p className="text-sm text-neutral-500">Mensuravel</p>
                  <p className="text-lg text-emerald-400 font-display">+29% rating</p>
                </div>
                <div className="text-center border-x border-white/10">
                  <p className="text-sm text-neutral-500">Temporal</p>
                  <p className="text-lg text-emerald-400 font-display">6 meses</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-neutral-500">KPIs</p>
                  <p className="text-lg text-emerald-400 font-display">NPS, Churn</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContextSection;
