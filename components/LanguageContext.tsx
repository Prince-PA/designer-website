"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "EN" | "DE";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (en: string, de: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("EN");

  useEffect(() => {
    const saved = localStorage.getItem("atelier_lang");
    if (saved === "EN" || saved === "DE") {
      setLang(saved);
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("atelier_lang", newLang);
  };

  const toggleLang = () => {
    const next = lang === "EN" ? "DE" : "EN";
    handleSetLang(next);
  };

  const t = (en: string, de: string) => (lang === "EN" ? en : de);

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
