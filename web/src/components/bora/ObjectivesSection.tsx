"use client";

import { motion } from "framer-motion";
import { Clock, Users, CheckCircle, Target, TrendingUp, Sparkles } from "lucide-react";

const metasCurto = [
  {
    title: "Lançar PWA em menos de 1 mês",
    body: "Do Figma ao código e deploy em 26 dias para validar rápido.",
    icon: Clock,
  },
  {
    title: "100 usuários orgânicos",
    body: "Aquisição orgânica inicial para provar tração com custo zero.",
    icon: Users,
  },
  {
    title: "Retenção mínima 44%",
    body: "Garantir que o app mantém os primeiros usuários engajados.",
    icon: CheckCircle,
  },
];

const metasLongo = [
  {
    title: "Passar de 1000 usuários",
    body: "Escalar nos próximos 6-12 meses com melhorias contínuas.",
    icon: Target,
  },
  {
    title: "Gamificação mais profunda",
    body: "Adicionar animações e elementos no estilo Duolingo.",
    icon: Sparkles,
  },
  {
    title: "Melhor UX e integrações",
    body: "Aprimorar onboarding e integrar com Apple Health.",
    icon: TrendingUp,
  },
];

export function ObjectivesSection() {
  return (
    <section id="objetivos" className="py-24 bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10">
            <span className="text-sm text-neutral-300">03 — Objetivos</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            Validar capacidade <span className="text-emerald-400">full-stack</span>
          </h2>
          <p className="text-neutral-400 max-w-3xl mx-auto text-lg">
            Metas de curto prazo para provar tração e de longo prazo para crescer
            com qualidade.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Description + Personal goal */}
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-neutral-400 text-lg leading-relaxed"
            >
              O objetivo é validar rápido: lançar o PWA em menos de 1 mês, adquirir os
              100 primeiros usuários organicamente e manter retenção mínima de
              44%. Em seguida, preparar o terreno para 1000+ usuários.
            </motion.p>

            {/* Personal objective card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 ring-1 ring-emerald-500/20"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-lg bg-emerald-500/20">
                  <Target className="w-5 h-5 text-emerald-400" />
                </div>
                <p className="text-sm text-emerald-400 uppercase tracking-wider">
                  Objetivo pessoal
                </p>
              </div>
              <p className="text-white leading-relaxed">
                Provar solo ownership: design, desenvolvimento, dados, infra, UX
                e growth em um único projeto — combinando aprendizado e
                portfólio.
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

          {/* Right - Short term goals cards */}
          <div className="space-y-4">
            <p className="text-sm text-neutral-500 uppercase tracking-wider mb-6">
              Metas de curto prazo (MVP)
            </p>
            {metasCurto.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative p-6 rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 hover:ring-emerald-500/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                    <item.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-white text-lg mb-2">
                      {item.title}
                    </h4>
                    <p className="text-neutral-400 leading-relaxed">
                      {item.body}
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
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-4 rounded-xl bg-neutral-950/50 ring-1 ring-white/5 mt-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[Users, Clock, CheckCircle].map((Icon, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-neutral-800 ring-2 ring-neutral-950 flex items-center justify-center"
                    >
                      <Icon className="w-4 h-4 text-emerald-400" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-neutral-400">
                  <span className="text-white">3 metas</span> para validar o MVP
                  em 26 dias
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
