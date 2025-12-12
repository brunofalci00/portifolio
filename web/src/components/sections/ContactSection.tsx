"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, MapPin, Send, Sparkles, Phone } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";

export function ContactSection() {
  const t = useTranslations('home.contact');
  const [formState, setFormState] = useState<"idle" | "loading" | "success">(
    "idle"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setTimeout(() => setFormState("success"), 1000);
  };

  return (
    <SectionContainer className="px-6 md:px-12 overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 border border-white/5 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-64 h-64 border border-white/5 rounded-full"
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10 mb-6">
            <span className="text-sm text-neutral-300">{t('badge')}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white">
            {t('headline.part1')}{" "}
            <span className="text-emerald-400">{t('headline.highlight')}</span>
          </h2>
          <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Email */}
            <motion.a
              href="mailto:brunofalci2000@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/60 ring-1 ring-white/10 hover:ring-white/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center group-hover:bg-emerald-400/20 transition-colors">
                <Mail className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-neutral-500">{t('info.email.label')}</p>
                <p className="font-medium text-white">
                  {t('info.email.value')}
                </p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/brunofalci"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/60 ring-1 ring-white/10 hover:ring-white/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center group-hover:bg-emerald-400/20 transition-colors">
                <Linkedin className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-neutral-500">{t('info.linkedin.label')}</p>
                <p className="font-medium text-white">
                  {t('info.linkedin.value')}
                </p>
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/5511997627772"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/60 ring-1 ring-white/10 hover:ring-white/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center group-hover:bg-emerald-400/20 transition-colors">
                <Phone className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-neutral-500">{t('info.whatsapp.label')}</p>
                <p className="font-medium text-white">{t('info.whatsapp.value')}</p>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/60 ring-1 ring-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-neutral-500">{t('info.location.label')}</p>
                <p className="font-medium text-white">{t('info.location.value')}</p>
              </div>
            </motion.div>

            {/* Availability status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-emerald-400/10 ring-1 ring-emerald-400/20"
            >
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <div>
                <p className="font-medium text-white">
                  {t('info.availability.status')}
                </p>
                <p className="text-sm text-neutral-400">{t('info.availability.response')}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 rounded-2xl bg-neutral-900/60 ring-1 ring-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-neutral-300">{t('form.labels.name')}</Label>
                    <Input
                      id="name"
                      placeholder={t('form.placeholders.name')}
                      required
                      className="bg-neutral-950 ring-1 ring-white/10 border-0 text-white placeholder:text-neutral-500 focus:ring-emerald-400/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-neutral-300">{t('form.labels.email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('form.placeholders.email')}
                      required
                      className="bg-neutral-950 ring-1 ring-white/10 border-0 text-white placeholder:text-neutral-500 focus:ring-emerald-400/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-neutral-300">{t('form.labels.phone')}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={t('form.placeholders.phone')}
                    className="bg-neutral-950 ring-1 ring-white/10 border-0 text-white placeholder:text-neutral-500 focus:ring-emerald-400/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-neutral-300">{t('form.labels.subject')}</Label>
                  <Input
                    id="subject"
                    placeholder={t('form.placeholders.subject')}
                    className="bg-neutral-950 ring-1 ring-white/10 border-0 text-white placeholder:text-neutral-500 focus:ring-emerald-400/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-neutral-300">{t('form.labels.message')}</Label>
                  <Textarea
                    id="message"
                    placeholder={t('form.placeholders.message')}
                    rows={5}
                    required
                    className="bg-neutral-950 ring-1 ring-white/10 border-0 text-white placeholder:text-neutral-500 focus:ring-emerald-400/50 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-emerald-400 hover:bg-emerald-500 text-neutral-950 font-medium rounded-full transition-all hover:scale-[1.02] group"
                  disabled={formState === "loading"}
                >
                  {formState === "loading" ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="mr-2"
                      >
                        <Sparkles className="w-4 h-4" />
                      </motion.div>
                      {t('form.button.sending')}
                    </>
                  ) : formState === "success" ? (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      {t('form.button.sent')}
                    </>
                  ) : (
                    <>
                      {t('form.button.send')}
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default ContactSection;
