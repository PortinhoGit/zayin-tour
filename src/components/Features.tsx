"use client";

import { motion } from "framer-motion";
import { Headphones, MapPinned, ShieldCheck, BadgeDollarSign, Car, Heart } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const featureIcons = [Headphones, MapPinned, ShieldCheck, BadgeDollarSign, Car, Heart];
const featureColors = [
  "bg-turquoise/10 text-turquoise",
  "bg-coral/10 text-coral",
  "bg-tropical-green/10 text-tropical-green",
  "bg-sand/10 text-sand-dark",
  "bg-ocean-mid/10 text-ocean-mid",
  "bg-coral/10 text-coral",
];

export default function Features() {
  const { t } = useI18n();

  return (
    <section id="sobre" className="py-20 sm:py-28 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-coral/10 text-coral px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            {t("features.badge")}
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-ocean-deep mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("features.title1")} <span className="text-turquoise">{t("features.titleHighlight")}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t("features.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[0, 1, 2, 3, 4, 5].map((idx) => {
            const Icon = featureIcons[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-14 h-14 ${featureColors[idx]} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-ocean-deep mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  {t(`features.items.${idx}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">{t(`features.items.${idx}.description`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
