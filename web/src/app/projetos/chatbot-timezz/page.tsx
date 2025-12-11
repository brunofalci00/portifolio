"use client";

import { SideNavigation } from "@/components/layout/SideNavigation";
import { SectionConfig } from "@/hooks/useActiveSection";
import { HeroSection } from "@/components/chatbot-timezz/HeroSection";
import { SituationSection } from "@/components/chatbot-timezz/SituationSection";
import { ObjectivesSection } from "@/components/chatbot-timezz/ObjectivesSection";
import { StrategySection } from "@/components/chatbot-timezz/StrategySection";
import { ResultsSection } from "@/components/chatbot-timezz/ResultsSection";
import { LearningsSection } from "@/components/chatbot-timezz/LearningsSection";
import { CTASection } from "@/components/chatbot-timezz/CTASection";

const chatbotSections: SectionConfig[] = [
  { id: "topo", label: "Visão Geral" },
  { id: "situacao", label: "Situação" },
  { id: "objetivos", label: "Objetivos" },
  { id: "estrategia", label: "Estratégia" },
  { id: "resultados", label: "Resultados" },
  { id: "aprendizados", label: "Aprendizados" },
];

export default function ChatbotTimezzCasePage() {
  return (
    <>
      <SideNavigation sections={chatbotSections} />

      <div className="bg-neutral-950 text-white md:pl-32 lg:pl-48">
        <HeroSection />
        <SituationSection />
        <ObjectivesSection />
        <StrategySection />
        <ResultsSection />
        <LearningsSection />
        <CTASection />
      </div>
    </>
  );
}
