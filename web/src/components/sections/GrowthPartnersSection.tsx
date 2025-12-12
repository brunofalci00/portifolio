"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { LogoLoop } from "@/components/LogoLoop";
import { SectionContainer } from "@/components/layout/SectionContainer";

const logos = [
  { src: "/media/logos/globoplay-logo.png", alt: "Globoplay" },
  { src: "/media/logos/fazendafuturo-logo.png", alt: "Fazenda Futuro" },
  { src: "/media/logos/trackfield-logo.png", alt: "Track & Field" },
  { src: "/media/logos/unesco-logo.png", alt: "UNESCO" },
  { src: "/media/logos/havaianas-logo.png", alt: "Havaianas" },
  { src: "/media/logos/zippi-logo.webp", alt: "Zippi" },
  { src: "/media/logos/pg-logo.png", alt: "P&G" },
  { src: "/media/logos/ambev-logo.png", alt: "Ambev" },
];

export function GrowthPartnersSection() {
  const t = useTranslations('home.partners');
  return (
    <SectionContainer className="py-12 md:py-16 px-6 md:px-12">
      <div className="space-y-10">
        {/* Headline apenas */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-white text-center"
        >
          {t('headline.part1')} <span className="text-emerald-400">{t('headline.highlight')}</span>
        </motion.h2>

        {/* Logo Carousel com fundo claro */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-8 px-4 rounded-2xl bg-white/95 backdrop-blur-sm"
        >
          <LogoLoop
            logos={logos}
            speed={60}
            logoHeight={40}
            gap={64}
            pauseOnHover
            fadeOut
            fadeOutColor="white"
            className="[&_img]:opacity-90 [&_img]:hover:opacity-100 [&_img]:transition-all [&_img]:duration-300"
          />
        </motion.div>
      </div>
    </SectionContainer>
  );
}

export default GrowthPartnersSection;
