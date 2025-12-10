"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Target, FileText, TrendingUp } from "lucide-react";
import CardSwap, { Card } from "@/components/ui/CardSwap";

interface CardData {
  keyword: string;
  description: string;
  icon: React.ComponentType<{ className: string }>;
  image: string;
}

const cardData: CardData[] = [
  {
    keyword: "SEO Strategy",
    description: "Long-tail content strategy",
    icon: Target,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    keyword: "Content Optimization",
    description: "Surgical on-page optimization",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    keyword: "Data-Driven Growth",
    description: "Analytics and performance metrics",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6">
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
          <span className="text-neutral-300">Zippi</span>
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
                Case Study · SEO Growth · 2022-2024
              </span>
            </motion.div>

            {/* Hero Metric - Reduced Size */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -30 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3"
            >
              <div className="font-display text-6xl sm:text-7xl lg:text-8xl font-light text-emerald-400 tracking-tight">
                +150%
              </div>
              <p className="text-lg lg:text-xl text-neutral-300 font-light">
                Crescimento orgânico em 60 dias
              </p>
            </motion.div>

            {/* Headline - Simplified */}
            <motion.h1
              initial={{ opacity: 0, y: 20, x: -30 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-tight tracking-tight"
            >
              De invisível para{" "}
              <span className="text-emerald-400">Top 5 no Google</span>
            </motion.h1>

            {/* Subtitle - Compact */}
            <motion.p
              initial={{ opacity: 0, y: 20, x: -30 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base lg:text-lg text-neutral-400 max-w-lg"
            >
              Estratégia long-tail, otimização cirúrgica e execução consistente.
            </motion.p>
          </div>

          {/* Column 2: CardSwap - Right */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: 30 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="relative order-2 lg:order-none min-h-[350px] lg:min-h-0"
            style={{ isolation: "isolate" }}
          >
            <CardSwap
              width="100%"
              height={280}
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={true}
              easing="power2.inOut"
            >
              {cardData.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <Card
                    key={index}
                    className="relative h-[280px] w-full rounded-2xl overflow-hidden bg-neutral-900/80 backdrop-blur-sm ring-1 ring-white/10 group"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={card.image}
                        alt=""
                        className="w-full h-full object-cover opacity-40 grayscale group-hover:opacity-60 group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-6 space-y-3">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-emerald-400" />
                      </div>

                      {/* Keyword */}
                      <h3 className="font-display text-2xl font-light text-white group-hover:text-emerald-400 transition-colors">
                        {card.keyword}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-neutral-400">
                        {card.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </CardSwap>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
