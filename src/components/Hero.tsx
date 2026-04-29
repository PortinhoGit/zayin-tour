"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import BookingForm from "./BookingForm";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/cataratas-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/60 via-ocean-deep/40 to-ocean-deep/70" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-turquoise/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-coral/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-sand/90 text-ocean-deep px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            {t("hero.badge")}
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("hero.title1")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise to-tropical-green">
              {t("hero.titleHighlight")}
            </span>
            <br />
            {t("hero.title2")}
          </h1>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("hero.subtitle")}
          </p>
        </motion.div>

        {/* Booking Form */}
        <BookingForm />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-16 mt-12 mb-8"
        >
          {[
            { number: "500+", label: t("hero.statsDestinations") },
            { number: "50k+", label: t("hero.statsClients") },
            { number: "98%", label: t("hero.statsSatisfaction") },
            { number: "24/7", label: t("hero.statsSupport") },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>{stat.number}</p>
              <p className="text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
