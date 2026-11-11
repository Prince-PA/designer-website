"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { THREE_CARDS } from "../lib/data";

interface ThreeCardStripProps {
  onOpenStudio: () => void;
}

export function ThreeCardStrip({ onOpenStudio }: ThreeCardStripProps) {
  const { lang, t } = useLanguage();

  return (
    <section className="py-24 px-5 sm:px-8 max-w-7xl mx-auto border-t border-[#111111]/10 bg-[#F7F5F2]">
      {/* Eyebrow and Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#6B1425] font-mono block mb-3">
            01 / {t("Creative Capabilities", "Kreative Bandbreite")}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#111111] tracking-tight">
            {t("One virtual studio.", "Ein virtuelles Studio.")}
            <span className="block italic text-[#716E6A] font-light">
              {t("Every creative format.", "Jedes kreative Format.")}
            </span>
          </h2>
        </div>

        <p className="max-w-md text-xs sm:text-sm text-[#716E6A] leading-relaxed">
          {t(
            "From billboard campaigns to 100-SKU seasonal lookbooks and conversion-focused PDP assets, maintain absolute stylistic consistency across all touchpoints.",
            "Von Plakatkampagnen über saisonale Lookbooks bis hin zu conversionstarken PDP-Motiven – maximale visuelle Konsistenz über alle Kanäle."
          )}
        </p>
      </div>

      {/* Three Tall Image Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {THREE_CARDS.map((card, idx) => {
          const title = lang === "EN" ? card.titleEn : card.titleDe;
          const desc = lang === "EN" ? card.descEn : card.descDe;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              onClick={onOpenStudio}
              className="group relative rounded-3xl overflow-hidden cursor-pointer bg-black aspect-[3/4] shadow-lg flex flex-col justify-end p-6 sm:p-8"
              data-cursor="camera"
            >
              {/* Background Editorial Image with Smooth Hover Zoom */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:opacity-90"
              />

              {/* Gradient Vignette for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 transition-opacity duration-300 group-hover:from-black/95" />

              {/* Top Category Badge */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white/90 z-10">
                <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest uppercase">
                  {card.category}
                </span>
                <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              {/* Bottom Content with Slide-up Animation */}
              <div className="relative z-10 transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
                <div className="flex items-center gap-2 mb-2 text-[#EBDCCB] text-[11px] font-mono tracking-wider">
                  <Sparkles className="w-3 h-3 text-[#C5A880]" />
                  <span>{card.badge}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-3 leading-snug">
                  {title}
                </h3>

                {/* Caption slide-up details */}
                <p className="text-xs text-white/70 leading-relaxed font-light line-clamp-3 transition-opacity duration-300">
                  {desc}
                </p>

                <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-white/60">
                  <span>FORMAT: {card.aspect}</span>
                  <span className="text-[#EBDCCB] font-semibold group-hover:underline">
                    {t("Launch In Studio →", "Im Studio öffnen →")}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
