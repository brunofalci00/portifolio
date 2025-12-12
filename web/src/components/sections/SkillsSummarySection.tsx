"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Lightbulb, Code2, Users } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";

// Icon and style configurations that don't need translation
const pillarStyles = [
  {
    icon: Lightbulb,
    gradient: "from-neutral-900 to-neutral-800",
    bulletColor: "bg-emerald-500",
    iconBg: "bg-emerald-500",
    iconColor: "text-white",
    borderColor: "ring-emerald-500/30",
  },
  {
    icon: Code2,
    gradient: "from-neutral-800 to-neutral-700",
    bulletColor: "bg-white",
    iconBg: "bg-white",
    iconColor: "text-neutral-900",
    borderColor: "ring-white/20",
  },
  {
    icon: Users,
    gradient: "from-emerald-600 to-emerald-700",
    bulletColor: "bg-emerald-200",
    iconBg: "bg-white",
    iconColor: "text-emerald-600",
    borderColor: "ring-emerald-400/30",
  },
];

interface PillarCardProps {
  pillar: {
    title: string;
    description: string;
    skills: string[];
    icon: typeof Lightbulb;
    gradient: string;
    bulletColor: string;
    iconBg: string;
    iconColor: string;
    borderColor: string;
  };
  index: number;
}

function PillarCard({ pillar, index }: PillarCardProps) {
  const Icon = pillar.icon;

  return (
    <div className={`bg-gradient-to-br ${pillar.gradient} min-h-[280px] md:min-h-[320px] ring-1 ${pillar.borderColor}`}>
      <div className="flex flex-col md:flex-row items-center justify-between h-full p-8 md:p-12 gap-8">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          {/* Title */}
          <h3 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight`}>
            {pillar.title}
          </h3>

          {/* Description */}
          <p className="text-neutral-300 text-lg md:text-xl max-w-lg">
            {pillar.description}
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {pillar.skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 text-neutral-200"
              >
                <span className={`w-2 h-2 rounded-full ${pillar.bulletColor} shrink-0`} />
                <span className="text-sm md:text-base">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Large Icon/Illustration */}
        <div className="shrink-0 relative">
          {/* Background circle */}
          <div className={`w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-3xl bg-white/5 backdrop-blur-sm flex items-center justify-center ring-1 ${pillar.borderColor}`}>
            {/* Monitor/Device illustration */}
            <div className="relative">
              {/* Screen outline */}
              <div className="w-24 h-20 md:w-36 md:h-28 lg:w-44 lg:h-32 rounded-lg border-[3px] md:border-4 border-white/30 flex items-center justify-center">
                {/* Screen content lines */}
                <div className="space-y-2 md:space-y-3">
                  <div className="w-12 md:w-20 lg:w-24 h-1.5 md:h-2 bg-white/30 rounded" />
                  <div className="w-8 md:w-14 lg:w-16 h-1.5 md:h-2 bg-white/20 rounded" />
                </div>
              </div>
              {/* Stand */}
              <div className="mx-auto w-6 md:w-8 h-2 md:h-3 bg-white/30 rounded-b" />
              <div className="mx-auto w-10 md:w-14 h-1 md:h-1.5 bg-white/20 rounded" />
            </div>
          </div>

          {/* Floating icon badge */}
          <div
            className={`absolute -top-3 -right-3 md:-top-4 md:-right-4 w-14 h-14 md:w-16 md:h-16 rounded-2xl ${pillar.iconBg} shadow-lg flex items-center justify-center`}
          >
            <Icon className={`w-7 h-7 md:w-8 md:h-8 ${pillar.iconColor}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SkillsSummarySection() {
  const t = useTranslations('home.skills');
  const pillarsData = t.raw('pillars') as Array<{
    title: string;
    description: string;
    skills: string[];
  }>;

  // Merge translated content with styles
  const pillars = pillarsData.map((pillar, index) => ({
    ...pillar,
    ...pillarStyles[index],
  }));

  return (
    <section id="skills" className="relative">
      {/* Header - Outside ScrollStack */}
      <div className="px-6 md:px-12 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10">
            <span className="text-sm text-neutral-300">{t('badge')}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            {t('headline.part1')}{" "}
            <span className="text-emerald-400">{t('headline.highlight')}</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            {t('description')}
          </p>
        </motion.div>
      </div>

      {/* ScrollStack Cards */}
      <div className="px-4 md:px-6">
        <ScrollStack
          useWindowScroll={true}
          itemDistance={80}
          itemScale={0.025}
          itemStackDistance={25}
          stackPosition="30%"
          scaleEndPosition="15%"
          baseScale={0.9}
          blurAmount={2}
        >
          {pillars.map((pillar, index) => (
            <ScrollStackItem key={pillar.title}>
              <PillarCard pillar={pillar} index={index} />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}

export default SkillsSummarySection;
