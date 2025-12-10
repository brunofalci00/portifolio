"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Heart, Sparkles, Trophy } from "lucide-react";

const reflexao = {
  title: "Isso foi só o começo. E eu aprendi muito mais do que esperava.",
  intro:
    "Quando comecei o Bora, eu queria aprender sobre UX/UI, banco de dados e deploy. Aprendi. Mas também aprendi decisões sob pressão, lidar com bugs às 2 da manhã, conversar com usuários e ouvir feedbacks duros. O Bora foi meu laboratório.",
  meta: "Cada feature foi um experimento. Cada erro foi uma aula. Cada usuário que voltou foi uma validação de que estou no caminho certo.",
  bullets: [
    {
      text: "Provar que consigo construir um produto completo sozinho.",
      icon: Trophy,
    },
    {
      text: "Mostrar que pessoas usariam o que eu construí (100+ usuários, 44% voltando).",
      icon: CheckCircle,
    },
    {
      text: "Aprender rápido e me adaptar: cada desafio virou aprendizado e iteração.",
      icon: Sparkles,
    },
    {
      text: "Descobrir que amar o processo é o diferencial: vocação, não só portfólio.",
      icon: Heart,
    },
  ],
};

const imageShadow =
  "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

export function ReflectionSection() {
  return (
    <section id="reflexao" className="py-24 bg-neutral-950">
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
            <span className="text-sm text-neutral-300">08 — Reflexão</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            {reflexao.title.split(".")[0]}.
          </h2>
          <p className="text-neutral-400 max-w-3xl mx-auto text-lg">
            {reflexao.title.split(".")[1]?.trim()}
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/media/projects/bora/reflexao.png"
                alt="Bora App - Reflexão Final"
                fill
                className={`object-cover grayscale brightness-[0.7] hover:grayscale-[20%] hover:brightness-100 transition-all duration-500 ${imageShadow}`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 via-transparent to-neutral-950/60" />

            </div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-emerald-500/20 ring-1 ring-emerald-500/30 backdrop-blur-sm"
            >
              <p className="text-3xl font-display font-light text-emerald-400">
                100+
              </p>
              <p className="text-sm text-emerald-400/80">usuários reais</p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-neutral-300 text-lg leading-relaxed">
              {reflexao.intro}
            </p>

            <div className="h-px bg-white/10" />

            <p className="text-neutral-500 leading-relaxed italic">
              "{reflexao.meta}"
            </p>
          </motion.div>
        </div>

        {/* Bullets grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {reflexao.bullets.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex items-start gap-4 p-5 rounded-xl bg-neutral-900/40 ring-1 ring-white/5 hover:ring-emerald-500/20 transition-all"
            >
              <div className="p-2 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                <item.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-neutral-300 leading-relaxed flex-1">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReflectionSection;
