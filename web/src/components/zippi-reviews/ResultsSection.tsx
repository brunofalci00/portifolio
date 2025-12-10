"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp, TrendingDown, MessageCircle, Users, Trophy } from "lucide-react";
import { RatingEvolutionChart } from "./charts/RatingEvolutionChart";

export function ResultsSection() {
  return (
    <section id="resultados" className="relative py-24 px-6 bg-neutral-900/50">

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
              <span className="text-sm text-neutral-300">Os Numeros</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              Os Resultados
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Meta atingida em 6 meses com impacto direto em aquisicao e retencao.
            </p>
          </motion.div>

          {/* Hero Metric */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative p-12 rounded-3xl bg-gradient-to-br from-emerald-500/5 to-transparent ring-1 ring-emerald-500/20 overflow-hidden text-center"
          >
            {/* Decorative glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />

            <div className="relative z-10 space-y-6">
              {/* Star transformation */}
              <div className="flex items-center justify-center gap-6">
                <div className="text-center">
                  <span className="font-display text-5xl sm:text-6xl font-light text-neutral-500">3.5</span>
                  <div className="flex items-center gap-1 mt-2 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < 3 ? "text-neutral-500 fill-neutral-500" : i === 3 ? "text-neutral-500 fill-neutral-500/50" : "text-neutral-700"}`}
                      />
                    ))}
                  </div>
                </div>

                <TrendingUp className="w-8 h-8 text-emerald-400 flex-shrink-0" />

                <div className="text-center">
                  <span className="font-display text-5xl sm:text-6xl font-light text-emerald-400">4.5</span>
                  <div className="flex items-center gap-1 mt-2 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < 4 ? "text-emerald-400 fill-emerald-400" : i === 4 ? "text-emerald-400 fill-emerald-400/50" : "text-neutral-700"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-2xl sm:text-3xl text-white font-light">
                +29% de Melhoria no Rating
              </p>

              {/* Achievement badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20">
                <Trophy className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400">Meta SMART atingida em 6 meses</span>
              </div>
            </div>
          </motion.div>

          {/* Key Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Star,
                title: "Rating",
                before: "3.5",
                after: "4.5",
                change: "+29%",
              },
              {
                icon: TrendingUp,
                title: "Reviews Positivos",
                before: "35%",
                after: "70%+",
                change: "+100%",
              },
              {
                icon: TrendingDown,
                title: "Churn de Suporte",
                before: "Alto",
                after: "Baixo",
                change: "-45%",
              },
              {
                icon: Users,
                title: "Leads via App Store",
                before: "Base",
                after: "Crescimento",
                change: "+32%",
              },
            ].map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="p-6 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10 hover:ring-emerald-500/20 transition-all group"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h4 className="text-white font-medium">{metric.title}</h4>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-500">Antes</span>
                      <span className="text-neutral-400 font-display">{metric.before}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-emerald-400">Depois</span>
                      <span className="text-emerald-400 font-display font-medium">
                        {metric.after}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5">
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">
                      {metric.change}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Rating Evolution Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <RatingEvolutionChart />
          </motion.div>

          {/* Sentiment Transformation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="p-8 rounded-2xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10"
          >
            <div className="flex items-center gap-2 mb-6">
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <h3 className="text-xl font-medium text-white">Transformacao de Sentimento</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Before */}
              <div className="p-4 rounded-xl bg-red-500/5 ring-1 ring-red-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-red-400 font-medium px-2 py-1 rounded bg-red-500/10">ANTES</span>
                </div>
                <p className="text-sm text-neutral-300 mb-3">
                  "Fui negado e nao tive nenhuma resposta. Pessimo atendimento!"
                </p>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span className="text-xs text-neutral-500">1 estrela</span>
                </div>
              </div>

              {/* After */}
              <div className="p-4 rounded-xl bg-emerald-500/5 ring-1 ring-emerald-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-emerald-400 font-medium px-2 py-1 rounded bg-emerald-500/10">DEPOIS</span>
                </div>
                <p className="text-sm text-neutral-300 mb-3">
                  "Melhor atendimento que ja vi! Respondem rapido e se importam de verdade."
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs text-neutral-500 ml-1">5 estrelas</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Impact Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 1 }}
            className="pt-8 border-t border-white/10 text-center"
          >
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              <span className="text-emerald-400">Impacto em cascata:</span> Melhoria no rating resultou em maior taxa de download,
              impactando diretamente a aquisicao de novos leads.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ResultsSection;
