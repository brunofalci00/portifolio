"use client";

import { useRef } from "react";

import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactNumbersSection } from "@/components/sections/ImpactNumbersSection";
import { GrowthPartnersSection } from "@/components/sections/GrowthPartnersSection";
import { SkillsSummarySection } from "@/components/sections/SkillsSummarySection";
import { ProjectsImpactSection } from "@/components/sections/ProjectsImpactSection";
import { TransitionSection } from "@/components/sections/TransitionSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollProgress } from "@/components/scroll/ScrollProgress";
import { FixedBackground } from "@/components/layout/FixedBackground";
import { SideNavigation } from "@/components/layout/SideNavigation";
import { SideSocials } from "@/components/layout/SideSocials";
import { SectionQuote } from "@/components/layout/SectionQuote";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen text-foreground">
      {/* Fixed Background with opacity transition */}
      <FixedBackground />

      {/* Scroll Progress Bar */}
      <ScrollProgress variant="bar" position="top" />

      {/* Side Navigation - Left */}
      <SideNavigation />

      {/* Social Links & Section Number - Right */}
      <SideSocials />

      <main className="md:pl-28 lg:pl-36">
        {/* Home / Hero Section */}
        <section id="home">
          <HeroSection onScrollToProjects={scrollToProjects} />
        </section>

        {/* Quote: Hero → Impact */}
        <SectionQuote
          quote="Estratégia sem execução é alucinação. Execução sem estratégia é desperdício."
        />

        {/* Impacto Section */}
        <section id="impacto">
          <ImpactNumbersSection />
        </section>

        {/* Parceiros Section */}
        <section id="parceiros">
          <GrowthPartnersSection />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <SkillsSummarySection />
        </section>

        {/* Quote: Skills → Projetos */}
        <SectionQuote
          quote="O melhor portfólio é a soma dos problemas resolvidos e do impacto gerado."
        />

        {/* Projetos Section */}
        <section id="projetos">
          <ProjectsImpactSection ref={projectsRef} />
        </section>

        {/* Transition to Jornada */}
        <TransitionSection
          title="Jornada"
          subtitle="Do fundamento à execução"
        />

        {/* Jornada / About Section */}
        <section id="jornada">
          <AboutSection />
        </section>

        {/* Contato Section */}
        <section id="contato">
          <ContactSection />
        </section>
      </main>

      <footer className="py-8 border-t border-white/10 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} Bruno Falci. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/brunofalci"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:brunofalci2000@gmail.com"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
