"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  User,
  Cpu,
  CheckCircle,
  Clock,
  Instagram,
  Linkedin,
  Mail,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const metadata = [
  { label: "Case", value: "Chatbot Timezz B2B", icon: Bot },
  { label: "Timeline", value: "2 semanas (2024)", icon: Calendar },
  { label: "Role", value: "Builder IA (Solo Project)", icon: User },
  { label: "Stack", value: "n8n, Supabase, LLM/IA, APIs", icon: Cpu },
  { label: "Resultado", value: "95% dos leads qualificados", icon: CheckCircle },
  { label: "Última atualização", value: "Dezembro 2024", icon: Clock },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/bruno_falci", label: "Instagram" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/bruno-falci-6833851ab/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:brunofalci2000@gmail.com", label: "Email" },
];

export function CTASection() {
  return (
    <section id="cta" className="py-24 bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Metadata grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 mb-16"
        >
          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-sm text-neutral-500 uppercase tracking-wider px-4">
              Informações do Case
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {metadata.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group p-4 rounded-xl bg-neutral-900/40 ring-1 ring-white/5 hover:ring-white/10 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-neutral-800 group-hover:bg-emerald-500/10 transition-colors">
                    <item.icon className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-white truncate">{item.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 ring-1 ring-white/10 overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px]" />

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - Text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20">
                <span className="text-sm text-emerald-400">
                  Gostou do case?
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-white">
                Vamos transformar seu{" "}
                <span className="text-emerald-400">funil de vendas</span>?
              </h3>

              <p className="text-neutral-400 leading-relaxed">
                Se você precisa automatizar qualificação de leads e melhorar a
                conversão do seu funil, vamos conversar. IA conversacional +
                automação inteligente = pipeline otimizado.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-neutral-800/50 ring-1 ring-white/5 hover:ring-emerald-500/30 hover:bg-emerald-500/10 transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right - CTAs */}
            <div className="flex flex-col gap-4">
              <Button
                asChild
                className="h-14 px-8 text-base bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl group"
              >
                <a
                  href="https://wa.me/5511997627772?text=Oi%2C%20gostei%20do%20seu%20case%20Chatbot%20Timezz%20e%20gostaria%20de%20te%20chamar%20pra%20uma%20oportunidade"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vamos conversar
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-14 px-8 text-base border-white/10 hover:bg-white/5 rounded-xl group"
              >
                <Link href="/#projetos">
                  <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Ver outros projetos
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Footer simplificado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-white/5"
        >
          <div className="flex items-center justify-center gap-2 text-neutral-500 text-sm">
            <span>Estudo de caso Chatbot Timezz 2025</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
