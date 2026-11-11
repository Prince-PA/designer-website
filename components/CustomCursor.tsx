"use client";

import React, { useEffect, useState } from "react";
import { Camera } from "lucide-react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isOverImage, setIsOverImage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if touch device or reduced motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over an image or an element marked with data-cursor="camera"
      const target = e.target as HTMLElement | null;
      const overImg = Boolean(
        target?.closest("img") ||
        target?.closest("[data-cursor='camera']") ||
        target?.tagName.toLowerCase() === "img" ||
        target?.closest(".cursor-camera-target")
      );
      setIsOverImage(overImg);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible || !isOverImage) return null;

  return (
    <div
      className="fixed pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111111]/90 text-white backdrop-blur-md border border-white/20 shadow-2xl scale-100 transition-all duration-200">
        <Camera className="w-3.5 h-3.5 text-[#EBDCCB] animate-pulse" />
        <span className="text-[11px] font-sans tracking-widest uppercase font-medium text-white/90">
          Capture
        </span>
      </div>
    </div>
  );
}
