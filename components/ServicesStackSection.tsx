"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
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
   DESKTOP layout (md and above) — 3D sticky stack
───────────────────────────────────────────── */
function DesktopServicesStack({ services }: { services: Service[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="hidden md:block">
      {/* Outer scroll track */}
      <div ref={containerRef} className="relative h-[350vh] lg:h-[400vh]">
        {/* Sticky frame pinned cleanly to top-20 */}
        <div className="sticky top-20 h-[calc(100vh-5rem)] flex flex-col justify-between items-center overflow-hidden px-6 lg:px-8 py-3">

          {/* Section Heading — pinned at top of frozen screen */}
          <div className="max-w-4xl mx-auto text-center shrink-0 pt-2 pb-2">
            <SectionHeading
              eyebrow="OUR SERVICES"
              title="Everything You Need to Build, Grow and Scale"
              subtitle="From web applications and mobile software to cloud infrastructure and AI workflows, we engineer high-impact digital tools."
            />
          </div>

          {/* Cards Deck — pinned in center of frozen screen */}
          <div className="relative w-full max-w-3xl lg:max-w-5xl mx-auto aspect-[16/8] max-h-[58vh] shrink-0 my-auto">
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
   MOBILE layout (< md) — ultra-responsive 3D scroll reveal stack
───────────────────────────────────────────── */
function MobileServicesStack({ services }: { services: Service[] }) {
  return (
    <div className="block md:hidden px-4 py-10">
      {/* Section heading */}
      <div className="max-w-xl mx-auto text-center pb-6">
        <SectionHeading
          eyebrow="OUR SERVICES"
          title="Everything You Need to Build, Grow and Scale"
          subtitle="From web applications and mobile software to cloud infrastructure and AI workflows, we engineer high-impact digital tools."
        />
      </div>

      {/* Mobile Services List with 3D perspective reveal */}
      <div className="space-y-6 max-w-sm mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative transform-gpu"
          >
            <ServiceLandscapeCard service={service} index={idx} total={services.length} />
          </motion.div>
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="mt-10 text-center">
        <Link
          href="/services"
          className="inline-flex items-center justify-center px-6 py-3.5 rounded-2xl text-sm font-extrabold text-white bg-[#1677FF] hover:bg-[#0D2854] shadow-md transition-all group"
        >
          <Sparkles className="w-4 h-4 mr-2 text-[#EEF6FF]" />
          Explore All Services
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
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

      {/* Desktop (md+): 3D sticky stacking */}
      <DesktopServicesStack services={featuredServices} />

      {/* Mobile (< md): 3D scroll reveal stack */}
      <MobileServicesStack services={featuredServices} />
    </section>
  );
}

