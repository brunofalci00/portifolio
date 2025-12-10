"use client";

import { SideNavigation } from "@/components/layout/SideNavigation";
import { SectionConfig } from "@/hooks/useActiveSection";
import { HeroSection } from "@/components/zippi-reviews/HeroSection";
import { ContextSection } from "@/components/zippi-reviews/ContextSection";
import { ProcessSection } from "@/components/zippi-reviews/ProcessSection";
import { ResultsSection } from "@/components/zippi-reviews/ResultsSection";
import { ConclusionSection } from "@/components/zippi-reviews/ConclusionSection";
import { CTASection } from "@/components/zippi-reviews/CTASection";

const zippiReviewsSections: SectionConfig[] = [
  { id: "topo", label: "Visão Geral" },
  { id: "contexto", label: "Contexto" },
  { id: "processo", label: "Processo" },
  { id: "resultados", label: "Resultados" },
  { id: "conclusao", label: "Conclusão" },
  { id: "cta", label: "Contato" },
];

export default function ZippiReviewsCasePage() {
  return (
    <>
      <SideNavigation sections={zippiReviewsSections} />

      <div className="bg-neutral-950 text-white md:pl-32 lg:pl-48" id="topo">
        <HeroSection />
        <ContextSection />
        <ProcessSection />
        <ResultsSection />
        <ConclusionSection />
        <CTASection />
      </div>
    </>
  );
}
