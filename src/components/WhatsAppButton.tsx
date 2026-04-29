"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const WHATSAPP_NUMBER = "5545984039246";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Gostaria de saber mais sobre os pacotes da Zayin Tour."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function WhatsAppButton() {
  const { t } = useI18n();

  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="WhatsApp"
    >
      <span className="hidden sm:block bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {t("whatsappButton.tooltip")}
      </span>
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
        <div className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 transition-colors">
          <MessageCircle className="w-8 h-8 text-white fill-white" />
        </div>
      </div>
    </motion.a>
  );
}
