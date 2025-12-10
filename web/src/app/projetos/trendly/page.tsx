"use client";

import { SideNavigation } from "@/components/layout/SideNavigation";
import { SectionConfig } from "@/hooks/useActiveSection";
import { HeroSection } from "@/components/trendly/HeroSection";
import { SituationSection } from "@/components/trendly/SituationSection";
import { ObjectivesSection } from "@/components/trendly/ObjectivesSection";
import { ActionTabs } from "@/components/trendly/ActionTabs";
import { ResultsSection } from "@/components/trendly/ResultsSection";
import { ChallengesSection } from "@/components/trendly/ChallengesSection";
import { LearningsSection } from "@/components/trendly/LearningsSection";
import { ReflectionSection } from "@/components/trendly/ReflectionSection";
import { CTASection } from "@/components/trendly/CTASection";

const trendlySections: SectionConfig[] = [
  { id: "topo", label: "Visão Geral" },
  { id: "situacao", label: "Situação" },
  { id: "tarefa", label: "Tarefa" },
  { id: "acao", label: "Ação" },
  { id: "resultado", label: "Resultado" },
  { id: "desafios", label: "Desafios" },
  { id: "aprendizados", label: "Aprendizados" },
  { id: "reflexao", label: "Reflexão" },
  { id: "cta", label: "Contato" },
];

export default function TrendlyCasePage() {
  return (
    <>
      <SideNavigation sections={trendlySections} />

      <div className="bg-neutral-950 text-white" id="topo">
        <HeroSection />
        <SituationSection />
        <ObjectivesSection />
        <ActionTabs />
        <ResultsSection />
        <ChallengesSection />
        <LearningsSection />
        <ReflectionSection />
        <CTASection />
      </div>
    </>
  );
}
