"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const CRITICAL_ASSETS = [
  "/hero-bg1.webp",
  "/hero-lap.webp",
  "/hero-mbl.webp",
  "/Abt.webp",
  "/logo.png",
  "/footer-logo1.png",
  // All Project Portfolio Cards
  "/projects/Bali-web.webp",
  "/projects/Gen B Bike Care Mockup.webp",
  "/projects/ExpenseMate App Showcase.webp",
  "/projects/MAVIO Smart College Transport Dashboard.webp",
  "/projects/SpiceHaven Restaurant Website Mockup.webp",
  "/projects/Organic E-Commerce Showcase Mockup.webp",
  // All Service Section Graphics
  "/service/Web Development Glassmorphism Hero Card.webp",
  "/service/Mobile App Development Showcase.webp",
  "/service/Custom Software Tech Showcase.webp",
  "/service/SaaS Development Dashboard Showcase.webp",
  "/service/AI & Automation Workflow Hero.webp",
  "/service/Futuristic Cloud Solutions Dashboard.webp",
  "/service/Digital Marketing Dashboard Growth.webp",
];

export default function VideoPreloader() {
  const pathname = usePathname();
  const [shouldRender, setShouldRender] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [bgColor, setBgColor] = useState<string>("#EAEAEA");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // 1. Only run preloader on the root home page "/"
    if (pathname !== "/") {
      setShouldRender(false);
      return;
    }

    // 2. Check if already completed in this browser session
    try {
      const hasSeen = sessionStorage.getItem("hasSeenPreloader");
      if (hasSeen === "true") {
        setShouldRender(false);
        return;
      }
    } catch {
      // Ignore storage errors if any
    }

    // Render preloader for fresh home page visit
    setShouldRender(true);

    // Preload critical assets into browser cache
    CRITICAL_ASSETS.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [pathname]);

  // Handle video playback & body scroll lock once component renders in DOM
  useEffect(() => {
    if (!shouldRender) return;

    document.body.style.overflow = "hidden";

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
  }, [shouldRender]);

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
    } catch {
      // Ignore cross-origin canvas security if any
    }
  };

  const handleComplete = () => {
    if (isFadingOut) return;

    // Record session flag when preloader finishes so refreshes/subpages skip it
    try {
      sessionStorage.setItem("hasSeenPreloader", "true");
    } catch {
      // Ignore storage errors
    }

    setIsFadingOut(true);
    setTimeout(() => {
      setShouldRender(false);
      document.body.style.overflow = "unset";
    }, 800); // 800ms smooth fade transition
  };

  if (!shouldRender) return null;

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


