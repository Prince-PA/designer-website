"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, CheckCircle2, Sparkles, Building2, Mail, User, Globe } from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenStudio?: () => void;
}

export function DemoModal({ isOpen, onClose, onOpenStudio }: DemoModalProps) {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    brandName: "",
    name: "",
    email: "",
    volume: "50-200 pieces / month",
    platform: "Shopify Plus",
    date: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[160] overflow-y-auto bg-[#111111]/80 backdrop-blur-md flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-[#FAF9F6] text-[#111111] rounded-3xl shadow-2xl overflow-hidden border border-[#111111]/10"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#111111]/10 flex items-center justify-between bg-white">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#111111] text-[#EBDCCB] flex items-center justify-center">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-xl tracking-tight text-[#111111] font-semibold">
                  {t("Book a Private Studio Demo", "Private Studio-Demo anfragen")}
                </h3>
                <p className="text-xs text-[#716E6A]">
                  {t("30-minute tailored virtual walkthrough with our Senior Art Director", "30-minütiger individueller Walkthrough mit unserem Art Director")}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full hover:bg-[#F7F5F2] flex items-center justify-center text-[#111111] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#716E6A] mb-1">
                      {t("Brand or Fashion House", "Markenname")} *
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-[#716E6A] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.brandName}
                        onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                        placeholder="e.g. Maison K"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#111111]/15 bg-white text-xs text-[#111111] focus:outline-none focus:border-[#6B1425]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#716E6A] mb-1">
                      {t("Your Name & Role", "Name & Position")} *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#716E6A] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sandra Claire (Creative Dir.)"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#111111]/15 bg-white text-xs text-[#111111] focus:outline-none focus:border-[#6B1425]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#716E6A] mb-1">
                    {t("Work Email", "Geschäftliche E-Mail")} *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#716E6A] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sandra@maisonk.com"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#111111]/15 bg-white text-xs text-[#111111] focus:outline-none focus:border-[#6B1425]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#716E6A] mb-1">
                      {t("Monthly SKU Volume", "Monatliches SKU-Volumen")}
                    </label>
                    <select
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#111111]/15 bg-white text-xs text-[#111111] focus:outline-none focus:border-[#6B1425]"
                    >
                      <option value="10-50 pieces">10 – 50 pieces / mo</option>
                      <option value="50-200 pieces">50 – 200 pieces / mo</option>
                      <option value="200-1000 pieces">200 – 1,000 pieces / mo</option>
                      <option value="Enterprise 1000+">Enterprise 1,000+ pieces / mo</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#716E6A] mb-1">
                      {t("Current E-Commerce Engine", "Aktuelles Shop-System")}
                    </label>
                    <select
                      value={formData.platform}
                      onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#111111]/15 bg-white text-xs text-[#111111] focus:outline-none focus:border-[#6B1425]"
                    >
                      <option value="Shopify Plus">Shopify / Shopify Plus</option>
                      <option value="Shopware 6">Shopware 6 Enterprise</option>
                      <option value="Magento / Adobe Commerce">Magento / Adobe Commerce</option>
                      <option value="Salesforce Commerce Cloud">Salesforce Commerce Cloud</option>
                      <option value="Custom / Headless">Custom Headless / Other</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#6B1425] hover:bg-[#56101E] text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <Sparkles className="w-4 h-4 text-[#EBDCCB]" />
                    <span>{t("Confirm VIP Demo Request", "VIP-Demo anfordern")}</span>
                  </button>
                  <p className="text-[10px] text-center text-[#716E6A] mt-2">
                    {t("Strict confidentiality NDA guaranteed. We reply within 2 hours.", "Strikte NDA-Vertraulichkeit garantiert. Rückmeldung innerhalb von 2 Stunden.")}
                  </p>
                </div>
              </form>
            ) : (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl text-[#111111] mb-2 font-semibold">
                  {t("Demo Request Confirmed", "Demo-Anfrage bestätigt")}
                </h4>
                <p className="text-xs text-[#716E6A] max-w-sm mb-6 leading-relaxed">
                  {t(
                    `Thank you, ${formData.name}. Our Art Direction Team will reach out to ${formData.email} within 2 hours to confirm your private session.`,
                    `Vielen Dank, ${formData.name}. Unser Art Direction Team meldet sich innerhalb von 2 Stunden unter ${formData.email} bei Ihnen.`
                  )}
                </p>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-full bg-[#111111] text-white text-xs font-medium hover:bg-[#6B1425] transition-colors"
                  >
                    {t("Close Window", "Fenster schließen")}
                  </button>
                  {onOpenStudio && (
                    <button
                      onClick={() => {
                        handleReset();
                        onOpenStudio();
                      }}
                      className="px-5 py-2.5 rounded-full border border-[#111111]/20 text-xs font-medium hover:border-[#111111] transition-colors"
                    >
                      {t("Try Virtual Studio Now", "Jetzt Virtual Studio testen")}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
