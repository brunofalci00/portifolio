"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts";

const trafficData = [
  { month: "Jan/22", sessions: 2400, organicSessions: 800 },
  { month: "Fev/22", sessions: 2600, organicSessions: 1000 },
  { month: "Mar/22", sessions: 3200, organicSessions: 1400 },
  { month: "Abr/22", sessions: 3500, organicSessions: 1600 },
  { month: "Mai/22", sessions: 3800, organicSessions: 1900 },
  { month: "Jun/22", sessions: 4200, organicSessions: 2300 },
  { month: "Jul/22", sessions: 4600, organicSessions: 2700 },
  { month: "Ago/22", sessions: 5000, organicSessions: 3100 },
  { month: "Set/22", sessions: 5400, organicSessions: 3500, event: "Otimização Técnica" },
  { month: "Out/22", sessions: 5800, organicSessions: 3900 },
  { month: "Nov/22", sessions: 6200, organicSessions: 4300 },
  { month: "Dez/22", sessions: 6600, organicSessions: 4700 },
  { month: "Jan/23", sessions: 7000, organicSessions: 5100 },
  { month: "Fev/23", sessions: 7300, organicSessions: 5400 },
  { month: "Mar/23", sessions: 7600, organicSessions: 5700 },
  { month: "Abr/23", sessions: 7800, organicSessions: 5900 },
  { month: "Mai/23", sessions: 8000, organicSessions: 6100 },
  { month: "Jun/23", sessions: 8200, organicSessions: 6300 },
  { month: "Jul/23", sessions: 8400, organicSessions: 6500, event: "Nova Estratégia de Conteúdo" },
  { month: "Ago/23", sessions: 8600, organicSessions: 6700 },
  { month: "Set/23", sessions: 8800, organicSessions: 6900 },
  { month: "Out/23", sessions: 9000, organicSessions: 7100 },
  { month: "Nov/23", sessions: 9200, organicSessions: 7300 },
  { month: "Dez/23", sessions: 9400, organicSessions: 7500 },
  { month: "Jan/24", sessions: 9600, organicSessions: 7700 },
  { month: "Fev/24", sessions: 9800, organicSessions: 7900 },
  { month: "Mar/24", sessions: 10000, organicSessions: 8100 },
  { month: "Abr/24", sessions: 10200, organicSessions: 8300 },
  { month: "Mai/24", sessions: 10400, organicSessions: 8500 },
  { month: "Jun/24", sessions: 10600, organicSessions: 8700 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const growth = data.organicSessions ?
      ((data.organicSessions - trafficData[0].organicSessions) / trafficData[0].organicSessions * 100).toFixed(0) : 0;

    return (
      <div className="bg-neutral-900/95 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-2xl">
        <p className="text-sm font-mono text-neutral-400 mb-2">{label}</p>
        <div className="space-y-1">
          <p className="text-sm text-white">
            <span className="text-emerald-400">●</span> Tráfego Orgânico:{" "}
            <span className="font-semibold">{payload[1]?.value?.toLocaleString()}</span>
          </p>
          <p className="text-sm text-white">
            <span className="text-neutral-500">●</span> Total:{" "}
            <span className="font-semibold">{payload[0]?.value?.toLocaleString()}</span>
          </p>
          <p className="text-xs text-emerald-400 mt-2">
            +{growth}% desde o início
          </p>
        </div>
        {data.event && (
          <p className="text-xs text-neutral-300 mt-3 pt-2 border-t border-white/10">
            📍 {data.event}
          </p>
        )}
      </div>
    );
  }
  return null;
};

export function GrowthChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {/* Header */}
      <div className="mb-6 space-y-2">
        <h3 className="text-xl md:text-2xl font-semibold text-white">
          Evolução de Tráfego Orgânico
        </h3>
        <p className="text-sm text-neutral-400">
          Crescimento consistente de Janeiro/2022 a Junho/2024
        </p>
      </div>

      {/* Chart Container */}
      <div className="relative rounded-2xl bg-neutral-900/50 ring-1 ring-white/5 p-6 backdrop-blur-sm">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={trafficData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.05)"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              stroke="rgba(255,255,255,0.3)"
              tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
              tickLine={{ stroke: "rgba(255,255,255,0.1)" }}
              interval="preserveStartEnd"
              minTickGap={50}
            />
            <YAxis
              stroke="rgba(255,255,255,0.3)"
              tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
              tickLine={{ stroke: "rgba(255,255,255,0.1)" }}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip content={<CustomTooltip />} />

            {/* Total Sessions Line */}
            <Line
              type="monotone"
              dataKey="sessions"
              stroke="rgba(163, 163, 163, 0.5)"
              strokeWidth={2}
              dot={false}
              animationDuration={2000}
              animationBegin={0}
            />

            {/* Organic Sessions Line */}
            <Line
              type="monotone"
              dataKey="organicSessions"
              stroke="#34d399"
              strokeWidth={3}
              dot={false}
              animationDuration={2000}
              animationBegin={300}
            />

            {/* Event Markers */}
            <ReferenceDot
              x="Set/22"
              y={3500}
              r={6}
              fill="#34d399"
              stroke="#fff"
              strokeWidth={2}
            />
            <ReferenceDot
              x="Jul/23"
              y={6500}
              r={6}
              fill="#34d399"
              stroke="#fff"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="text-sm text-neutral-300">Tráfego Orgânico</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-neutral-500" />
            <span className="text-sm text-neutral-300">Tráfego Total</span>
          </div>
        </div>
      </div>

      {/* Key Metrics Summary */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="rounded-xl bg-neutral-900/30 ring-1 ring-white/5 p-4">
          <p className="text-xs text-neutral-400 mb-1">Início</p>
          <p className="text-2xl font-semibold text-white font-mono">800</p>
          <p className="text-xs text-neutral-500">sessões/mês</p>
        </div>
        <div className="rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20 p-4">
          <p className="text-xs text-emerald-400 mb-1">Final</p>
          <p className="text-2xl font-semibold text-white font-mono">8.7k</p>
          <p className="text-xs text-emerald-400/70">sessões/mês</p>
        </div>
        <div className="rounded-xl bg-neutral-900/30 ring-1 ring-white/5 p-4">
          <p className="text-xs text-neutral-400 mb-1">Crescimento</p>
          <p className="text-2xl font-semibold text-emerald-400 font-mono">+988%</p>
          <p className="text-xs text-neutral-500">em 2.5 anos</p>
        </div>
      </div>
    </motion.div>
  );
}
