"use client";

import { motion } from "framer-motion";
import { Search, FileText, Settings, BarChart3, Lightbulb } from "lucide-react";
import { ToolCard } from "./ToolCard";
import TypewriterText from "@/components/ui/typewriter-text";

export function ProcessSection() {
  const steps = [
    {
      icon: Search,
      title: "Pesquisa",
      description: "Análise de keywords e identificação de gaps de conteúdo",
      duration: "Semana 1",
      details: [
        "Análise de 50+ palavras-chave com Semrush",
        "Estudo da SERP dos top 3 concorrentes",
        "Mapeamento de gaps de conteúdo"
      ]
    },
    {
      icon: FileText,
      title: "Produção",
      description: "20 artigos otimizados focados em long-tail keywords",
      duration: "Semanas 2-6",
      details: [
        "15 artigos blog (1500-2000 palavras)",
        "Otimização de páginas principais",
        "Estruturação com H1-H6 semânticos"
      ]
    },
    {
      icon: Settings,
      title: "Otimização",
      description: "On-page SEO técnico e estruturação de links internos",
      duration: "Semanas 4-7",
      details: [
        "Meta tags e descriptions customizadas",
        "Internal linking estratégico",
        "Schema markup implementado"
      ]
    },
    {
      icon: BarChart3,
      title: "Monitoramento",
      description: "Acompanhamento semanal de métricas e ajustes",
      duration: "Contínuo",
      details: [
        "Tracking semanal no GSC",
        "Análise de CTR e impressões",
        "Ajustes baseados em performance"
      ]
    },
  ];

  const tools = [
    {
      name: "Semrush",
      description: "Pesquisa de keywords e análise competitiva",
      image: "/media/zippi/tools/semrush.png"
    },
    {
      name: "Google Search Console",
      description: "Monitoramento de performance e indexação",
      image: "/media/zippi/tools/gsc.png"
    },
    {
      name: "Notion",
      description: "Planejamento e organização de conteúdo",
      image: "/media/zippi/tools/notion.png"
    },
    {
      name: "ChatGPT",
      description: "Aceleração de produção de conteúdo",
      image: "/media/zippi/tools/chatgpt.png"
    },
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
              <TypewriterText speed={50}>A Estratégia</TypewriterText>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Metodologia testada em 4 etapas para crescimento orgânico.
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

                          {/* Details Expanded */}
                          <div className="mt-4 text-left">
                            <ul className="space-y-2">
                              {step.details.map((detail, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-neutral-500">
                                  <span className="text-emerald-400 mt-0.5">→</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
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

                      {/* Details Expanded */}
                      <ul className="mt-3 space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-neutral-500">
                            <span className="text-emerald-400 mt-0.5">→</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

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
                <ToolCard
                  key={tool.name}
                  name={tool.name}
                  description={tool.description}
                  image={tool.image}
                  index={index}
                />
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
                <h3 className="text-xl font-medium text-white">Decisão-Chave</h3>
              </div>

              <p className="text-lg text-neutral-300 leading-relaxed">
                Foco em <span className="text-emerald-400 font-medium">long-tail keywords</span> com
                baixa competição e alta intenção de compra, ao invés de tentar competir diretamente
                com fintechs estabelecidas em termos genéricos.
              </p>

              <p className="text-sm text-neutral-400">
                Essa estratégia permitiu ranqueamento mais rápido e tráfego mais qualificado,
                com menor investimento em link building.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
