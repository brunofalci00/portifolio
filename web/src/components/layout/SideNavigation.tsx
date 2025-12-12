"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useActiveSection, SectionConfig } from "@/hooks/useActiveSection";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

interface SideNavigationProps {
  sections?: SectionConfig[];
}

export function SideNavigation({ sections }: SideNavigationProps) {
  const t = useTranslations('common.nav');

  // Build navigation sections from translations
  const navSections: SectionConfig[] = [
    { id: "home", label: t('home') },
    { id: "impacto", label: t('impact') },
    { id: "parceiros", label: t('partners') },
    { id: "skills", label: t('skills') },
    { id: "projetos", label: t('projects') },
    { id: "jornada", label: t('journey') },
    { id: "contato", label: t('contact') },
  ];

  const finalSections = sections || navSections;
  const { activeId } = useActiveSection(finalSections);
  const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });
  const navRef = useRef<HTMLElement>(null);

  // Calculate indicator position when activeId changes
  useEffect(() => {
    if (!navRef.current) return;

    const activeLink = navRef.current.querySelector(`[data-section="${activeId}"]`);
    if (!activeLink) return;

    const rect = activeLink.getBoundingClientRect();
    const container = navRef.current.getBoundingClientRect();

    setIndicatorStyle({
      top: rect.top - container.top,
      height: rect.height,
    });
  }, [activeId]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <aside className="hidden md:fixed md:block md:left-8 lg:left-12 md:top-1/2 md:-translate-y-1/2 z-40">
      <div className="flex flex-col gap-8">
        {/* Navigation Links */}
        <nav ref={navRef} className="relative space-y-3 text-sm leading-6">
          {/* Animated indicator bar */}
          <motion.div
            className="absolute left-0 w-0.5 bg-emerald-400 rounded-full"
            initial={false}
            animate={{
              top: indicatorStyle.top,
              height: indicatorStyle.height,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          />

          {finalSections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <motion.a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleNavClick(e, section.id)}
                animate={{
                  scale: isActive ? 1.05 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
                className={`
                  relative block font-medium font-sans
                  pl-4 z-10
                  transition-opacity duration-400
                  hover:opacity-80
                  ${isActive
                    ? "text-emerald-400 opacity-100"
                    : "text-neutral-400 opacity-60"
                  }
                `}
                data-section={section.id}
              >
                {section.label}
              </motion.a>
            );
          })}
        </nav>

        {/* Language Switcher */}
        <div className="pl-4">
          <LanguageSwitcher />
        </div>
      </div>
    </aside>
  );
}

export default SideNavigation;
