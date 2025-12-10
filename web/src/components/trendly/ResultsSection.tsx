"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  BarChart,
  Users,
  MessageSquare,
  Target,
  CheckCircle,
  Award,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const resultados = [
  {
    label: "Receita Digital",
    value: 100,
    prefix: "R$",
    suffix: "k",
    detail: "De R$0 para R$100 mil em 6 meses",
    icon: BarChart,
    color: "emerald",
    growth: "+100k",
  },
  {
    label: "Seguidores",
    value: 10,
    suffix: "k",
    detail: "Base dobrou de 5k para 10k",
    icon: Users,
    color: "emerald",
    growth: "+100%",
  },
  {
    label: "Engajamento",
    value: 2.5,
    suffix: "%",
    detail: "De 0,5% para 2,5% (5x maior)",
    icon: MessageSquare,
    color: "emerald",
    growth: "+400%",
  },
  {
    label: "Leads/mês",
    value: 20,
    suffix: "+",
    detail: "Leads qualificados mensais",
    icon: Target,
    color: "blue",
    growth: "20+",
  },
  {
    label: "Conversão",
    value: 20,
    suffix: "%",
    detail: "Taxa de conversão lead → cliente",
    icon: CheckCircle,
    color: "blue",
    growth: "20%",
  },
  {
    label: "Autoridade",
    value: null,
    displayValue: "Consolidada",
    detail: "Presença omnichannel estabelecida",
    icon: Award,
    color: "purple",
    growth: "✓",
  },
];

const chartData = [
  { label: "Seguidores", from: 5, to: 10, unit: "k", color: "emerald" },
  { label: "Engajamento", from: 0.5, to: 2.5, unit: "%", color: "blue" },
  { label: "Receita", from: 0, to: 100, unit: "k", color: "purple" },
];

const imageShadow =
  "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const startValue = 0;
    const endValue = value;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(startValue + (endValue - startValue) * easeOutQuart);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {Number.isInteger(value) ? Math.round(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
}

function AnimatedBar({
  from,
  to,
  color,
  delay = 0,
}: {
  from: number;
  to: number;
  color: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const maxValue = Math.max(to * 1.2, 100);
  const fromPercent = (from / maxValue) * 100;
  const toPercent = (to / maxValue) * 100;

  const colorClasses = {
    emerald: "bg-emerald-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
  };

  return (
    <div ref={ref} className="flex items-center gap-3">
      {/* From bar */}
      <div className="flex-1 h-6 bg-neutral-800 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${fromPercent}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="absolute inset-y-0 left-0 bg-neutral-600 rounded-full"
        />
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-neutral-400">
          Antes
        </span>
      </div>
      <ArrowUpRight className="w-4 h-4 text-emerald-400 flex-shrink-0" />
      {/* To bar */}
      <div className="flex-1 h-6 bg-neutral-800 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${toPercent}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
          className={`absolute inset-y-0 left-0 rounded-full ${colorClasses[color as keyof typeof colorClasses]}`}
        />
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white">
          Depois
        </span>
      </div>
    </div>
  );
}

export function ResultsSection() {
  return (
    <section id="resultado" className="relative py-24 bg-neutral-900/50">
      {/* Gradiente de transição do topo (de escuro para claro) */}
      <div
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-neutral-950 to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Gradiente de transição da base (de claro para escuro) */}
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
            <span className="text-sm text-neutral-300">04 — Resultados</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            De R$0 a{" "}
            <span className="text-emerald-400">R$100k em 6 meses</span>
          </h2>
          <p className="text-neutral-400 max-w-3xl mx-auto text-lg">
            Métricas que provam: autoridade digital se traduz em receita real
            quando há estratégia, execução consistente e otimização contínua.
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {resultados.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-6 rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 hover:ring-emerald-500/30 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  item.color === "emerald"
                    ? "from-emerald-500/10 to-transparent"
                    : item.color === "blue"
                    ? "from-blue-500/10 to-transparent"
                    : "from-purple-500/10 to-transparent"
                }`}
              />

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-2 rounded-lg ${
                      item.color === "emerald"
                        ? "bg-emerald-500/10 ring-1 ring-emerald-500/20"
                        : item.color === "blue"
                        ? "bg-blue-500/10 ring-1 ring-blue-500/20"
                        : "bg-purple-500/10 ring-1 ring-purple-500/20"
                    }`}
                  >
                    <item.icon
                      className={`w-5 h-5 ${
                        item.color === "emerald"
                          ? "text-emerald-400"
                          : item.color === "blue"
                          ? "text-blue-400"
                          : "text-purple-400"
                      }`}
                    />
                  </div>
                  {/* Growth badge */}
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.color === "emerald"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : item.color === "blue"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-purple-500/20 text-purple-400"
                    }`}
                  >
                    {item.growth}
                  </div>
                </div>

                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-2">
                  {item.label}
                </p>

                <p className="font-display text-4xl font-light text-white mb-2">
                  {item.value !== null ? (
                    <AnimatedNumber
                      value={item.value}
                      prefix={item.prefix}
                      suffix={item.suffix}
                    />
                  ) : (
                    item.displayValue
                  )}
                </p>

                <p className="text-sm text-neutral-500">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress bars section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            <p className="text-sm text-emerald-400 uppercase tracking-wider">
              Evolução visual
            </p>
          </div>

          <div className="space-y-6">
            {chartData.map((item, idx) => (
              <div key={item.label} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-400">{item.label}</span>
                  <span className="text-white font-medium">
                    {item.from}
                    {item.unit} → {item.to}
                    {item.unit}
                  </span>
                </div>
                <AnimatedBar
                  from={item.from}
                  to={item.to}
                  color={item.color}
                  delay={idx * 0.2}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Qualitative impact + Image */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 ring-1 ring-emerald-500/20"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-1 rounded-full bg-emerald-400" />
              <p className="text-sm text-emerald-400 uppercase tracking-wider">
                Impacto qualitativo
              </p>
            </div>
            <p className="text-white text-lg leading-relaxed mb-4">
              Alfredo saiu de &quot;especialista invisível&quot; para autoridade
              reconhecida em comércio exterior. Hoje recebe leads qualificados
              organicamente e converte com confiança.
            </p>
            <div className="h-px bg-emerald-500/20 my-4" />
            <div className="space-y-3">
              {[
                "Receita recorrente através de mentoria",
                "Sistema replicável e escalável",
                "Autoridade omnichannel consolidada",
                "Funil automatizado funcionando 24/7",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-neutral-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Dashboard image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video rounded-2xl overflow-hidden"
          >
            <Image
              src="/media/trendly/trendly_results.png"
              alt="Dashboard de métricas"
              fill
              className={`object-cover grayscale brightness-[0.7] hover:grayscale-[20%] hover:brightness-100 transition-all duration-500 ${imageShadow}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="p-3 rounded-xl bg-neutral-950/80 backdrop-blur-sm ring-1 ring-white/10">
                <p className="text-sm text-neutral-400">Métricas consolidadas</p>
                <p className="text-white font-medium">
                  6 meses de crescimento consistente
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ResultsSection;
