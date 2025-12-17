"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Search,
  GitBranch,
  MessageSquare,
  Settings,
  Lightbulb,
  CheckCircle,
  RefreshCw,
  Smartphone,
  Globe,
  Database,
  Cpu,
  Zap,
  ArrowRight,
  HelpCircle,
  ClipboardCheck,
  Users,
  Clock,
  Target,
  ChevronDown,
} from "lucide-react";

// Phase Navigator Component
function PhaseNavigator({
  activePhase,
  setActivePhase,
}: {
  activePhase: number;
  setActivePhase: (phase: number) => void;
}) {
  const phases = [
    { id: 1, icon: Search, label: "Análise", shortLabel: "Análise" },
    { id: 2, icon: GitBranch, label: "Design do Fluxo", shortLabel: "Fluxo" },
    { id: 3, icon: MessageSquare, label: "Copy & Humanização", shortLabel: "Copy" },
    { id: 4, icon: Settings, label: "Stack Técnica", shortLabel: "Tech" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
      {phases.map((phase) => (
        <button
          key={phase.id}
          onClick={() => setActivePhase(phase.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
            activePhase === phase.id
              ? "bg-emerald-500/20 ring-1 ring-emerald-500/30 text-emerald-400"
              : "bg-neutral-900/60 ring-1 ring-white/10 text-neutral-400 hover:ring-white/20"
          }`}
        >
          <phase.icon className="w-4 h-4" />
          <span className="hidden sm:inline text-sm">{phase.label}</span>
          <span className="sm:hidden text-sm">{phase.shortLabel}</span>
        </button>
      ))}
    </div>
  );
}

// Phase 1: Analysis Content
function PhaseAnalysis() {
  const discoveries = [
    {
      num: "1",
      title: "Gargalo identificado",
      desc: "O problema estava no primeiro contato — leads fazendo perguntas básicas que bloqueavam a agenda do comercial.",
    },
    {
      num: "2",
      title: "Perguntas repetitivas",
      desc: "80% das perguntas se encaixavam em 5 categorias: tipo de serviço, preço, prazo, portfólio e disponibilidade.",
    },
    {
      num: "3",
      title: "Velocidade importa",
      desc: "Leads que recebiam respostas rápidas (<5min) tinham 3x mais chance de avançar no funil.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <div className="text-center mb-8">
        <h3 className="text-xl font-medium text-white mb-2">
          Fase 1: Identificar o gargalo exato no funil
        </h3>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Antes de escrever uma linha de código ou um prompt de IA, precisava entender onde exatamente estava o problema.
        </p>
      </div>

      {/* Discoveries Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {discoveries.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-5 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10 hover:ring-emerald-500/20 transition-all"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20 flex items-center justify-center mb-4">
              <span className="text-sm font-bold text-emerald-400">#{item.num}</span>
            </div>
            <h4 className="text-white font-medium mb-2">{item.title}</h4>
            <p className="text-sm text-neutral-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Hypothesis Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="p-6 rounded-2xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-emerald-500/20 text-center"
      >
        <Lightbulb className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
        <p className="text-white font-medium mb-2">Hipótese Validada</p>
        <p className="text-neutral-300 max-w-2xl mx-auto">
          &quot;Se automatizarmos a coleta de dados básicos e resposta a dúvidas repetitivas no primeiro momento,
          conseguimos aquecer o lead antes do handoff humano — aumentando conversão e liberando o time.&quot;
        </p>
      </motion.div>

      {/* Funnel Analysis: ANTES vs DEPOIS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-6 grid md:grid-cols-2 gap-6"
      >
        {/* ANTES */}
        <div className="p-5 rounded-xl bg-neutral-900/60 ring-1 ring-white/10">
          <p className="text-xs text-neutral-400 mb-4 text-center font-medium">ANTES DO CHATBOT</p>
          <div className="space-y-2">
            {[
              { label: "Lead entra", icon: Users, status: "neutral" },
              { label: "4h manuais", icon: Clock, status: "bad" },
              { label: "Qualificação", icon: Target, status: "neutral" },
              { label: "Fechamento", icon: CheckCircle, status: "neutral" },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.08 + 0.3 }}
              >
                <div
                  className={`p-3 rounded-lg flex items-center gap-3 ${
                    step.status === "bad" ? "bg-red-500/10 ring-1 ring-red-500/20" : "bg-neutral-800/60"
                  }`}
                >
                  <step.icon
                    className={`w-4 h-4 ${
                      step.status === "bad" ? "text-red-400" : "text-neutral-400"
                    }`}
                  />
                  <span className="text-sm text-white">{step.label}</span>
                </div>
                {idx < 3 && <div className="flex justify-center py-1"><ChevronDown className="w-3 h-3 text-neutral-600" /></div>}
              </motion.div>
            ))}
          </div>
        </div>

        {/* DEPOIS */}
        <div className="p-5 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20">
          <p className="text-xs text-emerald-400 mb-4 text-center font-medium">DEPOIS DO CHATBOT</p>
          <div className="space-y-2">
            {[
              { label: "Lead entra", icon: Users, status: "neutral" },
              { label: "<1min com bot", icon: Zap, status: "good" },
              { label: "Qualificação", icon: Target, status: "good" },
              { label: "Fechamento", icon: CheckCircle, status: "good" },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.08 + 0.4 }}
              >
                <div
                  className={`p-3 rounded-lg flex items-center gap-3 ${
                    step.status === "good" ? "bg-emerald-500/10 ring-1 ring-emerald-500/20" : "bg-neutral-800/60"
                  }`}
                >
                  <step.icon
                    className={`w-4 h-4 ${
                      step.status === "good" ? "text-emerald-400" : "text-neutral-400"
                    }`}
                  />
                  <span className="text-sm text-white">{step.label}</span>
                </div>
                {idx < 3 && <div className="flex justify-center py-1"><ChevronDown className="w-3 h-3 text-emerald-400" /></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Phase 2: Conversation Flow Content
function PhaseConversationFlow() {
  const flowSteps = [
    { label: "Saudação + Nome", icon: MessageSquare },
    { label: "O que procura?", icon: HelpCircle },
    { label: "Qualificação", icon: ClipboardCheck },
    { label: "Coleta de Dados", icon: Database },
    { label: "Handoff", icon: Users },
  ];

  const stats = [
    { label: "Caminhos principais", value: "5" },
    { label: "Variações de perguntas", value: "20+" },
    { label: "Respostas contextuais", value: "50+" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <div className="text-center mb-8">
        <h3 className="text-xl font-medium text-white mb-2">
          Fase 2: Mapeando cada caminho possível da conversa
        </h3>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Um chatbot ruim segue scripts rígidos. Um chatbot bom conversa de verdade.
        </p>
      </div>

      {/* Flow Visualization */}
      <div className="flex flex-wrap justify-center gap-4">
        {flowSteps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="p-4 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20 min-w-[140px] text-center"
          >
            <step.icon className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <span className="text-sm text-white">{step.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + idx * 0.1 }}
            className="px-4 py-2 rounded-full bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10"
          >
            <span className="text-emerald-400 font-bold">{stat.value}</span>
            <span className="text-neutral-400 text-sm ml-2">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Conversation Flow Example */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-6 p-5 rounded-xl bg-neutral-900/60 ring-1 ring-white/10 space-y-3"
      >
        <p className="text-xs text-neutral-400 text-center mb-4">Exemplo de Conversação Real</p>
        {[
          { from: "user", text: "Vocês fazem cobertura de eventos?" },
          { from: "bot", text: "Sim! Cobrim convenções, lançamentos e treinamentos. Qual o tipo de evento?" },
          { from: "user", text: "É uma convenção anual com ~200 pessoas" },
          { from: "bot", text: "Perfeito! Convenções são nosso forte. Quando seria? Isso me ajuda a verificar disponibilidade." },
        ].map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: msg.from === "bot" ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.12 + 0.4 }}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg text-sm ${
                msg.from === "bot"
                  ? "bg-emerald-500/10 ring-1 ring-emerald-500/20 text-emerald-100"
                  : "bg-neutral-800 text-neutral-300"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

// Phase 3: Copy & Humanization Content (Simplified)
function PhaseCopyHumanization() {
  const principles = [
    { title: "Tom Natural", desc: "Linguagem do dia a dia" },
    { title: "Empatia", desc: "Reconhecer emoções" },
    { title: "Contexto", desc: "Lembrar conversa anterior" },
    { title: "Handoff Suave", desc: "Transição natural p/ humano" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <div className="text-center mb-8">
        <h3 className="text-xl font-medium text-white mb-2">
          Fase 3: Escrever conversas que não parecem com robô
        </h3>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          O maior desafio: fazer o bot soar humano.
        </p>
      </div>

      {/* Principles Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {principles.map((principle, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-4 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20"
          >
            <h5 className="text-white text-sm font-medium mb-1">{principle.title}</h5>
            <p className="text-xs text-neutral-400">{principle.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Humanization Example */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-6 p-5 rounded-xl bg-neutral-900/60 ring-1 ring-white/10 space-y-3"
      >
        <p className="text-xs text-neutral-400 text-center mb-4">Exemplo: Humanização em Ação</p>
        {[
          { from: "user", text: "Mas vocês fazem edição também?" },
          { from: "bot", text: "Ótima pergunta! Sim, temos serviço de edição in-loco e pós-produção completa. Posso descrever?" },
          { from: "user", text: "Sim, qual a experiência?" },
          { from: "bot", text: "Já editamos 50+ eventos. O detalhe: não é apenas cortar, é contar a história do evento. 🎬" },
        ].map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: msg.from === "bot" ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.12 + 0.5 }}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg text-sm ${
                msg.from === "bot"
                  ? "bg-emerald-500/10 ring-1 ring-emerald-500/20 text-emerald-100"
                  : "bg-neutral-800 text-neutral-300"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

// Phase 4: Tech Stack Content
function PhaseTechStack() {
  const techStack = [
    {
      name: "n8n",
      role: "Orquestração",
      icon: Zap,
      features: ["Gerenciamento de fluxo", "Integração WhatsApp + Site", "Triggers e automações", "15+ workflows"],
    },
    {
      name: "LLM/IA",
      role: "Inteligência",
      icon: Cpu,
      features: ["System prompts robustos", "Linguagem natural", "Respostas contextuais", "Fallbacks inteligentes"],
    },
    {
      name: "Supabase",
      role: "Database",
      icon: Database,
      features: ["Armazenamento de conversas", "Dados de leads", "Analytics", "Queries SQL"],
    },
  ];

  const builtFeatures = [
    "Sistema de conversação inteligente",
    "Coleta de dados estruturados",
    "Sistema de handoff inteligente",
    "Analytics e iteração contínua",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <div className="text-center mb-8">
        <h3 className="text-xl font-medium text-white mb-2">
          Fase 4: Construindo a infraestrutura (n8n + Supabase + IA)
        </h3>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Com o fluxo desenhado e a copy pronta, hora de construir a infraestrutura técnica.
        </p>
      </div>

      {/* Input channels */}
      <div className="flex justify-center gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="px-4 py-2 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20 flex items-center gap-2"
        >
          <Smartphone className="w-4 h-4 text-emerald-400" />
          <span className="text-sm text-emerald-400">WhatsApp (80%)</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="px-4 py-2 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20 flex items-center gap-2"
        >
          <Globe className="w-4 h-4 text-emerald-400" />
          <span className="text-sm text-emerald-400">Website (20%)</span>
        </motion.div>
      </div>

      {/* Arrow down */}
      <div className="flex justify-center mb-6">
        <ArrowRight className="w-6 h-6 text-neutral-600 rotate-90" />
      </div>

      {/* Tech Stack Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {techStack.map((tech, idx) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + idx * 0.15 }}
            className="p-5 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <tech.icon className="w-6 h-6 text-emerald-400" />
              <div>
                <h5 className="text-white font-medium">{tech.name}</h5>
                <p className="text-xs text-emerald-400">{tech.role}</p>
              </div>
            </div>
            <ul className="space-y-1">
              {tech.features.map((feature, fIdx) => (
                <li key={fIdx} className="text-xs text-neutral-400 flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Built Features List */}
      <div className="max-w-2xl mx-auto">
        <h5 className="text-sm font-medium text-white mb-4 text-center">O que construí:</h5>
        <div className="grid sm:grid-cols-2 gap-3">
          {builtFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + idx * 0.1 }}
              className="flex items-center gap-2 text-sm text-neutral-300"
            >
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              {feature}
            </motion.div>
          ))}
        </div>
      </div>

    </motion.div>
  );
}

// Iteration Counter Badge
function IterationCounter() {
  const stats = [
    { value: "7", label: "versões do prompt" },
    { value: "12", label: "ajustes no fluxo" },
    { value: "50+", label: "testes reais" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-2xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10"
    >
      <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
        <RefreshCw className="w-5 h-5 text-emerald-400" />
        Iterações até a versão final
      </h4>

      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="text-center"
          >
            <p className="text-2xl font-bold text-emerald-400">{stat.value}</p>
            <p className="text-xs text-neutral-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Main Strategy Section Component
export function StrategySection() {
  const [activePhase, setActivePhase] = useState(1);

  return (
    <section id="estrategia" className="relative py-24 px-6 bg-neutral-900/50">

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
              <span className="text-sm text-neutral-300">04 — Ação e Estratégia</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              Da hipótese ao bot no ar:{" "}
              <span className="text-emerald-400">construindo automação inteligente</span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              A execução foi dividida em 4 fases estratégicas.
            </p>
          </motion.div>

          {/* Phase Navigator */}
          <PhaseNavigator activePhase={activePhase} setActivePhase={setActivePhase} />

          {/* Phase Content */}
          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              {activePhase === 1 && <PhaseAnalysis key="phase1" />}
              {activePhase === 2 && <PhaseConversationFlow key="phase2" />}
              {activePhase === 3 && <PhaseCopyHumanization key="phase3" />}
              {activePhase === 4 && <PhaseTechStack key="phase4" />}
            </AnimatePresence>
          </div>

          {/* Iteration Counter */}
          <div className="max-w-xl mx-auto">
            <IterationCounter />
          </div>

        </div>
      </div>
    </section>
  );
}

export default StrategySection;
