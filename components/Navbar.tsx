"use client";

import React, { useState, useEffect } from "react";
import { Camera, Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { BRAND } from "../lib/data";

interface NavbarProps {
  onOpenStudio: () => void;
  onOpenDemo: () => void;
}

export function Navbar({ onOpenStudio, onOpenDemo }: NavbarProps) {
  const { lang, toggleLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);
      // Hero height is roughly 700-900px, trigger pastHero around 600px
      setPastHero(scrollY > 550);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("Software", "Software"), href: "#software" },
    { name: t("Service", "Service"), href: "#service" },
    { name: t("Models", "Models"), href: "#models" },
    { name: t("Showcase", "Showcase"), href: "#showcase" },
    { name: t("Integrations", "Integrationen"), href: "#integrations" },
    { name: t("FAQ", "FAQ"), href: "#faq" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F7F5F2]/90 backdrop-blur-md border-b border-[#111111]/10 py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-full bg-[#111111] text-[#F7F5F2] flex items-center justify-center font-serif text-sm tracking-tighter transition-transform group-hover:scale-105">
              AL
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl tracking-tight text-[#111111] font-semibold leading-none">
                {BRAND.name}
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#716E6A] font-mono mt-0.5">
                Editorial AI Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-medium tracking-wider uppercase text-[#111111]/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#6B1425] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#6B1425] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-3">
            {/* Conditional "Take Your Picture" button in navbar - appears past hero */}
            {pastHero && (
              <button
                onClick={onOpenStudio}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B1425] hover:bg-[#56101E] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md btn-bordeaux-glow animate-fade-in"
              >
                <Camera className="w-3.5 h-3.5 text-[#EBDCCB]" />
                <span>{t("Take Your Picture", "Foto aufnehmen")}</span>
              </button>
            )}

            {/* Book a Demo button */}
            <button
              onClick={onOpenDemo}
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#111111]/25 hover:border-[#111111] bg-white/70 hover:bg-white text-xs font-semibold tracking-wider uppercase text-[#111111] transition-all"
            >
              <span>{t("Book a Demo", "Demo buchen")}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Language Toggle (EN / DE) */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-[#111111]/15 hover:border-[#111111]/40 text-[11px] font-mono uppercase text-[#111111] transition-all bg-white/50"
              title="Toggle Language (EN / DE)"
            >
              <Globe className="w-3 h-3 text-[#6B1425]" />
              <span className={lang === "EN" ? "font-bold text-[#6B1425]" : "text-[#716E6A]"}>EN</span>
              <span className="text-[#716E6A]/50">/</span>
              <span className={lang === "DE" ? "font-bold text-[#6B1425]" : "text-[#716E6A]"}>DE</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-full hover:bg-black/5 text-[#111111] transition-colors"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#111111] text-[#F7F5F2] flex flex-col justify-between p-6 sm:p-10 animate-fade-in">
          <div className="flex items-center justify-between">
            <span className="font-serif text-xl tracking-tight text-white">{BRAND.name}</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full text-white/70 hover:text-white transition-colors"
              aria-label="Close mobile navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 my-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl sm:text-4xl hover:text-[#C5A880] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStudio();
              }}
              className="w-full py-4 rounded-full bg-[#6B1425] text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg"
            >
              <Camera className="w-4 h-4 text-[#EBDCCB]" />
              <span>{t("Take Your Picture", "Foto aufnehmen")}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 rounded-full border border-white/20 text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <span>{t("Book a Demo", "Demo buchen")}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-between text-xs text-white/50 pt-2 font-mono">
              <span>{BRAND.company}</span>
              <button onClick={toggleLang} className="underline uppercase">
                Lang: {lang}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
