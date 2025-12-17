"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const containerRef = useRef(null);

  // Parallax effect for photo
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="topo" ref={containerRef} className="relative min-h-screen flex items-center justify-center py-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-950" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-sm text-neutral-500 mb-8"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/#projetos" className="hover:text-white transition-colors">
            Projetos
          </Link>
          <span>/</span>
          <span className="text-neutral-300">TrackField</span>
        </motion.div>

        {/* Two-Column Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Column 1: Condensed Content - Left */}
          <div className="space-y-6 lg:space-y-8">
            {/* Badge - Consolidated */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -30 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10"
            >
              <span className="text-xs lg:text-sm text-neutral-300">
                Case Study · Automação · 2024
              </span>
            </motion.div>

            {/* Hero Metric - Reduced Size */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -30 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-neutral-500">
                  4h
                </span>
                <span className="text-2xl text-emerald-400 font-light">→</span>
                <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-emerald-400">
                  30min
                </span>
              </div>
            </motion.div>

            {/* Headline - Simplified */}
            <motion.h1
              initial={{ opacity: 0, y: 20, x: -30 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-tight tracking-tight"
            >
              Automatizando{" "}
              <span className="text-emerald-400">80% da consolidação centralizada</span> de dados de 300+
              franquias
            </motion.h1>

            {/* Subtitle - Compact */}
            <motion.p
              initial={{ opacity: 0, y: 20, x: -30 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base lg:text-lg text-neutral-400 max-w-lg"
            >
              Apps Script + Google Sheets: 4h semanais → 30min
            </motion.p>
          </div>

          {/* Column 2: Hero Photo - Right */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: 30 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{ y }}
            className="relative order-2 lg:order-none"
          >
            {/* Main Photo Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-white/10 group">
              {/* Photo */}
              <Image
                src="/media/timeline/track&field_hero.png"
                alt="Time Track&Field trabalhando em colaboração"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
                quality={90}
                priority
              />

              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />

              {/* Floating badge with logo */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/95 backdrop-blur-sm p-3 ring-2 ring-emerald-500/30 shadow-xl flex items-center justify-center"
              >
                <Image
                  src="/media/logos/trackfield-logo.png"
                  alt="Track&Field"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </motion.div>

              {/* Hand-drawn arrow (SVG inline) - ELEMENTO 1/3 */}
              <motion.svg
                className="absolute -bottom-6 -left-8 w-24 h-24 text-emerald-400 pointer-events-none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
                viewBox="0 0 100 100"
              >
                <path
                  d="M 10,50 Q 30,20 60,40 T 85,30"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="2,3"
                />
                <path d="M 82,28 L 88,32 L 83,36" stroke="currentColor" strokeWidth="2" fill="none" />
              </motion.svg>

              {/* Annotation text */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                className="absolute -bottom-8 -left-4 text-xs text-emerald-400 font-light italic"
              >
                O time em ação
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
