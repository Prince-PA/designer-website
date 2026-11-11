"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, TrendingDown, CheckCheck, Clock } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function StatsBand() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [costStat, setCostStat] = useState(0);
  const [fidelityStat, setFidelityStat] = useState(0);
  const [speedStat, setSpeedStat] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Animate costStat to 80
    let c = 0;
    const costInterval = setInterval(() => {
      c += 4;
      if (c >= 80) {
        setCostStat(80);
        clearInterval(costInterval);
      } else {
        setCostStat(c);
      }
    }, 30);

    // Animate fidelityStat to 100
    let f = 0;
    const fidInterval = setInterval(() => {
      f += 5;
      if (f >= 100) {
        setFidelityStat(100);
        clearInterval(fidInterval);
      } else {
        setFidelityStat(f);
      }
    }, 25);

    // Animate speedStat to 3
    let s = 0;
    const speedInterval = setInterval(() => {
      s += 1;
      if (s >= 3) {
        setSpeedStat(3);
        clearInterval(speedInterval);
      } else {
        setSpeedStat(s);
      }
    }, 200);

    return () => {
      clearInterval(costInterval);
      clearInterval(fidInterval);
      clearInterval(speedInterval);
    };
  }, [isInView]);

  return (
    <section ref={ref} className="py-24 px-5 sm:px-8 bg-[#111111] text-[#F7F5F2] relative overflow-hidden">
      {/* Background ambient bordeaux glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#6B1425]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Editorial statement quote */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-white/95 font-light leading-snug tracking-tight">
            “{t(
              "A shoot day costs five figures and three weeks of planning. Here the same set happens on a Tuesday afternoon.",
              "Ein Studiotag kostet fünfstellige Summen und drei Wochen Vorbereitung. Hier entsteht dasselbe Set an einem Dienstagnachmittag."
            )}”
          </p>
        </div>

        {/* 3 Large Animated Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/15">
          {/* Stat 1: 80% */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C5A880] uppercase tracking-wider mb-2">
              <TrendingDown className="w-4 h-4 text-[#C5A880]" />
              <span>{t("Production Savings", "Produktionsersparnis")}</span>
            </div>
            <div className="font-serif text-6xl sm:text-7xl font-normal text-white tracking-tighter mb-2">
              {costStat}%
            </div>
            <p className="text-xs sm:text-sm text-white/70 max-w-xs leading-relaxed">
              {t(
                "below traditional studio shoot costs, crew travel, catering, and studio rental fees.",
                "unter herkömmlichen Studioshoot-Kosten, Reiseaufwänden, Catering und Mietkosten."
              )}
            </p>
          </div>

          {/* Stat 2: 100% */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
              <CheckCheck className="w-4 h-4 text-emerald-400" />
              <span>{t("Brand Continuity", "Markenkonsistenz")}</span>
            </div>
            <div className="font-serif text-6xl sm:text-7xl font-normal text-white tracking-tighter mb-2">
              {fidelityStat}%
            </div>
            <p className="text-xs sm:text-sm text-white/70 max-w-xs leading-relaxed">
              {t(
                "on-brand visual continuity. Identical exclusive model facial geometry across 200+ images.",
                "Markenkonsistenz. Identische Gesichtszüge Ihres Markenmodels über 200+ Motive hinweg."
              )}
            </p>
          </div>

          {/* Stat 3: 3 min */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 text-xs font-mono text-[#EBDCCB] uppercase tracking-wider mb-2">
              <Clock className="w-4 h-4 text-[#EBDCCB]" />
              <span>{t("Velocity", "Geschwindigkeit")}</span>
            </div>
            <div className="font-serif text-6xl sm:text-7xl font-normal text-white tracking-tighter mb-2">
              {speedStat} min
            </div>
            <p className="text-xs sm:text-sm text-white/70 max-w-xs leading-relaxed">
              {t(
                "per finished 4K master asset ready for instant e-commerce sync and billboard print.",
                "pro fertigem 4K-Master-Asset – sofort bereit für den Onlineshop und Kampagnenprint."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
