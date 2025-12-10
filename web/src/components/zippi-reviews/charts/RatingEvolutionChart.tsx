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

const ratingData = [
  { month: "Jun/22", rating: 3.5, reviewCount: 1200 },
  { month: "Jul/22", rating: 3.6, reviewCount: 1350 },
  { month: "Ago/22", rating: 3.8, reviewCount: 1500, event: "Sistema de Resposta Implementado" },
  { month: "Set/22", rating: 4.0, reviewCount: 1680 },
  { month: "Out/22", rating: 4.2, reviewCount: 1850 },
  { month: "Nov/22", rating: 4.5, reviewCount: 2100 },
  { month: "Dez/22", rating: 4.7, reviewCount: 2350, event: "Meta de 4.5+ Atingida" },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const improvement = data.rating
      ? ((data.rating - ratingData[0].rating) / ratingData[0].rating * 100).toFixed(1)
      : 0;

    return (
      <div className="bg-neutral-900/95 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-2xl">
        <p className="text-sm font-mono text-neutral-400 mb-2">{label}</p>
        <div className="space-y-1">
          <p className="text-sm text-white">
            <span className="text-emerald-400">⭐</span> Rating:{" "}
            <span className="font-semibold text-emerald-400">{data.rating?.toFixed(1)}</span>
          </p>
          <p className="text-sm text-white">
            <span className="text-neutral-500">●</span> Reviews:{" "}
            <span className="font-semibold">{data.reviewCount?.toLocaleString()}</span>
          </p>
          <p className="text-xs text-emerald-400 mt-2">
            +{improvement}% desde o início
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

export function RatingEvolutionChart() {
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
          Evolução do Rating na Play Store
        </h3>
        <p className="text-sm text-neutral-400">
          De 3.5 para 4.7 estrelas em 6 meses de execução focada
        </p>
      </div>

      {/* Chart Container */}
      <div className="relative rounded-2xl bg-neutral-900/50 ring-1 ring-white/5 p-6 backdrop-blur-sm">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={ratingData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            role="img"
            aria-label="Gráfico de evolução do rating da Zippi na Play Store de 3.5 para 4.7 estrelas entre junho e dezembro de 2022"
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
            />
            <YAxis
              domain={[3.0, 5.0]}
              ticks={[3.0, 3.5, 4.0, 4.5, 5.0]}
              stroke="rgba(255,255,255,0.3)"
              tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
              tickLine={{ stroke: "rgba(255,255,255,0.1)" }}
              tickFormatter={(value) => value.toFixed(1)}
            />
            <Tooltip content={<CustomTooltip />} />

            {/* Rating Line */}
            <Line
              type="monotone"
              dataKey="rating"
              stroke="#34d399"
              strokeWidth={3}
              dot={false}
              animationDuration={2000}
              animationBegin={300}
            />

            {/* Event Markers */}
            <ReferenceDot
              x="Ago/22"
              y={3.8}
              r={6}
              fill="#34d399"
              stroke="#fff"
              strokeWidth={2}
            />
            <ReferenceDot
              x="Dez/22"
              y={4.7}
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
            <span className="text-sm text-neutral-300">Rating Play Store</span>
          </div>
        </div>
      </div>

      {/* Key Metrics Summary */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="rounded-xl bg-neutral-900/30 ring-1 ring-white/5 p-4">
          <p className="text-xs text-neutral-400 mb-1">Rating Inicial</p>
          <p className="text-2xl font-semibold text-white font-mono">3.5⭐</p>
          <p className="text-xs text-neutral-500">Junho 2022</p>
        </div>
        <div className="rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20 p-4">
          <p className="text-xs text-emerald-400 mb-1">Rating Final</p>
          <p className="text-2xl font-semibold text-white font-mono">4.7⭐</p>
          <p className="text-xs text-emerald-400/70">Dezembro 2022</p>
        </div>
        <div className="rounded-xl bg-neutral-900/30 ring-1 ring-white/5 p-4">
          <p className="text-xs text-neutral-400 mb-1">Melhoria</p>
          <p className="text-2xl font-semibold text-emerald-400 font-mono">+34.3%</p>
          <p className="text-xs text-neutral-500">em 6 meses</p>
        </div>
      </div>
    </motion.div>
  );
}
