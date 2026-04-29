"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { findAnswer } from "@/lib/chatbot-faq";

interface Message {
  from: "bot" | "user";
  text: string;
}

export default function Chatbot() {
  const { t, language } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ from: "bot", text: t("chatbot.greeting") }]);
    }
  }, [isOpen, messages.length, t]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = { from: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const answer = findAnswer(trimmed, language);
      const botMsg: Message = {
        from: "bot",
        text: answer || t("chatbot.fallback"),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 500);
  };

  return (
    <>
      {/* Toggle button - positioned above WhatsApp button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-28 right-6 z-50 w-14 h-14 bg-turquoise hover:bg-turquoise-dark text-white rounded-full flex items-center justify-center shadow-xl transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={t("chatbot.title")}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-44 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
            style={{ maxHeight: "450px" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-turquoise to-ocean-mid px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{t("chatbot.title")}</p>
                <p className="text-white/70 text-xs">Online</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ minHeight: "250px" }}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "bg-turquoise text-white rounded-br-md"
                        : "bg-gray-100 text-gray-800 rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t p-3 flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={t("chatbot.placeholder")}
                className="flex-1 text-sm px-4 py-2.5 rounded-full bg-gray-100 outline-none focus:ring-2 focus:ring-turquoise/30 text-gray-800 placeholder:text-gray-400"
              />
              <button
                onClick={handleSend}
                className="w-10 h-10 bg-turquoise hover:bg-turquoise-dark text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Send"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
