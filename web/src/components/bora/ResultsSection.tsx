"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  Users,
  TrendingUp,
  DollarSign,
  Repeat,
  AlertCircle,
  MessageSquare,
} from "lucide-react";

const resultados = [
  {
    label: "MAU",
    value: 100,
    suffix: "+",
    detail: "Usuários orgânicos em 15 dias",
    icon: Users,
    color: "emerald",
  },
  {
    label: "Retenção",
    value: 80,
    suffix: "%",
    detail: "Estimativa inicial de retenção",
    icon: TrendingUp,
    color: "emerald",
  },
  {
    label: "CAC",
    value: 0,
    prefix: "R$",
    suffix: "",
    detail: "Aquisição orgânica e afiliados",
    icon: DollarSign,
    color: "emerald",
  },
  {
    label: "Monetização",
    value: 47.9,
    prefix: "R$",
    suffix: "/ano",
    detail: "Modelo de assinatura em teste",
    icon: Repeat,
    color: "blue",
  },
  {
    label: "Churn",
    value: 20,
    suffix: "%",
    detail: "Estimado; foco em engajamento",
    icon: AlertCircle,
    color: "orange",
  },
  {
    label: "Feedback",
    value: null,
    displayValue: "Apple Health",
    detail: "Demanda por integração nativa",
    icon: MessageSquare,
    color: "purple",
  },
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

export function ResultsSection() {
  return (
    <section id="resultados" className="py-24 bg-neutral-900/50">
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
            <span className="text-sm text-neutral-300">05 — Resultados</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            Validação inicial:{" "}
            <span className="text-emerald-400">MAU 100+, retenção 80%</span>
          </h2>
          <p className="text-neutral-400 max-w-3xl mx-auto text-lg">
            Prova de que a solução resolve a dor: usuários orgânicos, retenção
            alta e modelo de assinatura em teste.
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
                    : item.color === "orange"
                    ? "from-orange-500/10 to-transparent"
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
                        : item.color === "orange"
                        ? "bg-orange-500/10 ring-1 ring-orange-500/20"
                        : "bg-purple-500/10 ring-1 ring-purple-500/20"
                    }`}
                  >
                    <item.icon
                      className={`w-5 h-5 ${
                        item.color === "emerald"
                          ? "text-emerald-400"
                          : item.color === "blue"
                          ? "text-blue-400"
                          : item.color === "orange"
                          ? "text-orange-400"
                          : "text-purple-400"
                      }`}
                    />
                  </div>
                  <span className="text-xs text-neutral-500 uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>

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

        {/* Qualitative impact */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-neutral-900/60 ring-1 ring-white/10"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-1 rounded-full bg-emerald-400" />
              <p className="text-sm text-emerald-400 uppercase tracking-wider">
                Impacto qualitativo
              </p>
            </div>
            <p className="text-white text-lg leading-relaxed mb-4">
              Validação do produto como solução simples e guiada, com feedback
              direto via WhatsApp e demanda clara por integrações de saúde.
            </p>
            <div className="h-px bg-white/10 my-4" />
            <p className="text-neutral-500">
              Estrutura pronta para escalar: PWA com UX enxuto, funil orgânico
              sem CAC e caminho de monetização já definido.
            </p>
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
              src="/media/projects/bora/portifolio-10.png"
              alt="Bora App - Resultados e Métricas"
              fill
              className={`object-cover grayscale brightness-[0.7] hover:grayscale-[20%] hover:brightness-100 transition-all duration-500 ${imageShadow}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="p-3 rounded-xl bg-neutral-950/80 backdrop-blur-sm ring-1 ring-white/10">
                <p className="text-sm text-neutral-400">Métricas em tempo real</p>
                <p className="text-white font-medium">Dashboard gamificado</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ResultsSection;
