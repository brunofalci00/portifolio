"use client";

import { useEffect, useState, useCallback } from "react";

export interface SectionConfig {
  id: string;
  label: string;
}

interface UseActiveSectionReturn {
  activeId: string;
  sectionNumber: string;
}

const defaultSections: SectionConfig[] = [
  { id: "home", label: "Home" },
  { id: "impacto", label: "Impacto" },
  { id: "parceiros", label: "Parceiros" },
  { id: "skills", label: "Skills" },
  { id: "projetos", label: "Projetos" },
  { id: "jornada", label: "Jornada" },
  { id: "contato", label: "Contato" },
];

export function useActiveSection(
  sections: SectionConfig[] = defaultSections
): UseActiveSectionReturn {
  const [activeId, setActiveId] = useState(sections[0]?.id || "home");

  const getSectionNumber = useCallback(
    (id: string): string => {
      const index = sections.findIndex((s) => s.id === id);
      return String(index + 1).padStart(2, "0");
    },
    [sections]
  );

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Ativa quando seção está no centro da viewport
      threshold: 0,
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Observa todas as seções
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  return {
    activeId,
    sectionNumber: getSectionNumber(activeId),
  };
}

export default useActiveSection;
