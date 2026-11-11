"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Only show once per session or quick sleek 1.2s reveal
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + 25;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] } }}
          className="fixed inset-0 z-[200] bg-[#111111] text-[#F7F5F2] flex flex-col items-center justify-center p-6 select-none"
        >
          <div className="flex flex-col items-center text-center max-w-sm">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-6 relative"
            >
              <div className="absolute inset-0 rounded-full border border-[#6B1425] animate-ping opacity-30" />
              <span className="font-serif text-2xl tracking-tighter text-[#EBDCCB]">AL</span>
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-xs uppercase tracking-[0.35em] text-[#C5A880] mb-2 flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-[#C5A880]" />
              Virtual Haute Couture
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="font-serif text-3xl md:text-4xl tracking-tight text-white mb-6"
            >
              ATELIER LUMEN
            </motion.h1>

            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mb-3">
              <motion.div
                className="h-full bg-[#6B1425]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>

            <span className="text-[11px] font-mono text-white/40 tracking-wider">
              INITIALIZING STUDIO ENGINES {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
