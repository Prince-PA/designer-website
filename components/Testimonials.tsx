"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { TESTIMONIALS } from "../lib/data";

export function Testimonials() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  };

  const next = () => {
    setCurrentIndex((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  const brandLogos = [
    "VOGUE DIGITAL",
    "KERING LABS",
    "MAISON ARCHIVE",
    "NET-A-PORTER EDIT",
    "SSENSE LAB",
    "ZALANDO LUXE",
    "BERLIN FASHION COUNCIL",
    "HARRODS EDITORIAL"
  ];

  return (
    <section className="py-28 px-5 sm:px-8 max-w-7xl mx-auto border-t border-[#111111]/10 bg-[#F7F5F2]">
      {/* Client Brand Marquee */}
      <div className="mb-20">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#716E6A] font-mono block text-center mb-8">
          {t("Trusted by creative leaders at luxury houses and modern fashion brands", "Vertrauen führender Luxushäuser und zeitgenössischer Modemarken")}
        </span>

        {/* Smooth CSS Marquee */}
        <div className="overflow-hidden relative select-none">
          <div className="flex gap-12 whitespace-nowrap animate-marquee items-center opacity-60 hover:opacity-100 transition-opacity">
            {[...brandLogos, ...brandLogos].map((brand, i) => (
              <span
                key={i}
                className="font-serif text-lg sm:text-xl tracking-wider text-[#111111] font-semibold uppercase px-4"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Swipeable / Tabbed Testimonial Quote Carousel */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-14 border border-[#111111]/10 shadow-xl relative">
        <div className="w-12 h-12 rounded-full bg-[#6B1425]/10 text-[#6B1425] flex items-center justify-center mb-6">
          <Quote className="w-5 h-5 fill-current" />
        </div>

        <div className="min-h-[160px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >
              <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#111111] font-normal leading-relaxed mb-8">
                “{current.quote}”
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#111111]/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#FAF9F6] border border-[#111111]/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={current.avatar} alt={current.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#111111]">{current.author}</h4>
                    <p className="text-xs text-[#716E6A]">
                      {current.title} • <span className="font-semibold text-[#111111]">{current.company}</span>
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{current.stats}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#111111]/5">
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  currentIndex === idx ? "w-8 bg-[#6B1425]" : "w-2 bg-[#111111]/20 hover:bg-[#111111]/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#111111]/15 hover:border-[#111111] flex items-center justify-center text-[#111111] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#111111]/15 hover:border-[#111111] flex items-center justify-center text-[#111111] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
