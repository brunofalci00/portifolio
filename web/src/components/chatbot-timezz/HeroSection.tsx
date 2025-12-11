"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bot,
  Clock,
  TrendingUp,
  FileText,
  Calendar,
  type LucideIcon,
} from "lucide-react";
import { CounterAnimation } from "@/components/shared/CounterAnimation";
import { WhatsAppMockup } from "./WhatsAppMockup";

// Eyebrow Badge Component
function EyebrowBadge() {
  const badges = [
    { icon: FileText, text: "Case Study" },
    { icon: Bot, text: "AI Automation" },
    { icon: Calendar, text: "2024" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="flex flex-wrap items-center justify-center gap-2"
    >
      {badges.map((badge, idx) => (
        <motion.div
          key={badge.text}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.15 + idx * 0.05 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/10"
        >
          <badge.icon className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-xs text-neutral-300">{badge.text}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

// Impact Metric Card Component (Emerald only)
function ImpactMetricCard({
  value,
  suffix,
  label,
  icon: Icon,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative p-5 rounded-2xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10 hover:ring-emerald-500/20 transition-all group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="p-2 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20">
          <Icon className="w-5 h-5 text-emerald-400" />
        </div>
      </div>

      <div className="font-display text-3xl sm:text-4xl font-light text-emerald-400 mb-1">
        <CounterAnimation target={value} suffix={suffix} />
      </div>

      <p className="text-sm text-neutral-400">{label}</p>
    </motion.div>
  );
}

// Main Hero Section
export function HeroSection() {
  return (
    <section id="topo" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-950" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                           linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-sm text-neutral-500 mb-8"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/#projetos" className="hover:text-white transition-colors">
            Projetos
          </Link>
          <span>/</span>
          <span className="text-neutral-300">Chatbot Timezz</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Eyebrow badges */}
            <div className="lg:justify-start">
              <EyebrowBadge />
            </div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="inline-block"
                >
                  Como um{" "}
                  <span className="text-emerald-400">
                    chatbot inteligente
                  </span>
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="inline-block"
                >
                  reduziu{" "}
                  <span className="text-emerald-400">
                    80% do tempo
                  </span>{" "}
                  de atendimento B2B
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-xl text-neutral-400"
              >
                E aumentou conversão em{" "}
                <span className="text-emerald-400 font-medium">15%</span>
              </motion.p>
            </motion.div>

            {/* Context paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="p-5 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10"
            >
              <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
                Construí um{" "}
                <span className="text-white font-medium">chatbot full-stack</span> para
                automatizar o primeiro contato com leads B2B — respondendo dúvidas
                repetitivas, coletando{" "}
                <span className="text-emerald-400">dados estruturados</span> e qualificando
                leads <span className="text-emerald-400">24/7</span>. Da ideia ao bot no ar
                em <span className="text-emerald-400 font-medium">2 semanas</span>.
              </p>
            </motion.div>
          </div>

          {/* Right side - WhatsApp Chatbot Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-full max-w-sm mx-auto"
          >
            <WhatsAppMockup />
          </motion.div>
        </div>

        {/* Impact metrics dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16"
        >
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <ImpactMetricCard
              value={80}
              suffix="%"
              label="Redução no tempo de atendimento"
              icon={Clock}
              delay={0.1}
            />
            <ImpactMetricCard
              value={15}
              suffix="%"
              label="Aumento na conversão"
              icon={TrendingUp}
              delay={0.2}
            />
            <ImpactMetricCard
              value={100}
              suffix="%"
              label="Automação 24/7"
              icon={Bot}
              delay={0.3}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
