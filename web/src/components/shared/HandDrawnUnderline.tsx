'use client';

import { motion } from 'framer-motion';

interface Props {
  width?: number;
  color?: string;
  delay?: number;
}

export function HandDrawnUnderline({
  width = 200,
  color = '#10b981',
  delay = 0
}: Props) {
  return (
    <motion.svg
      width={width}
      height="8"
      viewBox={`0 0 ${width} 8`}
      className="absolute -bottom-1 left-1/2 -translate-x-1/2"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.6 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
    >
      <path
        d={`M 2,4 Q ${width/4},5 ${width/2},4 T ${width-2},5`}
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}
