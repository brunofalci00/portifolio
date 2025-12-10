"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Brain,
  Lightbulb,
  Rocket,
  Puzzle,
  MessageSquare,
  Target,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import ExpandableCards, { type Card } from "@/components/smoothui/expandable-cards";

const aprendizados = [
  {
    title: "Full-Stack ownership",
    body: "Visão 360°: design, dev, dados, UX, growth. Cada decisão impacta todo o sistema.",
    icon: Brain,
  },
  {
    title: "Ship early, iterate often",
    body: "26 dias para lançar > meses planejando; feedback real é o maior professor.",
    icon: Rocket,
  },
  {
    title: "Constraints criam criatividade",
    body: "Limites de PWA, tempo e recursos geraram soluções melhores (WhatsApp, simplicidade).",
    icon: Puzzle,
  },
  {
    title: "Falar com usuários",
    body: "Feedback direto pelo WhatsApp e app direcionou priorização e roadmap.",
    icon: MessageSquare,
  },
  {
    title: "Qualidade no que importa",
    body: "Dashboard impecável, demais telas funcionais: balancear valor vs tempo.",
    icon: Target,
  },
];

const roadmapCards: Card[] = [
  {
    id: 1,
    title: "Integração Apple Health",
    image: "/media/projects/bora/roadmap-1.png",
    content:
      "Atender demanda principal e reforçar diferencial de saúde nativa.",
  },
  {
    id: 2,
    title: "Gamificação ampliada",
    image: "/media/projects/bora/roadmap-2.png",
    content:
      "Animações/feedbacks tipo Duolingo para aumentar engajamento diário.",
  },
  {
    id: 3,
    title: "Onboarding ainda mais guiado",
    image: "/media/projects/bora/roadmap-3.png",
    content:
      "Refinar primeiras sessões e mensagens para reduzir churn inicial.",
  },
];

const imageShadow =
  "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

export function LearningsSection() {
  return (
    <section id="aprendizados" className="py-24 bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10">
            <span className="text-sm text-neutral-300">07 — Aprendizados</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            O que ficou depois do{" "}
            <span className="text-emerald-400">projeto</span>
          </h2>
          <p className="text-neutral-400 max-w-3xl mx-auto text-lg">
            Lições práticas que vão além do código: mentalidade, processo e
            visão de produto.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start mb-20">
          {/* Left - Learnings grid */}
          <div className="space-y-6">
            <p className="text-sm text-neutral-500 uppercase tracking-wider">
              5 aprendizados-chave
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {aprendizados.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group p-6 rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 hover:ring-emerald-500/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20 w-fit mb-4 group-hover:bg-emerald-500/20 transition-colors">
                    <item.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h4 className="font-medium text-white text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              ))}

              {/* Featured quote card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="sm:col-span-2 p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 ring-1 ring-emerald-500/20"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-emerald-400" />
                  <p className="text-sm text-emerald-400 uppercase tracking-wider">
                    Insight principal
                  </p>
                </div>
                <p className="text-white text-lg leading-relaxed italic">
                  "Cada feature foi um experimento. Cada erro foi uma aula. Cada
                  usuário que voltou foi uma validação de que estou no caminho
                  certo."
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/media/projects/bora/mockup.png"
                alt="Bora App - Mockup Final"
                fill
                className={`object-cover grayscale brightness-[0.7] hover:grayscale-[20%] hover:brightness-100 transition-all duration-500 ${imageShadow}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />

              {/* Overlay info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="p-4 rounded-xl bg-neutral-950/80 backdrop-blur-sm ring-1 ring-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Brain className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Growth mindset</p>
                      <p className="text-sm text-neutral-500">
                        Aprender fazendo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30"
            >
              <span className="text-sm text-emerald-400">5 lições</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Roadmap Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 ring-1 ring-blue-500/20">
            <span className="text-sm text-blue-400">Roadmap</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-white">
            Próximos passos do{" "}
            <span className="text-blue-400">produto</span>
          </h3>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Melhorias planejadas com base no feedback dos usuários.
          </p>
        </motion.div>

        {/* Roadmap expandable cards */}
        <ExpandableCards
          cards={roadmapCards}
          className="mt-8"
          cardClassName="border-blue-500/20 hover:border-blue-500/40"
        />

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 rounded-2xl bg-neutral-950/50 ring-1 ring-white/5"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex -space-x-2">
              {[Brain, Rocket, Target].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-neutral-800 ring-2 ring-neutral-950 flex items-center justify-center"
                >
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
              ))}
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">
                Aprendizado contínuo
              </p>
              <p className="text-neutral-500 text-sm">
                O Bora é um laboratório vivo: cada iteração traz novos insights.
              </p>
            </div>
            <div className="flex gap-2">
              {["Mentalidade", "Processo", "Produto"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-neutral-800 text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LearningsSection;
