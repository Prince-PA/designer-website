"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Laptop, Sparkles, Wand2, Users, Layers } from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface SplitCardsProps {
  onOpenStudio: () => void;
  onOpenDemo: () => void;
}

export function SplitCards({ onOpenStudio, onOpenDemo }: SplitCardsProps) {
  const { t } = useLanguage();

  return (
    <section className="py-28 px-5 sm:px-8 max-w-7xl mx-auto border-t border-[#111111]/10 bg-[#F7F5F2]">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-[#6B1425] font-mono block mb-3">
          07 / {t("Operating Models", "Arbeitsmodelle")}
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight mb-4">
          {t("Do it yourself or let us do it.", "Selbst erstellen oder erstellen lassen.")}
        </h2>
        <p className="text-xs sm:text-sm text-[#716E6A] max-w-xl mx-auto leading-relaxed">
          {t(
            "Choose between intuitive in-house software access for your creative team or white-glove concierge production handled by our Parisian art directors.",
            "Wählen Sie zwischen unserer intuitiven Inhouse-Software oder schlüsselfertiger Concierge-Produktion durch unsere Art Directoren."
          )}
        </p>
      </div>

      {/* Two Large Split Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* CARD 1: SOFTWARE */}
        <motion.div
          id="software"
          whileHover={{ y: -6 }}
          onClick={onOpenStudio}
          className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-[#111111]/10 shadow-xl flex flex-col justify-between p-8 sm:p-12 min-h-[460px]"
          data-cursor="camera"
        >
          {/* Background editorial image with hover zoom */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"
            alt="Software Platform"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:from-black/95 transition-colors" />

          {/* Top Tag */}
          <div className="relative z-10 flex items-center justify-between text-white">
            <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-mono tracking-widest uppercase flex items-center gap-2">
              <Laptop className="w-3.5 h-3.5 text-[#EBDCCB]" />
              {t("Self-Service Platform", "Self-Service Plattform")}
            </span>
            <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#6B1425] transition-colors flex items-center justify-center text-white">
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Bottom Content */}
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-mono block mb-2">
              OPTION 01 / IN-HOUSE
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium mb-3">
              {t("Software", "Software")}
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-md mb-6">
              {t(
                "Your team creates the images. Upload a packshot, pick model, scene and light. Finished image in about 3 minutes.",
                "Ihr Team erstellt die Bilder selbst. Packshot hochladen, Model, Szene und Licht wählen. Fertiges Bild in rund 3 Minuten."
              )}
            </p>

            <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs font-mono text-white/70">
              <span>UNLIMITED SEATS • INSTANT RENDERING</span>
              <span className="text-[#EBDCCB] font-semibold group-hover:underline">
                {t("Launch Creator Now →", "Creator jetzt starten →")}
              </span>
            </div>
          </div>
        </motion.div>

        {/* CARD 2: SERVICE */}
        <motion.div
          id="service"
          whileHover={{ y: -6 }}
          onClick={onOpenDemo}
          className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-[#111111]/10 shadow-xl flex flex-col justify-between p-8 sm:p-12 min-h-[460px]"
        >
          {/* Background editorial image with hover zoom */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85"
            alt="Concierge Service"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:from-black/95 transition-colors" />

          {/* Top Tag */}
          <div className="relative z-10 flex items-center justify-between text-white">
            <span className="px-3.5 py-1.5 rounded-full bg-[#6B1425]/80 backdrop-blur-md text-[11px] font-mono tracking-widest uppercase flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-[#EBDCCB]" />
              {t("Full Concierge", "Full Concierge Service")}
            </span>
            <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#6B1425] transition-colors flex items-center justify-center text-white">
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Bottom Content */}
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-mono block mb-2">
              OPTION 02 / WHITE-GLOVE
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium mb-3">
              {t("Service", "Service")}
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-md mb-6">
              {t(
                "We produce for you. Send the pieces and a brief, get approved images back.",
                "Wir produzieren komplett für Sie. Senden Sie die Kollektionsteile und Ihr Moodboard – erhalten Sie freigegebene Kampagnenbilder zurück."
              )}
            </p>

            <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs font-mono text-white/70">
              <span>ART DIRECTION • RETOUCHING • SLA GUARANTEE</span>
              <span className="text-[#EBDCCB] font-semibold group-hover:underline">
                {t("Request Concierge Quote →", "Concierge anfragen →")}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
