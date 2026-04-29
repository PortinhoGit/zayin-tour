"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin, Calendar, Users, Baby, Plane, Car, Hotel,
  Send, Check, ChevronDown, ChevronUp,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

const WHATSAPP_NUMBER = "5545984039246";

const tourKeys = [
  "cataratasBr",
  "macucoSafari",
  "cataratasAr",
  "helicoptero",
  "tresFronteiras",
  "itaipu",
  "parqueAves",
  "carroDisposicao",
  "comprasParaguai",
  "comprasArgentina",
  "outros",
] as const;

const defaultChecked = [
  "cataratasBr",
  "macucoSafari",
  "cataratasAr",
  "helicoptero",
  "tresFronteiras",
  "itaipu",
  "parqueAves",
  "carroDisposicao",
  "comprasParaguai",
  "comprasArgentina",
];

export default function BookingForm() {
  const { t } = useI18n();

  const [name, setName] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [byAir, setByAir] = useState(false);
  const [needTransfer, setNeedTransfer] = useState(false);
  const [needHotel, setNeedHotel] = useState(false);
  const [selectedTours, setSelectedTours] = useState<string[]>([...defaultChecked]);
  const [otherText, setOtherText] = useState("");
  const [expanded, setExpanded] = useState(false);

  const toggleTour = (key: string) => {
    setSelectedTours((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const handleSubmit = () => {
    const tourLabels = selectedTours
      .filter((k) => k !== "outros")
      .map((k) => t(`booking.tours.${k}`));
    if (selectedTours.includes("outros") && otherText.trim()) {
      tourLabels.push(`${t("booking.tours.outros")}: ${otherText.trim()}`);
    }

    const lines: string[] = [];
    lines.push(t("booking.autoResponse"));
    lines.push("");
    lines.push("───────────────");
    lines.push(`${t("booking.nameLabel")}: ${name || t("booking.namePlaceholder")}`);
    lines.push(`${t("booking.arrivalDate")}: ${arrival || "—"}`);
    lines.push(`${t("booking.departureDate")}: ${departure || "—"}`);
    lines.push(`${t("booking.adults")}: ${adults || "—"}`);
    lines.push(`${t("booking.children")}: ${children || "—"}`);
    if (byAir) lines.push(`✈️ ${t("booking.byAir")}`);
    if (needTransfer) lines.push(`🚗 ${t("booking.transfer")}`);
    if (needHotel) lines.push(`🏨 ${t("booking.hotel")}`);
    lines.push("");
    lines.push(`${t("booking.toursTitle")}:`);
    tourLabels.forEach((label) => lines.push(`  ✅ ${label}`));
    lines.push("");
    lines.push(t("booking.closingMsg"));

    const msg = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="bg-white rounded-2xl shadow-2xl p-5 sm:p-8 max-w-4xl mx-auto"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <MapPin className="w-5 h-5 text-turquoise" />
        <p className="text-sm font-semibold text-ocean-deep">{t("booking.destination")}: <span className="text-turquoise">{t("booking.destinationValue")}</span></p>
      </div>

      {/* Name */}
      <div className="mb-4">
        <label className="text-xs text-gray-500 font-medium mb-1 block">{t("booking.nameLabel")} *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t("booking.namePlaceholder")}
          className="w-full text-sm text-gray-800 font-medium bg-light-bg rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-turquoise/30 placeholder:text-gray-400"
        />
      </div>

      {/* Dates row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> {t("booking.arrivalDate")}
          </label>
          <input
            type="date"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
            className="w-full text-sm text-gray-800 font-medium bg-light-bg rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-turquoise/30"
          />
        </div>
        <div>
          <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> {t("booking.departureDate")}
          </label>
          <input
            type="date"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            className="w-full text-sm text-gray-800 font-medium bg-light-bg rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-turquoise/30"
          />
        </div>
      </div>

      {/* Adults + Children row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1">
            <Users className="w-3.5 h-3.5" /> {t("booking.adults")}
          </label>
          <input
            type="number"
            min="1"
            max="100"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            placeholder={t("booking.adultsPlaceholder")}
            className="w-full text-sm text-gray-800 font-medium bg-light-bg rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-turquoise/30 placeholder:text-gray-400"
          />
        </div>
        <div>
          <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1">
            <Baby className="w-3.5 h-3.5" /> {t("booking.children")}
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            placeholder={t("booking.childrenPlaceholder")}
            className="w-full text-sm text-gray-800 font-medium bg-light-bg rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-turquoise/30 placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Logistics checkboxes */}
      <div className="flex flex-wrap gap-4 mb-5">
        <label className="flex items-center gap-2 cursor-pointer select-none text-sm text-gray-700">
          <input type="checkbox" checked={byAir} onChange={() => setByAir(!byAir)} className="w-4 h-4 accent-turquoise rounded" />
          <Plane className="w-4 h-4 text-turquoise" />
          {t("booking.byAir")}
        </label>
        <label className="flex items-center gap-2 cursor-pointer select-none text-sm text-gray-700">
          <input type="checkbox" checked={needTransfer} onChange={() => setNeedTransfer(!needTransfer)} className="w-4 h-4 accent-turquoise rounded" />
          <Car className="w-4 h-4 text-turquoise" />
          {t("booking.transfer")}
        </label>
        <label className="flex items-center gap-2 cursor-pointer select-none text-sm text-gray-700">
          <input type="checkbox" checked={needHotel} onChange={() => setNeedHotel(!needHotel)} className="w-4 h-4 accent-turquoise rounded" />
          <Hotel className="w-4 h-4 text-turquoise" />
          {t("booking.hotel")}
        </label>
      </div>

      {/* Tours section - collapsible */}
      <div className="mb-5">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between text-sm font-semibold text-ocean-deep bg-light-bg rounded-xl px-4 py-3 hover:bg-turquoise/5 transition-colors"
        >
          <span>{t("booking.toursTitle")} ({selectedTours.length})</span>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2"
          >
            {tourKeys.map((key) => (
              <label
                key={key}
                className={`flex items-center gap-2.5 cursor-pointer select-none text-sm px-4 py-2.5 rounded-xl transition-all ${
                  selectedTours.includes(key)
                    ? "bg-turquoise/10 text-turquoise font-medium"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 border-2 transition-colors ${
                  selectedTours.includes(key)
                    ? "bg-turquoise border-turquoise"
                    : "border-gray-300"
                }`}>
                  {selectedTours.includes(key) && <Check className="w-3.5 h-3.5 text-white" />}
                </div>
                <input
                  type="checkbox"
                  checked={selectedTours.includes(key)}
                  onChange={() => toggleTour(key)}
                  className="sr-only"
                />
                {t(`booking.tours.${key}`)}
              </label>
            ))}

            {/* "Outros" text input */}
            {selectedTours.includes("outros") && (
              <div className="sm:col-span-2 mt-1">
                <input
                  type="text"
                  value={otherText}
                  onChange={(e) => setOtherText(e.target.value)}
                  placeholder={t("booking.otherPlaceholder")}
                  className="w-full text-sm text-gray-800 bg-light-bg rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-turquoise/30 placeholder:text-gray-400"
                />
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* Submit button */}
      <button
        onClick={handleSubmit}
        className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-6 rounded-xl font-bold text-base transition-all hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5"
      >
        <Send className="w-5 h-5" />
        {t("booking.submit")}
      </button>

      <p className="text-center text-xs text-gray-400 mt-3 italic">
        {t("booking.disclaimer")}
      </p>
    </motion.div>
  );
}
