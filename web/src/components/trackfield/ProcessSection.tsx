"use client";

import { motion } from "framer-motion";
import { Users, Eye, Lightbulb, RotateCcw, Code, Table, Wrench } from "lucide-react";
import { TimelineImpactChart } from "./TimelineImpactChart";
import TypewriterText from "@/components/ui/typewriter-text";

export function ProcessSection() {
  const steps = [
    {
      icon: Users,
      title: "Discovery",
      description: "Entrevistas com time + observação do processo manual",
      duration: "Semana 1",
    },
    {
      icon: Eye,
      title: "Análise",
      description: "Mapeamento de gaps e oportunidades de automação",
      duration: "Semana 2",
    },
    {
      icon: Code,
      title: "Automação",
      description: "Apps Script + fórmulas inteligentes (ARRAYFORMULA, QUERY)",
      duration: "Semanas 3-6",
    },
    {
      icon: RotateCcw,
      title: "Iteração",
      description: "10+ reuniões de feedback e melhorias contínuas",
      duration: "Contínuo",
    },
  ];

  const tools = [
    { name: "Google Sheets", description: "Base de dados" },
    { name: "Apps Script", description: "Automação" },
    { name: "ARRAYFORMULA", description: "Cálculos dinâmicos" },
    { name: "QUERY", description: "Consolidação" },
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
              <span className="text-sm text-neutral-300">A Execução</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              <TypewriterText speed={50}>A Jornada de Construção</TypewriterText>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Do diagnóstico à implementação: uma solução no-code que o time pudesse usar de forma autônoma.
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

          {/* Timeline Impact Chart */}
          <TimelineImpactChart />

          {/* Tools Used */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-light text-white text-center">Stack Técnico</h3>

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
                  <Wrench className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-xl font-medium text-white">Decisão-Chave</h3>
              </div>

              <blockquote className="text-lg text-neutral-300 leading-relaxed italic">
                &ldquo;Você não automatiza o que não entende. Primeiro{" "}
                <span className="text-emerald-400 font-medium">documenta</span>, depois{" "}
                <span className="text-emerald-400 font-medium">simplifica</span>, só então{" "}
                <span className="text-emerald-400 font-medium">automatiza</span>.&rdquo;
              </blockquote>

              {/* Key Stats */}
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10 text-center">
                  <p className="text-sm text-neutral-500 mb-1">Entrevistas</p>
                  <p className="text-2xl font-display text-emerald-400">5</p>
                  <p className="text-xs text-neutral-400">membros do time</p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10 text-center">
                  <p className="text-sm text-neutral-500 mb-1">Reuniões</p>
                  <p className="text-2xl font-display text-emerald-400">10+</p>
                  <p className="text-xs text-neutral-400">de feedback</p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10 text-center">
                  <p className="text-sm text-neutral-500 mb-1">Iterações</p>
                  <p className="text-2xl font-display text-emerald-400">5</p>
                  <p className="text-xs text-neutral-400">versões</p>
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
