"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  MessageCircle,
  Clock,
  TrendingDown,
  Users,
  Smartphone,
  Zap,
  DollarSign,
  AlertTriangle,
  ChevronDown,
  Quote,
  Construction,
  MessageSquare,
  BarChart,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Temporary Counter Animation (will be replaced with shared component in Sprint 8)
function CounterAnimation({
  target,
  suffix = "",
  duration = 1.5,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const easedProgress = easeOutQuart(progress);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
}

// Message Chaos Visualization Component (Simplified)
function MessageChaosVisualization() {
  const messages = [
    { text: "Quanto custa o serviço?", time: "3h atrás" },
    { text: "Vocês fazem cobertura de eventos?", time: "2h atrás" },
    { text: "Qual o prazo de entrega?", time: "1h atrás" },
    { text: "Trabalham com edição também?", time: "45min" },
    { text: "Orçamento para casamento", time: "30min" },
    { text: "Disponibilidade em janeiro?", time: "15min" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Container mockup */}
      <div className="relative bg-neutral-900/60 backdrop-blur-sm rounded-2xl ring-1 ring-white/10 overflow-hidden max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 bg-emerald-500/10 border-b border-white/10">
          <Smartphone className="w-5 h-5 text-emerald-400" />
          <div>
            <p className="text-sm font-medium text-white">Inbox Sobrecarregado</p>
            <p className="text-xs text-emerald-400">23 mensagens aguardando</p>
          </div>
          <AlertTriangle className="w-4 h-4 text-emerald-400 ml-auto" />
        </div>

        {/* Messages container */}
        <div className="p-3 space-y-2 max-h-80 overflow-hidden">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.3 }}
              className="flex items-start gap-2 p-3 rounded-lg bg-neutral-800/60 ring-1 ring-white/10"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-neutral-200 truncate">&quot;{msg.text}&quot;</p>
                <p className="text-xs text-neutral-500 mt-1">{msg.time}</p>
              </div>
              <MessageCircle className="w-4 h-4 text-neutral-500 flex-shrink-0" />
            </motion.div>
          ))}
        </div>

        {/* Footer stats */}
        <div className="px-4 py-3 bg-neutral-900/60 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span className="text-xs text-neutral-400">
                Tempo médio resposta: <span className="text-emerald-400 font-medium">3h</span>
              </span>
            </div>
            <span className="text-xs text-emerald-400 font-medium flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> Urgente</span>
          </div>
        </div>
      </div>

      {/* Floating notification */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, type: "spring" }}
        className="absolute -top-4 -right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-emerald-500/30"
      >
        +15 novas
      </motion.div>
    </motion.div>
  );
}

// Funnel Bottleneck Diagram Component - Enhanced with animations and gradients
function FunnelBottleneckDiagram() {
  const stages = [
    { value: "100", label: "Leads/Semana", percentage: 100, isBottleneck: false },
    { value: "4h/dia", label: "Gargalo Manual", percentage: 66, isBottleneck: true },
    { value: "40", label: "Qualificados", sublabel: "-60% perda", percentage: 50, isBottleneck: false },
    { value: "10", label: "Fechamentos", sublabel: "10% conversão", percentage: 25, isBottleneck: false },
  ];

  const widthMap = { 100: "w-full", 66: "w-2/3", 50: "w-1/2", 25: "w-1/4" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative py-10"
    >
      {/* Title */}
      <div className="text-center mb-8">
        <h4 className="text-lg font-medium text-white mb-2">Funil B2B - O Gargalo</h4>
        <p className="text-sm text-neutral-400">Visualização do problema no atendimento</p>
      </div>

      {/* Funnel stages */}
      <div className="space-y-4 max-w-2xl mx-auto">
        {stages.map((stage, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02, y: -4 }}
            className={`relative ${widthMap[stage.percentage as keyof typeof widthMap]} mx-auto rounded-xl overflow-hidden group`}
          >
            <Card
              className={`
                h-24 relative overflow-hidden border-0 transition-all duration-300
                ${stage.isBottleneck
                  ? 'bg-gradient-to-r from-amber-500/30 via-orange-500/25 to-amber-600/30 ring-2 ring-amber-500/50 shadow-[0_12px_48px_-8px_rgba(251,146,60,0.3),0_0_0_1px_rgba(251,146,60,0.2)_inset]'
                  : 'bg-gradient-to-br from-emerald-500/20 via-emerald-400/15 to-cyan-500/15 ring-2 ring-emerald-500/30 shadow-[0_8px_32px_-4px_rgba(16,185,129,0.15),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_16px_56px_-8px_rgba(16,185,129,0.25)] hover:ring-emerald-500/40'
                }
              `}
              style={{
                backgroundSize: stage.isBottleneck ? '200% 200%' : '100% 100%',
              }}
            >
              {/* Badge "Gargalo Crítico" for bottleneck */}
              {stage.isBottleneck && (
                <>
                  <Badge
                    variant="outline"
                    className="absolute -top-3 left-1/2 -translate-x-1/2
                               bg-amber-500/30 border-amber-400/60 text-amber-50
                               font-bold px-4 py-1.5 text-sm shadow-[0_0_20px_rgba(251,146,60,0.4)]
                               backdrop-blur-sm z-20 ring-1 ring-amber-400/20"
                  >
                    Gargalo Crítico
                  </Badge>

                  {/* Handmade underline emphasis */}
                  <motion.svg
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-2 text-amber-400/50 pointer-events-none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    viewBox="0 0 128 8"
                  >
                    <path
                      d="M 4,4 Q 32,6 64,4 T 124,5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </>
              )}

              <CardContent className="h-full flex items-center justify-center p-0">
                {/* Content */}
                <div className="text-center px-6">
                  <p className="text-3xl font-bold text-white tracking-tight">
                    {stage.value}
                  </p>
                  <p className="text-base font-semibold text-neutral-100">{stage.label}</p>
                  {stage.sublabel && <p className="text-sm font-medium text-neutral-400">{stage.sublabel}</p>}
                </div>

                {/* Alert icon on bottleneck */}
                {stage.isBottleneck && (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute right-4"
                  >
                    <Construction className="w-6 h-6 text-amber-400" />
                  </motion.div>
                )}

                {/* Handmade circle emphasis around icon */}
                {stage.isBottleneck && (
                  <motion.svg
                    className="absolute right-4 w-12 h-12 text-amber-400/40 pointer-events-none"
                    initial={{ pathLength: 0, opacity: 0, scale: 0.8 }}
                    whileInView={{ pathLength: 1, opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                    viewBox="0 0 48 48"
                  >
                    <motion.circle
                      cx="24" cy="24" r="18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="3 2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.svg>
                )}
              </CardContent>

              {/* Background animation for bottleneck */}
              {stage.isBottleneck && (
                <motion.div
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/15 to-transparent"
                  style={{ backgroundSize: '200% 100%' }}
                />
              )}
            </Card>

            {/* Enhanced connector with background line */}
            {idx < stages.length - 1 && (
              <div className="relative flex justify-center py-3">
                {/* Vertical dashed line background */}
                <svg
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full"
                  viewBox="0 0 4 100"
                  preserveAspectRatio="none"
                >
                  <motion.line
                    x1="2" y1="0" x2="2" y2="100"
                    stroke={stage.isBottleneck ? "#fbbf24" : "#34d399"}
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                    opacity="0.3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 + 0.4, duration: 0.4 }}
                  />
                </svg>

                {/* ChevronDown icon - enlarged */}
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, y: -5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 + 0.4 }}
                  whileHover={{ y: 2, scale: 1.1 }}
                >
                  <ChevronDown
                    className={`w-6 h-6 drop-shadow-lg
                      ${stage.isBottleneck ? "text-amber-400" : "text-emerald-400"}`}
                    strokeWidth={2.5}
                  />
                </motion.div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Loss indicator - connected to funnel */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
        className="absolute hidden lg:flex items-center gap-0"
        style={{
          top: 'calc(50% + 40px)',
          right: '-120px'
        }}
      >
        {/* Connector line + arrow */}
        <svg
          className="w-16 h-8 text-amber-400"
          viewBox="0 0 64 32"
        >
          {/* Horizontal dashed line */}
          <motion.line
            x1="0" y1="16" x2="52" y2="16"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
          />
          {/* Arrow tip */}
          <motion.path
            d="M 50,12 L 56,16 L 50,20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4, duration: 0.3 }}
          />
        </svg>

        {/* Loss badge - improved contrast */}
        <div className="bg-amber-500/30 ring-2 ring-amber-400/60 rounded-xl px-4 py-3
                        shadow-[0_0_20px_rgba(251,146,60,0.3)] backdrop-blur-sm">
          <p className="text-xl font-bold text-amber-50">60%</p>
          <p className="text-xs text-amber-200 font-semibold">de perda</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Repetitive Questions Showcase Component (Simplified)
function RepetitiveQuestionsShowcase() {
  const questions = [
    { rank: "1", question: "Quanto custa?", frequency: 45, percent: 45, time: "7.5h/semana" },
    { rank: "2", question: "Vocês fazem [tipo de serviço]?", frequency: 30, percent: 30, time: "4h/semana" },
    { rank: "3", question: "Qual o prazo de entrega?", frequency: 15, percent: 15, time: "1.25h/semana" },
  ];

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h4 className="text-lg font-medium text-white mb-2">As Perguntas Mais Repetidas</h4>
        <p className="text-sm text-neutral-400">Tempo desperdiçado por semana</p>
      </div>

      <div className="space-y-3">
        {questions.map((q, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.4 }}
            className="p-4 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10 hover:ring-emerald-500/20 transition-all"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-emerald-400">{q.rank}º</span>
              <div className="flex-1">
                <p className="text-white font-medium mb-2">&quot;{q.question}&quot;</p>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <span className="text-neutral-400">
                    <span className="text-emerald-400 font-medium">
                      <CounterAnimation target={q.frequency} suffix="x" />
                    </span>/semana
                  </span>
                  <span className="text-neutral-400">
                    ({q.percent}%)
                  </span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {q.time} perdidas
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Total */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-center pt-4 border-t border-white/10"
      >
        <p className="text-sm text-neutral-400">
          + outras perguntas repetitivas (10%) = <span className="text-emerald-400 font-bold">~13h/semana perdidas</span>
        </p>
      </motion.div>
    </div>
  );
}

// Impact Stats Grid Component (Simplified)
function ImpactStatsGrid() {
  const stats = [
    { icon: Clock, value: "4h", label: "Tempo Gasto", sublabel: "em Dúvidas/dia" },
    { icon: TrendingDown, value: "60%", label: "Perda de", sublabel: "Leads" },
    { icon: Users, value: "Alto", label: "Nível de", sublabel: "Frustração" },
    { icon: Smartphone, value: "80%", label: "dos Leads", sublabel: "via WhatsApp" },
    { icon: Zap, value: "3h", label: "Tempo Médio", sublabel: "de Resposta" },
    { icon: DollarSign, value: "Alto", label: "Custo de", sublabel: "Oportunidade" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, duration: 0.4 }}
          className="group p-4 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10 hover:ring-emerald-500/20 transition-all hover:-translate-y-1"
        >
          <stat.icon className="w-6 h-6 text-emerald-400 mb-3" />
          <p className="text-2xl font-bold text-emerald-400 mb-1">{stat.value}</p>
          <p className="text-sm text-white">{stat.label}</p>
          <p className="text-sm text-white">{stat.sublabel}</p>
        </motion.div>
      ))}
    </div>
  );
}

// Time Wasted Calculator Component (Simplified)
function TimeWastedCalculator() {
  const calculations = [
    { formula: "4h/dia × 5 dias", result: "20h/semana" },
    { formula: "20h × 4 semanas", result: "80h/mês" },
    { formula: "80h × 12 meses", result: "960h/ano" },
  ];

  const finalStats = [
    { value: "120", label: "dias úteis/ano" },
    { value: "24", label: "semanas de trabalho" },
    { value: "6", label: "meses desperdiçados" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-6 rounded-2xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10"
    >
      <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
        <Clock className="w-5 h-5 text-emerald-400" />
        Calculadora de Tempo Perdido
      </h4>

      {/* Calculations */}
      <div className="space-y-2 mb-6">
        {calculations.map((calc, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + idx * 0.15 }}
            className="flex items-center justify-between text-sm"
          >
            <span className="text-neutral-400 font-mono">{calc.formula}</span>
            <span className="text-white font-medium">= {calc.result}</span>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10 my-4" />

      {/* Final stats */}
      <div className="grid grid-cols-3 gap-3">
        {finalStats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + idx * 0.1 }}
            className="text-center"
          >
            <p className="text-2xl font-bold text-emerald-400">
              <CounterAnimation target={parseInt(stat.value)} />
            </p>
            <p className="text-xs text-neutral-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Pull Quote Card Component (Simplified)
function PullQuoteCard({ quote }: { quote: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative p-6 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10"
    >
      <Quote className="absolute top-4 left-4 w-8 h-8 text-emerald-500/20" />
      <Quote className="absolute bottom-4 right-4 w-8 h-8 text-emerald-500/20 rotate-180" />
      <p className="relative text-neutral-200 italic text-center py-4 px-4">
        &quot;{quote}&quot;
      </p>
    </motion.div>
  );
}

// Context Copy Component (Simplified)
function ContextCopySection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="prose prose-invert prose-sm max-w-none">
        <p className="text-neutral-300 leading-relaxed">
          Deixa eu te contar como era o dia a dia na Timezz antes do chatbot.
        </p>
        <p className="text-neutral-300 leading-relaxed">
          A empresa de audiovisual estava crescendo. Mais leads entravam — pelo site, pelo WhatsApp, por indicação.
          <span className="text-emerald-400"> Ótimo, né? Nem tanto.</span>
        </p>
        <p className="text-neutral-300 leading-relaxed">
          Porque cada lead que entrava trazia perguntas. Muitas perguntas. E a maioria?
          <span className="text-emerald-400 font-medium"> Exatamente as mesmas.</span>
        </p>
      </div>

      {/* Common questions highlight */}
      <div className="p-4 rounded-lg bg-neutral-900/40 ring-1 ring-white/10">
        <p className="text-sm text-neutral-400 mb-2">Perguntas que mais chegavam:</p>
        <ul className="space-y-1">
          <li className="text-neutral-300 text-sm flex items-start gap-2"><MessageSquare className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" /> &quot;Vocês fazem cobertura de eventos corporativos?&quot;</li>
          <li className="text-neutral-300 text-sm flex items-start gap-2"><MessageSquare className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" /> &quot;Quanto custa em média?&quot;</li>
          <li className="text-neutral-300 text-sm flex items-start gap-2"><MessageSquare className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" /> &quot;Qual o prazo de entrega?&quot;</li>
          <li className="text-neutral-300 text-sm flex items-start gap-2"><MessageSquare className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" /> &quot;Trabalham com edição também?&quot;</li>
        </ul>
      </div>

      <p className="text-neutral-300 leading-relaxed">
        O time comercial gastava{" "}
        <span className="text-emerald-400 font-bold">4 horas por dia</span> respondendo essas perguntas básicas.
        Manualmente. Uma por uma.
      </p>

      <p className="text-neutral-300 leading-relaxed">
        Enquanto isso, os leads qualificados esperavam. E esperar em B2B significa uma coisa:{" "}
        <span className="text-emerald-400 font-medium">procurar o concorrente.</span>
      </p>
    </motion.div>
  );
}

// Section Divider Component
function SectionDivider() {
  return (
    <div className="flex items-center gap-4 my-12">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <span className="text-xs text-neutral-500 uppercase tracking-wider">Impacto</span>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

// Main Situation Section Component
export function SituationSection() {
  return (
    <section id="situacao" className="py-24 bg-neutral-900/50 relative overflow-hidden">
      {/* Subtle background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.05),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20">
            <AlertTriangle className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-neutral-300">02 — Situação e Contexto</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            O gargalo: quando leads chegam rápido{" "}
            <span className="text-emerald-400">mas o atendimento não acompanha</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            4 horas por dia respondendo as mesmas perguntas — enquanto clientes desistem.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Context copy */}
          <ContextCopySection />

          {/* Right: Message chaos visualization */}
          <MessageChaosVisualization />
        </div>

        {/* Pull Quote */}
        <div className="max-w-3xl mx-auto mb-16">
          <PullQuoteCard
            quote="O problema não era falta de leads. Era capacidade de atendimento."
          />
        </div>

        {/* Funnel Bottleneck Diagram */}
        <div className="max-w-4xl mx-auto mb-16">
          <FunnelBottleneckDiagram />
        </div>

        <SectionDivider />

        {/* Questions and Stats Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Repetitive Questions */}
          <RepetitiveQuestionsShowcase />

          {/* Right: Impact Stats */}
          <ImpactStatsGrid />
        </div>

        {/* Time Calculator and second quote */}
        <div className="grid lg:grid-cols-2 gap-8">
          <TimeWastedCalculator />

          <div className="space-y-6">
            <PullQuoteCard
              quote="Cada hora de atraso na resposta inicial reduz a chance de conversão. Em B2B, velocidade é tudo."
            />

            {/* B2B Reality Check */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-5 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20"
            >
              <h5 className="text-sm font-medium text-emerald-400 mb-3 flex items-center gap-2"><BarChart className="w-4 h-4" /> Realidade B2B</h5>
              <div className="space-y-2 text-sm">
                <p className="text-neutral-300">
                  <span className="text-emerald-400 font-medium">78%</span> dos compradores B2B escolhem quem responde primeiro
                </p>
                <p className="text-neutral-300">
                  Tempo ideal de resposta: <span className="text-emerald-400 font-medium">&lt;5min</span>
                </p>
                <p className="text-neutral-300">
                  Tempo real da Timezz: <span className="text-white font-medium">~3h</span>
                </p>
                <p className="text-emerald-400 text-xs mt-2">= Oportunidade perdida</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Transition to next section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-sm text-emerald-400">
            Foi aí que decidimos construir uma solução inteligente.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default SituationSection;
