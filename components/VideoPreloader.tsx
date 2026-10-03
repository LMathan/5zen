"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CRITICAL_ASSETS = [
  "/hero-bg1.png",
  "/hero-lap.png",
  "/hero-mbl.png",
  "/service/Digital Marketing Dashboard Growth.png",
  "/service/Web Development Showcase.png",
  "/service/Mobile App Development Showcase.png",
  "/service/Custom Software Architecture.png",
  "/service/SaaS Platform Engineering.png",
  "/service/AI Automation Workflow.png",
];

export default function VideoPreloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [bgColor, setBgColor] = useState<string>("#EAEAEA"); // Fallback matched off-white
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Lock body scrolling while preloader is active
    document.body.style.overflow = "hidden";

    // Preload critical images in background
    CRITICAL_ASSETS.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Start video playback
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    // Safety fallback timer (max 6 seconds)
    const fallbackTimer = setTimeout(() => {
      handleComplete();
    }, 6000);

    return () => {
      clearTimeout(fallbackTimer);
      document.body.style.overflow = "unset";
    };
  }, []);

  // Dynamically sample the video's corner pixel to match background 100% seamlessly
  const handlePlayOrLoaded = () => {
    if (!videoRef.current) return;
    try {
      const video = videoRef.current;
      if (video.readyState >= 2 && video.videoWidth > 0) {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(video, 0, 0);
          // Sample corner pixels (top-left & top-right)
          const p1 = ctx.getImageData(10, 10, 1, 1).data;
          const p2 = ctx.getImageData(video.videoWidth - 10, 10, 1, 1).data;
          const r = Math.round((p1[0] + p2[0]) / 2);
          const g = Math.round((p1[1] + p2[1]) / 2);
          const b = Math.round((p1[2] + p2[2]) / 2);
          if (r > 0 || g > 0 || b > 0) {
            setBgColor(`rgb(${r}, ${g}, ${b})`);
          }
        }
      }
    } catch (e) {
      // Ignore cross-origin canvas security if any
    }
  };

  const handleComplete = () => {
    if (isFadingOut) return;
    setIsFadingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "unset";
    }, 800); // 800ms smooth fade transition
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ backgroundColor: bgColor }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden select-none transition-colors duration-500"
        >
          {/* Responsive Centered Video seamlessly blended with background */}
          <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-6">
            <video
              ref={videoRef}
              src="/video/preloader.mp4"
              autoPlay
              muted
              playsInline
              preload="auto"
              onPlay={handlePlayOrLoaded}
              onLoadedData={handlePlayOrLoaded}
              onEnded={handleComplete}
              style={{
                WebkitMaskImage: "radial-gradient(circle at center, black 75%, transparent 100%)",
                maskImage: "radial-gradient(circle at center, black 75%, transparent 100%)",
              }}
              className="w-full max-w-4xl sm:max-w-5xl lg:max-w-6xl max-h-[85vh] object-contain mx-auto"
            />
          </div>

          {/* Electric Blue Brand Skip Intro Button */}
          <button
            onClick={handleComplete}
            className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-10 px-5 py-2.5 rounded-full bg-[#1677FF] hover:bg-[#0D2854] text-white text-xs font-black tracking-wider uppercase shadow-[0_4px_16px_rgba(22,119,255,0.4)] hover:shadow-[0_6px_22px_rgba(22,119,255,0.6)] transition-all duration-300 flex items-center gap-1.5 group cursor-pointer"
          >
            Skip Intro
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
