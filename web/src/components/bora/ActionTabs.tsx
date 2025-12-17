"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Palette,
  Sparkles,
  Target,
  Layout,
  Code2,
  Database,
  Cloud,
  Smartphone,
  Megaphone,
  TrendingUp,
  MessageSquare,
} from "lucide-react";

const tabs = [
  { id: "estrategia", label: "Estratégia/UX", icon: Palette },
  { id: "stack", label: "Stack Técnica", icon: Code2 },
  { id: "gtm", label: "GTM/Aquisição", icon: Megaphone },
];

const estrategiaUX = [
  {
    title: "Design & Benchmark",
    body: "Benchmarking do mercado, protótipos em Figma e uso de componentes (shadcn) para UX consistente.",
    icon: Palette,
  },
  {
    title: "Feature diferenciadora",
    body: "Modo Guiado (4 semanas) que transforma o app em um coach digital + chatbot WhatsApp.",
    icon: Sparkles,
  },
  {
    title: "Aha Moment",
    body: "Combinação do plano guiado com dashboard gamificado (XP, streaks, confetes) gera valor imediato.",
    icon: Target,
  },
  {
    title: "Prioridade: Dashboard",
    body: "80% da experiência passa pelo dashboard; foco em simplicidade, feedback e visual atraente.",
    icon: Layout,
  },
];

const stackTecnica = [
  {
    title: "Frontend",
    body: "React 18 + TypeScript, Tailwind (shadcn/ui), PWA para experiência nativa.",
    icon: Code2,
  },
  {
    title: "Backend/Dados",
    body: "Supabase (Postgres, auth, storage) como BaaS.",
    icon: Database,
  },
  {
    title: "Infra/Deploy",
    body: "GitHub + Vercel, kanban semanal para ciclos curtos.",
    icon: Cloud,
  },
  {
    title: "Desafio PWA",
    body: "Simular app nativo (notificações) exigiu estudos e IA; foco em lembretes confiáveis.",
    icon: Smartphone,
  },
];

const gtm = [
  {
    title: "Aquisição orgânica",
    body: "Conteúdo orgânico e programa de afiliados para 80+ usuários em 26 dias (CAC zero).",
    icon: Megaphone,
  },
  {
    title: "Funil AARRR",
    body: "Retenção estimada 44%, churn 56%; foco em engajamento diário (guided journey, gamification).",
    icon: TrendingUp,
  },
  {
    title: "Feedback loop",
    body: "Feedback via app, WhatsApp e redes sociais; demanda principal: integração Apple Health.",
    icon: MessageSquare,
  },
];

const tabContent = {
  estrategia: estrategiaUX,
  stack: stackTecnica,
  gtm: gtm,
};

const imageShadow =
  "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

export function ActionTabs() {
  const [activeTab, setActiveTab] = useState("estrategia");

  return (
    <section id="acao" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10">
            <span className="text-sm text-neutral-300">04 — Ação</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            Full-Stack Builder:{" "}
            <span className="text-emerald-400">estratégia, tech e GTM</span>
          </h2>
          <p className="text-neutral-400 max-w-3xl mx-auto text-lg">
            Do problema à execução: UX guiado, stack moderna e aquisição
            orgânica com feedback rápido.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-emerald-500/20 ring-1 ring-emerald-500/30 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <tab.icon className="w-4 h-4 relative z-10" />
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          {/* Cards grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {tabContent[activeTab as keyof typeof tabContent].map(
                (item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="group p-6 rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 hover:ring-emerald-500/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="p-3 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20 w-fit mb-4 group-hover:bg-emerald-500/20 transition-colors">
                      <item.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h4 className="font-medium text-white text-lg mb-2">
                      {item.title}
                    </h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </motion.div>
                )
              )}
            </motion.div>
          </AnimatePresence>

          {/* Side image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/media/projects/bora/portifolio-9.png"
                alt="Bora App - Desenvolvimento"
                fill
                className={`object-cover grayscale brightness-[0.7] hover:grayscale-[20%] hover:brightness-100 transition-all duration-500 ${imageShadow}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />

              {/* Overlay info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="p-4 rounded-xl bg-neutral-950/80 backdrop-blur-sm ring-1 ring-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex -space-x-2">
                      {[Code2, Database, Cloud].map((Icon, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-neutral-800 ring-2 ring-neutral-950 flex items-center justify-center"
                        >
                          <Icon className="w-4 h-4 text-emerald-400" />
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-neutral-400">
                      Stack moderna
                    </span>
                  </div>
                  <p className="text-white font-medium">
                    React + Supabase + Vercel
                  </p>
                  <p className="text-sm text-neutral-500 mt-1">
                    PWA completo em 26 dias
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30"
            >
              <span className="text-sm text-emerald-400">TypeScript</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ActionTabs;
