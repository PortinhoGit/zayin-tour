"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { translations, Language } from "./translations";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function getNestedValue(obj: unknown, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current === null || current === undefined) return path;
    if (Array.isArray(current)) {
      const idx = parseInt(key, 10);
      if (isNaN(idx)) return path;
      current = current[idx];
    } else if (typeof current === "object") {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  return typeof current === "string" ? current : path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const t = useCallback(
    (key: string): string => {
      return getNestedValue(translations[language], key);
    },
    [language]
  );

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within a LanguageProvider");
  }
  return context;
}

export function useLanguage() {
  return useI18n();
}
