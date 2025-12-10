"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  AlertTriangle,
  CheckCircle,
  Smartphone,
  Users,
  MessageSquare,
  Lightbulb,
  Target,
  Zap,
  DollarSign,
} from "lucide-react";

const problemas = [
  {
    title: "Apps complicados demais",
    body: "Muitas features e configurações geram ansiedade e fricção.",
    icon: AlertTriangle,
  },
  {
    title: "Gamificação exagerada",
    body: "Sistemas de pontos complexos que precisam de tutorial.",
    icon: CheckCircle,
  },
  {
    title: "Interfaces sobrecarregadas",
    body: "Botões e notificações em excesso tornam a rotina cansativa.",
    icon: Smartphone,
  },
  {
    title: "Zero personalização real",
    body: "Todo mundo recebe a mesma experiência genérica.",
    icon: Users,
  },
  {
    title: "Feedback distante",
    body: "Usuário só percebe progresso em gráficos frios.",
    icon: MessageSquare,
  },
];

const oportunidades = [
  {
    title: "Simplicidade e intuitividade",
    body: "Reduzir fricção e deixar o fluxo de hábitos claro e direto.",
    icon: Lightbulb,
  },
  {
    title: "Acompanhamento em tempo real",
    body: "WhatsApp como canal vivo para lembretes e feedback imediato.",
    icon: Zap,
  },
  {
    title: "Público 16-35",
    body: "Estudantes, CLT e autônomos buscando rotina equilibrada.",
    icon: Target,
  },
  {
    title: "Modelo de negócio",
    body: "Assinatura anual de R$ 47,90 para sustentabilidade.",
    icon: DollarSign,
  },
];

const imageShadow =
  "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

export function ProblemSection() {
  return (
    <section id="problema" className="py-24 bg-neutral-950">
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
            <span className="text-sm text-neutral-300">01 — O Problema</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            Apps de hábitos são{" "}
            <span className="text-emerald-400">complicados demais</span>
          </h2>
          <p className="text-neutral-400 max-w-3xl mx-auto text-lg">
            A dor real do usuário: fricção, excesso de configurações e falta de
            intuitividade. E isso é irônico.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left - Text + Image */}
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-neutral-400 text-lg leading-relaxed"
            >
              Você já tentou usar um app para criar uma rotina melhor?
              Provavelmente sim. E provavelmente desistiu em menos de uma
              semana. Não foi culpa sua — o problema está no design desses apps.
            </motion.p>

            {/* Pull quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-2xl bg-neutral-900/60 ring-1 ring-white/10"
            >
              <p className="text-sm text-emerald-400 mb-2">Pull quote</p>
              <p className="font-display text-xl text-white leading-relaxed">
                "Se um app de produtividade está te atrapalhando mais do que
                ajudando, ele falhou no trabalho dele."
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative aspect-video rounded-2xl overflow-hidden"
            >
              <Image
                src="/media/projects/bora/portifolio-12.png"
                alt="Bora App - Problema e Oportunidade"
                fill
                className={`object-cover grayscale brightness-[0.7] hover:grayscale-[20%] hover:brightness-100 transition-all duration-500 ${imageShadow}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
            </motion.div>
          </div>

          {/* Right - Problem cards */}
          <div className="space-y-4">
            <p className="text-sm text-neutral-500 uppercase tracking-wider mb-6">
              O que descobri pesquisando o mercado
            </p>
            {problemas.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-5 rounded-xl bg-neutral-900/40 ring-1 ring-white/5 hover:ring-white/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-red-500/10 ring-1 ring-red-500/20 group-hover:bg-red-500/20 transition-colors">
                    <item.icon className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-neutral-500">{item.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Oportunidade Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20">
            <span className="text-sm text-emerald-400">02 — Oportunidade</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-white">
            Simplicidade e acompanhamento em{" "}
            <span className="text-emerald-400">tempo real</span>
          </h3>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Transformar rotina em algo leve: UX enxuto, WhatsApp integrado e
            proposta de valor clara.
          </p>
        </motion.div>

        {/* Oportunidade cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {oportunidades.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 hover:ring-emerald-500/30 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20 w-fit mb-4 group-hover:bg-emerald-500/20 transition-colors">
                <item.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h4 className="font-medium text-white mb-2">{item.title}</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
