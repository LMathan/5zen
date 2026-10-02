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
   MOBILE layout (< md) — clean, ultra-responsive scroll reveal stack
   Cards reveal one by one on scroll with zero sticky height bugs or navbar overlap
───────────────────────────────────────────── */
function MobileServicesStack({ services }: { services: Service[] }) {
  return (
    <div className="block md:hidden px-4 py-12">
      {/* Section heading */}
      <div className="max-w-xl mx-auto text-center pb-8">
        <SectionHeading
          eyebrow="OUR SERVICES"
          title="Everything You Need to Build, Grow and Scale"
          subtitle="From web applications and mobile software to cloud infrastructure and AI workflows, we engineer high-impact digital tools."
        />
      </div>

      {/* Cards deck list with individual scroll reveal */}
      <div className="space-y-6 max-w-sm mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <ServiceLandscapeCard service={service} index={idx} total={services.length} />
          </motion.div>
        ))}
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
    <section className="relative border-b border-[#EEF6FF] bg-[#F7FAFF] overflow-hidden">
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

