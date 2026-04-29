"use client";

import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { Globe } from "lucide-react";
import type { Language } from "@/lib/translations";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "en", label: "English", flag: "🇺🇸" },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = languages.find((l) => l.code === language)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-turquoise transition-colors px-2 py-1.5 rounded-lg hover:bg-gray-50"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{current.flag} {current.code.toUpperCase()}</span>
        <span className="sm:hidden">{current.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl py-1 min-w-[160px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                language === lang.code
                  ? "text-turquoise bg-turquoise/5 font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
