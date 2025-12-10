"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  CheckCircle,
  Clock,
  TrendingUp,
  Database,
  Palette,
  PenTool,
  Brain,
  Settings,
  Rocket,
  Wrench,
  Search,
  type LucideIcon,
} from "lucide-react";
import { CounterAnimation } from "@/components/shared/CounterAnimation";

// Simplified Goal Display Component
function SimplifiedGoalDisplay() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative p-8 rounded-2xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10"
    >
      <div className="text-center space-y-6">
        <h4 className="text-lg font-medium text-white">Meta vs. Resultado</h4>

        {/* Simplified goal circle */}
        <div className="relative w-48 h-48 mx-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 ring-1 ring-emerald-500/20 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl font-display font-light text-emerald-400">
                <CounterAnimation target={80} suffix="%" prefix="-" duration={2} />
              </div>
              <p className="text-xs text-neutral-500 mt-2">redução alcançada</p>
            </div>
          </div>
        </div>

        {/* Stats comparison */}
        <div className="flex items-center justify-center gap-8">
          <div className="text-center">
            <p className="text-xs text-neutral-500 mb-1">Meta</p>
            <p className="text-lg font-medium text-neutral-400">-50%</p>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="text-center">
            <p className="text-xs text-neutral-500 mb-1">Resultado</p>
            <p className="text-lg font-bold text-emerald-400">-80%</p>
          </div>
        </div>

        {/* Success badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20">
          <span className="text-sm font-medium text-emerald-400">META SUPERADA! 🎉</span>
        </div>
      </div>
    </motion.div>
  );
}

// SMART Goal Breakdown Component
function SMARTGoalBreakdown() {
  const smartItems = [
    {
      letter: "S",
      title: "Específico",
      description: "Automatizar atendimento de dúvidas repetitivas no WhatsApp e site",
      result: null,
    },
    {
      letter: "M",
      title: "Mensurável",
      description: "De 4h/dia → 2h/dia (50% redução)",
      result: "Resultado: 30min/dia (80% redução!)",
    },
    {
      letter: "A",
      title: "Alcançável",
      description: "Com stack: n8n + Supabase + IA/LLM",
      result: "Timeline: 2 semanas",
    },
    {
      letter: "R",
      title: "Relevante",
      description: "Liberar time para qualificação e fechamento de alto valor",
      result: null,
    },
    {
      letter: "T",
      title: "Temporal",
      description: "MVP em 2 semanas + iterações",
      result: "Implementado no prazo ✓",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-6 rounded-2xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10"
    >
      <h4 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
        <CheckCircle className="w-5 h-5 text-emerald-400" />
        Meta SMART Detalhada
      </h4>

      <div className="space-y-4">
        {smartItems.map((item, idx) => (
          <motion.div
            key={item.letter}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className="flex items-start gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-emerald-400">{item.letter}</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white mb-1">{item.title}</p>
              <p className="text-sm text-neutral-400">{item.description}</p>
              {item.result && (
                <p className="text-xs text-emerald-400 mt-1">{item.result}</p>
              )}
            </div>
            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// KPI Card Component (Simplified)
function KPICard({
  icon: Icon,
  title,
  baseline,
  meta,
  result,
  delay,
}: {
  icon: LucideIcon;
  title: string;
  baseline: string;
  meta: string;
  result: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="p-5 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10 hover:ring-emerald-500/20 transition-all"
    >
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-5 h-5 text-emerald-400" />
        <h5 className="text-sm font-medium text-white">{title}</h5>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-neutral-500">Baseline:</span>
          <span className="text-neutral-400">{baseline}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-500">Meta:</span>
          <span className="text-neutral-400">{meta}</span>
        </div>
        <div className="h-px bg-white/10 my-2" />
        <div className="flex justify-between items-center">
          <span className="text-neutral-500">Resultado:</span>
          <span className="text-emerald-400 font-medium flex items-center gap-1">
            {result} <Target className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// KPI Dashboard Section
function KPIDashboard() {
  const kpis = [
    {
      icon: Clock,
      title: "Tempo de Atendimento",
      baseline: "4h/dia",
      meta: "2h/dia (50%)",
      result: "30min/dia (-87.5%)",
    },
    {
      icon: TrendingUp,
      title: "Conversão do Funil",
      baseline: "10%",
      meta: "+5-10%",
      result: "+15% (25% total)",
    },
    {
      icon: Database,
      title: "Coleta de Dados",
      baseline: "Manual/incompleto",
      meta: "90% completude",
      result: "95% completo",
    },
  ];

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
        <Target className="w-5 h-5 text-emerald-400" />
        KPIs de Sucesso
      </h4>

      <div className="grid gap-4">
        {kpis.map((kpi, idx) => (
          <KPICard key={kpi.title} {...kpi} delay={idx * 0.15} />
        ))}
      </div>

      {/* KPI Progress Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-6 p-6 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10 overflow-hidden"
      >
        <p className="text-xs text-neutral-400 mb-4 text-center">Progresso em relação às metas</p>

        <div className="space-y-5">
          {/* Tempo de Atendimento */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white">Tempo de Resposta</span>
              <span className="text-sm text-emerald-400 font-bold">-87.5%</span>
            </div>
            <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '87.5%' }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
              />
            </div>
            <div className="flex justify-between text-xs text-neutral-500">
              <span>4h/dia</span>
              <span>30min/dia ✓</span>
            </div>
          </div>

          {/* Conversão */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white">Conversão do Funil</span>
              <span className="text-sm text-emerald-400 font-bold">+15%</span>
            </div>
            <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 0.35 }}
                className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
              />
            </div>
            <div className="flex justify-between text-xs text-neutral-500">
              <span>10% base</span>
              <span>25% resultado ✓</span>
            </div>
          </div>

          {/* Coleta de Dados */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white">Coleta de Dados</span>
              <span className="text-sm text-emerald-400 font-bold">95%</span>
            </div>
            <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '95%' }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
              />
            </div>
            <div className="flex justify-between text-xs text-neutral-500">
              <span>Manual/0%</span>
              <span>95% completo ✓</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Ownership Card Component (Simplified)
function OwnershipCard({
  icon: Icon,
  title,
  items,
  stat,
  delay,
}: {
  icon: LucideIcon;
  title: string;
  items: string[];
  stat: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="p-5 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10 hover:ring-emerald-500/20 transition-all group"
    >
      <Icon className="w-6 h-6 text-emerald-400 mb-3 group-hover:scale-110 transition-transform" />
      <h5 className="text-sm font-medium text-white mb-3">{title}</h5>
      <ul className="space-y-1 mb-4">
        {items.map((item, idx) => (
          <li key={idx} className="text-xs text-neutral-400 flex items-start gap-2">
            <span className="text-emerald-400">•</span>
            {item}
          </li>
        ))}
      </ul>
      <p className="text-xs text-emerald-400 font-medium">→ {stat}</p>
    </motion.div>
  );
}

// Full Stack Ownership Section
function FullStackOwnership() {
  const areas = [
    {
      icon: Palette,
      title: "Design do Fluxo",
      items: [
        "Mapeamento de jornada do lead",
        "Pontos de coleta de dados",
        "Árvore de decisão",
        "Cenários edge case",
      ],
      stat: "Flowchart completo no Miro",
    },
    {
      icon: PenTool,
      title: "Copy & Messaging",
      items: [
        "Tom humanizado e natural",
        "Respostas contextuais",
        "Perguntas de qualificação",
        "Handoff suave para humano",
      ],
      stat: "50+ variações de resposta",
    },
    {
      icon: Brain,
      title: "Base de Conhecimento",
      items: [
        "Documentação de serviços",
        "System prompts robustos",
        "Lógica de qualificação",
        "FAQ estruturado",
      ],
      stat: "100+ perguntas/respostas",
    },
    {
      icon: Settings,
      title: "Implementação Técnica",
      items: [
        "Workflows no n8n",
        "Banco de dados Supabase",
        "Integração WhatsApp + Site",
        "Testes e iterações",
      ],
      stat: "15+ workflows automatizados",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h4 className="text-lg font-medium text-white flex items-center gap-2">
          <Wrench className="w-5 h-5 text-emerald-400" />
          100% Full-Stack Ownership
        </h4>
        <span className="px-3 py-1 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20 text-emerald-400 text-xs">
          Nenhum budget, apenas skills
        </span>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {areas.map((area, idx) => (
          <OwnershipCard key={area.title} {...area} delay={idx * 0.1} />
        ))}
      </div>
    </div>
  );
}

// Execution Timeline Component
function ExecutionTimeline() {
  const phases = [
    { week: "Semana 1", days: "Dias 1-3", task: "Diagnóstico e Mapeamento", icon: Search },
    { week: "Semana 1", days: "Dias 4-7", task: "Design do fluxo + Copy", icon: Palette },
    { week: "Semana 2", days: "Dias 8-10", task: "Implementação técnica", icon: Settings },
    { week: "Semana 2", days: "Dias 11-14", task: "Testes + Go-live!", icon: Rocket },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-6 rounded-2xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10"
    >
      <h4 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
        <Rocket className="w-5 h-5 text-emerald-400" />
        Timeline de Execução: 2 Semanas
      </h4>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-emerald-500/20" />

        <div className="space-y-6">
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.4 }}
              className="flex items-start gap-4 pl-8 relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-2 w-5 h-5 rounded-full bg-neutral-900 ring-2 ring-emerald-500/30 flex items-center justify-center">
                <phase.icon className="w-3 h-3 text-emerald-400" />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-neutral-400">
                    {phase.week}
                  </span>
                  <span className="text-xs text-neutral-500">{phase.days}</span>
                </div>
                <p className="text-sm text-white">{phase.task}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Main Objectives Section Component
export function ObjectivesSection() {
  return (
    <section id="objetivos" className="relative py-24 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-950" />

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
              <span className="text-sm text-neutral-300">03 — Tarefa e Objetivos</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              A meta: reduzir 50% do tempo{" "}
              <span className="text-emerald-400">em 2 semanas com IA</span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Meta SMART estabelecida. Resultado final: -80% (superou em 60% a meta original).
            </p>
          </motion.div>

          {/* Goal Display + SMART Breakdown */}
          <div className="grid lg:grid-cols-2 gap-8">
            <SimplifiedGoalDisplay />
            <SMARTGoalBreakdown />
          </div>

          {/* KPI Dashboard */}
          <KPIDashboard />

          {/* Full Stack Ownership */}
          <FullStackOwnership />

          {/* Execution Timeline */}
          <div className="max-w-2xl mx-auto">
            <ExecutionTimeline />
          </div>

          {/* Context Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-neutral-400 italic max-w-2xl mx-auto">
              &quot;O chatbot não substituía humanos. Preparava o terreno para que humanos fossem mais efetivos.&quot;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ObjectivesSection;
