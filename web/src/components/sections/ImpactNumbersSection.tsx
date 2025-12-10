"use client";

import { motion } from "framer-motion";
import { ParallaxElement } from "@/components/scroll/ParallaxElement";
import { SectionContainer } from "@/components/layout/SectionContainer";

const metrics = [
  {
    value: "+50%",
    title: "Aumento de Receita",
    context: "Trendly - Consultoria de Growth",
  },
  {
    value: "-30%",
    title: "Redução de Custos com IA",
    context: "Automações de processos",
  },
  {
    value: "100+",
    title: "Usuários Ativos",
    context: "App de Hábito - Full-Stack",
  },
  {
    value: "+150%",
    title: "Aumento de Tráfego Orgânico",
    context: "Zippi - Estratégia de SEO",
  },
  {
    value: "+1.0",
    title: "Melhoria em App Ratings",
    context: "Zippi - Gestão de Comunidade",
  },
  {
    value: "80%",
    title: "Automações de Processos",
    context: "Track & Field - Varejo",
  },
  {
    value: "3+",
    title: "Sites Desenvolvidos",
    context: "Execução técnica e landing pages",
  },
  {
    value: "50%",
    title: "Leads Qualificados",
    context: "Chatbot B2B - Funil automatizado",
  },
];

export function ImpactNumbersSection() {
  return (
    <SectionContainer className="px-6 md:px-12">
      <div className="space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10">
            <span className="text-sm text-neutral-300">Impacto em Números</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            Resultados que <span className="text-emerald-400">Falam por Si</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Cada projeto é um estudo de caso documentado onde aplico a
            metodologia Hypothesis → Test → Result → Learning. Aqui estão os
            KPIs consolidados que demonstram meu impacto em Growth, Produto e
            Operações.
          </p>
        </motion.div>

        {/* Grid of metrics */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <ParallaxElement key={metric.title} speed={0.08}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="h-full p-6 rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="space-y-4">
                  {/* KPI badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10">
                    <span className="text-xs text-neutral-400 uppercase tracking-wider">
                      KPI {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Value */}
                  <p className="font-display text-4xl md:text-5xl font-light text-white group-hover:text-emerald-400 transition-colors">
                    {metric.value}
                  </p>

                  {/* Title */}
                  <p className="text-white font-medium">{metric.title}</p>

                  {/* Context */}
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {metric.context}
                  </p>
                </div>
              </motion.div>
            </ParallaxElement>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export default ImpactNumbersSection;
