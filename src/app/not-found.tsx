"use client";

import { motion } from "framer-motion";
import { Palmtree, ArrowLeft, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-deep to-ocean-mid flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-turquoise/20 rounded-full mb-6">
            <MapPin className="w-12 h-12 text-turquoise" />
          </div>
          <h1 className="text-8xl font-black text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>404</h1>
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>Página não encontrada</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Ops! Parece que você se perdeu na trilha. Volte para a página inicial e explore nossos destinos incríveis em Foz do Iguaçu.
          </p>
        </div>
        <a href="/" className="inline-flex items-center gap-2 bg-coral hover:bg-coral-dark text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-coral/30 hover:-translate-y-0.5 text-lg">
          <ArrowLeft className="w-5 h-5" /> Voltar ao Início
        </a>
        <div className="mt-12 flex items-center justify-center gap-2 opacity-50">
          <Palmtree className="w-6 h-6 text-turquoise" />
          <span className="text-white text-sm font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Zayin<span className="text-coral">Tour</span>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
