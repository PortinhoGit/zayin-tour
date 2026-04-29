"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { BookOpen } from "lucide-react";

export default function Legend() {
  const { t } = useI18n();

  return (
    <section id="lenda" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/cataratas-close.jpg')" }}
      >
        <div className="absolute inset-0 bg-ocean-deep/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 bg-sand/20 backdrop-blur-sm text-sand px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <BookOpen className="w-4 h-4" />
            {t("legend.badge")}
          </span>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("legend.title1")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise to-tropical-green">
              {t("legend.titleHighlight")}
            </span>
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-white/10"
          >
            <p className="text-white/90 text-lg sm:text-xl leading-relaxed italic">
              &ldquo;{t("legend.text")}&rdquo;
            </p>
            <p className="text-white/50 text-sm mt-6">
              — {t("legend.source")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
