"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Camera, CheckCircle2, Layers } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { SHOWCASE_POSES } from "../lib/data";

interface ScrollPhotoshootShowcaseProps {
  onOpenStudio: () => void;
}

export function ScrollPhotoshootShowcase({ onOpenStudio }: ScrollPhotoshootShowcaseProps) {
  const { t } = useLanguage();
  const [activePoseIndex, setActivePoseIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Auto progression or scroll sync
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePoseIndex((prev) => (prev + 1) % SHOWCASE_POSES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const activePose = SHOWCASE_POSES[activePoseIndex];

  return (
    <section
      id="showcase"
      ref={containerRef}
      className="py-28 px-5 sm:px-8 max-w-7xl mx-auto border-t border-[#111111]/10 bg-[#F7F5F2]"
    >
      {/* Eyebrow and Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-xs uppercase tracking-[0.3em] text-[#6B1425] font-mono block mb-3">
          02 / {t("The Signature Workflow", "Der Signatur-Workflow")}
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight mb-4">
          {t("From your product to a full shoot.", "Vom Produkt zum kompletten Shoot.")}
          <span className="block italic text-[#6B1425] font-light">
            {t("In minutes.", "In wenigen Minuten.")}
          </span>
        </h2>
        <p className="text-xs sm:text-sm text-[#716E6A] max-w-xl mx-auto leading-relaxed">
          {t(
            "One packshot input generates an entire editorial series. The same model, same textile fidelity, across multiple dynamic camera angles, compositions, and lighting rigs.",
            "Ein einziger Packshot genügt für eine komplette Editorial-Serie: Dasselbe Model, identische Textur-Fidelity über variable Posen, Bildwinkel und Licht-Setups hinweg."
          )}
        </p>
      </div>

      {/* Main Grid: Left Packshot Sticky + Right 6-Pose Collage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* LEFT COLUMN: The Source Packshot (Sticky Card) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#111111]/10 shadow-xl relative overflow-hidden">
            {/* Top Tag */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-[#6B1425]/10 text-[#6B1425] text-[10px] font-mono uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6B1425] animate-ping" />
                INPUT ASSET: PACKSHOT
              </span>
              <span className="text-[11px] font-mono text-[#716E6A]">SKU: TC-7749-BDX</span>
            </div>

            {/* Packshot Image of Burgundy Trench */}
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#FAF9F6] border border-[#111111]/5 mb-6 relative group" data-cursor="camera">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=85"
                alt="Burgundy Leather Trench Coat Packshot"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-[10px] font-mono">
                Physical Sample Specimen
              </div>
            </div>

            {/* Garment Details */}
            <div className="space-y-3 border-t border-[#111111]/10 pt-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#716E6A]">{t("Garment Type", "Artikel")}</span>
                <span className="font-semibold text-[#111111]">Burgundy Leather Trench</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#716E6A]">{t("Color Spec", "Farbspezifikation")}</span>
                <span className="font-mono text-[#6B1425] font-semibold">Pantone 19-1627 TCX (Bordeaux)</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#716E6A]">{t("Textile Physics", "Materialphysik")}</span>
                <span className="font-semibold text-[#111111]">Glazed Calfskin / 1.1mm Drape</span>
              </div>
            </div>

            {/* CTA to replicate */}
            <button
              onClick={onOpenStudio}
              className="w-full mt-6 py-3.5 rounded-full bg-[#111111] hover:bg-[#6B1425] text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <Camera className="w-4 h-4 text-[#EBDCCB]" />
              <span>{t("Shoot This Trench Coat", "Diesen Trenchcoat shooten")}</span>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: 6 On-Model Editorial Poses arranged dynamically */}
        <div className="lg:col-span-7 space-y-6">
          {/* Interactive Step Navigator */}
          <div className="flex items-center justify-between pb-2 border-b border-[#111111]/10">
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg font-semibold text-[#111111]">
                {t("Generated On-Model Series (Model: Valérie)", "Generierte On-Model Serie (Model: Valérie)")}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-[10px]">
                Identical Face & Identity
              </span>
            </div>
            <span className="text-xs font-mono text-[#716E6A]">
              0{activePoseIndex + 1} / 0{SHOWCASE_POSES.length}
            </span>
          </div>

          {/* Quick Pose Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {SHOWCASE_POSES.map((pose, idx) => (
              <button
                key={pose.id}
                onClick={() => setActivePoseIndex(idx)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                  activePoseIndex === idx
                    ? "bg-[#6B1425] text-white shadow-sm"
                    : "bg-white/80 hover:bg-white text-[#716E6A] border border-[#111111]/10"
                }`}
              >
                Pose 0{idx + 1}: {pose.pose}
              </button>
            ))}
          </div>

          {/* Active Featured Pose Presentation */}
          <div className="relative rounded-3xl overflow-hidden bg-black aspect-[4/3] sm:aspect-[16/10] shadow-2xl border border-[#111111]/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePose.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0"
                data-cursor="camera"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activePose.image}
                  alt={activePose.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#EBDCCB] block mb-1">
                      {activePose.tag} • {activePose.aspect}
                    </span>
                    <h4 className="font-serif text-2xl sm:text-3xl font-light text-white mb-1">
                      {activePose.title}
                    </h4>
                    <p className="text-xs text-white/70">{activePose.subtitle}</p>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider">
                    {t("Consistent Identity", "Identische Identität")}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 6 Miniature Pose Thumbnails Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 pt-2">
            {SHOWCASE_POSES.map((pose, idx) => {
              const isActive = activePoseIndex === idx;
              return (
                <div
                  key={pose.id}
                  onClick={() => setActivePoseIndex(idx)}
                  className={`group cursor-pointer rounded-xl overflow-hidden border-2 transition-all aspect-[3/4] relative bg-black ${
                    isActive
                      ? "border-[#6B1425] ring-2 ring-[#6B1425]/30 scale-102"
                      : "border-transparent opacity-70 hover:opacity-100 hover:border-[#111111]/30"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={pose.image}
                    alt={pose.pose}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 left-1 right-1 text-center bg-black/60 backdrop-blur-xs py-0.5 rounded text-[9px] font-mono text-white line-clamp-1">
                    {pose.pose}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Highlights Footer Note */}
          <div className="p-4 rounded-2xl bg-white border border-[#111111]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#716E6A]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{t("All 6 images synthesized from a single trench packshot in under 4 minutes.", "Alle 6 Motive entstanden aus einem einzelnen Packshot in unter 4 Minuten.")}</span>
            </div>
            <button
              onClick={onOpenStudio}
              className="text-[#6B1425] font-semibold underline underline-offset-4 hover:text-[#56101E] whitespace-nowrap"
            >
              {t("Try with your own garment →", "Mit eigenem Produkt testen →")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
