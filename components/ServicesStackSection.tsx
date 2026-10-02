"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { servicesData, Service } from "@/data/services";
import ServiceLandscapeCard from "@/components/ServiceLandscapeCard";
import SectionHeading from "@/components/SectionHeading";

/* ─────────────────────────────────────────────
   DESKTOP stacked card item (working perfectly on laptop)
───────────────────────────────────────────── */
function DesktopStackedCardItem({
  service,
  index,
  total,
  progress,
}: {
  service: Service;
  index: number;
  total: number;
  progress: any;
}) {
  const step = 1 / total;
  const startY = Math.max(0, (index - 0.75) * step);
  const endY = index * step;
  const scaleStartRange = index * step;
  const scaleEndRange = 1;
  const cardsBehindCount = total - 1 - index;
  const targetScale = 1 - cardsBehindCount * 0.02;
  const targetYOffset = -cardsBehindCount * 6;

  const translateY = useTransform(
    progress,
    index === 0 ? [0, 0] : [startY, endY],
    index === 0 ? ["0%", "0%"] : ["100%", "0%"]
  );
  const scale = useTransform(progress, [scaleStartRange, scaleEndRange], [1, targetScale]);
  const yShift = useTransform(progress, [scaleStartRange, scaleEndRange], [0, targetYOffset]);

  return (
    <motion.div
      style={{
        y: translateY,
        scale: index === total - 1 ? 1 : scale,
        zIndex: index + 1,
      }}
      className="absolute inset-0 w-full h-full origin-top transform-gpu will-change-transform"
    >
      <motion.div style={{ y: index === total - 1 ? 0 : yShift }} className="w-full h-full">
        <ServiceLandscapeCard service={service} index={index} total={total} />
      </motion.div>
    </motion.div>
  );
}


/* ─────────────────────────────────────────────
   DESKTOP layout (md and above) — unchanged & working
───────────────────────────────────────────── */
function DesktopServicesStack({ services }: { services: Service[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="hidden md:block">
      {/* Heading in normal flow */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-16 pb-6 text-center relative z-10">
        <SectionHeading
          eyebrow="OUR SERVICES"
          title="Everything You Need to Build, Grow and Scale"
          subtitle="From web applications and mobile software to cloud infrastructure and AI workflows, we engineer high-impact digital tools."
        />
      </div>

      {/* Sticky cards container */}
      <div ref={containerRef} className="relative h-[350vh] lg:h-[400vh]">
        <div className="sticky top-20 h-[calc(100vh-5.5rem)] flex items-center justify-center overflow-hidden px-6 lg:px-8">
          <div className="relative w-full max-w-3xl lg:max-w-5xl mx-auto aspect-[16/8.5] max-h-[76vh] shrink-0">
            {services.map((service, idx) => (
              <DesktopStackedCardItem
                key={service.id}
                service={service}
                index={idx}
                total={services.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MOBILE stacked card item — slides up from below
───────────────────────────────────────────── */
function MobileStackedCardItem({
  service,
  index,
  total,
  progress,
}: {
  service: Service;
  index: number;
  total: number;
  progress: any;
}) {
  const revealEnd = 0.78;
  const step = revealEnd / (total - 1);

  const startY = index === 0 ? 0 : Math.max(0, (index - 1) * step);
  const endY = index === 0 ? 0 : index * step;

  const cardsBehindCount = total - 1 - index;
  const targetScale = 1 - cardsBehindCount * 0.025;

  const translateY = useTransform(
    progress,
    index === 0 ? [0, 0] : [startY, endY],
    index === 0 ? ["0%", "0%"] : ["100%", "0%"]
  );

  const scale = useTransform(
    progress,
    [index * step, revealEnd],
    [1, targetScale]
  );

  return (
    <motion.div
      style={{
        y: translateY,
        scale: index === total - 1 ? 1 : scale,
        zIndex: index + 1,
      }}
      className="absolute inset-0 w-full h-full origin-top transform-gpu will-change-transform"
    >
      <ServiceLandscapeCard service={service} index={index} total={total} />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MOBILE layout (< md) — portrait-optimized sticky stack
   Cards reveal one by one on scroll exactly like desktop
───────────────────────────────────────────── */
function MobileServicesStack({ services }: { services: Service[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  // Fade deck out before container un-sticks (0.90 to 0.96)
  const deckOpacity = useTransform(smoothProgress, [0.90, 0.96], [1, 0]);

  // Scroll CTA fades in once all cards reveal (0.78 to 0.85), fades out with deck
  const ctaOpacity = useTransform(smoothProgress, [0.78, 0.85, 0.90, 0.96], [0, 1, 1, 0]);

  return (
    <div className="block md:hidden">
      {/* Section heading in normal flow above sticky section */}
      <div className="max-w-xl mx-auto px-4 pt-12 pb-6 text-center">
        <SectionHeading
          eyebrow="OUR SERVICES"
          title="Everything You Need to Build, Grow and Scale"
          subtitle="From web applications and mobile software to cloud infrastructure and AI workflows, we engineer high-impact digital tools."
        />
      </div>

      {/* Sticky container */}
      <div ref={containerRef} className="relative h-[320vh]">
        <div className="sticky top-16 h-[calc(100dvh-4.5rem)] flex flex-col items-center justify-center px-4 overflow-hidden">

          {/* Card deck container */}
          <motion.div
            style={{ opacity: deckOpacity }}
            className="relative w-full max-w-sm mx-auto aspect-[16/9.5] shrink-0 overflow-hidden"
          >
            <div className="relative w-full h-full">
              {services.map((service, idx) => (
                <MobileStackedCardItem
                  key={service.id}
                  service={service}
                  index={idx}
                  total={services.length}
                  progress={smoothProgress}
                />
              ))}
            </div>
          </motion.div>

          {/* Scroll CTA — centered under card deck */}
          <motion.div
            style={{ opacity: ctaOpacity }}
            className="mt-6 flex flex-col items-center gap-2 shrink-0 pointer-events-none"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1677FF]">
              Explore Our Work
            </p>
            <div className="flex flex-col items-center gap-1">
              <div className="w-[2px] h-8 bg-gradient-to-b from-[#1677FF] to-transparent rounded-full" />
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                <path d="M1 1L7 7L13 1" stroke="#1677FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-[11px] text-[#52627A] text-center px-4">
              Projects that create real value for businesses
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main section export
───────────────────────────────────────────── */
export default function ServicesStackSection() {
  const featuredServices = servicesData;

  return (
    <section className="relative border-b border-[#EEF6FF] bg-[#F7FAFF]">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#EEF6FF] rounded-full blur-3xl opacity-60 pointer-events-none" />

      {/* Desktop (md+): sticky stacking with landscape aspect-ratio card */}
      <DesktopServicesStack services={featuredServices} />

      {/* Mobile (< md): sticky stacking with portrait-friendly full-width card */}
      <MobileServicesStack services={featuredServices} />
    </section>
  );
}

