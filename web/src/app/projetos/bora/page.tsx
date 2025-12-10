"use client";

import { SideNavigation } from "@/components/layout/SideNavigation";
import { SectionConfig } from "@/hooks/useActiveSection";
import { HeroSection } from "@/components/bora/HeroSection";
import { ProblemSection } from "@/components/bora/ProblemSection";
import { ObjectivesSection } from "@/components/bora/ObjectivesSection";
import { ActionTabs } from "@/components/bora/ActionTabs";
import { ResultsSection } from "@/components/bora/ResultsSection";
import { ChallengesSection } from "@/components/bora/ChallengesSection";
import { LearningsSection } from "@/components/bora/LearningsSection";
import { ReflectionSection } from "@/components/bora/ReflectionSection";
import { CTASection } from "@/components/bora/CTASection";

const boraSections: SectionConfig[] = [
  { id: "topo", label: "Visão Geral" },
  { id: "problema", label: "Problema" },
  { id: "objetivos", label: "Objetivos" },
  { id: "acao", label: "Ação" },
  { id: "resultados", label: "Resultados" },
  { id: "desafios", label: "Desafios" },
  { id: "aprendizados", label: "Aprendizados" },
  { id: "reflexao", label: "Reflexão" },
  { id: "cta", label: "Contato" },
];

export default function BoraCasePage() {
  return (
    <>
      <SideNavigation sections={boraSections} />

      <div className="bg-neutral-950 text-white" id="topo">
        <HeroSection />
        <ProblemSection />
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
