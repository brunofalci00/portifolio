"use client";

import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface SentimentData {
  name: string;
  value: number;
  color: string;
  [key: string]: string | number;
}

const sentimentData: SentimentData[] = [
  { name: "Positivo", value: 73, color: "#34d399" }, // emerald-400
  { name: "Neutro", value: 18, color: "#a3a3a3" }, // neutral-400
  { name: "Negativo", value: 9, color: "#f87171" }, // red-400
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="bg-neutral-900/95 backdrop-blur-sm border border-white/10 rounded-xl p-3 shadow-2xl">
        <p className="text-sm text-white">
          <span style={{ color: data.payload.color }}>●</span> {data.name}:{" "}
          <span className="font-semibold">{data.value}%</span>
        </p>
      </div>
    );
  }
  return null;
};

const renderLegend = (props: any) => {
  const { payload } = props;
  return (
    <div className="flex items-center justify-center gap-6 mt-4">
      {payload.map((entry: any, index: number) => (
        <div key={`legend-${index}`} className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm text-neutral-300">
            {entry.value}: {sentimentData.find(d => d.name === entry.value)?.value || 0}%
          </span>
        </div>
      ))}
    </div>
  );
};

export function SentimentChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {/* Header */}
      <div className="mb-6 space-y-2 text-center">
        <h3 className="text-xl md:text-2xl font-semibold text-white">
          Distribuição de Sentimento
        </h3>
        <p className="text-sm text-neutral-400">
          Análise das avaliações após implementação
        </p>
      </div>

      {/* Chart Container */}
      <div className="relative rounded-2xl bg-neutral-900/50 ring-1 ring-white/5 p-6 backdrop-blur-sm">
        <div className="relative">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart role="img" aria-label="Gráfico de distribuição de sentimento das avaliações: 73% positivo, 18% neutro, 9% negativo">
              <Pie
                data={sentimentData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
                animationBegin={0}
                animationDuration={1500}
                label={({ name, value }) => `${value}%`}
                labelLine={false}
              >
                {sentimentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend content={renderLegend} />
            </PieChart>
          </ResponsiveContainer>

          {/* Center Label - Positioned relative to chart */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ marginBottom: '40px' }}>
            <div className="text-center">
              <p className="text-xs text-neutral-500 leading-tight">Sentimento</p>
              <p className="text-2xl font-semibold text-emerald-400 font-display leading-tight">
                Positivo
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20 p-4 text-center">
          <p className="text-xs text-emerald-400 mb-1">Positivo</p>
          <p className="text-2xl font-semibold text-white font-mono">73%</p>
        </div>
        <div className="rounded-xl bg-neutral-900/30 ring-1 ring-white/5 p-4 text-center">
          <p className="text-xs text-neutral-400 mb-1">Neutro</p>
          <p className="text-2xl font-semibold text-white font-mono">18%</p>
        </div>
        <div className="rounded-xl bg-red-500/10 ring-1 ring-red-500/20 p-4 text-center">
          <p className="text-xs text-red-400 mb-1">Negativo</p>
          <p className="text-2xl font-semibold text-white font-mono">9%</p>
        </div>
      </div>
    </motion.div>
  );
}
