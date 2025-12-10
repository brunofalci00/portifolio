"use client";

import { Bot } from "lucide-react";
import { ChatMessages } from "./ChatMessages";

export function WhatsAppShellCard() {
  return (
    <div className="aspect-[9/16] rounded-3xl overflow-hidden ring-1 ring-white/10 bg-neutral-950 shadow-2xl flex flex-col relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url('/assets/whatsapp-pattern.svg')`,
          backgroundSize: "100px 100px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Header */}
      <div className="px-4 py-3 flex items-center gap-3 bg-[#075E54] border-b border-black/20 relative z-10">
        {/* Bot Avatar */}
        <div className="w-10 h-10 rounded-full bg-emerald-500/20 ring-2 ring-emerald-400/30 flex items-center justify-center shrink-0">
          <Bot className="w-5 h-5 text-emerald-400" />
        </div>

        {/* Contact Info */}
        <div className="flex-1 min-w-0">
          <div className="text-white font-medium text-sm leading-tight">
            Timezz Bot
          </div>
          <div className="text-emerald-200/70 text-xs leading-tight">
            online
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-[#0A0E0D] relative z-10 overflow-hidden flex flex-col">
        <ChatMessages />
      </div>

      {/* Glass Morphism Effect - Ring */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-white/5 pointer-events-none" />

      {/* Glass Morphism Effect - Gradient */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
    </div>
  );
}
