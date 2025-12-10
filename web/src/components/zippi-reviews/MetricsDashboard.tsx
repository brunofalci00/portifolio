"use client";

import { motion } from "framer-motion";
import { MessageSquare, Clock, TrendingUp, ThumbsUp } from "lucide-react";
import { MetricCard } from "../zippi/MetricCard";
import { SentimentChart } from "./charts/SentimentChart";

interface DashboardMetrics {
  reviewsPerDay: {
    current: number;
    previous: number;
    change: number;
  };
  avgResponseTime: {
    current: string;
    previous: string;
    change: number;
  };
  npsScore: {
    current: number;
    previous: number;
    change: number;
  };
  positiveRate: {
    current: number;
    previous: number;
    change: number;
  };
}

interface MetricsDashboardProps {
  metrics?: DashboardMetrics;
  showSentimentChart?: boolean;
}

const defaultMetrics: DashboardMetrics = {
  reviewsPerDay: { current: 4.2, previous: 1.5, change: 180 },
  avgResponseTime: { current: "18h", previous: "48h", change: -65 },
  npsScore: { current: 42, previous: -8, change: 625 },
  positiveRate: { current: 73, previous: 35, change: 108 },
};

export function MetricsDashboard({
  metrics = defaultMetrics,
  showSentimentChart = true,
}: MetricsDashboardProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2 text-center">
        <h3 className="text-xl md:text-2xl font-semibold text-white">
          Painel de Métricas de CX
        </h3>
        <p className="text-sm text-neutral-400">
          Indicadores-chave de performance antes e depois da estratégia
        </p>
      </div>

      {/* KPI Cards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <MetricCard
          icon={MessageSquare}
          label="Reviews por Dia"
          value={metrics.reviewsPerDay.current}
          decimals={1}
          color="emerald"
          duration={2000}
        />
        <MetricCard
          icon={Clock}
          label="Tempo de Resposta"
          value={18}
          suffix="h"
          color="blue"
          duration={1800}
        />
        <MetricCard
          icon={TrendingUp}
          label="NPS Score"
          value={metrics.npsScore.current}
          prefix="+"
          color="emerald"
          duration={2200}
        />
        <MetricCard
          icon={ThumbsUp}
          label="Taxa de Positivos"
          value={metrics.positiveRate.current}
          suffix="%"
          color="purple"
          duration={2400}
        />
      </motion.div>

      {/* Sentiment Chart */}
      {showSentimentChart && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <SentimentChart />
        </motion.div>
      )}
    </div>
  );
}
