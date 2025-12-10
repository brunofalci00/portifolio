'use client';

import { motion } from 'framer-motion';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';

const data = [
  {
    name: 'Antes',
    value: 240, // 4 horas em minutos
    fill: '#525252', // neutral-600
  },
  {
    name: 'Depois',
    value: 30,
    fill: '#10b981', // emerald-500
  },
];

export function RadialBeforeAfterChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative w-full p-8 rounded-2xl bg-gradient-to-br from-neutral-900/60 to-neutral-950/60 ring-1 ring-emerald-500/20 backdrop-blur-sm overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent" />

      {/* Header */}
      <div className="relative z-10 mb-8 text-center space-y-2">
        <h3 className="text-2xl font-light text-white">
          De <span className="text-neutral-400">4 Horas</span> para{" "}
          <span className="text-emerald-400">30 Minutos</span>
        </h3>
        <p className="text-sm text-neutral-500">
          Redução de <span className="text-emerald-400 font-medium">87%</span> no tempo semanal
        </p>
      </div>

      {/* Radial Chart */}
      <div className="relative z-10">
        <ResponsiveContainer width="100%" height={400}>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="30%"
            outerRadius="90%"
            barSize={40}
            data={data}
            startAngle={180}
            endAngle={0}
          >
            <PolarAngleAxis type="number" domain={[0, 240]} angleAxisId={0} tick={false} />
            <RadialBar
              background
              dataKey="value"
              cornerRadius={10}
              animationDuration={2000}
              animationBegin={0}
              isAnimationActive={true}
            />
            <Legend
              iconSize={12}
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{
                paddingTop: '20px',
              }}
              formatter={(value, entry: any) => {
                const minutes = entry.payload.value;
                const hours = Math.floor(minutes / 60);
                const mins = minutes % 60;
                return (
                  <span className="text-sm text-neutral-300">
                    {value}: {hours > 0 ? `${hours}h` : ''}{mins > 0 ? `${mins}min` : ''}
                  </span>
                );
              }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      {/* Impact Metric */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 mt-6 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20">
          <span className="text-sm text-neutral-400">Economia anual:</span>
          <span className="text-xl font-display text-emerald-400">208 horas</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
