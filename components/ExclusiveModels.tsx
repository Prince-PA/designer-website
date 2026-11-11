"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Lock, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { EXCLUSIVE_MODELS, ModelProfile } from "../lib/data";

interface ExclusiveModelsProps {
  onOpenStudio: () => void;
}

export function ExclusiveModels({ onOpenStudio }: ExclusiveModelsProps) {
  const { t } = useLanguage();
  const [activeModel, setActiveModel] = useState<ModelProfile>(EXCLUSIVE_MODELS[0]);

  return (
    <section id="models" className="py-28 px-5 sm:px-8 max-w-7xl mx-auto border-t border-[#111111]/10 bg-[#F7F5F2]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#6B1425] font-mono block mb-3">
            04 / {t("Brand Identity Sovereignty", "Exklusive Markenidentität")}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight mb-2">
            {t("Same model. Every scene.", "Gleiches Model. Jede Szene.")}
          </h2>
          <p className="text-xs sm:text-sm text-[#6B1425] font-mono tracking-wider uppercase font-semibold">
            {t("Created only for your brand. No other shop gets them.", "Exklusiv für Ihre Marke erschaffen. Kein anderer Shop erhält sie.")}
          </p>
        </div>

        <p className="max-w-md text-xs sm:text-sm text-[#716E6A] leading-relaxed">
          {t(
            "Generic AI models look different in every prompt. Atelier Lumen locks bone architecture, skin tones, and facial geometry across all your campaigns for perpetual brand recognition.",
            "Gewöhnliche KI erzeugt jedes Mal ein anderes Gesicht. Atelier Lumen verankert Knochenstruktur, Teint und Geometrie dauerhaft für eine unverwechselbare Markenidentität."
          )}
        </p>
      </div>

      {/* 4 Models Interactive Carousel / Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {EXCLUSIVE_MODELS.map((model) => {
          const isSelected = activeModel.id === model.id;
          return (
            <motion.div
              key={model.id}
              onClick={() => setActiveModel(model)}
              whileHover={{ y: -6 }}
              className={`group cursor-pointer rounded-3xl overflow-hidden border-2 transition-all p-3.5 bg-white flex flex-col justify-between ${
                isSelected
                  ? "border-[#6B1425] ring-4 ring-[#6B1425]/15 shadow-2xl"
                  : "border-[#111111]/10 hover:border-[#111111]/30 shadow-md"
              }`}
              data-cursor="camera"
            >
              <div>
                {/* Portrait Image */}
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF9F6] relative mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Lock badge indicating exclusivity */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] font-mono flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-[#C5A880]" />
                    <span>Proprietary IP</span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono">
                    {model.origin}
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-serif text-xl font-bold text-[#111111]">{model.name}</h3>
                <span className="text-xs text-[#6B1425] font-semibold block mb-2">{model.archetype}</span>
                <p className="text-xs text-[#716E6A] leading-relaxed line-clamp-2">{model.look}</p>
              </div>

              {/* Specs footer */}
              <div className="mt-4 pt-3 border-t border-[#111111]/10 flex items-center justify-between text-[11px] font-mono text-[#716E6A]">
                <span>{model.height}</span>
                <span className="text-[#6B1425] font-medium group-hover:underline">
                  {t("Select Model", "Auswählen")}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Featured Model Bio Banner */}
      <div className="rounded-3xl bg-white p-6 sm:p-8 border border-[#111111]/10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 bg-[#FAF9F6] border border-[#111111]/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={activeModel.image} alt={activeModel.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#6B1425] font-bold">
                {t("Active Brand Model", "Aktives Marken-Model")}:
              </span>
              <h4 className="font-serif text-lg font-bold text-[#111111]">{activeModel.name}</h4>
            </div>
            <p className="text-xs text-[#716E6A] max-w-xl mt-1 leading-relaxed">{activeModel.bio}</p>
          </div>
        </div>

        <button
          onClick={onOpenStudio}
          className="w-full md:w-auto px-6 py-3.5 rounded-full bg-[#6B1425] hover:bg-[#56101E] text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-all whitespace-nowrap"
        >
          <Camera className="w-4 h-4 text-[#EBDCCB]" />
          <span>{t(`Create Shoot with ${activeModel.name.split(" ")[0]}`, `Shoot mit ${activeModel.name.split(" ")[0]} starten`)}</span>
        </button>
      </div>
    </section>
  );
}
