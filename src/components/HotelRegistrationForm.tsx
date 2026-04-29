"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User, Globe, FileText, Calendar, Mail, Phone,
  MapPin, Briefcase, Plane, Car, Bus, Plus, Trash2,
  Send, Shield, Scale,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

const WHATSAPP_NUMBER = "5545984039246";

interface Companion {
  name: string;
  document: string;
  relation: string;
}

const docTypes = ["docCpf", "docRg", "docPassport", "docDni", "docOther"] as const;
const genders = ["genderMale", "genderFemale", "genderOther", "genderPreferNot"] as const;
const travelReasons = ["reasonTourism", "reasonBusiness", "reasonEvent", "reasonHealth", "reasonOther"] as const;
const transports = ["transportAir", "transportCar", "transportBus", "transportOther"] as const;

const inputClass =
  "w-full text-sm text-gray-800 font-medium bg-light-bg rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-turquoise/30 placeholder:text-gray-400";
const labelClass = "text-xs text-gray-500 font-medium mb-1 block";
const selectClass =
  "w-full text-sm text-gray-800 font-medium bg-light-bg rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-turquoise/30 appearance-none cursor-pointer";

export default function HotelRegistrationForm() {
  const { t } = useI18n();

  const [fullName, setFullName] = useState("");
  const [nationality, setNationality] = useState("");
  const [documentType, setDocumentType] = useState("docPassport");
  const [documentNumber, setDocumentNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [profession, setProfession] = useState("");
  const [travelReason, setTravelReason] = useState("reasonTourism");
  const [transportation, setTransportation] = useState("");
  const [previousDestination, setPreviousDestination] = useState("");
  const [nextDestination, setNextDestination] = useState("");
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [companions, setCompanions] = useState<Companion[]>([]);

  const addCompanion = () => {
    setCompanions((prev) => [...prev, { name: "", document: "", relation: "" }]);
  };

  const removeCompanion = (index: number) => {
    setCompanions((prev) => prev.filter((_, i) => i !== index));
  };

  const updateCompanion = (index: number, field: keyof Companion, value: string) => {
    setCompanions((prev) =>
      prev.map((c, i) => (i === index ? { ...c, [field]: value } : c))
    );
  };

  const handleSubmit = () => {
    const lines: string[] = [];
    lines.push("📋 *FNRH — Ficha Nacional de Registro de Hóspedes*");
    lines.push("");
    lines.push("═══════════════════");
    lines.push("");

    // Personal
    lines.push(`👤 *${t("fnrh.sectionPersonal")}*`);
    lines.push(`${t("fnrh.fullName")}: ${fullName || "—"}`);
    lines.push(`${t("fnrh.nationality")}: ${nationality || "—"}`);
    lines.push(`${t("fnrh.documentType")}: ${t(`fnrh.${documentType}`)}`);
    lines.push(`${t("fnrh.documentNumber")}: ${documentNumber || "—"}`);
    lines.push(`${t("fnrh.birthDate")}: ${birthDate || "—"}`);
    if (gender) lines.push(`${t("fnrh.gender")}: ${t(`fnrh.${gender}`)}`);
    if (profession) lines.push(`${t("fnrh.profession")}: ${profession}`);
    lines.push("");

    // Contact
    lines.push(`📞 *${t("fnrh.sectionContact")}*`);
    if (email) lines.push(`${t("fnrh.email")}: ${email}`);
    if (phone) lines.push(`${t("fnrh.phone")}: ${phone}`);
    lines.push("");

    // Address
    lines.push(`📍 *${t("fnrh.sectionAddress")}*`);
    if (address) lines.push(`${t("fnrh.address")}: ${address}`);
    lines.push(`${t("fnrh.city")}: ${city || "—"}`);
    if (state) lines.push(`${t("fnrh.state")}: ${state}`);
    lines.push(`${t("fnrh.country")}: ${country || "—"}`);
    if (zipCode) lines.push(`${t("fnrh.zipCode")}: ${zipCode}`);
    lines.push("");

    // Travel
    lines.push(`✈️ *${t("fnrh.sectionTravel")}*`);
    lines.push(`${t("fnrh.travelReason")}: ${t(`fnrh.${travelReason}`)}`);
    if (transportation) lines.push(`${t("fnrh.transportation")}: ${t(`fnrh.${transportation}`)}`);
    if (previousDestination) lines.push(`${t("fnrh.previousDestination")}: ${previousDestination}`);
    if (nextDestination) lines.push(`${t("fnrh.nextDestination")}: ${nextDestination}`);
    lines.push("");

    // Stay
    lines.push(`🏨 *${t("fnrh.sectionStay")}*`);
    lines.push(`${t("fnrh.checkinDate")}: ${checkinDate || "—"}`);
    lines.push(`${t("fnrh.checkoutDate")}: ${checkoutDate || "—"}`);
    lines.push("");

    // Companions
    if (companions.length > 0) {
      lines.push(`👥 *${t("fnrh.sectionCompanions")}* (${companions.length})`);
      companions.forEach((c, i) => {
        lines.push(`  ${i + 1}. ${c.name || "—"} | ${t("fnrh.companionDoc")}: ${c.document || "—"} | ${c.relation || "—"}`);
      });
      lines.push("");
    }

    lines.push("═══════════════════");

    const msg = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const transportIcons: Record<string, typeof Plane> = {
    transportAir: Plane,
    transportCar: Car,
    transportBus: Bus,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-2xl p-5 sm:p-8 max-w-4xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-14 h-14 bg-turquoise/10 rounded-full flex items-center justify-center mx-auto mb-3">
          <FileText className="w-7 h-7 text-turquoise" />
        </div>
        <h2
          className="text-xl sm:text-2xl font-bold text-ocean-deep mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t("fnrh.title")}
        </h2>
        <p className="text-sm text-gray-500">{t("fnrh.subtitle")}</p>
      </div>

      {/* Notices */}
      <div className="space-y-3 mb-6">
        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
          <Scale className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-800 leading-relaxed">{t("fnrh.embraturNotice")}</p>
        </div>
        <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
          <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-blue-800 leading-relaxed">{t("fnrh.lgpdNotice")}</p>
        </div>
      </div>

      {/* ──── PERSONAL DATA ──── */}
      <SectionTitle icon={User} text={t("fnrh.sectionPersonal")} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="sm:col-span-2">
          <label className={labelClass}>{t("fnrh.fullName")} *</label>
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder={t("fnrh.fullNamePlaceholder")} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>{t("fnrh.nationality")} *</label>
          <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} placeholder={t("fnrh.nationalityPlaceholder")} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>{t("fnrh.birthDate")}</label>
          <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>{t("fnrh.documentType")} *</label>
          <select value={documentType} onChange={(e) => setDocumentType(e.target.value)} className={selectClass}>
            {docTypes.map((dt) => (
              <option key={dt} value={dt}>{t(`fnrh.${dt}`)}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>{t("fnrh.documentNumber")} *</label>
          <input type="text" value={documentNumber} onChange={(e) => setDocumentNumber(e.target.value)} placeholder={t("fnrh.documentNumberPlaceholder")} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>{t("fnrh.gender")}</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} className={selectClass}>
            <option value="">—</option>
            {genders.map((g) => (
              <option key={g} value={g}>{t(`fnrh.${g}`)}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>{t("fnrh.profession")}</label>
          <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} placeholder={t("fnrh.professionPlaceholder")} className={inputClass} />
        </div>
      </div>

      {/* ──── CONTACT ──── */}
      <SectionTitle icon={Mail} text={t("fnrh.sectionContact")} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className={labelClass}>{t("fnrh.email")}</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("fnrh.emailPlaceholder")} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>{t("fnrh.phone")}</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t("fnrh.phonePlaceholder")} className={inputClass} />
        </div>
      </div>

      {/* ──── ADDRESS ──── */}
      <SectionTitle icon={MapPin} text={t("fnrh.sectionAddress")} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="sm:col-span-2">
          <label className={labelClass}>{t("fnrh.address")}</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder={t("fnrh.addressPlaceholder")} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>{t("fnrh.city")} *</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder={t("fnrh.cityPlaceholder")} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>{t("fnrh.state")}</label>
          <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder={t("fnrh.statePlaceholder")} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>{t("fnrh.country")} *</label>
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder={t("fnrh.countryPlaceholder")} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>{t("fnrh.zipCode")}</label>
          <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} placeholder={t("fnrh.zipCodePlaceholder")} className={inputClass} />
        </div>
      </div>

      {/* ──── TRAVEL ──── */}
      <SectionTitle icon={Globe} text={t("fnrh.sectionTravel")} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className={labelClass}>{t("fnrh.travelReason")} *</label>
          <select value={travelReason} onChange={(e) => setTravelReason(e.target.value)} className={selectClass}>
            {travelReasons.map((r) => (
              <option key={r} value={r}>{t(`fnrh.${r}`)}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>{t("fnrh.transportation")}</label>
          <div className="flex flex-wrap gap-2 mt-1">
            {transports.map((tr) => {
              const Icon = transportIcons[tr] || Globe;
              return (
                <button
                  key={tr}
                  type="button"
                  onClick={() => setTransportation(tr)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    transportation === tr
                      ? "bg-turquoise text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {t(`fnrh.${tr}`)}
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <label className={labelClass}>{t("fnrh.previousDestination")}</label>
          <input type="text" value={previousDestination} onChange={(e) => setPreviousDestination(e.target.value)} placeholder={t("fnrh.previousDestinationPlaceholder")} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>{t("fnrh.nextDestination")}</label>
          <input type="text" value={nextDestination} onChange={(e) => setNextDestination(e.target.value)} placeholder={t("fnrh.nextDestinationPlaceholder")} className={inputClass} />
        </div>
      </div>

      {/* ──── STAY ──── */}
      <SectionTitle icon={Calendar} text={t("fnrh.sectionStay")} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className={labelClass}>{t("fnrh.checkinDate")} *</label>
          <input type="date" value={checkinDate} onChange={(e) => setCheckinDate(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>{t("fnrh.checkoutDate")} *</label>
          <input type="date" value={checkoutDate} onChange={(e) => setCheckoutDate(e.target.value)} className={inputClass} />
        </div>
      </div>

      {/* ──── COMPANIONS ──── */}
      <SectionTitle icon={User} text={t("fnrh.sectionCompanions")} />

      <div className="mb-6">
        {companions.map((companion, idx) => (
          <div key={idx} className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-3 items-end">
            <div>
              <label className={labelClass}>{t("fnrh.companionName")}</label>
              <input type="text" value={companion.name} onChange={(e) => updateCompanion(idx, "name", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>{t("fnrh.companionDoc")}</label>
              <input type="text" value={companion.document} onChange={(e) => updateCompanion(idx, "document", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>{t("fnrh.companionRelation")}</label>
              <input type="text" value={companion.relation} onChange={(e) => updateCompanion(idx, "relation", e.target.value)} className={inputClass} />
            </div>
            <button
              type="button"
              onClick={() => removeCompanion(idx)}
              className="flex items-center justify-center gap-1 text-xs text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 rounded-xl py-3 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              {t("fnrh.removeCompanion")}
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addCompanion}
          className="flex items-center gap-2 text-sm text-turquoise hover:text-turquoise-dark font-medium mt-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          {t("fnrh.addCompanion")}
        </button>
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-6 rounded-xl font-bold text-base transition-all hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5"
      >
        <Send className="w-5 h-5" />
        {t("fnrh.submit")}
      </button>
    </motion.div>
  );
}

function SectionTitle({ icon: Icon, text }: { icon: typeof User; text: string }) {
  return (
    <div className="flex items-center gap-2 mb-3 mt-2">
      <Icon className="w-4 h-4 text-turquoise" />
      <h3 className="text-sm font-bold text-ocean-deep uppercase tracking-wide">{text}</h3>
    </div>
  );
}
