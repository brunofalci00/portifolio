"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Lightbulb,
  GraduationCap,
  Layout,
  Smartphone,
  Map,
  UserPlus,
} from "lucide-react";

const desafios = [
  {
    title: "Design de alto valor (Dashboard)",
    problem: "Dashboard precisava concentrar 80% da experiência do usuário.",
    solution:
      "Iteração contínua, feedback e revisões; priorização do dashboard por concentrar a experiência principal.",
    learning: "Priorizar o que move a agulha e iterar até ficar claro e atraente.",
    icon: Layout,
  },
  {
    title: "Limitação técnica (PWA/Notificações)",
    problem: "PWA não tem acesso nativo a notificações como apps nativos.",
    solution:
      "Estudo + IA para simular nativo; foco em lembretes confiáveis e integração com WhatsApp.",
    learning: "Constraints forçam soluções criativas; tecnologia como meio, não fim.",
    icon: Smartphone,
  },
  {
    title: "Erro: não mapear limitações antes",
    problem: "Descobri limitações técnicas tarde demais no projeto.",
    solution:
      "Retrospectiva e mapeamento de riscos técnicos no início; backlog priorizado com compensações.",
    learning: "Mapear limites cedo evita retrabalho e orienta escopo realista.",
    icon: Map,
  },
  {
    title: "Onboarding/guia do usuário",
    problem: "Usuários não entendiam o valor do app nos primeiros minutos.",
    solution:
      "Destacar diferenciais e guiar a primeira experiência (modo guiado, mensagens claras, CTAs simples).",
    learning: "Onboarding bem feito define percepção de valor e reduz churn inicial.",
    icon: UserPlus,
  },
];

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
            <span className="text-sm text-neutral-300">06 — Desafios</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            Porque nem tudo saiu{" "}
            <span className="text-emerald-400">perfeito</span>
          </h2>
          <p className="text-neutral-400 max-w-3xl mx-auto text-lg">
            Problemas reais, soluções práticas e aprendizados aplicáveis.
          </p>
        </motion.div>

        {/* Challenges grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {desafios.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 hover:ring-orange-500/30 transition-all duration-300 overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative space-y-4">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-orange-500/10 ring-1 ring-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
                      <item.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white text-lg">
                        {item.title}
                      </h4>
                      <p className="text-sm text-neutral-500 mt-1">
                        {item.problem}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/5" />

                  {/* Solution */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-emerald-400" />
                      <p className="text-xs text-emerald-400 uppercase tracking-wider">
                        Solução aplicada
                      </p>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      {item.solution}
                    </p>
                  </div>

                  {/* Learning */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-blue-400" />
                      <p className="text-xs text-blue-400 uppercase tracking-wider">
                        Aprendizado
                      </p>
                    </div>
                    <p className="text-neutral-500 text-sm leading-relaxed italic">
                      "{item.learning}"
                    </p>
                  </div>
                </div>

                {/* Number badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-800/50 flex items-center justify-center">
                  <span className="text-sm text-neutral-500 font-medium">
                    {idx + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 via-neutral-900/60 to-emerald-500/10 ring-1 ring-white/10"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="p-3 rounded-xl bg-neutral-800">
              <AlertTriangle className="w-6 h-6 text-orange-400" />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">
                4 desafios reais enfrentados
              </p>
              <p className="text-neutral-400 text-sm mt-1">
                Cada obstáculo virou aprendizado documentado para projetos
                futuros.
              </p>
            </div>
            <div className="flex gap-2">
              {["Design", "Tech", "Process", "UX"].map((tag) => (
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

export default ChallengesSection;
