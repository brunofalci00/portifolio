"use client";

import { motion } from "framer-motion";
import { FileText, Users, RefreshCw } from "lucide-react";

export function ConclusionSection() {
  const insights = [
    {
      icon: FileText,
      title: "Documentação Primeiro",
      description: "Você não automatiza o que não entende. Mapear antes de construir.",
    },
    {
      icon: Users,
      title: "Buy-in é Essencial",
      description: "Envolver o time desde o início garante adoção e sustentabilidade.",
    },
    {
      icon: RefreshCw,
      title: "Iteração Constante",
      description: "Perfeito é inimigo do bom. Lançar rápido, coletar feedback, melhorar.",
    },
  ];

  return (
    <section id="conclusao" className="relative py-24 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-950" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="space-y-16">
          {/* Learnings Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10">
              <span className="text-sm text-neutral-300">Reflexões</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              O que Aprendi
            </h2>
          </motion.div>

          {/* Key Insights */}
          <div className="grid md:grid-cols-3 gap-6">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <motion.div
                  key={insight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-8 rounded-2xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10 hover:ring-emerald-500/20 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3">{insight.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{insight.description}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default ConclusionSection;
