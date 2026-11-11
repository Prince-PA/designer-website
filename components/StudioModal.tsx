"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Camera,
  Upload,
  Sparkles,
  Check,
  RefreshCw,
  Sliders,
  Download,
  ArrowRight,
  Sun,
  MapPin,
  User,
  Layers,
  Video
} from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { EXCLUSIVE_MODELS, STUDIO_PRESETS } from "../lib/data";

interface StudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemo?: () => void;
}

export function StudioModal({ isOpen, onClose, onOpenDemo }: StudioModalProps) {
  const { t } = useLanguage();

  // Wizard state
  const [step, setStep] = useState<"garment" | "model" | "scene" | "generating" | "result">("garment");
  const [selectedGarment, setSelectedGarment] = useState<string>("burgundy-trench");
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string>("valerie");
  const [selectedScene, setSelectedScene] = useState<string>("paris-balcony");
  const [selectedLighting, setSelectedLighting] = useState<string>("golden-hour");
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  // Camera state
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  // Generation simulation state
  const [genProgress, setGenProgress] = useState(0);
  const [genStatusText, setGenStatusText] = useState("Analyzing Garment Seam Vectors...");

  // Handle camera start/stop
  const startCamera = async () => {
    try {
      setIsCameraActive(true);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment", width: { ideal: 1280 }, height: { ideal: 720 } }
      });
      mediaStreamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.warn("Camera access denied or unavailable:", err);
      alert(t("Camera access not available. Please upload a garment photo or use a studio preset.", "Kamerazugriff nicht möglich. Bitte laden Sie ein Foto hoch oder wählen Sie ein Preset."));
      setIsCameraActive(false);
    }
  };

  const stopCamera = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }
    setIsCameraActive(false);
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth || 640;
      canvas.height = videoRef.current.videoHeight || 480;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL("image/jpeg");
        setCustomImage(dataUrl);
        stopCamera();
      }
    }
  };

  // Cleanup camera on close or unmount
  useEffect(() => {
    if (!isOpen) {
      stopCamera();
    }
  }, [isOpen]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCustomImage(reader.result as string);
        stopCamera();
      };
      reader.readAsDataURL(file);
    }
  };

  const runGeneration = () => {
    setStep("generating");
    setGenProgress(0);

    const stages = [
      { p: 20, text: t("Segmenting garment silhouette & fabric drape...", "Segmentiere Silhouette & Textil-Faltenwurf...") },
      { p: 45, text: t("Fitting 3D virtual mannequin to model pose...", "Passe 3D-Geometrie an Model-Pose an...") },
      { p: 75, text: t("Calibrating optical raytracing & shadow occlusion...", "Kalibriere optisches Raytracing & Schattenwurf...") },
      { p: 95, text: t("Applying 4K luxury grain & color-science grading...", "Wende 4K-Filmkorn & Farbgrading an...") },
      { p: 100, text: t("Editorial asset synthesized successfully.", "Editorial-Asset erfolgreich gerendert.") },
    ];

    let currentStage = 0;
    const interval = setInterval(() => {
      if (currentStage < stages.length) {
        setGenProgress(stages[currentStage].p);
        setGenStatusText(stages[currentStage].text);
        currentStage++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setStep("result");
        }, 600);
      }
    }, 700);
  };

  // Get current chosen images
  const currentPresetGarment = STUDIO_PRESETS.garments.find((g) => g.id === selectedGarment) || STUDIO_PRESETS.garments[0];
  const currentGarmentDisplay = customImage || currentPresetGarment.image;

  // Final composite preview based on model choice
  const modelObj = EXCLUSIVE_MODELS.find((m) => m.id === selectedModel) || EXCLUSIVE_MODELS[0];
  const finalEditorialImage = modelObj.image;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[150] overflow-y-auto bg-[#111111]/80 backdrop-blur-md flex items-center justify-center p-3 md:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-[#FAF9F6] text-[#111111] rounded-3xl shadow-2xl overflow-hidden border border-[#111111]/10 flex flex-col max-h-[92vh]"
        >
          {/* Header Bar */}
          <div className="px-6 py-5 border-b border-[#111111]/10 flex items-center justify-between bg-white sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#6B1425] text-white flex items-center justify-center shadow-md">
                <Camera className="w-4 h-4 text-[#EBDCCB]" />
              </div>
              <div>
                <h3 className="font-serif text-xl tracking-tight text-[#111111] font-semibold">
                  {t("Virtual Shoot Creator", "Virtueller Shoot-Creator")}
                </h3>
                <p className="text-xs text-[#716E6A]">
                  {t("Transform any garment packshot into a high-fashion editorial in minutes", "Verwandeln Sie jeden Packshot in ein Haute-Couture-Editorial")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Step indicator */}
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-[#F7F5F2] rounded-full text-[11px] font-mono text-[#716E6A]">
                <span className={step === "garment" ? "text-[#6B1425] font-bold" : ""}>1. Garment</span>
                <span>/</span>
                <span className={step === "model" ? "text-[#6B1425] font-bold" : ""}>2. Model</span>
                <span>/</span>
                <span className={step === "scene" ? "text-[#6B1425] font-bold" : ""}>3. Scene</span>
                <span>/</span>
                <span className={step === "result" ? "text-[#6B1425] font-bold" : ""}>4. Render</span>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full hover:bg-[#F7F5F2] flex items-center justify-center text-[#111111] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto flex-1">
            {/* STEP 1: GARMENT SELECTION OR WEBCAM SNAPSHOT */}
            {step === "garment" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="font-serif text-2xl text-[#111111]">
                      {t("Step 1: Choose or Capture Your Garment", "Schritt 1: Kleidungsstück wählen oder aufnehmen")}
                    </h4>
                    <p className="text-xs text-[#716E6A]">
                      {t("Upload a packshot, snap with your device camera, or select a sample piece below.", "Laden Sie einen Packshot hoch, nutzen Sie die Kamera oder wählen Sie ein Muster.")}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {!isCameraActive ? (
                      <button
                        onClick={startCamera}
                        className="px-3.5 py-2 rounded-full bg-[#111111] text-white text-xs font-medium flex items-center gap-1.5 hover:bg-[#6B1425] transition-colors"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        {t("Open Device Camera", "Kamera öffnen")}
                      </button>
                    ) : (
                      <button
                        onClick={stopCamera}
                        className="px-3.5 py-2 rounded-full bg-red-600 text-white text-xs font-medium flex items-center gap-1.5 hover:bg-red-700 transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                        {t("Close Camera", "Kamera schließen")}
                      </button>
                    )}

                    <label className="px-3.5 py-2 rounded-full border border-[#111111]/20 hover:border-[#111111] text-xs font-medium flex items-center gap-1.5 cursor-pointer transition-colors bg-white">
                      <Upload className="w-3.5 h-3.5" />
                      {t("Upload Photo", "Foto hochladen")}
                      <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                    </label>
                  </div>
                </div>

                {/* Live Camera View if Active */}
                {isCameraActive && (
                  <div className="relative rounded-2xl overflow-hidden bg-black aspect-video max-h-72 flex items-center justify-center border-2 border-[#6B1425]">
                    <video ref={videoRef} className="w-full h-full object-cover" autoPlay playsInline muted />
                    <div className="absolute inset-0 border border-white/20 pointer-events-none flex items-center justify-center">
                      <div className="w-48 h-64 border-2 border-dashed border-white/60 rounded-xl flex items-center justify-center">
                        <span className="text-[10px] text-white uppercase tracking-widest bg-black/60 px-2 py-0.5 rounded">
                          Center Garment
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={capturePhoto}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-full bg-[#6B1425] text-white text-xs font-medium flex items-center gap-2 shadow-xl hover:bg-[#56101E] transition-all"
                    >
                      <Camera className="w-4 h-4" />
                      {t("Snap Photo Now", "Jetzt fotografieren")}
                    </button>
                  </div>
                )}

                {/* Uploaded / Snapped Preview if present */}
                {customImage && !isCameraActive && (
                  <div className="p-4 bg-white rounded-2xl border border-[#6B1425]/30 flex items-center gap-4">
                    <div className="w-20 h-24 rounded-lg overflow-hidden bg-[#F7F5F2] flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={customImage} alt="Custom garment" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-[#6B1425]/10 text-[#6B1425] text-[10px] font-bold uppercase">
                          {t("Active Garment", "Aktives Kleidungsstück")}
                        </span>
                        <span className="text-xs text-[#716E6A]">Custom upload / snapshot</span>
                      </div>
                      <p className="text-xs text-[#111111] mt-1 font-medium">
                        {t("Ready for neural fitting on exclusive brand model.", "Bereit für das Fitting auf das exklusive Marken-Model.")}
                      </p>
                    </div>
                    <button
                      onClick={() => setCustomImage(null)}
                      className="text-xs text-[#716E6A] hover:text-red-600 underline"
                    >
                      {t("Remove", "Entfernen")}
                    </button>
                  </div>
                )}

                {/* Sample Presets */}
                <div>
                  <h5 className="text-xs uppercase tracking-wider text-[#716E6A] font-semibold mb-3">
                    {t("Or select sample collection piece:", "Oder wählen Sie ein Kollektionsmuster:")}
                  </h5>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {STUDIO_PRESETS.garments.map((g) => {
                      const isSelected = selectedGarment === g.id && !customImage;
                      return (
                        <div
                          key={g.id}
                          onClick={() => {
                            setSelectedGarment(g.id);
                            setCustomImage(null);
                          }}
                          className={`group cursor-pointer rounded-2xl overflow-hidden border-2 transition-all p-2 bg-white flex flex-col ${
                            isSelected
                              ? "border-[#6B1425] ring-2 ring-[#6B1425]/20 shadow-lg"
                              : "border-[#111111]/10 hover:border-[#111111]/30"
                          }`}
                        >
                          <div className="aspect-[3/4] rounded-xl overflow-hidden bg-[#F7F5F2] mb-2 relative">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={g.image}
                              alt={g.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {isSelected && (
                              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#6B1425] text-white flex items-center justify-center">
                                <Check className="w-3.5 h-3.5" />
                              </div>
                            )}
                          </div>
                          <span className="font-serif text-sm font-semibold text-[#111111] line-clamp-1">{g.name}</span>
                          <span className="text-[11px] text-[#716E6A] line-clamp-1">{g.material}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Action button */}
                <div className="flex justify-end pt-4 border-t border-[#111111]/10">
                  <button
                    onClick={() => setStep("model")}
                    className="px-6 py-3 rounded-full bg-[#6B1425] hover:bg-[#56101E] text-white text-xs font-semibold tracking-wider uppercase flex items-center gap-2 shadow-lg transition-all"
                  >
                    <span>{t("Proceed to Model Selection", "Weiter zur Modelauswahl")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: MODEL SELECTION */}
            {step === "model" && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-serif text-2xl text-[#111111]">
                    {t("Step 2: Choose Your Brand Model", "Schritt 2: Wählen Sie Ihr Marken-Model")}
                  </h4>
                  <p className="text-xs text-[#716E6A]">
                    {t("These models are reserved solely for your brand identity. Guaranteed zero likeness reuse.", "Diese Models sind exklusiv Ihrer Markenidentität vorbehalten.")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {EXCLUSIVE_MODELS.map((model) => {
                    const isSelected = selectedModel === model.id;
                    return (
                      <div
                        key={model.id}
                        onClick={() => setSelectedModel(model.id)}
                        className={`cursor-pointer rounded-2xl overflow-hidden border-2 transition-all p-3 bg-white flex flex-col justify-between ${
                          isSelected
                            ? "border-[#6B1425] ring-2 ring-[#6B1425]/20 shadow-xl"
                            : "border-[#111111]/10 hover:border-[#111111]/30"
                        }`}
                      >
                        <div>
                          <div className="aspect-[3/4] rounded-xl overflow-hidden bg-[#F7F5F2] mb-3 relative">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={model.image}
                              alt={model.name}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                            {isSelected && (
                              <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-[#6B1425] text-white flex items-center justify-center shadow">
                                <Check className="w-3.5 h-3.5" />
                              </div>
                            )}
                            <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white text-[10px] font-mono">
                              {model.origin}
                            </div>
                          </div>
                          <h5 className="font-serif text-base font-semibold text-[#111111]">{model.name}</h5>
                          <span className="text-[11px] text-[#6B1425] font-medium block mb-1">{model.archetype}</span>
                          <p className="text-[11px] text-[#716E6A] leading-tight line-clamp-2">{model.look}</p>
                        </div>

                        <div className="mt-3 pt-2 border-t border-[#111111]/5 flex items-center justify-between text-[10px] text-[#716E6A]">
                          <span>{model.height}</span>
                          <span>{model.hair}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-[#111111]/10">
                  <button
                    onClick={() => setStep("garment")}
                    className="px-4 py-2 text-xs text-[#716E6A] hover:text-[#111111] font-medium"
                  >
                    {t("Back to Garment", "Zurück zur Kleidung")}
                  </button>
                  <button
                    onClick={() => setStep("scene")}
                    className="px-6 py-3 rounded-full bg-[#6B1425] hover:bg-[#56101E] text-white text-xs font-semibold tracking-wider uppercase flex items-center gap-2 shadow-lg transition-all"
                  >
                    <span>{t("Proceed to Scene & Light", "Weiter zu Set & Licht")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: SCENE & LIGHTING */}
            {step === "scene" && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-serif text-2xl text-[#111111]">
                    {t("Step 3: Environment & Lighting Direction", "Schritt 3: Set-Umgebung & Lichtführung")}
                  </h4>
                  <p className="text-xs text-[#716E6A]">
                    {t("Select an architectural environment and calibrated lighting setup.", "Wählen Sie eine architektonische Location und das passende Licht-Setup.")}
                  </p>
                </div>

                {/* Scene grid */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#716E6A] mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#6B1425]" />
                    <span>{t("Select Location", "Location wählen")}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {STUDIO_PRESETS.scenes.map((scene) => {
                      const isSelected = selectedScene === scene.id;
                      return (
                        <div
                          key={scene.id}
                          onClick={() => setSelectedScene(scene.id)}
                          className={`cursor-pointer rounded-2xl overflow-hidden border-2 transition-all p-2.5 bg-white ${
                            isSelected
                              ? "border-[#6B1425] ring-2 ring-[#6B1425]/20 shadow-lg"
                              : "border-[#111111]/10 hover:border-[#111111]/30"
                          }`}
                        >
                          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#F7F5F2] mb-2 relative">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={scene.image} alt={scene.name} className="w-full h-full object-cover" />
                            <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/60 text-white text-[9px] font-mono">
                              {scene.badge}
                            </span>
                            {isSelected && (
                              <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#6B1425] text-white flex items-center justify-center">
                                <Check className="w-3 h-3" />
                              </div>
                            )}
                          </div>
                          <h6 className="font-serif text-xs font-semibold text-[#111111]">{scene.name}</h6>
                          <p className="text-[10px] text-[#716E6A] line-clamp-1 mt-0.5">{scene.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Lighting grid */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#716E6A] mb-3">
                    <Sun className="w-3.5 h-3.5 text-[#6B1425]" />
                    <span>{t("Select Studio Lighting Rig", "Studio-Lichtrig wählen")}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {STUDIO_PRESETS.lightings.map((light) => {
                      const isSelected = selectedLighting === light.id;
                      return (
                        <div
                          key={light.id}
                          onClick={() => setSelectedLighting(light.id)}
                          className={`cursor-pointer rounded-2xl p-3 border-2 transition-all bg-white flex flex-col justify-between ${
                            isSelected
                              ? "border-[#6B1425] ring-2 ring-[#6B1425]/20 shadow-md"
                              : "border-[#111111]/10 hover:border-[#111111]/30"
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="font-serif text-xs font-semibold text-[#111111]">{light.name}</span>
                              {isSelected && <Check className="w-4 h-4 text-[#6B1425]" />}
                            </div>
                            <span className="text-[10px] font-mono text-[#6B1425] block mb-1">{light.spec}</span>
                            <p className="text-[11px] text-[#716E6A] leading-tight">{light.feel}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-[#111111]/10">
                  <button
                    onClick={() => setStep("model")}
                    className="px-4 py-2 text-xs text-[#716E6A] hover:text-[#111111] font-medium"
                  >
                    {t("Back to Model", "Zurück zum Model")}
                  </button>
                  <button
                    onClick={runGeneration}
                    className="px-7 py-3 rounded-full bg-[#6B1425] hover:bg-[#56101E] text-white text-xs font-semibold tracking-wider uppercase flex items-center gap-2 shadow-xl btn-bordeaux-glow"
                  >
                    <Sparkles className="w-4 h-4 text-[#EBDCCB]" />
                    <span>{t("Synthesize Editorial Image", "Editorial-Bild synthesieren")}</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: GENERATION IN PROGRESS */}
            {step === "generating" && (
              <div className="py-14 flex flex-col items-center justify-center text-center max-w-md mx-auto">
                <div className="w-20 h-20 rounded-full border-4 border-[#6B1425]/20 border-t-[#6B1425] animate-spin mb-6 flex items-center justify-center relative">
                  <div className="w-10 h-10 rounded-full bg-[#6B1425] text-white flex items-center justify-center shadow">
                    <Sparkles className="w-5 h-5 text-[#EBDCCB]" />
                  </div>
                </div>

                <h4 className="font-serif text-2xl text-[#111111] mb-2 font-semibold">
                  {t("Neural Editorial Synthesis", "Neuronale Editorial-Synthese")}
                </h4>
                <p className="text-xs text-[#716E6A] font-mono tracking-wide mb-6 h-5">
                  {genStatusText}
                </p>

                <div className="w-full h-2.5 bg-[#111111]/10 rounded-full overflow-hidden mb-3">
                  <motion.div
                    className="h-full bg-[#6B1425]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${genProgress}%` }}
                    transition={{ ease: "easeInOut" }}
                  />
                </div>

                <div className="flex items-center justify-between w-full text-[11px] text-[#716E6A] font-mono">
                  <span>ATELIER CORE v3.2</span>
                  <span>{genProgress}% COMPLETED</span>
                </div>
              </div>
            )}

            {/* STEP 5: FINAL RESULT WITH BEFORE / AFTER INTERACTIVE SLIDER */}
            {step === "result" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                        {t("Ready • 4K Master", "Fertig • 4K Master")}
                      </span>
                      <span className="text-xs text-[#716E6A] font-mono">Generated in 2.8s</span>
                    </div>
                    <h4 className="font-serif text-2xl text-[#111111]">
                      {t("Your Finished Editorial Campaign Shot", "Ihr fertiger Kampagnen-Shot")}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setStep("garment")}
                      className="px-4 py-2 rounded-full border border-[#111111]/20 hover:border-[#111111] text-xs font-medium flex items-center gap-1.5 transition-colors bg-white"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      {t("New Shoot", "Neuer Shoot")}
                    </button>

                    <a
                      href={finalEditorialImage}
                      target="_blank"
                      rel="noopener noreferrer"
                      download="atelier-lumen-editorial.jpg"
                      className="px-4 py-2 rounded-full bg-[#6B1425] hover:bg-[#56101E] text-white text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all"
                    >
                      <Download className="w-3.5 h-3.5" />
                      {t("Download 4K Raw", "4K Raw herunterladen")}
                    </a>
                  </div>
                </div>

                {/* Interactive Before / After Comparison */}
                <div className="relative rounded-3xl overflow-hidden aspect-[16/10] max-h-[460px] bg-black select-none border border-[#111111]/15">
                  {/* After image (Finished editorial) */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={finalEditorialImage}
                    alt="Finished editorial"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Before image (Garment packshot) clipped */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={currentGarmentDisplay}
                      alt="Raw garment packshot"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-mono uppercase tracking-wider">
                      {t("Original Garment Packshot", "Original Packshot")}
                    </div>
                  </div>

                  {/* After badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#6B1425]/90 backdrop-blur-md text-white text-xs font-mono uppercase tracking-wider">
                    {t("Finished On-Model Shoot", "Finales On-Model Bild")}
                  </div>

                  {/* Divider line & dragger handle */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-white text-[#111111] shadow-2xl flex items-center justify-center text-xs font-bold -ml-0.5">
                      ↔
                    </div>
                  </div>

                  {/* Invisible Range Slider on top */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={(e) => setSliderPosition(Number(e.target.value))}
                    className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
                    aria-label="Before after slider"
                  />
                </div>

                <div className="bg-white p-4 rounded-2xl border border-[#111111]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-[#111111]">{modelObj.name}</span>
                    <span className="text-[#716E6A]">•</span>
                    <span className="text-[#716E6A]">{STUDIO_PRESETS.scenes.find((s) => s.id === selectedScene)?.name}</span>
                    <span className="text-[#716E6A]">•</span>
                    <span className="text-[#6B1425] font-mono">{STUDIO_PRESETS.lightings.find((l) => l.id === selectedLighting)?.name}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[#716E6A]">{t("Ready for global e-commerce and OOH campaign rollout.", "Bereit für globalen E-Commerce und OOH-Kampagnen.")}</span>
                    {onOpenDemo && (
                      <button
                        onClick={() => {
                          onClose();
                          onOpenDemo();
                        }}
                        className="text-[#6B1425] font-semibold underline underline-offset-4"
                      >
                        {t("Book a Custom Brand Demo", "Individuelle Demo anfragen")}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
