"use client";

import { motion } from "framer-motion";
import TypewriterText from "@/components/smoothui/typewriter-text";
import { Check } from "lucide-react";

interface ChatMessageProps {
  type: "user" | "bot";
  text: string;
  timestamp: string;
  useTypewriter?: boolean;
  showCheckmarks?: boolean;
  delay: number;
}

export function ChatMessage({
  type,
  text,
  timestamp,
  useTypewriter,
  showCheckmarks,
  delay,
}: ChatMessageProps) {
  const isUser = type === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        delay: delay / 1000,
      }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}
    >
      <div
        className={`
          max-w-[75%] px-3 py-2 rounded-lg
          ${
            isUser
              ? "bg-[#005C4B] rounded-tr-sm"
              : "bg-[#1F2C33] rounded-tl-sm"
          }
        `}
      >
        {/* Message Text */}
        <div
          className="text-[14.2px] leading-relaxed text-[#E9EDEF]"
          style={{ fontFamily: "system-ui" }}
        >
          {useTypewriter && !isUser ? (
            <TypewriterText speed={35}>{text}</TypewriterText>
          ) : (
            text
          )}
        </div>

        {/* Timestamp + Checkmarks */}
        <div className="flex items-center justify-end gap-1 mt-1">
          <span className="text-[11px] text-[#8696A0]">{timestamp}</span>
          {showCheckmarks && isUser && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex"
            >
              <Check className="w-3 h-3 text-[#53BDEB]" strokeWidth={3} />
              <Check
                className="w-3 h-3 text-[#53BDEB] -ml-2"
                strokeWidth={3}
              />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
