"use client";

import { motion } from "framer-motion";
import { Search, MessageCircle, Zap, BarChart3, Lightbulb, Wrench } from "lucide-react";
import { MetricsDashboard } from "./MetricsDashboard";

export function ProcessSection() {
  const steps = [
    {
      icon: Search,
      title: "Diagnostico",
      description: "Analise de reviews negativos e identificacao de pain points",
      duration: "Semana 1-2",
    },
    {
      icon: MessageCircle,
      title: "Mitigacao",
      description: "Sistema de resposta proativa com tempo de resposta <24h",
      duration: "Semanas 2-4",
    },
    {
      icon: Zap,
      title: "Otimizacao",
      description: "A/B tests de timing e copy para solicitacao de reviews",
      duration: "Semanas 4-8",
    },
    {
      icon: BarChart3,
      title: "Iteracao",
      description: "Feedback loop continuo com equipes de Produto e CX",
      duration: "Continuo",
    },
  ];

  const tools = [
    { name: "App Store Connect", description: "Monitoramento iOS" },
    { name: "Google Play Console", description: "Monitoramento Android" },
    { name: "Planilha de Tracking", description: "Acompanhamento diario" },
    { name: "Slack", description: "Alertas em tempo real" },
  ];

  return (
    <section id="processo" className="relative py-24 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-950" />

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
              <span className="text-sm text-neutral-300">A Execucao</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              A Estrategia
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Gestao de comunidade ativa com foco em resposta rapida e timing otimizado.
            </p>
          </motion.div>

          {/* Timeline Steps */}
          <div className="space-y-8">
            {/* Desktop Timeline - Horizontal */}
            <div className="hidden md:block">
              <div className="relative">
                {/* Connection Line */}
                <div className="absolute top-12 left-0 right-0 h-0.5 bg-white/10" />

                {/* Steps */}
                <div className="grid grid-cols-4 gap-4">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative space-y-4"
                      >
                        {/* Icon Circle */}
                        <div className="relative z-10 w-24 h-24 mx-auto rounded-full bg-neutral-900/60 backdrop-blur-sm ring-1 ring-emerald-500/20 flex items-center justify-center group hover:ring-emerald-500/40 transition-all">
                          <Icon className="w-8 h-8 text-emerald-400" />
                        </div>

                        {/* Content */}
                        <div className="text-center space-y-2">
                          <h3 className="text-lg font-medium text-white">{step.title}</h3>
                          <p className="text-sm text-neutral-400">{step.description}</p>
                          <p className="text-xs text-emerald-400">{step.duration}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile Timeline - Vertical */}
            <div className="md:hidden space-y-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10"
                  >
                    <div className="w-12 h-12 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-medium text-white">{step.title}</h3>
                      <p className="text-sm text-neutral-400">{step.description}</p>
                      <p className="text-xs text-emerald-400">{step.duration}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Metrics Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <MetricsDashboard />
          </motion.div>

          {/* Tools Used */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-light text-white text-center">Ferramentas</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                  className="p-4 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10 text-center hover:ring-white/20 transition-all"
                >
                  <p className="text-sm font-medium text-white mb-1">{tool.name}</p>
                  <p className="text-xs text-neutral-500">{tool.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Decision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent ring-1 ring-emerald-500/20 overflow-hidden"
          >
            {/* Decorative glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-xl font-medium text-white">Decisao-Chave</h3>
              </div>

              <p className="text-lg text-neutral-300 leading-relaxed">
                Solicitar reviews em{" "}
                <span className="text-emerald-400 font-medium">momentos de felicidade</span> do
                usuario (ex: apos aumento de credito), explorando o{" "}
                <span className="text-emerald-400 font-medium">gatilho de reciprocidade</span>.
              </p>

              {/* A/B Test Results - Resumido */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10">
                  <p className="text-sm text-neutral-500 mb-1">Timing Otimizado</p>
                  <p className="text-2xl font-display text-emerald-400">+340%</p>
                  <p className="text-xs text-neutral-400">taxa de resposta</p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10">
                  <p className="text-sm text-neutral-500 mb-1">Copy Personalizado</p>
                  <p className="text-2xl font-display text-emerald-400">+45%</p>
                  <p className="text-xs text-neutral-400">conversao em review</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
