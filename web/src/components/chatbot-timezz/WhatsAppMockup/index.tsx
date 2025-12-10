"use client";

import { motion } from "framer-motion";
import { WhatsAppShellCard } from "./WhatsAppShellCard";

export function WhatsAppMockup() {
  return (
    <motion.div
      initial={{ y: 20 }}
      animate={{ y: [0, -8, 0] }}
      transition={{
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="w-full"
    >
      <WhatsAppShellCard />
    </motion.div>
  );
}
