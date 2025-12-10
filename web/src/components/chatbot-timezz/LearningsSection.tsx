"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Target,
  Bot,
  Database,
  RefreshCw,
  Quote,
  CheckCircle,
  X,
  Sparkles,
  Construction,
} from "lucide-react";

// Core Learning Highlight Component (Simplified - no infinite animations)
function CoreLearningHighlight() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative p-8 rounded-2xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-emerald-500/20"
    >
      <div className="relative z-10">
        <Quote className="w-10 h-10 text-emerald-500/30 mb-4" />

        <p className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-6">
          &quot;Tecnologia perfeita sem alinhamento{" "}
          <span className="text-emerald-400">é só um toy project complexo.</span>&quot;
        </p>

        <div className="text-center">
          <span className="px-4 py-2 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20 text-emerald-400 text-sm">
            Customer-Centric AI Development
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// Key Lessons Cards Component (Simplified)
function KeyLessonsCards() {
  const lessons = [
    {
      num: "1",
      icon: Target,
      title: "Diagnóstico Completo é Não-Negociável",
      desc: "Passei 3 dias só entrevistando e mapeando o funil antes de escrever uma linha de código. Valeu cada hora.",
      insight: "Entender > Implementar",
    },
    {
      num: "2",
      icon: Bot,
      title: "Humanização > Inteligência Artificial",
      desc: "Um bot 'burro' mas humano funciona melhor que um bot 'genial' mas robótico. Empatia vence tecnologia.",
      insight: "UX conversacional > Poder da IA",
    },
    {
      num: "3",
      icon: Database,
      title: "Dados Estruturados = Handoff Suave",
      desc: "A coleta de dados não é só sobre métricas. É sobre preparar o comercial para uma conversa de alto nível.",
      insight: "Qualificação > Volume de dados",
    },
    {
      num: "4",
      icon: RefreshCw,
      title: "IA Precisa de Iteração Constante",
      desc: "7 versões do prompt. 12 ajustes no fluxo. 50+ testes reais. IA não é \"set and forget\" — é iteração contínua.",
      insight: "Melhoria contínua > Deploy perfeito",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {lessons.map((lesson, idx) => (
        <motion.div
          key={lesson.num}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          className="p-5 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10 hover:ring-emerald-500/20 transition-all"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20 flex items-center justify-center">
              <span className="text-sm font-bold text-emerald-400">#{lesson.num}</span>
            </div>
            <lesson.icon className="w-5 h-5 text-emerald-400" />
          </div>

          <h4 className="text-white font-medium mb-2">{lesson.title}</h4>
          <p className="text-sm text-neutral-400 mb-4">{lesson.desc}</p>

          <div className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-emerald-400">{lesson.insight}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Challenge Breakdown Component (Simplified)
function ChallengeBreakdown() {
  const problems = [
    "Bot soava robótico e travado",
    "Perdia contexto entre mensagens",
    "Não lidava com casos inesperados",
    "Transições abruptas",
  ];

  const solutions = [
    "95% não perceberam que era bot",
    "Conversas fluidas e naturais",
    "Contexto mantido perfeitamente",
    "Edge cases tratados com elegância",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-6 rounded-2xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10"
    >
      <h4 className="text-lg font-medium text-white mb-6 text-center flex items-center justify-center gap-2">
        <Construction className="w-5 h-5 text-emerald-400" /> O Desafio da Humanização
      </h4>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Problem */}
        <div className="p-4 rounded-xl bg-neutral-800/60 ring-1 ring-white/10">
          <p className="text-xs font-medium text-neutral-400 mb-3">O PROBLEMA</p>
          <ul className="space-y-2">
            {problems.map((problem, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-neutral-300">
                <X className="w-4 h-4 text-neutral-500 flex-shrink-0 mt-0.5" />
                {problem}
              </li>
            ))}
          </ul>
        </div>

        {/* Solution */}
        <div className="p-4 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20">
          <p className="text-xs font-medium text-emerald-400 mb-3">O RESULTADO</p>
          <ul className="space-y-2">
            {solutions.map((solution, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-neutral-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                {solution}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Learning */}
      <div className="mt-6 pt-4 border-t border-white/10 text-center">
        <p className="text-sm text-neutral-400">
          <span className="text-emerald-400">Aprendizado:</span> Humanização é 80% prompts, 20% tech
        </p>
      </div>
    </motion.div>
  );
}

// What I'd Do Differently Component (Simplified)
function WhatIdDoDifferently() {
  const retrospectives = [
    {
      title: "Escopo do MVP",
      didWrong: ["V1 com 15 campos de coleta", "10 cenários diferentes", "Sistema super complexo desde início"],
      wouldDo: ["V1 com 5 campos essenciais", "3 cenários principais", "Deploy em 1 semana, iterar depois"],
      lesson: "MVP significa Minimum Viable Product — não Maximum.",
    },
    {
      title: "Versionamento",
      didWrong: ["Prompts editados direto no n8n", "Sem histórico de versões", "Perdi track de mudanças"],
      wouldDo: ["Git para versionamento de prompts", "Changelog detalhado", "Testes automatizados por versão"],
      lesson: "Prompts são código. Trate como tal.",
    },
    {
      title: "Envolvimento do Time",
      didWrong: ["Construí 80% sozinho", "Mostrei no final", "Feedback tardio = retrabalho"],
      wouldDo: ["Check-ins semanais com comercial", "Protótipos compartilhados cedo", "Co-criação durante processo"],
      lesson: "Build WITH users, not FOR users.",
    },
  ];

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
        <RefreshCw className="w-5 h-5 text-emerald-400" />
        O Que Faria Diferente
      </h4>

      {retrospectives.map((retro, idx) => (
        <motion.div
          key={retro.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.15, duration: 0.4 }}
          className="p-5 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10"
        >
          <p className="text-sm font-medium text-white mb-4 flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-emerald-400" /> Retrospectiva #{idx + 1}: {retro.title}
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-1">
              <p className="text-xs text-neutral-500 font-medium">O QUE FIZ</p>
              {retro.didWrong.map((item, i) => (
                <p key={i} className="text-xs text-neutral-400 flex items-start gap-1">
                  <span className="text-neutral-500">•</span> {item}
                </p>
              ))}
            </div>
            <div className="space-y-1">
              <p className="text-xs text-emerald-400 font-medium">O QUE FARIA</p>
              {retro.wouldDo.map((item, i) => (
                <p key={i} className="text-xs text-neutral-400 flex items-start gap-1">
                  <span className="text-emerald-400">•</span> {item}
                </p>
              ))}
            </div>
          </div>

          <p className="text-xs text-emerald-400 flex items-center gap-1">
            <Lightbulb className="w-3 h-3" />
            {retro.lesson}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

// AI Builder Philosophy Card Component (Simplified - no infinite animations)
function AIBuilderPhilosophyCard() {
  const principles = [
    "Diagnóstico antes de implementação",
    "Humanização acima de inteligência",
    "Iteração contínua baseada em dados",
    "Alinhamento com necessidades reais",
    "Build WITH users, not FOR users",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative p-8 rounded-2xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-emerald-500/20"
    >
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <Bot className="w-6 h-6 text-emerald-400" />
          <h4 className="text-lg font-medium text-white">AI Builder Mindset</h4>
        </div>

        <p className="text-xl text-neutral-200 italic mb-6">
          &quot;IA é ferramenta, não solução. Comece com o problema, não com a tecnologia.&quot;
        </p>

        <ul className="space-y-3 mb-6">
          {principles.map((principle, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-2 text-sm text-neutral-300"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              {principle}
            </motion.li>
          ))}
        </ul>

        <div className="text-center">
          <span className="px-4 py-2 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20 text-emerald-400 text-sm">
            Customer-Centric AI Development
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// Main Learnings Section Component
export function LearningsSection() {
  return (
    <section id="aprendizados" className="relative py-24 px-6 bg-neutral-900/50">

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
              <span className="text-sm text-neutral-300">06 — Aprendizados e Reflexão</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              Além do chatbot:{" "}
              <span className="text-emerald-400">o que aprendi sobre IA e alinhamento</span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Construir um chatbot que funciona é fácil. Construir um que resolve o problema certo é difícil.
            </p>
          </motion.div>

          {/* Core Learning */}
          <div className="max-w-3xl mx-auto">
            <CoreLearningHighlight />
          </div>

          {/* Key Lessons */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6 text-center">
              Outras lições críticas desse projeto:
            </h3>
            <KeyLessonsCards />
          </div>

          {/* Challenge Breakdown */}
          <div className="max-w-3xl mx-auto">
            <ChallengeBreakdown />
          </div>

          {/* What I'd Do Differently + AI Builder Philosophy */}
          <div className="grid lg:grid-cols-2 gap-8">
            <WhatIdDoDifferently />
            <AIBuilderPhilosophyCard />
          </div>

          {/* Closing quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-neutral-400 italic max-w-2xl mx-auto">
              &quot;Esse projeto provou que é possível automatizar 80% do trabalho mantendo 100% da qualidade —
              desde que você comece pelo diagnóstico certo.&quot;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default LearningsSection;
