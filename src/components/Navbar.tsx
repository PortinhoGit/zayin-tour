"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Palmtree } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import LanguageSelector from "./LanguageSelector";

const WHATSAPP_LINK = "https://wa.me/5545984039246?text=Ol%C3%A1!%20Gostaria%20de%20reservar%20um%20pacote%20com%20a%20Zayin%20Tour.";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useI18n();

  const navLinks = [
    { name: t("nav.destinations"), href: "#destinos" },
    { name: t("nav.packages"), href: "#destinos" },
    { name: t("nav.about"), href: "#sobre" },
    { name: t("nav.legend"), href: "#lenda" },
    { name: t("nav.contact"), href: "#contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Palmtree className="w-8 h-8 text-turquoise group-hover:text-coral transition-colors" />
            <span
              className="text-2xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="text-ocean-deep">Zayin</span>
              <span className="text-coral">Tour</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-turquoise transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-turquoise after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <LanguageSelector />
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-coral hover:bg-coral-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-coral/30 hover:-translate-y-0.5"
            >
              {t("nav.bookNow")}
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSelector />
            <button
              className="p-2 text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-turquoise py-2 text-base font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="bg-coral text-white text-center px-6 py-3 rounded-full text-sm font-semibold mt-2"
              >
                {t("nav.bookNow")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
