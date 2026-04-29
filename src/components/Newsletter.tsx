"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const WHATSAPP_NUMBER = "5545984039246";

export default function Newsletter() {
  const { t } = useI18n();
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("newsletter.autoResponse"))}`;

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-ocean-deep via-ocean-mid to-turquoise relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-turquoise/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-sand" />
            <span className="text-white/90 text-sm font-medium">{t("newsletter.badge")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {t("newsletter.title")}
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">{t("newsletter.subtitle")}</p>

          <p className="text-white/60 text-sm mb-10 italic">
            &ldquo;{t("newsletter.autoResponse")}&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 text-lg"
            >
              <MessageCircle className="w-6 h-6 fill-white" />
              {t("newsletter.whatsapp")}
            </a>
            <a
              href="tel:+5545984039246"
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 border border-white/20 text-lg"
            >
              <Phone className="w-6 h-6" />
              (45) 98403-9246
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
