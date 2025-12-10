import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study: ChatBot Timezz B2B — 80% Redução no Tempo de Atendimento",
  description:
    "Como um chatbot inteligente reduziu 80% do tempo de atendimento B2B e aumentou conversão em 15%. Automação conversacional com n8n, IA e Supabase.",
  keywords: [
    "chatbot",
    "automação",
    "IA",
    "n8n",
    "supabase",
    "B2B",
    "atendimento",
    "conversão",
    "case study",
  ],
  openGraph: {
    title: "ChatBot Timezz B2B — 80% Redução no Tempo de Atendimento",
    description:
      "Automação conversacional com n8n, IA e Supabase: da ideia ao bot no ar em 2 semanas.",
    type: "article",
  },
};

export default function ChatbotTimezzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
