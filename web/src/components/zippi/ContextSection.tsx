"use client";

import { motion } from "framer-motion";
import { SearchX, Users, FileX, Target } from "lucide-react";

export function ContextSection() {
  const problems = [
    {
      icon: SearchX,
      title: "Invisibilidade",
      description: "Nenhum ranqueamento nas primeiras páginas do Google para keywords estratégicas",
    },
    {
      icon: Users,
      title: "Concorrência Forte",
      description: "Fintechs estabelecidas dominando posições #1-3 em todas as buscas relevantes",
    },
    {
      icon: FileX,
      title: "Conteúdo Fraco",
      description: "Blog abandonado sem estratégia clara, artigos genéricos e mal otimizados",
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
              SEO parado, tráfego estagnado, concorrentes dominando.
            </p>
          </motion.div>

          {/* Simplified Challenge Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-8 rounded-2xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10"
          >
            <h3 className="text-xl font-medium text-white mb-6">A Situação Inicial</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-neutral-400">
                <span className="text-emerald-400 mt-1 text-lg">•</span>
                <div>
                  <span className="font-medium text-white">Posição 50+ no Google</span>
                  <span className="block text-sm mt-1">
                    Site invisível nos resultados de busca - zero tráfego orgânico para keywords estratégicas
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <span className="text-emerald-400 mt-1 text-lg">•</span>
                <div>
                  <span className="font-medium text-white">Concorrentes dominando Top 3</span>
                  <span className="block text-sm mt-1">
                    Fintechs estabelecidas ocupando as primeiras posições em todas as buscas relevantes
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <span className="text-emerald-400 mt-1 text-lg">•</span>
                <div>
                  <span className="font-medium text-white">Conteúdo fraco e desotimizado</span>
                  <span className="block text-sm mt-1">
                    Blog abandonado sem estratégia clara, artigos genéricos e mal estruturados para SEO
                  </span>
                </div>
              </li>
            </ul>
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
              Três Problemas Principais
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

          {/* Goal Statement */}
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
                <span className="text-sm text-emerald-400">Objetivo</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white max-w-3xl mx-auto">
                Alcançar <span className="text-emerald-400">Top 5</span> para keywords
                estratégicas em <span className="text-emerald-400">60 dias</span> com{" "}
                <span className="text-emerald-400">orçamento zero</span>
              </h3>

              <p className="text-neutral-400 max-w-2xl mx-auto">
                Transformar o blog de conteúdo abandonado em motor de aquisição orgânica,
                focando em long-tail keywords com alta intenção de compra.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContextSection;
