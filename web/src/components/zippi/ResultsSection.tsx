"use client";

import { motion } from "framer-motion";
import { TrendingUp, Target, MousePointerClick, Eye, Trophy } from "lucide-react";
import { GrowthChart } from "./charts/GrowthChart";
import { KeywordsTable } from "./KeywordsTable";
import { MetricCard } from "./MetricCard";
import TypewriterText from "@/components/ui/typewriter-text";

export function ResultsSection() {
  return (
    <section id="resultados" className="relative py-24 px-6 bg-neutral-900/50">

      {/* Content */}
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
              <span className="text-sm text-neutral-300">Os Números</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              <TypewriterText speed={50}>Os Resultados</TypewriterText>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Crescimento exponencial em 60 dias de execução consistente.
            </p>
          </motion.div>

          {/* Hero Metric */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative p-12 rounded-3xl bg-gradient-to-br from-emerald-500/5 to-transparent ring-1 ring-emerald-500/20 overflow-hidden text-center"
          >
            {/* Decorative glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />

            <div className="relative z-10 space-y-6">
              {/* Main number */}
              <div className="font-display text-7xl sm:text-8xl lg:text-9xl font-light text-emerald-400 tracking-tight">
                +150%
              </div>
              <p className="text-2xl sm:text-3xl text-white font-light">
                Crescimento de Tráfego Orgânico
              </p>

              {/* Before/After */}
              <div className="flex items-center justify-center gap-6 max-w-2xl mx-auto">
                <div className="flex-1 p-4 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-white/10">
                  <p className="text-sm text-neutral-500 mb-1">AGOSTO 2022</p>
                  <p className="text-2xl font-display text-neutral-400">3.500</p>
                  <p className="text-xs text-neutral-500">visitas/mês</p>
                </div>

                <TrendingUp className="w-8 h-8 text-emerald-400 flex-shrink-0" />

                <div className="flex-1 p-4 rounded-xl bg-neutral-900/60 backdrop-blur-sm ring-1 ring-emerald-500/20">
                  <p className="text-sm text-emerald-400 mb-1">OUTUBRO 2022</p>
                  <p className="text-2xl font-display text-emerald-400">8.750</p>
                  <p className="text-xs text-emerald-400/60">visitas/mês</p>
                </div>
              </div>

              {/* Achievement badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20">
                <Trophy className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400">Meta superada em 3x</span>
              </div>
            </div>
          </motion.div>

          {/* Key Metrics Grid - Using MetricCard */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              icon={TrendingUp}
              label="Crescimento de Tráfego"
              value={150}
              suffix="%"
              prefix="+"
              color="emerald"
              duration={2000}
            />
            <MetricCard
              icon={Target}
              label="Melhoria no Ranking"
              value={9}
              prefix="+"
              suffix=" posições"
              color="emerald"
              duration={1800}
            />
            <MetricCard
              icon={Eye}
              label="Aumento em Impressões"
              value={90}
              suffix="%"
              prefix="+"
              color="blue"
              duration={2200}
            />
            <MetricCard
              icon={MousePointerClick}
              label="Melhoria no CTR"
              value={106}
              suffix="%"
              prefix="+"
              color="purple"
              duration={2400}
            />
          </div>

          {/* Growth Chart - Interactive */}
          <GrowthChart />

          {/* Keywords Table - Interactive with Sparklines */}
          <KeywordsTable />
        </div>
      </div>
    </section>
  );
}

export default ResultsSection;
