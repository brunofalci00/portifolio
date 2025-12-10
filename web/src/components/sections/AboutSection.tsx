"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Rocket, Smartphone, Bot, Code } from "lucide-react";

const imageShadow =
  "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

const timelineData = [
  {
    title: "2015",
    content: (
      <div>
        <h4 className="text-lg md:text-2xl font-semibold text-white mb-2">
          Curso de Alemão Internacional
        </h4>
        <p className="mb-8 text-sm font-normal text-neutral-400">
          Munique, Alemanha (EF Education First). Abertura para experiências
          internacionais e aprendizado contínuo. Primeira experiência vivendo no
          exterior, desenvolvendo independência e visão global.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1595867818082-083862f3d630?w=500&h=500&fit=crop"
            alt="Munique, Alemanha"
            width={500}
            height={500}
            className={`h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 grayscale hover:grayscale-0 transition-all duration-300 ${imageShadow}`}
          />
          <Image
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=500&h=500&fit=crop"
            alt="Estudantes internacionais"
            width={500}
            height={500}
            className={`h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 grayscale hover:grayscale-0 transition-all duration-300 ${imageShadow}`}
          />
        </div>
      </div>
    ),
  },
  {
    title: "2020-2024",
    content: (
      <div>
        <h4 className="text-lg md:text-2xl font-semibold text-white mb-2">
          Projetos em Grandes Marcas
        </h4>
        <p className="mb-4 text-sm font-normal text-neutral-400">
          Marketing de alta complexidade, posicionamento e branding em grande
          escala com marcas reconhecidas globalmente, em parceria com a ESPM.
        </p>
        <p className="mb-8 text-sm text-neutral-300">
          Trabalhei com marcas como Globoplay, Fazenda Futuro, UNESCO, Havaianas e P&G
          em projetos de marketing, branding e comunicação estratégica.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/media/timeline/grandes_marcas_1.jpeg"
            alt="Projetos ESPM - Turma"
            width={500}
            height={500}
            className={`h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 grayscale hover:grayscale-0 transition-all duration-300 ${imageShadow}`}
          />
          <Image
            src="/media/timeline/grandes_marcas_2.png"
            alt="Globoplay"
            width={500}
            height={500}
            className={`h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 grayscale hover:grayscale-0 transition-all duration-300 ${imageShadow}`}
          />
          <Image
            src="/media/timeline/grandes_marcas_3.jpeg"
            alt="Projetos ESPM - Marcas"
            width={500}
            height={500}
            className={`h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 grayscale hover:grayscale-0 transition-all duration-300 ${imageShadow}`}
          />
          <Image
            src="/media/timeline/grandes_marcas_4.png"
            alt="UNESCO"
            width={500}
            height={500}
            className={`h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 grayscale hover:grayscale-0 transition-all duration-300 ${imageShadow}`}
          />
        </div>
      </div>
    ),
  },
  {
    title: "2020-2024",
    content: (
      <div>
        <h4 className="text-lg md:text-2xl font-semibold text-white mb-2">
          Graduação em Comunicação (ESPM)
        </h4>
        <p className="mb-8 text-sm font-normal text-neutral-400">
          Fundação sólida em estratégia de comunicação, marketing e pensamento
          crítico. Uma das melhores escolas de marketing do Brasil, com foco em
          criatividade e estratégia de negócios.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/media/timeline/espm_formation2.jpeg"
            alt="Universidade"
            width={500}
            height={500}
            className={`h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 grayscale hover:grayscale-0 transition-all duration-300 ${imageShadow}`}
          />
          <Image
            src="/media/timeline/espm_formation.jpeg"
            alt="Estudos"
            width={500}
            height={500}
            className={`h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 grayscale hover:grayscale-0 transition-all duration-300 ${imageShadow}`}
          />
        </div>
      </div>
    ),
  },
  {
    title: "2022-2024",
    content: (
      <div>
        <h4 className="text-lg md:text-2xl font-semibold text-white mb-2">
          Zippi - Growth
        </h4>
        <p className="mb-8 text-sm font-normal text-neutral-400">
          SEO, performance de marca, marketing de influência, community
          management e análise de dados.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/media/timeline/zippi_growth_1.jpg"
            alt="Equipe Zippi"
            width={500}
            height={500}
            className={`h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 grayscale hover:grayscale-0 transition-all duration-300 ${imageShadow}`}
          />
          <Image
            src="/media/timeline/zippi2.png"
            alt="Data dashboard"
            width={500}
            height={500}
            className={`h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 grayscale hover:grayscale-0 transition-all duration-300 ${imageShadow}`}
          />
        </div>
      </div>
    ),
  },
  {
    title: "2024-2025",
    content: (
      <div>
        <h4 className="text-lg md:text-2xl font-semibold text-white mb-2">
          Track &amp; Field - Varejo
        </h4>
        <p className="mb-8 text-sm font-normal text-neutral-400">
          Gestão de marketing de varejo, franquias, eventos e treinamentos.
          Visão omnichannel online + offline.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/media/timeline/track_field2.jpg"
            alt="Retail store"
            width={500}
            height={500}
            className={`h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 grayscale hover:grayscale-0 transition-all duration-300 ${imageShadow}`}
          />
          <Image
            src="/media/timeline/track&field_1.jpeg"
            alt="Team collaboration"
            width={500}
            height={500}
            className={`h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 grayscale hover:grayscale-0 transition-all duration-300 ${imageShadow}`}
          />
        </div>
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div>
        <h4 className="text-lg md:text-2xl font-semibold text-white mb-2">
          Empreendedor Builder
        </h4>
        <p className="mb-4 text-sm font-normal text-neutral-400">
          Execução full-stack, IA e liderança autônoma. Construindo produtos do
          zero com ownership completo.
        </p>
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-neutral-300 mb-1">
            <Rocket className="w-4 h-4 text-emerald-400" /> Trendly - Consultoria
            de Growth com IA
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-300 mb-1">
            <Smartphone className="w-4 h-4 text-emerald-400" /> App de Hábito - Produto
            Full-Stack
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-300 mb-1">
            <Bot className="w-4 h-4 text-emerald-400" /> Chatbot B2B -
            Automações de Funil
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-300">
            <Code className="w-4 h-4 text-emerald-400" /> Sites e Landing Pages
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=500&fit=crop"
            alt="Coding"
            width={500}
            height={500}
            className={`h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 grayscale hover:grayscale-0 transition-all duration-300 ${imageShadow}`}
          />
          <Image
            src="/media/timeline/trendly.jpeg"
            alt="AI Technology"
            width={500}
            height={500}
            className={`h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 grayscale hover:grayscale-0 transition-all duration-300 ${imageShadow}`}
          />
          <Image
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=500&fit=crop"
            alt="Tech workspace"
            width={500}
            height={500}
            className={`h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 grayscale hover:grayscale-0 transition-all duration-300 ${imageShadow}`}
          />
          <Image
            src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&h=500&fit=crop"
            alt="Startup"
            width={500}
            height={500}
            className={`h-20 w-full rounded-lg object-cover md:h-44 lg:h-60 grayscale hover:grayscale-0 transition-all duration-300 ${imageShadow}`}
          />
        </div>
      </div>
    ),
  },
];

export function AboutSection() {
  return (
    <SectionContainer className="px-6 md:px-12 overflow-hidden">
      <div className="space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10">
            <span className="text-sm text-neutral-300">Jornada</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            De ESPM ao <span className="text-emerald-400">Product Builder</span>
          </h2>
          <p className="text-neutral-400 max-w-3xl mx-auto">
            Progressão de estudante de comunicação para profissional de
            marketing e empreendedor builder, conectando experiências em grande
            escala, omnichannel e execução full-stack.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative w-full overflow-clip">
          <Timeline data={timelineData} />
        </div>
      </div>
    </SectionContainer>
  );
}

export default AboutSection;
