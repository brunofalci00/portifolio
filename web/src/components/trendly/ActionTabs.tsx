"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Search,
  Target,
  Palette,
  Cpu,
  Calendar,
  Eye,
  Users,
  DollarSign,
  Sparkles,
  MessageSquare,
  Brain,
  Video,
  FileText,
  Mic,
  Radio,
  Scissors,
} from "lucide-react";

const tabs = [
  { id: "diagnostico", label: "Diagnóstico", icon: Search },
  { id: "funil", label: "Funil", icon: Target },
  { id: "conteudo", label: "Conteúdo", icon: Palette },
  { id: "ia", label: "IA & Automação", icon: Cpu },
  { id: "timeline", label: "Timeline", icon: Calendar },
];

const diagnosticoContent = [
  {
    title: "Análise profunda",
    body: "1-2 semanas de diagnóstico: público, concorrência, posicionamento atual.",
    icon: Search,
  },
  {
    title: "Identificação de gaps",
    body: "O que falta para transformar expertise em autoridade digital.",
    icon: Target,
  },
  {
    title: "Estratégia customizada",
    body: "Plano único baseado no contexto específico, não playbook genérico.",
    icon: Brain,
  },
  {
    title: "Métricas de sucesso",
    body: "KPIs claros definidos antes de começar a execução.",
    icon: Sparkles,
  },
];

const funilContent = {
  awareness: {
    title: "Awareness",
    icon: Eye,
    bullets: [
      "Conteúdo de alto valor (dicas práticas, erros comuns, cases, tendências).",
      "Formatos favorecidos pelo algoritmo (reels/shorts, posts, carrosséis).",
      "Frequência: 2–3 publicações por dia, consistência não negociável.",
    ],
  },
  consideration: {
    title: "Consideration",
    icon: Users,
    bullets: [
      "Escada de valor: Conteúdo gratuito → Lead magnet → Webinars/séries → Mentoria.",
      "Fluxo: visualiza → CTA → formulário → educação via email/chatbot → confiança.",
      "Meta: 20+ leads qualificados/mês.",
    ],
  },
  decision: {
    title: "Decision",
    icon: DollarSign,
    bullets: [
      "Oferta: Mentoria em importação (R$ 5 mil) + rede ABN-8.",
      "Método: agendar call, entender necessidade, apresentar solução.",
      "Meta: 20% de conversão lead → cliente.",
    ],
  },
};

const pilaresConteudo = [
  { title: "Educação", body: "Dicas, tutoriais, guias sobre importação.", icon: Brain },
  { title: "Autoridade", body: "Cases de sucesso, resultados, demonstração de expertise.", icon: Sparkles },
  { title: "Comunidade", body: "Engajamento, Q&A, lives interativas, respostas às dúvidas.", icon: MessageSquare },
  { title: "Venda", body: "CTAs claros para mentoria, webinars, ofertas.", icon: DollarSign },
];

const formatos = [
  { title: "Vídeos curtos", body: "Reels/shorts, 15–60s, alta frequência.", icon: Video },
  { title: "Posts e carrosséis", body: "2-3 por semana, conteúdo denso.", icon: FileText },
  { title: "Vídeos longos", body: "YouTube, 30–40 min.", icon: Video },
  { title: "Podcast", body: "Tendências, entrevistas.", icon: Mic },
  { title: "Lives", body: "Interação em tempo real, Q&A.", icon: Radio },
  { title: "Cortes estratégicos", body: "Reaproveitamento de conteúdo.", icon: Scissors },
];

const iaContent = [
  { title: "Automações", body: "Chatbot para dúvidas e qualificação; agendamento de posts; formulários e segmentação.", icon: Cpu },
  { title: "Análise de dados", body: "Engajamento, conversão, concorrência e tendências para decisões baseadas em dados.", icon: Search },
  { title: "Criação de conteúdo", body: "Brainstorm, roteiros, legendas otimizadas, cortes automáticos.", icon: Palette },
  { title: "Educação do cliente", body: "Materiais semanais para evoluir oratória e visão estratégica.", icon: Brain },
];

const timelineContent = [
  { title: "Mês 1", body: "Diagnóstico profundo, estratégia, infra e primeiras publicações." },
  { title: "Mês 2", body: "Publicação diária, primeiros leads, educação do Alfredo (oratória/estratégia)." },
  { title: "Mês 3", body: "Otimização com dados, primeiras conversões em mentoria, autoridade emergindo." },
  { title: "Mês 4", body: "Lançamento oficial da mentoria (campanha DR), leads e crescimento aceleram." },
  { title: "Mês 5-6", body: "Refinamentos no funil, metas atingidas/superadas, sistema consolidado." },
];

const imageShadow =
  "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

export function ActionTabs() {
  const [activeTab, setActiveTab] = useState("diagnostico");

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
            <span className="text-sm text-neutral-300">03 — Ação</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            Estratégia completa:{" "}
            <span className="text-emerald-400">do diagnóstico à execução</span>
          </h2>
          <p className="text-neutral-400 max-w-3xl mx-auto text-lg">
            5 pilares integrados: diagnóstico, funil, conteúdo, IA e timeline de
            execução.
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
                  layoutId="activeTabTrendly"
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
            {activeTab === "diagnostico" && (
              <motion.div
                key="diagnostico"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 gap-4"
              >
                {diagnosticoContent.map((item, idx) => (
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
                ))}
              </motion.div>
            )}

            {activeTab === "funil" && (
              <motion.div
                key="funil"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {Object.values(funilContent).map((stage, idx) => (
                  <motion.div
                    key={stage.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="group p-6 rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 hover:ring-emerald-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20">
                        <stage.icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <h4 className="font-medium text-white text-lg">
                        {stage.title}
                      </h4>
                      <span className="ml-auto px-2 py-1 text-xs rounded-full bg-neutral-800 text-neutral-400">
                        Etapa {idx + 1}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {stage.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-neutral-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "conteudo" && (
              <motion.div
                key="conteudo"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-4">
                    4 pilares de conteúdo
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {pilaresConteudo.map((item, idx) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="group p-4 rounded-xl bg-neutral-900/60 ring-1 ring-white/10 hover:ring-emerald-500/30 transition-all"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <item.icon className="w-5 h-5 text-emerald-400" />
                          <h4 className="font-medium text-white">{item.title}</h4>
                        </div>
                        <p className="text-sm text-neutral-500">{item.body}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-neutral-500 uppercase tracking-wider mb-4">
                    Formatos de conteúdo
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {formatos.map((item, idx) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="p-3 rounded-lg bg-neutral-900/40 ring-1 ring-white/5"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <item.icon className="w-4 h-4 text-emerald-400" />
                          <span className="text-sm text-white">{item.title}</span>
                        </div>
                        <p className="text-xs text-neutral-500">{item.body}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "ia" && (
              <motion.div
                key="ia"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {iaContent.map((item, idx) => (
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
                ))}
                <div className="p-4 rounded-xl bg-neutral-950/50 ring-1 ring-white/5">
                  <p className="text-sm text-neutral-400">
                    <span className="text-emerald-400">Ferramentas:</span>{" "}
                    ChatGPT/Claude, Descript, Opus Clip, Zapier, GA, Metricool
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === "timeline" && (
              <motion.div
                key="timeline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {timelineContent.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-neutral-900/60 ring-1 ring-white/10 hover:ring-emerald-500/30 transition-all"
                  >
                    <div className="w-16 h-16 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-medium text-emerald-400">
                        {item.title.replace("Mês ", "")}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-neutral-400">{item.body}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Side image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/media/trendly/trendly_action.png"
                alt="Analytics workspace"
                fill
                className={`object-cover grayscale brightness-[0.7] hover:grayscale-[20%] hover:brightness-100 transition-all duration-500 ${imageShadow}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />

              {/* Overlay info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="p-4 rounded-xl bg-neutral-950/80 backdrop-blur-sm ring-1 ring-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex -space-x-2">
                      {[Search, Target, Cpu].map((Icon, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-neutral-800 ring-2 ring-neutral-950 flex items-center justify-center"
                        >
                          <Icon className="w-4 h-4 text-emerald-400" />
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-neutral-400">
                      Estratégia integrada
                    </span>
                  </div>
                  <p className="text-white font-medium">
                    Diagnóstico + Funil + IA
                  </p>
                  <p className="text-sm text-neutral-500 mt-1">
                    Sistema completo em 6 meses
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
              <span className="text-sm text-emerald-400">5 pilares</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ActionTabs;
