"use client";

import { Palmtree } from "lucide-react";
import Link from "next/link";
import HotelRegistrationForm from "@/components/HotelRegistrationForm";
import { useI18n } from "@/lib/i18n";

export default function FichaHospedePage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-gradient-to-b from-light-bg to-white">
      {/* Header */}
      <header className="bg-ocean-deep py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Palmtree className="w-6 h-6 text-turquoise" />
            <span className="text-xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              <span className="text-white">Zayin</span>
              <span className="text-coral">Tour</span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            ← {t("nav.destinations")}
          </Link>
        </div>
      </header>

      {/* Form */}
      <main className="max-w-4xl mx-auto px-4 py-10">
        <HotelRegistrationForm />
      </main>
    </div>
  );
}
