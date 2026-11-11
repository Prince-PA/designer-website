"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, X } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function CookieBanner() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("atelier_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsOpen(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("atelier_cookie_consent", "all");
    setIsOpen(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("atelier_cookie_consent", "essential");
    setIsOpen(false);
  };

  const saveCustom = () => {
    localStorage.setItem("atelier_cookie_consent", JSON.stringify(preferences));
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-50 bg-[#111111]/95 backdrop-blur-xl text-white p-6 rounded-2xl border border-white/10 shadow-2xl"
        >
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
              <span className="text-xs uppercase tracking-widest text-[#EBDCCB] font-medium">
                {t("Privacy & Discretion", "Privatsphäre & Diskretion")}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-white/70 leading-relaxed mb-4">
            {t(
              "Atelier Lumen uses refined analytical cookies to preserve camera state, remember language preferences, and ensure seamless studio rendering.",
              "Atelier Lumen nutzt verfeinerte Cookies, um Studio-Einstellungen, Sprachauswahl und reibungsloses Rendering zu gewährleisten."
            )}
          </p>

          {showPreferences ? (
            <div className="space-y-3 mb-4 pt-2 border-t border-white/10 text-xs">
              <label className="flex items-center justify-between text-white/80">
                <span>{t("Strictly Essential (Studio Engine)", "Technisch notwendig (Studio-Engine)")}</span>
                <input type="checkbox" checked disabled className="accent-[#6B1425]" />
              </label>
              <label className="flex items-center justify-between text-white/80 cursor-pointer">
                <span>{t("Experience Analytics", "Nutzungs-Analytics")}</span>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="accent-[#6B1425]"
                />
              </label>
              <label className="flex items-center justify-between text-white/80 cursor-pointer">
                <span>{t("Personalized Editorial Curation", "Personalisierte Kuration")}</span>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="accent-[#6B1425]"
                />
              </label>
              <button
                onClick={saveCustom}
                className="w-full py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-medium transition-colors"
              >
                {t("Save Selected Preferences", "Auswahl speichern")}
              </button>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <button
                onClick={acceptAll}
                className="w-full sm:w-auto flex-1 px-4 py-2.5 bg-[#6B1425] hover:bg-[#56101E] text-white text-xs font-medium rounded-full transition-colors"
              >
                {t("Accept All", "Alle akzeptieren")}
              </button>
              <button
                onClick={acceptEssential}
                className="w-full sm:w-auto px-3 py-2.5 bg-transparent border border-white/20 hover:border-white/40 text-white/80 hover:text-white text-xs rounded-full transition-colors"
              >
                {t("Essential Only", "Nur notwendige")}
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="text-xs text-white/50 hover:text-white underline underline-offset-4 py-1"
              >
                {t("Preferences", "Einstellungen")}
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
