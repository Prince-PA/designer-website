"use client";

import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { ThreeCardStrip } from "../components/ThreeCardStrip";
import { ScrollPhotoshootShowcase } from "../components/ScrollPhotoshootShowcase";
import { DetailZoom } from "../components/DetailZoom";
import { ExclusiveModels } from "../components/ExclusiveModels";
import { Integrations } from "../components/Integrations";
import { PhotoToVideo } from "../components/PhotoToVideo";
import { SplitCards } from "../components/SplitCards";
import { StatsBand } from "../components/StatsBand";
import { Testimonials } from "../components/Testimonials";
import { FaqAccordion } from "../components/FaqAccordion";
import { FinalCta } from "../components/FinalCta";
import { Footer } from "../components/Footer";
import { StudioModal } from "../components/StudioModal";
import { DemoModal } from "../components/DemoModal";

export default function HomePage() {
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const handleOpenStudio = () => setIsStudioOpen(true);
  const handleCloseStudio = () => setIsStudioOpen(false);

  const handleOpenDemo = () => setIsDemoOpen(true);
  const handleCloseDemo = () => setIsDemoOpen(false);

  return (
    <main className="relative min-h-screen bg-[#F7F5F2] text-[#111111] overflow-x-hidden">
      {/* 1. NAVBAR */}
      <Navbar
        onOpenStudio={handleOpenStudio}
        onOpenDemo={handleOpenDemo}
      />

      {/* 2. HERO */}
      <Hero
        onOpenStudio={handleOpenStudio}
        onOpenDemo={handleOpenDemo}
      />

      {/* 3. THREE CARD STRIP */}
      <ThreeCardStrip
        onOpenStudio={handleOpenStudio}
      />

      {/* 4. SCROLL-DRIVEN PHOTOSHOOT SHOWCASE */}
      <ScrollPhotoshootShowcase
        onOpenStudio={handleOpenStudio}
      />

      {/* 5. DETAIL ZOOM */}
      <DetailZoom />

      {/* 6. EXCLUSIVE MODELS */}
      <ExclusiveModels
        onOpenStudio={handleOpenStudio}
      />

      {/* 7. INTEGRATIONS */}
      <Integrations />

      {/* 8. PHOTO TO VIDEO */}
      <PhotoToVideo />

      {/* 9. DO IT YOURSELF OR LET US DO IT */}
      <SplitCards
        onOpenStudio={handleOpenStudio}
        onOpenDemo={handleOpenDemo}
      />

      {/* 10. STATS BAND */}
      <StatsBand />

      {/* 11. TESTIMONIALS */}
      <Testimonials />

      {/* 12. FAQ ACCORDION */}
      <FaqAccordion />

      {/* 13. FINAL CTA */}
      <FinalCta
        onOpenStudio={handleOpenStudio}
        onOpenDemo={handleOpenDemo}
      />

      {/* 14. FOOTER */}
      <Footer
        onOpenStudio={handleOpenStudio}
        onOpenDemo={handleOpenDemo}
      />

      {/* Interactive Studio Modal ("Take Your Picture") */}
      <StudioModal
        isOpen={isStudioOpen}
        onClose={handleCloseStudio}
        onOpenDemo={handleOpenDemo}
      />

      {/* Interactive Demo Booking Modal ("Book a Demo") */}
      <DemoModal
        isOpen={isDemoOpen}
        onClose={handleCloseDemo}
        onOpenStudio={handleOpenStudio}
      />
    </main>
  );
}
