"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const avatars = [
  { initials: "MH", bg: "bg-turquoise" },
  { initials: "PA", bg: "bg-coral" },
  { initials: "AB", bg: "bg-tropical-green" },
  { initials: "RF", bg: "bg-sand text-ocean-deep" },
];

export default function Testimonials() {
  const { t } = useI18n();

  return (
    <section id="depoimentos" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-tropical-green/10 text-tropical-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            {t("testimonials.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ocean-deep mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {t("testimonials.title1")} <span className="text-coral">{t("testimonials.titleHighlight")}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">{t("testimonials.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[0, 1, 2, 3].map((idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-light-bg rounded-2xl p-8 relative group hover:shadow-lg transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-turquoise/20 group-hover:text-turquoise/40 transition-colors" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-sand text-sand" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-base italic">
                &ldquo;{t(`testimonials.items.${idx}.text`)}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 ${avatars[idx].bg} text-white rounded-full flex items-center justify-center font-bold text-sm`}>
                  {avatars[idx].initials}
                </div>
                <div>
                  <p className="font-semibold text-ocean-deep">{t(`testimonials.items.${idx}.name`)}</p>
                  <p className="text-sm text-gray-500">{t(`testimonials.items.${idx}.role`)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
