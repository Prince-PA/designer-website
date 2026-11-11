"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ZoomIn, Sparkles, Check, Move } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function DetailZoom() {
  const { t } = useLanguage();
  const imageRef = useRef<HTMLDivElement | null>(null);

  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const garmentDetailImage = "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1800&q=90";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setMousePos({ x, y });
  };

  const hotspots = [
    {
      id: 1,
      x: 32,
      y: 42,
      title: "Horn Button 24mm",
      desc: "Zero distortion on engraved brand rim & bespoke tortoiseshell striations"
    },
    {
      id: 2,
      x: 64,
      y: 28,
      title: "Double French Seam",
      desc: "Exact 12 stitches-per-inch tension matching physical production sample"
    },
    {
      id: 3,
      x: 75,
      y: 65,
      title: "Waxed Leather Grain",
      desc: "Vegetable tanned calfskin micro-pores and realistic light specular reflection"
    }
  ];

  return (
    <section className="py-28 px-5 sm:px-8 max-w-7xl mx-auto border-t border-[#111111]/10 bg-[#F7F5F2]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#6B1425] font-mono block mb-3">
            03 / {t("Macro Fidelity", "Makro-Präzision")}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight">
            {t("Every detail fits.", "Jedes Detail stimmt.")}
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-sm sm:text-base text-[#111111] font-medium mb-1">
            {t(
              "Seams, buttons, prints, logos: exactly the piece you sell.",
              "Nähte, Knöpfe, Prints, Logos: exakt das Teil, das Sie verkaufen."
            )}
          </p>
          <p className="text-xs sm:text-sm text-[#716E6A] leading-relaxed">
            {t(
              "Our physics engine eliminates generic AI hallucinations. Hardware finishes, stitch densities, and woven grain patterns stay 100% faithful to your technical production pack.",
              "Keine verwaschenen KI-Fantasien. Hardware-Finishes, Nahtdichten und Webstrukturen entsprechen exakt Ihrem physischen Tech-Pack."
            )}
          </p>
        </div>
      </div>

      {/* Main Interactive Zoom Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Interactive Image Container with Magnifier Lens */}
        <div className="lg:col-span-8">
          <div
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative rounded-3xl overflow-hidden aspect-[16/10] bg-black cursor-crosshair shadow-2xl border border-[#111111]/15 select-none"
          >
            {/* Base Garment Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={garmentDetailImage}
              alt="High-resolution garment macro shot"
              className="w-full h-full object-cover"
            />

            {/* Hint overlay */}
            {!isHovering && (
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none transition-opacity">
                <div className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-[#111111] text-xs font-mono flex items-center gap-2 shadow-lg">
                  <ZoomIn className="w-4 h-4 text-[#6B1425]" />
                  <span>{t("Hover or drag over garment to activate 2.5x optical lens", "Über das Kleidungsstück fahren für 2,5x Lupe")}</span>
                </div>
              </div>
            )}

            {/* Hotspot Pins */}
            {hotspots.map((spot) => (
              <button
                key={spot.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveHotspot(spot.id === activeHotspot ? null : spot.id);
                }}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center transition-transform ${
                  activeHotspot === spot.id
                    ? "bg-[#6B1425] text-white scale-125 ring-4 ring-white/50 z-20"
                    : "bg-white/90 text-[#111111] hover:scale-110 shadow-lg z-10"
                }`}
                aria-label={spot.title}
              >
                <span className="text-[11px] font-bold">{spot.id}</span>
              </button>
            ))}

            {/* Circular High-Precision Magnifier Lens */}
            {isHovering && (
              <div
                className="absolute w-48 h-48 rounded-full border-2 border-white shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden sm:block z-30 ring-4 ring-[#6B1425]/40"
                style={{
                  left: `${mousePos.x}%`,
                  top: `${mousePos.y}%`,
                }}
              >
                <div
                  className="w-full h-full bg-no-repeat"
                  style={{
                    backgroundImage: `url(${garmentDetailImage})`,
                    backgroundPosition: `${mousePos.x}% ${mousePos.y}%`,
                    backgroundSize: "320% 320%",
                  }}
                />
                <div className="absolute inset-0 border border-white/20 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6B1425]" />
                </div>
              </div>
            )}

            {/* Bottom Status bar */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-[11px] font-mono pointer-events-none">
              <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md">
                CALIBRATION: 50.4 MEGAPIXEL RAW
              </span>
              <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md hidden sm:inline">
                COLOR MATCH: ΔE &lt; 0.8
              </span>
            </div>
          </div>
        </div>

        {/* Hotspots Info Card on the Right */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#111111]/10 shadow-lg">
            <div className="flex items-center gap-2 mb-4 text-[#6B1425] text-xs font-mono font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>{t("Verified Production Points", "Verifizierte Qualitätsmerkmale")}</span>
            </div>

            <div className="space-y-4">
              {hotspots.map((spot) => (
                <div
                  key={spot.id}
                  onClick={() => setActiveHotspot(spot.id)}
                  className={`p-3.5 rounded-2xl cursor-pointer border transition-all ${
                    activeHotspot === spot.id
                      ? "border-[#6B1425] bg-[#6B1425]/5 shadow-sm"
                      : "border-[#111111]/5 hover:border-[#111111]/20 bg-[#F7F5F2]/40"
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-1">
                    <span className="w-5 h-5 rounded-full bg-[#111111] text-white text-[10px] flex items-center justify-center font-bold">
                      {spot.id}
                    </span>
                    <h4 className="font-serif text-sm font-semibold text-[#111111]">{spot.title}</h4>
                  </div>
                  <p className="text-xs text-[#716E6A] pl-7 leading-relaxed">{spot.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#111111]/10 text-xs text-[#716E6A]">
              <div className="flex items-center gap-2 text-emerald-800 font-medium">
                <Check className="w-4 h-4" />
                <span>{t("Zero generative hallucination guarantee", "Garantie gegen generative Bildfehler")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
