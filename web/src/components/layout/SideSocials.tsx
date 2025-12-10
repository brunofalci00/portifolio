"use client";

import { useActiveSection, SectionConfig } from "@/hooks/useActiveSection";
import { Linkedin, Mail, MessageCircle } from "lucide-react";

const defaultSections: SectionConfig[] = [
  { id: "home", label: "Home" },
  { id: "impacto", label: "Impacto" },
  { id: "parceiros", label: "Parceiros" },
  { id: "skills", label: "Skills" },
  { id: "projetos", label: "Projetos" },
  { id: "jornada", label: "Jornada" },
  { id: "contato", label: "Contato" },
];

interface SocialLink {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://linkedin.com/in/brunofalci",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:brunofalci2000@gmail.com",
    icon: Mail,
    label: "Email",
  },
  {
    href: "https://wa.me/5511997627772",
    icon: MessageCircle,
    label: "WhatsApp",
  },
];

interface SideSocialsProps {
  sections?: SectionConfig[];
}

export function SideSocials({ sections = defaultSections }: SideSocialsProps) {
  const { sectionNumber } = useActiveSection(sections);

  return (
    <aside className="fixed right-6 sm:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-40 hidden md:block">
      {/* Section Number */}
      <div className="flex items-center justify-end mb-8">
        <div className="mr-3 h-px w-10 bg-neutral-400/60" />
        <div className="text-sm font-medium font-sans text-white">
          {sectionNumber}
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex flex-col items-end gap-4">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label={link.label}
            >
              <Icon className="w-5 h-5 text-white" />
            </a>
          );
        })}
      </div>
    </aside>
  );
}

export default SideSocials;
