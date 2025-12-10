"use client";

import { SideNavigation } from "@/components/layout/SideNavigation";
import { SectionConfig } from "@/hooks/useActiveSection";
import { HeroSection } from "@/components/zippi/HeroSection";
import { ContextSection } from "@/components/zippi/ContextSection";
import { ProcessSection } from "@/components/zippi/ProcessSection";
import { ResultsSection } from "@/components/zippi/ResultsSection";
import { ConclusionSection } from "@/components/zippi/ConclusionSection";
import { CTASection } from "@/components/zippi/CTASection";

const zippiSections: SectionConfig[] = [
  { id: "topo", label: "Visão Geral" },
  { id: "contexto", label: "Contexto" },
  { id: "processo", label: "Processo" },
  { id: "resultados", label: "Resultados" },
  { id: "conclusao", label: "Conclusão" },
  { id: "cta", label: "Contato" },
];

export default function ZippiCasePage() {
  return (
    <>
      <SideNavigation sections={zippiSections} />

      <div className="bg-neutral-950 text-white md:pl-28 lg:pl-36" id="topo">
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
