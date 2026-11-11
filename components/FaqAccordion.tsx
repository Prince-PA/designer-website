"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { FAQS } from "../lib/data";

export function FaqAccordion() {
  const { lang, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-28 px-5 sm:px-8 max-w-5xl mx-auto border-t border-[#111111]/10 bg-[#F7F5F2]">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-[#6B1425] font-mono block mb-3">
          08 / {t("Clarity & Knowledge", "Transparenz & Wissen")}
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight mb-4">
          {t("Frequently Asked Questions", "Häufig gestellte Fragen")}
        </h2>
        <p className="text-xs sm:text-sm text-[#716E6A] max-w-lg mx-auto leading-relaxed">
          {t(
            "Everything you need to know about neural garment fitting, model copyright, and production turnaround times.",
            "Alles Wissenswerte über neuronales Garment-Fitting, Urheberrechte exklusiver Models und Produktionszeiten."
          )}
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const question = lang === "EN" ? faq.questionEn : faq.questionDe;
          const answer = lang === "EN" ? faq.answerEn : faq.answerDe;

          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isOpen
                  ? "border-[#6B1425]/40 bg-white shadow-lg"
                  : "border-[#111111]/10 hover:border-[#111111]/25 bg-white/70"
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left text-[#111111] gap-4"
                aria-expanded={isOpen}
              >
                <span className="font-serif text-base sm:text-lg font-medium pr-2">
                  {question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? "bg-[#6B1425] text-white" : "bg-[#FAF9F6] text-[#716E6A]"
                  }`}
                >
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#716E6A] leading-relaxed border-t border-[#111111]/5">
                      {answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
