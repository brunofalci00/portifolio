"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Users,
  MessageSquare,
  Target,
  CheckCircle,
  Timer,
  Clock,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const objetivos = [
  {
    label: "Receita digital",
    value: "R$ 0 → R$ 100 mil",
    icon: BarChart,
  },
  {
    label: "Base de seguidores",
    value: "5k → 10k",
    icon: Users,
  },
  {
    label: "Engajamento",
    value: "0,5% → 2,5%",
    icon: MessageSquare,
  },
  {
    label: "Leads qualificados",
    value: "20+ / mês",
    icon: Target,
  },
  {
    label: "Conversão lead → cliente",
    value: "20%",
    icon: CheckCircle,
  },
  {
    label: "Frequência",
    value: "2–3 posts/dia",
    icon: Timer,
  },
];

const metasLongo = [
  {
    title: "Autoridade consolidada",
    body: "Ser referência em comércio exterior no digital.",
    icon: TrendingUp,
  },
  {
    title: "Sistema escalável",
    body: "Modelo replicável para outros especialistas.",
    icon: Sparkles,
  },
  {
    title: "Receita recorrente",
    body: "Fluxo constante de leads e conversões.",
    icon: BarChart,
  },
];

export function ObjectivesSection() {
  return (
    <section id="tarefa" className="relative py-24 bg-neutral-900/50">
      {/* Gradiente de transição para ActionTabs (claro para escuro) */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10">
            <span className="text-sm text-neutral-300">02 — Tarefa</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            Objetivos claros e{" "}
            <span className="text-emerald-400">mensuráveis</span>
          </h2>
          <p className="text-neutral-400 max-w-3xl mx-auto text-lg">
            KPIs definidos desde o início para medir sucesso real, não métricas
            de vaidade.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Description + Timeline goal */}
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-neutral-400 text-lg leading-relaxed"
            >
              O objetivo não era só "crescer nas redes". Era criar um sistema
              completo que transformasse presença digital em receita real. KPIs
              claros desde o dia 1: receita, leads, conversão.
            </motion.p>

            {/* Timeline objective card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 ring-1 ring-emerald-500/20"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-lg bg-emerald-500/20">
                  <Clock className="w-5 h-5 text-emerald-400" />
                </div>
                <p className="text-sm text-emerald-400 uppercase tracking-wider">
                  Timeline do projeto
                </p>
              </div>
              <p className="text-white leading-relaxed">
                6 meses de execução: diagnóstico profundo no mês 1, publicação
                diária a partir do mês 2, otimização contínua com dados, e metas
                atingidas/superadas nos meses 5-6.
              </p>
            </motion.div>

            {/* Long term goals */}
            <div className="space-y-4">
              <p className="text-sm text-neutral-500 uppercase tracking-wider">
                Metas de longo prazo
              </p>
              {metasLongo.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-neutral-900/40 ring-1 ring-white/5 hover:ring-white/20 transition-all"
                >
                  <div className="p-2 rounded-lg bg-neutral-800 group-hover:bg-emerald-500/20 transition-colors">
                    <item.icon className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-neutral-500">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Objectives cards */}
          <div className="space-y-4">
            <p className="text-sm text-neutral-500 uppercase tracking-wider mb-6">
              KPIs definidos (6 meses)
            </p>
            {objetivos.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-6 rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 hover:ring-emerald-500/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                    <item.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-neutral-500 mb-1">
                      {item.label}
                    </p>
                    <p className="font-display text-xl text-white">
                      {item.value}
                    </p>
                  </div>
                </div>

                {/* Number indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-800/50 flex items-center justify-center">
                  <span className="text-sm text-neutral-500 font-medium">
                    {idx + 1}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Summary card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-4 rounded-xl bg-neutral-950/50 ring-1 ring-white/5 mt-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[BarChart, Target, CheckCircle].map((Icon, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-neutral-800 ring-2 ring-neutral-950 flex items-center justify-center"
                    >
                      <Icon className="w-4 h-4 text-emerald-400" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-neutral-400">
                  <span className="text-white">6 KPIs</span> para medir sucesso
                  em 6 meses
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ObjectivesSection;
