"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  AlertTriangle,
  TrendingDown,
  Users,
  MessageSquare,
  Target,
  Lightbulb,
  Zap,
  DollarSign,
} from "lucide-react";

const situationCards = [
  {
    title: "Alcance quase inexistente",
    body: "Menos de 5 mil seguidores em um mercado que exige autoridade digital.",
    icon: Users,
  },
  {
    title: "Zero receita digital",
    body: "Todo faturamento dependia de indicações offline; nada vinha dos canais digitais.",
    icon: DollarSign,
  },
  {
    title: "Engajamento de 0,5%",
    body: "5x menor que a média. Postagens caíam no vazio.",
    icon: TrendingDown,
  },
  {
    title: "Conteúdo sem direção",
    body: "Temas aleatórios, sem consistência ou propósito estratégico.",
    icon: Target,
  },
  {
    title: "Nenhum funil estruturado",
    body: "Sem caminho claro de interesse para relacionamento e venda.",
    icon: AlertTriangle,
  },
  {
    title: "Problema real",
    body: "Traduzir expertise técnica em conteúdo que agrega valor e conecta.",
    icon: MessageSquare,
  },
];

const oportunidades = [
  {
    title: "Estratégia personalizada",
    body: "Diagnóstico profundo para criar um plano único, não genérico.",
    icon: Lightbulb,
  },
  {
    title: "Conteúdo de alto valor",
    body: "Transformar conhecimento técnico em histórias que educam e vendem.",
    icon: Zap,
  },
  {
    title: "Funil de vendas",
    body: "Estruturar jornada clara: awareness → consideration → decision.",
    icon: Target,
  },
  {
    title: "IA como aceleradora",
    body: "Escalar produção mantendo autenticidade com ferramentas de IA.",
    icon: MessageSquare,
  },
];

const imageShadow =
  "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

export function SituationSection() {
  return (
    <section id="situacao" className="relative py-24 bg-neutral-900/50">
      {/* Gradiente de transição do Hero (escuro para claro) */}
      <div
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-neutral-950 to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Separador decorativo (para distinguir de ObjectivesSection) */}
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10">
            <span className="text-sm text-neutral-300">01 — Situação</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            Autoridade invisível,{" "}
            <span className="text-emerald-400">receita zero</span>
          </h2>
          <p className="text-neutral-400 max-w-3xl mx-auto text-lg">
            Alfredo tinha anos de expertise em comércio exterior, mas ninguém
            sabia disso. Zero presença digital, zero conversões.
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
              O clássico caso de "saber muito, mas ninguém sabe que você sabe".
              Alfredo tinha conhecimento profundo em importação, mas sua presença
              digital era praticamente inexistente. Posts esporádicos, sem
              estratégia, sem funil, sem resultados.
            </motion.p>

            {/* Pull quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-2xl bg-neutral-900/60 ring-1 ring-white/10"
            >
              <p className="text-sm text-emerald-400 mb-2">Diagnóstico</p>
              <p className="font-display text-xl text-white leading-relaxed">
                "Expertise técnica não se traduz automaticamente em autoridade
                digital. É preciso estratégia, consistência e um funil claro."
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
                src="/media/trendly/trendly_situation.png"
                alt="Pessoa frustrada com redes sociais"
                fill
                className={`object-cover grayscale brightness-[0.7] hover:grayscale-[20%] hover:brightness-100 transition-all duration-500 ${imageShadow}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
            </motion.div>
          </div>

          {/* Right - Problem cards */}
          <div className="space-y-4">
            <p className="text-sm text-neutral-500 uppercase tracking-wider mb-6">
              Problemas identificados no diagnóstico
            </p>
            {situationCards.map((item, idx) => (
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
            <span className="text-sm text-emerald-400">Oportunidade</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-white">
            Estratégia personalizada +{" "}
            <span className="text-emerald-400">execução com IA</span>
          </h3>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            A solução não era só "postar mais", mas criar um sistema completo de
            conteúdo, funil e conversão.
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

export default SituationSection;
