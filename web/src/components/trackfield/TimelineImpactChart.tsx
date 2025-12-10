'use client';

import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const timelineData = [
  { week: 'Sem 1', time: 240, phase: 'Discovery' },
  { week: 'Sem 2', time: 240, phase: 'Análise' },
  { week: 'Sem 3', time: 180, phase: 'Automação', milestone: '1ª versão' },
  { week: 'Sem 4', time: 120, phase: 'Automação' },
  { week: 'Sem 5', time: 60, phase: 'Iteração', milestone: 'Feedback' },
  { week: 'Sem 6', time: 45, phase: 'Iteração' },
  { week: 'Sem 7', time: 35, phase: 'Refinamento' },
  { week: 'Sem 8', time: 30, phase: 'Meta', milestone: '87% ✓' },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="p-4 rounded-xl bg-neutral-900/95 ring-1 ring-white/10 backdrop-blur-sm">
        <p className="text-sm text-emerald-400 font-medium mb-1">{data.week}</p>
        <p className="text-white text-lg font-display">{data.time} minutos</p>
        <p className="text-xs text-neutral-500 mt-1">{data.phase}</p>
        {data.milestone && (
          <p className="text-xs text-emerald-400 mt-2">📍 {data.milestone}</p>
        )}
      </div>
    );
  }
  return null;
};

export function TimelineImpactChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="relative w-full h-96 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/60 backdrop-blur-sm p-6 flex flex-col"
    >
      {/* Header */}
      <div className="mb-6 space-y-2 flex-shrink-0">
        <h3 className="text-xl font-light text-white">Evolução do Tempo - 8 Semanas</h3>
        <p className="text-sm text-neutral-500">De 4 horas semanais para 30 minutos</p>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={timelineData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="timeGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#737373" stopOpacity={0.6} />
              <stop offset="60%" stopColor="#525252" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#10b981" stopOpacity={0.8} />
            </linearGradient>
            <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#737373" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
          <XAxis
            dataKey="week"
            stroke="#737373"
            tick={{ fill: '#737373', fontSize: 12 }}
          />
          <YAxis
            stroke="#737373"
            tick={{ fill: '#737373', fontSize: 12 }}
            label={{
              value: 'Tempo (min)',
              angle: -90,
              position: 'insideLeft',
              style: { fill: '#737373', fontSize: 12 }
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine
            y={30}
            stroke="#10b981"
            strokeDasharray="5 5"
            label={{
              value: 'Meta: 30min',
              fill: '#10b981',
              fontSize: 11,
              position: 'right'
            }}
          />
          <Area
            type="monotone"
            dataKey="time"
            stroke="url(#strokeGradient)"
            strokeWidth={3}
            fill="url(#timeGradient)"
            animationDuration={2000}
            animationEasing="ease-out"
          />
        </AreaChart>
      </ResponsiveContainer>

    </motion.div>
  );
}
