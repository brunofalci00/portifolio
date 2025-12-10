"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ChatMessage } from "./ChatMessage";
import { TypingIndicator } from "./TypingIndicator";

interface Message {
  id: string;
  type: "user" | "bot";
  text: string;
  timestamp: string;
  delay: number;
  useTypewriter?: boolean;
  showCheckmarks?: boolean;
}

const conversationFlow: Message[] = [
  {
    id: "msg-1",
    type: "user",
    text: "Olá! Vocês fazem cobertura de eventos corporativos?",
    timestamp: "14:32",
    delay: 0,
  },
  {
    id: "msg-2",
    type: "bot",
    text: "Olá! Sim, a Timezz é especializada em audiovisual para eventos corporativos. Vou te ajudar!",
    timestamp: "14:32",
    delay: 1000,
    useTypewriter: true,
  },
  {
    id: "msg-3",
    type: "bot",
    text: "Que tipo de evento você está planejando? (Ex: convenção, lançamento, treinamento)",
    timestamp: "14:32",
    delay: 3500,
    useTypewriter: true,
  },
  {
    id: "msg-4",
    type: "user",
    text: "É a nossa convenção anual de vendas. Cerca de 200 pessoas.",
    timestamp: "14:33",
    delay: 6500,
  },
  {
    id: "msg-5",
    type: "bot",
    text: "Ótimo! Convenções são nosso forte. 🎥 Já cobrimos eventos com +500 participantes.",
    timestamp: "14:33",
    delay: 8000,
    useTypewriter: true,
  },
  {
    id: "msg-6",
    type: "bot",
    text: "Quando seria o evento? Isso me ajuda a verificar disponibilidade e preparar um orçamento.",
    timestamp: "14:33",
    delay: 10500,
    useTypewriter: true,
  },
  {
    id: "msg-7",
    type: "user",
    text: "Planejamos para meados de março, ainda estamos definindo o local.",
    timestamp: "14:34",
    delay: 14000,
  },
  {
    id: "msg-8",
    type: "bot",
    text: "Perfeito! Março é uma ótima época. Posso incluir drone e multi-câmeras no orçamento. 🚁",
    timestamp: "14:34",
    delay: 16000,
    useTypewriter: true,
  },
  {
    id: "msg-9",
    type: "bot",
    text: "Vamos agendar uma call de 15min para detalhar? Qual seu email?",
    timestamp: "14:34",
    delay: 19000,
    useTypewriter: true,
    showCheckmarks: true,
  },
];

export function ChatMessages() {
  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [loopCount, setLoopCount] = useState(0);

  useEffect(() => {
    // Reset on each loop
    setVisibleMessages([]);
    setShowTyping(false);

    // Schedule each message
    const timers: NodeJS.Timeout[] = [];

    conversationFlow.forEach((msg) => {
      // Add the message
      const messageTimer = setTimeout(() => {
        if (msg.type === "bot") {
          // Show typing indicator before bot message
          setShowTyping(true);

          // Hide typing and show message after a short delay
          const revealTimer = setTimeout(() => {
            setShowTyping(false);
            setVisibleMessages((prev) => [...prev, msg.id]);
          }, 400);

          timers.push(revealTimer);
        } else {
          setVisibleMessages((prev) => [...prev, msg.id]);
        }
      }, msg.delay);

      timers.push(messageTimer);
    });

    // Reset after complete cycle (22.5 seconds)
    const resetTimer = setTimeout(() => {
      setLoopCount((prev) => prev + 1);
    }, 22500);

    timers.push(resetTimer);

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [loopCount]);

  return (
    <div className="flex-1 overflow-hidden px-4 py-6 space-y-2">
      <AnimatePresence mode="sync">
        {conversationFlow
          .filter((msg) => visibleMessages.includes(msg.id))
          .map((msg, index) => (
            <ChatMessage key={msg.id} {...msg} delay={index * 100} />
          ))}

        {showTyping && <TypingIndicator key="typing" />}
      </AnimatePresence>
    </div>
  );
}
