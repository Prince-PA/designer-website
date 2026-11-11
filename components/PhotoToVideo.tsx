"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Sparkles, Heart, Share2, MessageCircle } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function PhotoToVideo() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState<Record<number, boolean>>({ 0: true, 1: true, 2: true });

  const reels = [
    {
      id: 0,
      title: "Runway Strut 4K",
      spec: "Dynamic Motion Simulation • 60fps",
      likes: "24.8K",
      audio: "Atelier Runway Original Mix",
      // Curated fashion editorial looping poster / preview
      poster: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-neon-lights-40019-large.mp4"
    },
    {
      id: 1,
      title: "360° Drape Rotation",
      spec: "Fabric Physics & Elasticity",
      likes: "42.1K",
      audio: "Milan Fashion Week Ambient",
      poster: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=85",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-model-walking-on-a-catwalk-40026-large.mp4"
    },
    {
      id: 2,
      title: "Editorial Wind Turn",
      spec: "Natural Hair & Fabric Flow",
      likes: "18.5K",
      audio: "Haute Couture Studio Track",
      poster: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=85",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-a-leather-jacket-in-an-autumn-park-40008-large.mp4"
    }
  ];

  return (
    <section className="py-28 px-5 sm:px-8 max-w-7xl mx-auto border-t border-[#111111]/10 bg-[#F7F5F2]">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-[#6B1425] font-mono block mb-3">
          06 / {t("Motion & Social Commerce", "Motion & Social Commerce")}
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight mb-4">
          {t("From photo to video.", "Vom Foto zum Video.")}
          <span className="block italic text-[#6B1425] font-light">
            {t("Ready for Reels and TikTok.", "Bereit für Reels und TikTok.")}
          </span>
        </h2>
        <p className="text-xs sm:text-sm text-[#716E6A] max-w-xl mx-auto leading-relaxed">
          {t(
            "Synthesize silky 9:16 vertical motion clips with zero video crew or camera rigs. Natural wind turbulence, fabric weight dynamics, and camera zooms generated from static packshots.",
            "Generieren Sie flüssige 9:16-Hochkantvideos komplett ohne Filmteam: Natürlicher Wind, authentische Stoffphysik und Kamerazooms aus statischen Bildern."
          )}
        </p>
      </div>

      {/* 3 Vertical Phone Frames */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {reels.map((reel, idx) => (
          <motion.div
            key={reel.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className="flex flex-col items-center"
          >
            {/* Phone Frame Housing */}
            <div className="relative w-full max-w-[290px] aspect-[9/16] rounded-[42px] p-3 bg-[#111111] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] border-4 border-[#2A2A2A] overflow-hidden">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30" />

              {/* Video Screen Content */}
              <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-black">
                {/* Fallback image + HTML5 Video */}
                <video
                  src={reel.videoUrl}
                  poster={reel.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Reels UI Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 pointer-events-none" />

                {/* Right side interaction buttons */}
                <div className="absolute right-3 bottom-16 flex flex-col items-center gap-4 text-white z-20 pointer-events-none">
                  <div className="flex flex-col items-center">
                    <Heart className="w-6 h-6 fill-rose-600 text-rose-600 mb-0.5" />
                    <span className="text-[10px] font-mono">{reel.likes}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <MessageCircle className="w-5 h-5 mb-0.5" />
                    <span className="text-[10px] font-mono">312</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Share2 className="w-5 h-5 mb-0.5" />
                    <span className="text-[10px] font-mono">1.4K</span>
                  </div>
                </div>

                {/* Bottom Video Metadata */}
                <div className="absolute bottom-4 left-4 right-16 text-white z-20 pointer-events-none">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#EBDCCB] mb-1">
                    <Sparkles className="w-3 h-3 text-[#C5A880]" />
                    <span>AI MOTION SYNTH</span>
                  </div>
                  <h4 className="font-serif text-sm font-semibold leading-tight text-white mb-0.5">
                    {reel.title}
                  </h4>
                  <p className="text-[10px] text-white/70 font-mono truncate">{reel.audio}</p>
                </div>
              </div>
            </div>

            {/* Spec Tag beneath frame */}
            <span className="text-[11px] font-mono text-[#716E6A] mt-4 uppercase tracking-wider text-center">
              {reel.spec}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
