"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface FinalCtaProps {
  onOpenStudio: () => void;
  onOpenDemo: () => void;
}

export function FinalCta({ onOpenStudio, onOpenDemo }: FinalCtaProps) {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-5 sm:px-8 bg-[#111111] text-[#F7F5F2] relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#6B1425]/30 via-[#C5A880]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-mono uppercase tracking-[0.3em] text-[#EBDCCB] mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>{t("Virtual Haute Couture Studio", "Virtuelles Haute-Couture-Studio")}</span>
        </motion.div>

        {/* Giant Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.05] mb-8 font-normal"
        >
          {t("Ready for your", "Bereit für Ihren")}
          <span className="block italic text-[#EBDCCB] font-light">
            {t("first shoot?", "ersten Shoot?")}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto text-sm sm:text-base text-white/70 font-light leading-relaxed mb-12"
        >
          {t(
            "Upload one packshot right now or book a guided demonstration with our creative directors. Experience how leading fashion brands eliminate shoot fatigue.",
            "Laden Sie jetzt einen Packshot hoch oder buchen Sie eine persönliche Demonstration mit unseren Art Directoren. Entdecken Sie die Zukunft der Modefotografie."
          )}
        </motion.p>

        {/* Action Buttons: Repeat "Take Your Picture" + "Book a Demo" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          {/* PRIMARY: "Take Your Picture" */}
          <button
            onClick={onOpenStudio}
            className="w-full sm:w-auto px-9 sm:px-11 py-4 sm:py-5 rounded-full bg-[#6B1425] hover:bg-[#56101E] text-white font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-3 transition-all btn-bordeaux-glow cursor-pointer"
          >
            <Camera className="w-5 h-5 text-[#EBDCCB] animate-pulse" />
            <span>{t("Take Your Picture", "Foto aufnehmen")}</span>
          </button>

          {/* SECONDARY: "Book a Demo" */}
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-8 sm:px-9 py-4 sm:py-5 rounded-full border border-white/30 hover:border-white bg-transparent hover:bg-white/10 text-white font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-2 transition-all"
          >
            <span>{t("Book a Demo", "Demo anfragen")}</span>
            <ArrowRight className="w-4 h-4 text-white/60" />
          </button>
        </motion.div>

        {/* Security / Confidentiality Note */}
        <div className="mt-12 flex items-center justify-center gap-2 text-xs font-mono text-white/40">
          <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
          <span>SOC2 TYPE II CERTIFIED • ZERO THIRD-PARTY TRAINING • STRICT CONFIDENTIALITY</span>
        </div>
      </div>
    </section>
  );
}
