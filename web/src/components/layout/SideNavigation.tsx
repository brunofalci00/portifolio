"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useActiveSection, SectionConfig } from "@/hooks/useActiveSection";

const navSections: SectionConfig[] = [
  { id: "home", label: "Home" },
  { id: "impacto", label: "Impacto" },
  { id: "parceiros", label: "Parceiros" },
  { id: "skills", label: "Skills" },
  { id: "projetos", label: "Projetos" },
  { id: "jornada", label: "Jornada" },
  { id: "contato", label: "Contato" },
];

interface SideNavigationProps {
  sections?: SectionConfig[];
}

export function SideNavigation({ sections = navSections }: SideNavigationProps) {
  const { activeId } = useActiveSection(sections);
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
    <aside className="fixed left-6 sm:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-40 hidden md:block">
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

        {sections.map((section) => {
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

    </aside>
  );
}

export default SideNavigation;
