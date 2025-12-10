"use client";

import { motion } from "framer-motion";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { TrendingDown, TrendingUp } from "lucide-react";

interface KeywordData {
  term: string;
  category: string;
  before: number;
  after: number;
  trend: number[];
}

const keywordsData: KeywordData[] = [
  {
    term: "cursos gratuitos online",
    category: "Educação",
    before: 45,
    after: 4,
    trend: [45, 38, 32, 22, 15, 8, 4],
  },
  {
    term: "Zippi",
    category: "Marca",
    before: 78,
    after: 12,
    trend: [78, 65, 52, 38, 28, 18, 12],
  },
  {
    term: "cursos online certificado",
    category: "Educação",
    before: 56,
    after: 8,
    trend: [56, 48, 39, 28, 19, 12, 8],
  },
  {
    term: "aprender online grátis",
    category: "Educação",
    before: 62,
    after: 15,
    trend: [62, 54, 43, 34, 26, 19, 15],
  },
  {
    term: "plataforma de cursos",
    category: "Plataforma",
    before: 41,
    after: 7,
    trend: [41, 35, 28, 21, 14, 10, 7],
  },
];

interface SparklineProps {
  data: number[];
  color: string;
}

function Sparkline({ data, color }: SparklineProps) {
  const chartData = data.map((value, index) => ({ value, index }));

  return (
    <ResponsiveContainer width="100%" height={32}>
      <LineChart data={chartData} margin={{ top: 2, right: 0, bottom: 2, left: 0 }}>
        <Line
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2}
          dot={false}
          isAnimationActive={true}
          animationDuration={1500}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function KeywordsTable() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="space-y-2">
        <h3 className="text-xl md:text-2xl font-semibold text-white">
          Top 5 Keywords com Maior Crescimento
        </h3>
        <p className="text-sm text-neutral-400">
          Palavras-chave que saíram de posições baixas para o top 15 do Google
        </p>
      </div>

      {/* Table Container */}
      <div className="relative rounded-2xl bg-neutral-900/50 ring-1 ring-white/5 overflow-hidden backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                <th className="px-6 py-4 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider">
                  Palavra-chave
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider">
                  Categoria
                </th>
                <th className="px-6 py-4 text-center text-xs font-medium text-neutral-400 uppercase tracking-wider">
                  Antes
                </th>
                <th className="px-6 py-4 text-center text-xs font-medium text-neutral-400 uppercase tracking-wider">
                  Depois
                </th>
                <th className="px-6 py-4 text-center text-xs font-medium text-neutral-400 uppercase tracking-wider">
                  Melhoria
                </th>
                <th className="px-6 py-4 text-center text-xs font-medium text-neutral-400 uppercase tracking-wider hidden md:table-cell">
                  Tendência
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {keywordsData.map((keyword, index) => {
                const improvement = keyword.before - keyword.after;
                const improvementPercent = ((improvement / keyword.before) * 100).toFixed(0);

                return (
                  <motion.tr
                    key={keyword.term}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group hover:bg-white/5 transition-colors"
                  >
                    {/* Keyword */}
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">
                          {keyword.term}
                        </span>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-800 text-neutral-300">
                        {keyword.category}
                      </span>
                    </td>

                    {/* Before Position */}
                    <td className="px-6 py-4 text-center">
                      <span className="text-sm font-mono text-neutral-400">
                        #{keyword.before}
                      </span>
                    </td>

                    {/* After Position */}
                    <td className="px-6 py-4 text-center">
                      <span className="text-sm font-mono text-emerald-400 font-semibold">
                        #{keyword.after}
                      </span>
                    </td>

                    {/* Improvement */}
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-1">
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm font-semibold text-emerald-400 font-mono">
                          +{improvement}
                        </span>
                        <span className="text-xs text-neutral-500">
                          ({improvementPercent}%)
                        </span>
                      </div>
                    </td>

                    {/* Trend Sparkline */}
                    <td className="px-6 py-4 hidden md:table-cell">
                      <div className="w-24 mx-auto">
                        <Sparkline data={keyword.trend} color="#34d399" />
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Note */}
        <div className="md:hidden px-6 py-3 bg-neutral-900/50 border-t border-white/5">
          <p className="text-xs text-neutral-500 text-center">
            Deslize para ver mais →
          </p>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl bg-neutral-900/30 ring-1 ring-white/5 p-4">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <p className="text-xs text-neutral-400">Posição Média Antes</p>
          </div>
          <p className="text-2xl font-semibold text-white font-mono">#56</p>
        </div>

        <div className="rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20 p-4">
          <div className="flex items-center gap-2 mb-1">
            <TrendingDown className="w-4 h-4 text-emerald-400" />
            <p className="text-xs text-emerald-400">Posição Média Depois</p>
          </div>
          <p className="text-2xl font-semibold text-white font-mono">#9</p>
        </div>

        <div className="rounded-xl bg-neutral-900/30 ring-1 ring-white/5 p-4">
          <p className="text-xs text-neutral-400 mb-1">Melhoria Média</p>
          <p className="text-2xl font-semibold text-emerald-400 font-mono">-47 posições</p>
        </div>
      </div>
    </div>
  );
}
