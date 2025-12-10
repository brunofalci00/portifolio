"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  color?: "emerald" | "blue" | "purple" | "neutral";
  decimals?: number;
}

const colorClasses = {
  emerald: {
    bg: "bg-emerald-500/10",
    ring: "ring-emerald-500/20",
    icon: "text-emerald-400",
    text: "text-emerald-400",
    glow: "group-hover:shadow-emerald-500/20",
  },
  blue: {
    bg: "bg-blue-500/10",
    ring: "ring-blue-500/20",
    icon: "text-blue-400",
    text: "text-blue-400",
    glow: "group-hover:shadow-blue-500/20",
  },
  purple: {
    bg: "bg-purple-500/10",
    ring: "ring-purple-500/20",
    icon: "text-purple-400",
    text: "text-purple-400",
    glow: "group-hover:shadow-purple-500/20",
  },
  neutral: {
    bg: "bg-neutral-900/30",
    ring: "ring-white/5",
    icon: "text-neutral-400",
    text: "text-white",
    glow: "group-hover:shadow-white/10",
  },
};

export function MetricCard({
  icon: Icon,
  label,
  value,
  suffix = "",
  prefix = "",
  duration = 2000,
  color = "emerald",
  decimals = 0,
}: MetricCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const spring = useSpring(0, {
    duration: duration,
    bounce: 0,
  });

  const display = useTransform(spring, (current) =>
    decimals > 0
      ? current.toFixed(decimals)
      : Math.floor(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  const classes = colorClasses[color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className={`group relative rounded-2xl ${classes.bg} ring-1 ${classes.ring} p-6 transition-all duration-300 hover:shadow-xl ${classes.glow}`}
    >
      {/* Icon with Pulse Animation */}
      <motion.div
        initial={{ scale: 1 }}
        whileInView={isInView ? { scale: [1, 1.2, 1] } : { scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-4"
      >
        <Icon className={`w-8 h-8 ${classes.icon} transition-transform group-hover:scale-110`} />
      </motion.div>

      {/* Label */}
      <p className="text-sm text-neutral-400 mb-2">{label}</p>

      {/* Animated Value */}
      <div className="flex items-baseline gap-1">
        {prefix && (
          <span className={`text-3xl md:text-4xl font-semibold ${classes.text} font-mono`}>
            {prefix}
          </span>
        )}
        <motion.span
          className={`text-3xl md:text-4xl font-semibold ${classes.text} font-mono`}
        >
          {display}
        </motion.span>
        {suffix && (
          <span className={`text-2xl md:text-3xl font-semibold ${classes.text} font-mono`}>
            {suffix}
          </span>
        )}
      </div>

      {/* Hover Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
    </motion.div>
  );
}
