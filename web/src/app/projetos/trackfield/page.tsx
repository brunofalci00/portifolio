"use client";

import { SideNavigation } from "@/components/layout/SideNavigation";
import { SectionConfig } from "@/hooks/useActiveSection";
import { HeroSection } from "@/components/trackfield/HeroSection";
import { ContextSection } from "@/components/trackfield/ContextSection";
import { ProcessSection } from "@/components/trackfield/ProcessSection";
import { ResultsSection } from "@/components/trackfield/ResultsSection";
import { ConclusionSection } from "@/components/trackfield/ConclusionSection";
import { CTASection } from "@/components/trackfield/CTASection";

const trackfieldSections: SectionConfig[] = [
  { id: "topo", label: "Visão Geral" },
  { id: "contexto", label: "Contexto" },
  { id: "processo", label: "Processo" },
  { id: "resultados", label: "Resultados" },
  { id: "conclusao", label: "Conclusão" },
  { id: "cta", label: "Contato" },
];

export default function TrackFieldCasePage() {
  return (
    <>
      <SideNavigation sections={trackfieldSections} />

      <div className="bg-neutral-950 text-white" id="topo">
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
