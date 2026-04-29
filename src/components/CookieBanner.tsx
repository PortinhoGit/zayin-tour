"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function CookieBanner() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-gray-200 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="w-6 h-6 text-sand flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600">
                {t("cookie.message")}{" "}
                <a href="/privacidade" className="text-turquoise hover:underline font-medium">
                  {t("cookie.learnMore")}
                </a>
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={decline}
                className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 border border-gray-300 rounded-full transition-colors"
              >
                {t("cookie.decline")}
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 text-sm font-medium text-white bg-turquoise hover:bg-turquoise-dark rounded-full transition-colors"
              >
                {t("cookie.accept")}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
