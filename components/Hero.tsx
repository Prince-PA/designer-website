"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface HeroProps {
  onOpenStudio: () => void;
  onOpenDemo: () => void;
}

export function Hero({ onOpenStudio, onOpenDemo }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-16 px-5 sm:px-8 overflow-hidden bg-[#F7F5F2]">
      {/* Background Architectural Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#6B1425]/5 via-[#C5A880]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Floating mini cards drifting gently around the headline */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [-1.5, 1.5, -1.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:flex absolute top-36 left-12 xl:left-24 z-10 p-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#111111]/10 shadow-xl items-center gap-3 select-none"
      >
        <div className="w-12 h-14 rounded-xl overflow-hidden bg-black/10 flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=200&q=80"
            alt="Floating mood"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="pr-2">
          <div className="flex items-center gap-1 text-[10px] font-mono uppercase text-[#6B1425] font-semibold">
            <Sparkles className="w-2.5 h-2.5" />
            <span>Virtual Runway</span>
          </div>
          <span className="font-serif text-xs font-bold text-[#111111]">FW26 Preview</span>
          <span className="text-[10px] text-[#716E6A] block">Rendered in 2.8s</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [12, -8, 12], rotate: [2, -1, 2] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="hidden lg:flex absolute top-48 right-12 xl:right-28 z-10 p-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#111111]/10 shadow-xl items-center gap-3 select-none"
      >
        <div className="w-12 h-14 rounded-xl overflow-hidden bg-black/10 flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=200&q=80"
            alt="Macro grain"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="pr-2">
          <div className="flex items-center gap-1 text-[10px] font-mono uppercase text-emerald-700 font-semibold">
            <Zap className="w-2.5 h-2.5" />
            <span>Textile Physics</span>
          </div>
          <span className="font-serif text-xs font-bold text-[#111111]">Zero Seam Drift</span>
          <span className="text-[10px] text-[#716E6A] block">100% On-Brand Match</span>
        </div>
      </motion.div>

      {/* Main Top Header Block */}
      <div className="max-w-5xl mx-auto text-center relative z-10 mt-6 sm:mt-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#111111]/10 bg-white/60 backdrop-blur-sm text-xs font-mono uppercase tracking-[0.25em] text-[#6B1425] mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#6B1425] animate-ping" />
          <span>{t("A studio without a set.", "Ein Studio ohne Set.")}</span>
        </motion.div>

        {/* Huge Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#111111] leading-[1.04] mb-8 font-normal"
        >
          {t("You decide what the world", "Sie entscheiden, was die Welt")}
          <span className="block italic font-serif font-light text-[#6B1425]">
            {t("sees and wears.", "sieht und trägt.")}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#716E6A] font-light leading-relaxed mb-10"
        >
          {t(
            "Replace high-stress shoot days, weather permits, and 5-figure location budgets. Produce luxury on-model editorial campaigns and lookbooks directly from simple packshots in minutes.",
            "Ersetzen Sie aufwendige Studiotage, Wetterrisiken und fünfstellige Budgets. Erstellen Sie luxuriöse On-Model-Kampagnen und Lookbooks direkt aus einfachen Packshots – in wenigen Minuten."
          )}
        </motion.p>

        {/* Primary CTA and Secondary Outline CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          {/* PRIMARY BUTTON: "Take Your Picture" */}
          <button
            onClick={onOpenStudio}
            className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[#6B1425] hover:bg-[#56101E] text-white font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-3 transition-all btn-bordeaux-glow cursor-pointer"
          >
            <Camera className="w-5 h-5 text-[#EBDCCB] animate-pulse" />
            <span>{t("Take Your Picture", "Foto aufnehmen")}</span>
          </button>

          {/* SECONDARY OUTLINE BUTTON: "Book a Demo" */}
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-7 sm:px-8 py-4 sm:py-5 rounded-full border border-[#111111]/30 hover:border-[#111111] bg-white/70 hover:bg-white text-[#111111] font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            <span>{t("Book a Demo", "Demo anfragen")}</span>
            <ArrowRight className="w-4 h-4 text-[#716E6A]" />
          </button>
        </motion.div>
      </div>

      {/* Large Full-Bleed Editorial Fashion Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.55 }}
        className="max-w-6xl w-full mx-auto mt-12 sm:mt-16 relative rounded-3xl overflow-hidden shadow-2xl border border-[#111111]/10 bg-black aspect-[16/9] sm:aspect-[21/9]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=2000&q=85"
          alt="AI Haute Couture Model in Statement Trench Coat"
          className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
        />

        {/* Editorial Overlay Badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-[#EBDCCB]">
                CAMPAIGN NO. 04 / VIRTUAL HAUTE COUTURE
              </span>
              <span className="text-white/60 text-xs hidden md:inline">• 4K HDR MASTER</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-light text-white">
              {t("The Burgundy Trench Study in Paris", "Die Bordeaux-Trench-Studie in Paris")}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenStudio}
              className="px-4 py-2 rounded-full bg-white/90 hover:bg-white text-[#111111] text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 shadow-lg transition-transform hover:scale-105"
            >
              <Camera className="w-3.5 h-3.5 text-[#6B1425]" />
              <span>{t("Replicate This Shoot", "Diesen Shoot replizieren")}</span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
