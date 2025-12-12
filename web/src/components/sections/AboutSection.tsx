"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Rocket, Smartphone, Bot, Code } from "lucide-react";

const imageShadow =
  "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

// Timeline images configuration (same for all locales)
const timelineImages = [
  [
    { src: "https://images.unsplash.com/photo-1595867818082-083862f3d630?w=500&h=500&fit=crop", alt: "Munique, Alemanha" },
    { src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=500&h=500&fit=crop", alt: "International students" },
  ],
  [
    { src: "/media/timeline/grandes_marcas_1.jpeg", alt: "ESPM Projects - Class" },
    { src: "/media/timeline/grandes_marcas_2.png", alt: "Globoplay" },
    { src: "/media/timeline/grandes_marcas_3.jpeg", alt: "ESPM Projects - Brands" },
    { src: "/media/timeline/grandes_marcas_4.png", alt: "UNESCO" },
  ],
  [
    { src: "/media/timeline/espm_formation2.jpeg", alt: "University" },
    { src: "/media/timeline/espm_formation.jpeg", alt: "Studies" },
  ],
  [
    { src: "/media/timeline/zippi_growth_1.jpg", alt: "Zippi Team" },
    { src: "/media/timeline/zippi2.png", alt: "Data dashboard" },
  ],
  [
    { src: "/media/timeline/track_field2.jpg", alt: "Retail store" },
    { src: "/media/timeline/track&field_1.jpeg", alt: "Team collaboration" },
  ],
  [
    { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=500&fit=crop", alt: "Coding" },
    { src: "/media/timeline/trendly.jpeg", alt: "AI Technology" },
    { src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=500&fit=crop", alt: "Tech workspace" },
    { src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&h=500&fit=crop", alt: "Startup" },
  ],
];

export function AboutSection() {
  const t = useTranslations('home.about');
  const timelineRawData = t.raw('timeline') as Array<{
    year: string;
    title: string;
    description: string;
    details?: string;
    projects?: string[];
  }>;

  // Build timeline data with JSX content
  const timelineData = timelineRawData.map((item, index) => ({
    title: item.year,
    content: (
      <div>
        <h4 className="text-lg md:text-2xl font-semibold text-white mb-2">
          {item.title}
        </h4>
        <p className={`text-sm font-normal text-neutral-400 ${item.details || item.projects ? 'mb-4' : 'mb-8'}`}>
          {item.description}
        </p>
        {item.details && (
          <p className="mb-8 text-sm text-neutral-300">
            {item.details}
          </p>
        )}
        {item.projects && (
          <div className="mb-8">
            {item.projects.map((project, i) => {
              const icons = [Rocket, Smartphone, Bot, Code];
              const Icon = icons[i];
              return (
                <div key={i} className="flex items-center gap-2 text-sm text-neutral-300 mb-1">
                  <Icon className="w-4 h-4 text-emerald-400" /> {project}
                </div>
              );
            })}
          </div>
        )}
        <div className="grid grid-cols-2 gap-4">
          {timelineImages[index].map((img, i) => (
            <Image
              key={i}
              src={img.src}
              alt={img.alt}
              width={500}
              height={500}
              className={`h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 grayscale hover:grayscale-0 transition-all duration-300 ${imageShadow}`}
            />
          ))}
        </div>
      </div>
    ),
  }));
  return (
    <SectionContainer className="px-6 md:px-12 overflow-hidden">
      <div className="space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10">
            <span className="text-sm text-neutral-300">{t('badge')}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            {t('headline.part1')} <span className="text-emerald-400">{t('headline.highlight')}</span>
          </h2>
          <p className="text-neutral-400 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative w-full overflow-clip">
          <Timeline data={timelineData} />
        </div>
      </div>
    </SectionContainer>
  );
}

export default AboutSection;
