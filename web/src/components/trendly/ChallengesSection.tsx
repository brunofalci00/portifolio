"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  Mic,
  Eye,
  Clock,
} from "lucide-react";

const desafios = [
  {
    title: "Oratória travada",
    problem:
      "Alfredo era técnico demais nos vídeos. Informação boa, mas entrega rígida, sem conexão emocional.",
    solution:
      "Programa contínuo: materiais semanais, roteiros com gancho/CTA, cortes estratégicos, prática constante com feedback.",
    result:
      "De técnico para persuasivo; engajamento muito maior nos vídeos posteriores. Comentários positivos sobre clareza.",
    icon: Mic,
  },
  {
    title: "Visão limitada de conteúdo",
    problem:
      "Pensava em conteúdo como 'dar dicas'. Não via storytelling, gatilhos mentais ou jornada do espectador.",
    solution:
      "Educação estratégica, workshops mensais, feedback contínuo e exemplos práticos de storytelling aplicado.",
    result:
      "Vídeos evoluíram de dicas secas para histórias que educam e vendem. Taxa de retenção subiu.",
    icon: Eye,
  },
  {
    title: "Agenda impossível",
    problem:
      "Especialista ocupado, sem tempo para criar conteúdo diariamente. Frequência parecia impossível.",
    solution:
      "Content batching + IA: 1-2 sessões semanais virando 2-3 vídeos/dia; automações de corte e agendamento.",
    result:
      "Alta frequência com apenas 2-3h/semana do especialista. Sistema sustentável.",
    icon: Clock,
  },
];

const imageShadow =
  "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

export function ChallengesSection() {
  return (
    <section id="desafios" className="py-24 bg-neutral-950">
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
            <span className="text-sm text-neutral-300">05 — Desafios</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            Obstáculos reais,{" "}
            <span className="text-emerald-400">soluções práticas</span>
          </h2>
          <p className="text-neutral-400 max-w-3xl mx-auto text-lg">
            Nem tudo foi fácil. Cada desafio exigiu adaptação, criatividade e
            muito feedback para encontrar a solução certa.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-[1fr_350px] gap-12 items-start">
          {/* Challenges list */}
          <div className="space-y-6">
            {desafios.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative"
              >
                <div className="p-6 rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 hover:ring-orange-500/30 transition-all duration-300 overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative space-y-5">
                    {/* Header with icon and title */}
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-orange-500/10 ring-1 ring-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
                        <item.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-white text-lg">
                            {item.title}
                          </h4>
                          <span className="text-xs text-neutral-500">
                            Desafio {idx + 1}/3
                          </span>
                        </div>
                        <p className="text-sm text-neutral-500">{item.problem}</p>
                      </div>
                    </div>

                    {/* Flow: Problem → Solution → Result */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Solution */}
                      <div className="p-4 rounded-xl bg-neutral-800/50 ring-1 ring-white/5">
                        <div className="flex items-center gap-2 mb-2">
                          <Lightbulb className="w-4 h-4 text-emerald-400" />
                          <p className="text-xs text-emerald-400 uppercase tracking-wider">
                            Solução
                          </p>
                        </div>
                        <p className="text-neutral-300 text-sm leading-relaxed">
                          {item.solution}
                        </p>
                      </div>

                      {/* Result */}
                      <div className="p-4 rounded-xl bg-emerald-500/5 ring-1 ring-emerald-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <p className="text-xs text-emerald-400 uppercase tracking-wider">
                            Resultado
                          </p>
                        </div>
                        <p className="text-neutral-300 text-sm leading-relaxed">
                          {item.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Side content */}
          <div className="space-y-6">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src="/media/trendly/trendly_challenges.jpeg"
                alt="Superando desafios"
                fill
                className={`object-cover grayscale brightness-[0.7] hover:grayscale-[20%] hover:brightness-100 transition-all duration-500 ${imageShadow}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
            </motion.div>

            {/* Key insight card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-orange-500/10 to-emerald-500/5 ring-1 ring-orange-500/20"
            >
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-orange-400" />
                <p className="text-sm text-orange-400 uppercase tracking-wider">
                  Insight principal
                </p>
              </div>
              <p className="text-white leading-relaxed mb-4">
                &quot;O maior desafio não foi técnico, foi comportamental.
                Transformar um especialista em comunicador exige paciência,
                método e muito feedback.&quot;
              </p>
              <div className="h-px bg-white/10 mb-4" />
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[Mic, Eye, Clock].map((Icon, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-neutral-800 ring-2 ring-neutral-950 flex items-center justify-center"
                    >
                      <Icon className="w-4 h-4 text-orange-400" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-neutral-400">
                  <span className="text-white">3 desafios</span> transformados em
                  aprendizado
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ChallengesSection;
