"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const step = 1 / total;
  const startY = Math.max(0, (index - 0.8) * step);
  const endY = index * step;
  const scaleStartRange = index * step;
  const scaleEndRange = 1;
  const cardsBehindCount = total - 1 - index;
  const targetScale = 1 - cardsBehindCount * 0.025;

  const translateY = useTransform(
    progress,
    index === 0 ? [0, 0] : [startY, endY],
    index === 0 ? ["0%", "0%"] : ["100%", "0%"]
  );
  const scale = useTransform(progress, [scaleStartRange, scaleEndRange], [1, targetScale]);

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
   MOBILE layout (< md) — portrait-optimized sticky stack
   Cards reveal one by one on scroll exactly like desktop
───────────────────────────────────────────── */
function MobileServicesStack({ services }: { services: Service[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Fade the entire deck out as scroll nears the end (0.85→1.0)
  // This cleanly exits the last card instead of it appearing "stuck"
  const deckOpacity = useTransform(scrollYProgress, [0.82, 0.98], [1, 0]);

  return (
    <div className="block md:hidden">
      {/* Sticky frame — heading + cards together, no empty space */}
      <div ref={containerRef} className="relative h-[440vh]">
        <div className="sticky top-14 h-[calc(100vh-3.5rem)] flex flex-col justify-center items-center px-3">

          {/* Section heading inside the sticky frame */}
          <div className="max-w-xl w-full mx-auto pb-3 text-center relative z-10 shrink-0">
            <SectionHeading
              eyebrow="OUR SERVICES"
              title="Everything You Need to Build, Grow and Scale"
              subtitle="From web applications and mobile software to cloud infrastructure and AI workflows, we engineer high-impact digital tools."
            />
          </div>

          {/* Card deck — overflow-hidden HERE clips cards entering from below */}
          <motion.div
            style={{ opacity: deckOpacity, height: "min(58vw, 220px)" }}
            className="relative w-full shrink-0 overflow-hidden"
          >
            <div className="relative w-full" style={{ height: "min(58vw, 220px)" }}>
              {services.map((service, idx) => (
                <MobileStackedCardItem
                  key={service.id}
                  service={service}
                  index={idx}
                  total={services.length}
                  progress={scrollYProgress}
                />
              ))}
            </div>
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

