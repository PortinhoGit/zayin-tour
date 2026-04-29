"use client";

import { motion } from "framer-motion";
import { Star, Heart, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

const WHATSAPP_NUMBER = "5545984039246";

const destImages = [
  "/images/cataratas-panoramic.jpg",
  "/images/lado-argentino-01.jpg",
  "/images/itaipu-01.jpg",
  "/images/parque-aves-arara-01.jpg",
  "/images/marco-3-fronteiras-01.jpg",
  "/images/nova-ponte-integracao-01.jpg",
];

const destPrices = ["R$ 290", "R$ 350", "R$ 180", "R$ 95", "R$ 120", "R$ 150"];
const destOrigPrices = ["R$ 390", "R$ 450", "R$ 250", "R$ 130", "R$ 160", "R$ 200"];
const destRatings = [4.9, 4.9, 4.8, 4.8, 4.7, 4.7];
const destReviews = [2328, 1856, 1456, 1203, 987, 654];
const destBadgeColors = ["bg-coral", "bg-turquoise", "bg-tropical-green", "bg-sand text-ocean-deep", "bg-ocean-mid", "bg-coral"];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Destinations() {
  const { t } = useI18n();

  return (
    <section id="destinos" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-turquoise/10 text-turquoise px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            {t("destinations.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ocean-deep mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {t("destinations.title1")} <span className="text-coral">{t("destinations.titleHighlight")}</span> {t("destinations.title2")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">{t("destinations.subtitle")}</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[0, 1, 2, 3, 4, 5].map((idx) => (
            <motion.div key={idx} variants={cardVariants} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <Image src={destImages[idx]} alt={t(`destinations.items.${idx}.name`)} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className={`absolute top-4 left-4 ${destBadgeColors[idx]} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                  {t(`destinations.items.${idx}.badge`)}
                </span>
                <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors group/heart">
                  <Heart className="w-4 h-4 text-gray-600 group-hover/heart:text-coral transition-colors" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <p className="text-white text-sm font-medium">{t(`destinations.items.${idx}.country`)}</p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-ocean-deep" style={{ fontFamily: "var(--font-heading)" }}>
                    {t(`destinations.items.${idx}.name`)}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-sand text-sand" />
                    <span className="text-sm font-semibold text-gray-800">{destRatings[idx]}</span>
                    <span className="text-xs text-gray-500">({destReviews[idx]})</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-400 line-through">{destOrigPrices[idx]}</span>
                    <p className="text-xl font-bold text-coral">{destPrices[idx]}</p>
                    <span className="text-xs text-gray-500">{t("destinations.perPerson")}</span>
                  </div>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t(`destinations.items.${idx}.whatsappMsg`))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-turquoise/10 hover:bg-turquoise hover:text-white text-turquoise px-4 py-2 rounded-full text-sm font-semibold transition-all"
                  >
                    {t("destinations.book")} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
