"use client";

import { Palmtree, MapPin, Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import VisitorCounter from "./VisitorCounter";

const WHATSAPP_NUMBER = "5545984039246";

export default function Footer() {
  const { t } = useI18n();
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("newsletter.autoResponse"))}`;

  const quickLinks = [
    { name: t("nav.destinations"), href: "#destinos" },
    { name: t("nav.packages"), href: "#destinos" },
    { name: t("features.badge"), href: "#sobre" },
    { name: t("testimonials.badge"), href: "#depoimentos" },
    { name: t("nav.contact"), href: "#contato" },
  ];

  return (
    <footer id="contato" className="bg-ocean-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <Palmtree className="w-7 h-7 text-turquoise" />
              <span className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                <span className="text-white">Zayin</span>
                <span className="text-coral">Tour</span>
              </span>
            </a>
            <p className="text-white/60 leading-relaxed mb-6 text-sm">{t("footer.description")}</p>
            <div className="flex gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all hover:-translate-y-1" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5 fill-white text-white" />
              </a>
              <a href="tel:+5545984039246" className="w-10 h-10 bg-white/10 hover:bg-turquoise rounded-lg flex items-center justify-center transition-all hover:-translate-y-1" aria-label="Telefone">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:contato@zayintour.com.br" className="w-10 h-10 bg-white/10 hover:bg-turquoise rounded-lg flex items-center justify-center transition-all hover:-translate-y-1" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://github.com/Portinhogithub" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-turquoise rounded-lg flex items-center justify-center transition-all hover:-translate-y-1" aria-label="GitHub">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4" style={{ fontFamily: "var(--font-heading)" }}>{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-white/60 hover:text-turquoise transition-colors text-sm">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Attractions */}
          <div>
            <h4 className="font-semibold text-lg mb-4" style={{ fontFamily: "var(--font-heading)" }}>{t("footer.attractions")}</h4>
            <ul className="space-y-3">
              {[0, 1, 2, 3, 4, 5].map((idx) => (
                <li key={idx}>
                  <a href="#destinos" className="text-white/60 hover:text-turquoise transition-colors text-sm">
                    {t(`destinations.items.${idx}.name`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4" style={{ fontFamily: "var(--font-heading)" }}>{t("footer.contactUs")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-turquoise flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">Foz do Iguaçu — PR, Brasil</span>
              </li>
              <li>
                <a href="tel:+5545984039246" className="flex items-center gap-3 text-white/60 hover:text-turquoise transition-colors">
                  <Phone className="w-5 h-5 text-turquoise flex-shrink-0" />
                  <span className="text-sm">+55 (45) 98403-9246</span>
                </a>
              </li>
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/60 hover:text-green-400 transition-colors">
                  <MessageCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">WhatsApp: (45) 98403-9246</span>
                </a>
              </li>
              <li>
                <a href="mailto:contato@zayintour.com.br" className="flex items-center gap-3 text-white/60 hover:text-turquoise transition-colors">
                  <Mail className="w-5 h-5 text-turquoise flex-shrink-0" />
                  <span className="text-sm">contato@zayintour.com.br</span>
                </a>
              </li>
            </ul>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 text-sm">
              <MessageCircle className="w-5 h-5 fill-white" />
              {t("footer.callWhatsApp")}
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p className="text-white/40 text-sm">© 2025 {t("footer.copyright")}</p>
            <VisitorCounter />
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex gap-6 text-sm">
              <Link href="/termos" className="text-white/40 hover:text-white/70 transition-colors">{t("footer.terms")}</Link>
              <Link href="/privacidade" className="text-white/40 hover:text-white/70 transition-colors">{t("footer.privacy")}</Link>
            </div>
            <p className="text-white/30 text-xs flex items-center gap-1">
              {t("footer.producedBy")}{" "}
              <a href="https://wa.me/5511999381625" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/50 transition-colors inline-flex items-center gap-0.5">
                Ylvorix Digital Ltda. São Paulo
                <MessageCircle className="w-2.5 h-2.5" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
