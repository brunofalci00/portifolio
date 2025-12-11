"use client";

import { motion } from "framer-motion";
import { Trophy, Clock, Zap, Users, TrendingDown } from "lucide-react";
import TypewriterText from "@/components/ui/typewriter-text";

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
            className="space-y-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10">
              <span className="text-sm text-neutral-300">Os Resultados</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              <TypewriterText speed={50}>Impacto Transformacional</TypewriterText>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Processo transformado, tempo economizado, e time mais estratégico.
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
              {/* Trophy */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20">
                <Trophy className="w-8 h-8 text-emerald-400" />
              </div>

              {/* Time transformation */}
              <div className="flex items-center justify-center gap-6">
                <div className="text-center">
                  <span className="font-display text-5xl sm:text-6xl font-light text-neutral-500">4h</span>
                  <p className="text-xs text-neutral-600 mt-2">antes</p>
                </div>

                <div className="text-4xl text-emerald-400 font-light">&rarr;</div>

                <div className="text-center">
                  <span className="font-display text-5xl sm:text-6xl font-light text-emerald-400">30min</span>
                  <p className="text-xs text-emerald-500 mt-2">depois</p>
                </div>
              </div>

              <p className="text-2xl sm:text-3xl text-white font-light">
                -87% de Redução no Tempo
              </p>

              {/* Achievement badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20">
                <Trophy className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400">Objetivo alcançado em 2 meses</span>
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
                icon: TrendingDown,
                title: "Tempo",
                value: "-87%",
                desc: "redução semanal",
              },
              {
                icon: Zap,
                title: "Automação",
                value: "80%",
                desc: "do processo",
              },
              {
                icon: Clock,
                title: "Economia",
                value: "208h",
                desc: "por ano",
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

                  <p className="text-3xl font-display text-emerald-400 mb-2">
                    {metric.value}
                  </p>
                  <p className="text-sm text-neutral-400">{metric.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Impact Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Redução de Estresse",
                desc: "Time mais focado em tarefas estratégicas, menos operacional",
              },
              {
                title: "Capacidade Estratégica",
                desc: "Mais tempo para análise, planejamento e tomada de decisão",
              },
              {
                title: "Escalabilidade",
                desc: "Processo pronto para crescer sem aumentar headcount",
              },
            ].map((impact, index) => (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="p-6 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10"
              >
                <h4 className="text-lg font-medium text-white mb-2">{impact.title}</h4>
                <p className="text-sm text-neutral-400">{impact.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="relative max-w-3xl mx-auto text-center"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-emerald-500 rounded-full" />
            <p className="text-lg sm:text-xl text-neutral-300 italic leading-relaxed">
              &ldquo;O impacto não foi só em tempo economizado — foi em{" "}
              <span className="text-emerald-400">qualidade de vida do time</span> e capacidade de
              focar no que realmente importa.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-neutral-500">
              — Reflexão sobre o projeto
            </footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}

export default ResultsSection;
