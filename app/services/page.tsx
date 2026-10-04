import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/data/services";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import {
  Globe,
  Smartphone,
  Code2,
  Layers,
  Bot,
  Cloud,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Services | Web, Mobile, SaaS & AI",
  description:
    "Explore 5Zen Technologies software services including web development, mobile app development, custom software engineering, SaaS platforms, AI automation, and cloud solutions.",
  alternates: {
    canonical: "https://5zentech.com/services",
  },
  openGraph: {
    title: "Software Development Services | 5Zen Technologies",
    description:
      "Modern technology solutions for your business: Web Development, Mobile Apps, Custom Software, SaaS Platforms, AI & Automation, Cloud Solutions.",
    url: "https://5zentech.com/services",
    type: "website",
  },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Smartphone,
  Code2,
  Layers,
  Bot,
  Cloud,
  TrendingUp,
};

export default function ServicesPage() {
  return (
    <div className="space-y-16 lg:space-y-24 py-8 pb-16">
      {/* Services Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EEF6FF] text-[#1677FF] border border-[#DCE7F5]">
          OUR SERVICES
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#071A3A] tracking-tight leading-tight max-w-4xl mx-auto">
          Modern Technology Solutions for Your Business
        </h1>
        <p className="text-lg text-[#52627A] max-w-2xl mx-auto leading-relaxed">
          From idea to execution, we deliver software solutions that are practical, scalable, and built for real business needs.
        </p>
      </section>

      {/* Services List Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Globe;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.slug}
                className="bg-white rounded-2xl border border-[#DCE7F5] shadow-card overflow-hidden transition-all duration-300 hover:border-[#1677FF]/40 scroll-mt-28"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 ${isEven ? "" : "lg:flex-row-reverse"}`}>
                  
                  {/* Service Text & Details */}
                  <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-[#EEF6FF] text-[#1677FF] flex items-center justify-center shrink-0">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-[#1677FF] uppercase tracking-wider bg-[#EEF6FF] px-3 py-1 rounded-full">
                        {service.visualTag}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A3A]">
                      {service.title}
                    </h2>

                    <p className="text-base text-[#52627A] leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Capabilities */}
                    <div className="space-y-3 pt-2">
                      <h3 className="text-sm font-bold text-[#071A3A] uppercase tracking-wider">
                        Core Capabilities
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.capabilities.map((cap, cIdx) => (
                          <div key={cIdx} className="flex items-center text-xs text-[#071A3A] font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#1677FF] mr-2 shrink-0" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div className="space-y-2 pt-2 border-t border-[#EEF6FF]">
                      <h4 className="text-xs font-bold text-[#52627A] uppercase">
                        Typical Use Cases:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.useCases.map((uc, uIdx) => (
                          <span
                            key={uIdx}
                            className="text-xs px-3 py-1 rounded-md bg-[#F7FAFF] text-[#52627A] border border-[#DCE7F5]"
                          >
                            {uc}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#1677FF] hover:bg-[#0D2854] shadow-md transition-all group"
                      >
                        Request Service Proposal
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Service Graphic Preview Card */}
                  <div className="lg:col-span-5 bg-[#F7FAFF] p-8 lg:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[#DCE7F5]">
                    <div className="bg-white p-6 rounded-xl border border-[#DCE7F5] shadow-soft space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-[#EEF6FF]">
                        <span className="text-xs font-bold text-[#071A3A]">{service.title} Stack</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <p className="text-xs text-[#52627A] leading-relaxed">
                        Tailored specifically around your operational goals, database needs, and security parameters.
                      </p>
                      <div className="p-4 rounded-lg bg-[#EEF6FF] border border-[#DCE7F5] text-xs font-mono text-[#1677FF]">
                        // 5Zen Quality Assurance<br />
                        ✓ Clean Architecture<br />
                        ✓ Scalable Infrastructure<br />
                        ✓ Mobile Responsive
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Custom Requirement CTA Banner (Matching reference image) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#EEF6FF] border border-[#DCE7F5] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold text-[#1677FF] uppercase tracking-wider">
              CUSTOM SOFTWARE REQUIREMENTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#071A3A]">
              Have a Custom Requirement?
            </h2>
            <p className="text-sm text-[#52627A] leading-relaxed">
              Let&apos;s discuss your idea and find the right technical architecture and solution roadmap for your business.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-[#1677FF] hover:bg-[#0D2854] shadow-md transition-all shrink-0"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>
    </div>
  );
}
