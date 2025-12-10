"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";

const projects = [
  {
    title: "Growth Hacking com IA: Aumento de +50% em Receita e Visibilidade",
    subtitle: "Trendly (Consultoria) — Hypothesis → Test → Result → Learning",
    link: "/projetos/trendly",
    category: "Growth & IA",
    image: "/media/projects/trendly_project.png",
  },
  {
    title: "Product Builder: Gestão Full-Stack de App de Hábito com 100+ Usuários",
    subtitle: "Produto construído do zero com ownership completo",
    link: "/projetos/bora",
    category: "Full-Stack",
    image: "/media/projects/bora_project.png",
  },
  {
    title: "Automações de Funil: Chatbot de Qualificação de Leads B2B",
    subtitle: "Leads qualificados e tempo de atendimento reduzido",
    link: "/projetos/chatbot-timezz",
    category: "Automação",
    image: "/media/projects/chatbot_project.png",
  },
  {
    title: "Otimização de Aquisição: Aumento de Visibilidade Orgânica e Performance",
    subtitle: "Zippi (SEO) — tração orgânica e conteúdo direcionado",
    link: "/projetos/zippi",
    category: "SEO",
    image: "/media/projects/zippi_seo.png",
  },
  {
    title: "Empatia com o Usuário: Gestão de Comunidade e Melhoria de Reviews",
    subtitle: "Zippi (Reviews/Comunidade) — ratings e feedbacks positivos",
    link: "/projetos/zippi-reviews",
    category: "Community",
    image: "/media/projects/zippi_reviews.png",
  },
  {
    title: "Eficiência Operacional: Remodelação e Automações de Varejo",
    subtitle: "Track & Field — playbooks e processos enxutos",
    link: "/projetos/trackfield",
    category: "Operações",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
  },
];

interface ProjectsImpactSectionProps {
  id?: string;
}

export const ProjectsImpactSection = forwardRef<
  HTMLDivElement,
  ProjectsImpactSectionProps
>(function ProjectsImpactSection({ id = "projetos" }, ref) {
  return (
    <SectionContainer ref={ref} className="px-6 md:px-12">
      <div className="space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10">
            <span className="text-sm text-neutral-300">Projetos de Impacto</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            Prova de Execução e{" "}
            <span className="text-emerald-400">Resultados</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Cada card segue a lógica STAR ou Hypothesis → Test → Result →
            Learning, conectando estratégia, execução e métricas.
          </p>
        </motion.div>

        {/* Grid 2x3 mobile, 3x2 desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.6) }}
            >
              <a
                href={project.link}
                className="group relative block overflow-hidden rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300"
              >
                {/* Image with grayscale effect */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale brightness-[0.7] group-hover:grayscale-[20%] group-hover:brightness-100 group-hover:scale-[1.05] transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />

                  {/* Glossy overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)",
                    }}
                  />

                  {/* Category badge - positioned on image */}
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm ring-1 ring-white/20">
                      <span className="text-xs text-white uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  {/* Title */}
                  <h3 className="font-display text-lg font-medium text-white group-hover:text-emerald-400 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {project.subtitle}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm text-emerald-400 pt-2">
                    <span>Ver Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
});

export default ProjectsImpactSection;
