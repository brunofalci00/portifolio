"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Lightbulb,
  Fingerprint,
  Cpu,
  Search,
  Handshake,
  Brain,
  Sparkles,
  Quote,
} from "lucide-react";

const aprendizados = [
  {
    title: "Não existe estratégia única",
    body: "Diagnóstico profundo e customização total para contexto específico. Templates genéricos não funcionam.",
    icon: Fingerprint,
  },
  {
    title: "IA amplifica o humano",
    body: "Escala com automação, mas a conexão real vem da autenticidade. IA é ferramenta, não substituto.",
    icon: Cpu,
  },
  {
    title: "Estratégia + pensamento crítico",
    body: "Objetivos claros, questionamento contínuo, validação com dados. Sem achismo.",
    icon: Search,
  },
  {
    title: "Cliente educado é parceiro",
    body: "Explicar o porquê de cada decisão cria confiança e melhora o resultado final.",
    icon: Handshake,
  },
];

const principios = [
  "Consistência > Perfeição",
  "Dados > Intuição",
  "Adaptação > Rigidez",
  "Parceria > Prestação de serviço",
];

const imageShadow =
  "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

export function LearningsSection() {
  return (
    <section id="aprendizados" className="relative py-24 bg-neutral-900/50">
      {/* Gradiente de transição do topo */}
      <div
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-neutral-950 to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Gradiente de transição da base */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none z-0"
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
            <span className="text-sm text-neutral-300">06 — Aprendizados</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            Lições que ficam{" "}
            <span className="text-emerald-400">para sempre</span>
          </h2>
          <p className="text-neutral-400 max-w-3xl mx-auto text-lg">
            Insights práticos de 6 meses de estratégia, execução e otimização
            contínua.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-[1fr_350px] gap-12 items-start">
          {/* Left - Learnings grid */}
          <div className="space-y-6">
            <p className="text-sm text-neutral-500 uppercase tracking-wider">
              4 aprendizados-chave
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
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                      <item.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <span className="text-xs text-neutral-600 font-mono">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="font-medium text-white text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Featured quote card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 ring-1 ring-emerald-500/20"
            >
              <div className="flex items-center gap-2 mb-4">
                <Quote className="w-5 h-5 text-emerald-400" />
                <p className="text-sm text-emerald-400 uppercase tracking-wider">
                  Insight principal
                </p>
              </div>
              <p className="text-white text-lg leading-relaxed italic mb-4">
                &quot;O maior aprendizado foi entender que estratégia de
                conteúdo não é sobre posts — é sobre construir um sistema que
                gera autoridade, confiança e, consequentemente, receita.&quot;
              </p>
              <div className="h-px bg-emerald-500/20 mb-4" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-white">Mentalidade de sistema</p>
                  <p className="text-xs text-neutral-500">
                    Pensar em longo prazo, não em viral
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Image + Principles */}
          <div className="space-y-6">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/media/trendly/trendly_learnings.png"
                  alt="Colaboração e aprendizado"
                  fill
                  className={`object-cover grayscale brightness-[0.7] hover:grayscale-[20%] hover:brightness-100 transition-all duration-500 ${imageShadow}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />

                {/* Overlay info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="p-4 rounded-xl bg-neutral-950/80 backdrop-blur-sm ring-1 ring-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <Lightbulb className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">
                          Conhecimento aplicado
                        </p>
                        <p className="text-sm text-neutral-500">
                          Teoria → Prática → Resultado
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
                <span className="text-sm text-emerald-400">4 lições</span>
              </motion.div>
            </motion.div>

            {/* Principles card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-5 rounded-2xl bg-neutral-900/60 ring-1 ring-white/10"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <p className="text-sm text-emerald-400 uppercase tracking-wider">
                  Princípios guia
                </p>
              </div>
              <div className="space-y-3">
                {principios.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-neutral-800/50 ring-1 ring-white/5 hover:ring-emerald-500/20 transition-all"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <span className="text-xs text-emerald-400 font-medium">
                        {idx + 1}
                      </span>
                    </div>
                    <span className="text-sm text-neutral-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

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
              {[Fingerprint, Cpu, Search, Handshake].map((Icon, i) => (
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
                Aprendizado que se propaga
              </p>
              <p className="text-neutral-500 text-sm">
                Cada projeto traz insights que melhoram os próximos.
              </p>
            </div>
            <div className="flex gap-2">
              {["Estratégia", "IA", "Parceria"].map((tag) => (
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
