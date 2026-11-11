"use client";

import React, { useState } from "react";
import { ArrowRight, Check, Sparkles, Globe } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { BRAND } from "../lib/data";

interface FooterProps {
  onOpenStudio: () => void;
  onOpenDemo: () => void;
}

export function Footer({ onOpenStudio, onOpenDemo }: FooterProps) {
  const { lang, toggleLang, t } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  const openCookiePreferences = () => {
    localStorage.removeItem("atelier_cookie_consent");
    window.location.reload();
  };

  return (
    <footer className="bg-[#0B0A0C] text-[#F7F5F2] pt-24 pb-12 px-5 sm:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-[#6B1425] text-white flex items-center justify-center font-serif text-sm tracking-tighter">
                AL
              </span>
              <span className="font-serif text-2xl tracking-tight text-white font-semibold">
                {BRAND.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/60 max-w-sm leading-relaxed">
              {t(
                "The premier AI fashion photography and virtual campaign suite for luxury houses, modern DTC brands, and global department stores.",
                "Die führende KI-Modefotografie-Suite für Luxushäuser, moderne DTC-Brands und weltweite Department Stores."
              )}
            </p>

            {/* Newsletter input */}
            <div className="pt-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#EBDCCB] block mb-2">
                {t("The Editorial Dispatch", "Der Editorial Dispatch")}
              </span>
              <p className="text-xs text-white/50 mb-3">
                {t("Curated seasonal case studies and neural rendering breakthroughs.", "Exklusive Case Studies und Einblicke in neuronale Mode-Renderings.")}
              </p>

              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex max-w-md">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="editor@yourbrand.com"
                    className="flex-1 px-4 py-2.5 rounded-l-full bg-white/10 border border-white/20 text-white text-xs placeholder:text-white/40 focus:outline-none focus:border-[#6B1425]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-r-full bg-[#6B1425] hover:bg-[#56101E] text-white text-xs font-semibold tracking-wider uppercase transition-colors flex items-center gap-1"
                  >
                    <span>{t("Join", "Abonnieren")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 p-2.5 rounded-xl max-w-md">
                  <Check className="w-4 h-4" />
                  <span>{t("Welcome to the Atelier Dispatch.", "Willkommen beim Atelier Dispatch.")}</span>
                </div>
              )}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#EBDCCB] mb-4">
              {t("Platform", "Plattform")}
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <a href="#software" className="hover:text-white transition-colors">
                  {t("Software", "Software")}
                </a>
              </li>
              <li>
                <a href="#service" className="hover:text-white transition-colors">
                  {t("Service", "Service")}
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-white transition-colors">
                  {t("E-commerce", "E-Commerce")}
                </a>
              </li>
              <li>
                <button onClick={onOpenStudio} className="hover:text-white transition-colors text-left">
                  {t("Virtual Camera", "Virtuelle Kamera")}
                </button>
              </li>
              <li>
                <a href="#models" className="hover:text-white transition-colors">
                  {t("Exclusive Models", "Exklusive Models")}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#EBDCCB] mb-4">
              {t("Resources", "Ressourcen")}
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <a href="#integrations" className="hover:text-white transition-colors">
                  {t("Integrations", "Integrationen")}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {t("FAQ", "FAQ")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("Editorial Blog", "Editorial Blog")}
                </a>
              </li>
              <li>
                <button onClick={onOpenDemo} className="hover:text-white transition-colors text-left">
                  {t("Team & Demo", "Team & Demo")}
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#EBDCCB] mb-4">
              {t("Legal & Compliance", "Rechtliches")}
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("Privacy Policy", "Datenschutz")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("Imprint", "Impressum")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("Terms of Haute Couture AI", "Nutzungsbedingungen")}
                </a>
              </li>
              <li>
                <button
                  onClick={openCookiePreferences}
                  className="hover:text-white transition-colors text-left underline underline-offset-4"
                >
                  {t("Cookie settings", "Cookie-Einstellungen")}
                </button>
              </li>
            </ul>

            <div className="pt-4">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 text-xs font-mono text-white/80 hover:text-white transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-[#EBDCCB]" />
                <span>Language: {lang}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-mono">
          <p>© 2026 {BRAND.name}. All rights reserved.</p>
          <p className="text-white/60">
            a product of <span className="text-[#EBDCCB] font-semibold">{BRAND.company}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
