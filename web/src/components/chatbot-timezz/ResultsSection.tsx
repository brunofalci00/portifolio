"use client";

import { motion } from "framer-motion";
import {
  Zap,
  TrendingUp,
  Clock,
  Database,
  Bot,
  Users,
  CheckCircle,
  Sparkles,
  Quote,
} from "lucide-react";
import { CounterAnimation } from "@/components/shared/CounterAnimation";
import CardFlip, { type CardFlipProps } from "@/components/kokonutui/card-flip";

// Hero Metric - Time Transformation (Simplified)
function TimeTransformationDisplay() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative p-8 md:p-12 rounded-3xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-emerald-500/20"
    >
      <div className="text-center relative z-10">
        <h3 className="text-lg text-neutral-400 mb-8">Resultado da Automação</h3>

        {/* Before/After comparison */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
          {/* Before */}
          <div className="text-center">
            <p className="text-sm text-neutral-500 mb-2">ANTES</p>
            <p className="text-5xl md:text-6xl font-bold text-neutral-500">4h</p>
          </div>

          <div className="text-4xl text-emerald-400">→</div>

          {/* After */}
          <div className="text-center">
            <p className="text-sm text-neutral-500 mb-2">DEPOIS</p>
            <p className="text-5xl md:text-6xl font-bold text-emerald-400">
              <CounterAnimation target={30} suffix="min" duration={2} />
            </p>
          </div>
        </div>

        {/* Main percentage */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20 mb-6"
        >
          <span className="text-4xl font-bold text-emerald-400">-80%</span>
        </motion.div>

        {/* Meta comparison */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="space-y-2"
        >
          <p className="text-neutral-400">
            Meta: <span className="text-neutral-300">-50%</span>
          </p>
          <p className="text-emerald-400 font-medium flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Superou em 60%!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Key Metrics Dashboard (Simplified)
function KeyMetricsDashboard() {
  const metrics = [
    { icon: Zap, value: "80", suffix: "%", label: "Redução de Tempo", detail: "(4h → 30min) por dia" },
    { icon: TrendingUp, value: "15", suffix: "%", prefix: "+", label: "Aumento na Conversão", detail: "(10% → 25%) do funil" },
    { icon: Clock, value: "1", suffix: "min", prefix: "<", label: "Tempo Médio Resposta", detail: "(vs. 3h antes)" },
    { icon: Database, value: "95", suffix: "%", label: "Dados Completos", detail: "Coletados estruturados" },
    { icon: Bot, value: "100", suffix: "%", label: "Disponibilidade", detail: "24/7 sem interrupção" },
    { icon: Users, value: "95", suffix: "%", label: "Não perceberam bot", detail: "Humanização total" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {metrics.map((metric, idx) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, duration: 0.4 }}
          className="p-5 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10 hover:ring-emerald-500/20 transition-all"
        >
          <metric.icon className="w-6 h-6 text-emerald-400 mb-3" />
          <p className="text-3xl font-bold text-emerald-400 mb-1">
            <CounterAnimation
              target={parseInt(metric.value)}
              prefix={metric.prefix || ""}
              suffix={metric.suffix}
              duration={1.5}
            />
          </p>
          <p className="text-sm text-white font-medium">{metric.label}</p>
          <p className="text-xs text-neutral-500 mt-1">{metric.detail}</p>
        </motion.div>
      ))}
    </div>
  );
}

// Qualitative Impact Cards with CardFlip
function QualitativeImpactCards() {
  const impactCards: CardFlipProps[] = [
    {
      title: "Time Comercial",
      subtitle: "Liberdade para Focar em Valor",
      description: "O time ganhou 3.5 horas diárias para se dedicar ao que realmente importa: relacionamento com clientes e negociações estratégicas.",
      features: [
        "3.5h por dia liberadas",
        "Qualificação profunda de leads",
        "Negociações complexas",
        "Foco em relacionamento"
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=280&h=320&fit=crop"
    },
    {
      title: "Leads",
      subtitle: "Experiência Instantânea",
      description: "95% dos leads avaliaram a experiência como 'boa' ou 'excelente', com respostas imediatas e informações precisas sobre próximos passos.",
      features: [
        "Resposta em <1 minuto",
        "Informações precisas",
        "Próximos passos claros",
        "95% satisfação"
      ],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=280&h=320&fit=crop"
    },
    {
      title: "Negócio",
      subtitle: "Escalabilidade sem Contratar",
      description: "Capacidade de atender volume 3x maior mantendo a mesma qualidade, disponível 24/7, sem necessidade de aumentar headcount.",
      features: [
        "Volume 3x maior",
        "Sem aumentar time",
        "Qualidade mantida",
        "Disponível 24/7"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=280&h=320&fit=crop"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
      {impactCards.map((card, idx) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.15 }}
        >
          <CardFlip {...card} />
        </motion.div>
      ))}
    </div>
  );
}

// Success Achievement Badge (Simplified - no infinite animations)
function SuccessAchievementBadge() {
  const achievements = [
    { text: "-80% tempo", done: true },
    { text: "+15% conversão", done: true },
    { text: "95% dados completos", done: true },
    { text: "24/7 disponível", done: true },
    { text: "95% não perceberam bot", done: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative p-8 rounded-2xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-emerald-500/20 text-center"
    >
      <div className="relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-emerald-400" />
          <h4 className="text-xl font-medium text-white">MISSÃO CUMPRIDA</h4>
          <Sparkles className="w-6 h-6 text-emerald-400" />
        </div>

        <div className="space-y-3 mb-6">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={achievement.text}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span className="text-neutral-300">{achievement.text}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-sm text-neutral-500">Built with AI + Low-code</p>
      </div>
    </motion.div>
  );
}

// Pull Quote
function PullQuote() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative p-6 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10"
    >
      <Quote className="absolute top-4 left-4 w-8 h-8 text-emerald-500/20" />
      <Quote className="absolute bottom-4 right-4 w-8 h-8 text-emerald-500/20 rotate-180" />

      <p className="relative text-lg text-neutral-200 italic text-center py-4 px-4">
        &quot;Finalmente posso fazer meu trabalho de verdade: vender, não responder &apos;quanto custa&apos; o dia inteiro.&quot;
      </p>
      <p className="text-sm text-neutral-500 text-center">— Sócio da Timezz</p>
    </motion.div>
  );
}

// Main Results Section Component
export function ResultsSection() {
  return (
    <section id="resultados" className="relative py-24 px-6">
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
              <span className="text-sm text-neutral-300">05 — Resultado e Impacto</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              80% de redução, 15% de aumento:{" "}
              <span className="text-emerald-400">e um time respirando</span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Quando o bot foi pro ar e os números começaram a falar por si.
            </p>
          </motion.div>

          {/* Hero Metric - Time Transformation */}
          <TimeTransformationDisplay />

          {/* Key Metrics Dashboard */}
          <KeyMetricsDashboard />

          {/* Pull Quote */}
          <div className="max-w-3xl mx-auto">
            <PullQuote />
          </div>

          {/* Qualitative Impact */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6 text-center">
              Além dos números, o impacto humano foi imenso:
            </h3>
            <QualitativeImpactCards />
          </div>

          {/* Success Badge */}
          <div className="max-w-xl mx-auto">
            <SuccessAchievementBadge />
          </div>

          {/* Results Metrics Trends */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10"
          >
            <div className="mb-8">
              <h4 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                Trajetória de Resultados
              </h4>
              <p className="text-sm text-neutral-400">Evolução dos KPIs ao longo da implementação</p>
            </div>

            {/* Main metrics timeline */}
            <div className="space-y-6">
              {/* Tempo de Resposta */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white">Tempo Médio de Resposta</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-neutral-500">Semana 1</span>
                    <span className="text-xs text-neutral-500">Semana 4</span>
                  </div>
                </div>
                <div className="flex gap-3 items-end h-16">
                  {[180, 150, 90, 45, 30].map((value, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ height: 0, opacity: 0 }}
                      whileInView={{ height: `${(value / 180) * 100}%`, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15, duration: 0.6 }}
                      className="flex-1 rounded-t-lg bg-gradient-to-t from-emerald-500 to-emerald-400"
                      title={`${value}min`}
                    />
                  ))}
                </div>
                <div className="text-xs text-neutral-500 text-center">180min → 30min (-83%)</div>
              </div>

              {/* Taxa de Conversão */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white">Taxa de Conversão</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-neutral-500">Semana 1</span>
                    <span className="text-xs text-neutral-500">Semana 4</span>
                  </div>
                </div>
                <div className="flex gap-3 items-end h-16">
                  {[10, 14, 18, 22, 25].map((value, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ height: 0, opacity: 0 }}
                      whileInView={{ height: `${(value / 25) * 100}%`, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + 0.05, duration: 0.6 }}
                      className="flex-1 rounded-t-lg bg-gradient-to-t from-cyan-500 to-emerald-400"
                      title={`${value}%`}
                    />
                  ))}
                </div>
                <div className="text-xs text-neutral-500 text-center">10% → 25% (+150%)</div>
              </div>

              {/* Cobertura de Dados */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white">Cobertura de Dados Coletados</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-neutral-500">Semana 1</span>
                    <span className="text-xs text-neutral-500">Semana 4</span>
                  </div>
                </div>
                <div className="flex gap-3 items-end h-16">
                  {[50, 65, 80, 92, 95].map((value, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ height: 0, opacity: 0 }}
                      whileInView={{ height: `${(value / 100) * 100}%`, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + 0.1, duration: 0.6 }}
                      className="flex-1 rounded-t-lg bg-gradient-to-t from-blue-500 to-cyan-400"
                      title={`${value}%`}
                    />
                  ))}
                </div>
                <div className="text-xs text-neutral-500 text-center">50% → 95% (+90%)</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ResultsSection;
