"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { INTEGRATIONS, BRAND } from "../lib/data";

export function Integrations() {
  const { t } = useLanguage();

  return (
    <section id="integrations" className="py-28 px-5 sm:px-8 max-w-7xl mx-auto border-t border-[#111111]/10 bg-[#F7F5F2] overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-xs uppercase tracking-[0.3em] text-[#6B1425] font-mono block mb-3">
          05 / {t("Enterprise Architecture", "Enterprise-Architektur")}
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight mb-4">
          {t("Fits into your systems.", "Fügt sich in Ihre Systeme ein.")}
        </h2>
        <p className="text-xs sm:text-sm text-[#716E6A] max-w-xl mx-auto leading-relaxed">
          {t(
            "Direct two-way synchronization with leading e-commerce platforms, Digital Asset Managers (DAM), and Product Information Managers (PIM).",
            "Direkte Zwei-Wege-Synchronisation mit führenden Shopsystemen, DAM- und PIM-Lösungen für nahtlose Workflows."
          )}
        </p>
      </div>

      {/* Central Brand Core with Connected Logo Rays */}
      <div className="relative max-w-4xl mx-auto my-8 p-8 md:p-14 rounded-3xl bg-white border border-[#111111]/10 shadow-xl">
        {/* Central Brand Hub */}
        <div className="flex flex-col items-center justify-center text-center relative z-10 mb-12">
          <div className="w-20 h-20 rounded-full bg-[#111111] text-[#EBDCCB] border-4 border-[#F7F5F2] shadow-2xl flex items-center justify-center font-serif text-2xl mb-3 relative">
            <span className="relative z-10 font-bold">AL</span>
            <div className="absolute inset-0 rounded-full border border-[#6B1425] animate-ping opacity-40" />
          </div>
          <h3 className="font-serif text-xl font-bold text-[#111111]">
            {BRAND.name} <span className="text-[#6B1425]">CORE API</span>
          </h3>
          <p className="text-xs text-[#716E6A] font-mono mt-1">
            {t("Automated Webhook & Multi-Tenant Pipeline", "Automatisierte Webhook- & Multi-Tenant-Pipeline")}
          </p>
        </div>

        {/* 6 Connected Integrations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 relative z-10">
          {INTEGRATIONS.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-4 sm:p-5 rounded-2xl bg-[#F7F5F2]/80 hover:bg-[#F7F5F2] border border-[#111111]/10 hover:border-[#6B1425]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif text-base font-bold text-[#111111] group-hover:text-[#6B1425] transition-colors">
                    {item.name}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <span className="text-[10px] font-mono text-[#6B1425] uppercase tracking-wider block mb-1">
                  {item.category}
                </span>
                <p className="text-[11px] text-[#716E6A] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-[#111111]/5 flex items-center gap-1.5 text-[10px] font-mono text-[#716E6A]">
                <Zap className="w-3 h-3 text-[#C5A880]" />
                <span>Zero Latency Sync</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Specs Note */}
        <div className="mt-10 pt-6 border-t border-[#111111]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#716E6A]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#6B1425]" />
            <span>{t("REST & GraphQL APIs, Webhooks, and Native ERP Connectors available.", "REST- & GraphQL-APIs, Webhooks und native ERP-Konnektoren verfügbar.")}</span>
          </div>
          <span className="font-mono text-[11px] text-[#111111]">99.99% Production Uptime SLA</span>
        </div>
      </div>
    </section>
  );
}
