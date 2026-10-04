import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/data/company";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { Target, Compass, Award, ArrowRight, CheckCircle2 } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About 5Zen Technologies | Software Engineering & Tech Solutions",
  description:
    "Learn about 5Zen Technologies — a modern software development company in Tamil Nadu, India focused on building practical web, mobile, SaaS, and AI digital solutions.",
  alternates: {
    canonical: "https://5zentech.com/about",
  },
  openGraph: {
    title: "About 5Zen Technologies | Software Engineering & Tech Solutions",
    description:
      "A team of passionate developers and problem solvers building technology for a smarter future.",
    url: "https://5zentech.com/about",
    type: "website",
  },
};

const journeyMilestones = [
  {
    step: "01",
    title: "Idea & Team",
    description: "A group of passionate developers and problem solvers with a shared passion for technology."
  },
  {
    step: "02",
    title: "Building Skills",
    description: "Developing expertise through academic projects, software engineering, and real-world web & mobile development."
  },
  {
    step: "03",
    title: "5Zen Technologies",
    description: "Officially started 5Zen to provide practical technology solutions for businesses."
  },
  {
    step: "04",
    title: "The Road Ahead",
    description: "Continue building impactful solutions and working with amazing clients worldwide."
  }
];

export default function AboutPage() {
  return (
    <div className="space-y-16 lg:space-y-24 py-8 pb-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content */}
          <div className="lg:col-span-5 space-y-5">
            <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EEF6FF] text-[#1677FF] border border-[#DCE7F5]">
              ABOUT 5ZEN TECHNOLOGIES
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#071A3A] tracking-tight leading-snug">
              {companyInfo.aboutHeroTitle}
            </h1>
            <p className="text-sm sm:text-base text-[#071A3A] font-semibold leading-relaxed">
              {companyInfo.aboutHeadline}
            </p>
            <p className="text-xs sm:text-sm text-[#52627A] leading-relaxed">
              {companyInfo.aboutSubtext}
            </p>

            <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#071A3A] font-medium">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#1677FF] shrink-0" />
                <span>Web & Mobile Software</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#1677FF] shrink-0" />
                <span>SaaS & Cloud Apps</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#1677FF] shrink-0" />
                <span>AI & Automation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#1677FF] shrink-0" />
                <span>Transparent Process</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center px-5.5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#1677FF] hover:bg-[#0D2854] shadow-md transition-all group"
              >
                Work With Us
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Visual Image - Uncropped Full Size */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            <div className="relative w-full aspect-[16/10.5] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-[#DCE7F5] shadow-xl bg-white">
              <Image
                src="/Abt.png"
                alt="About 5Zen Technologies"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
                className="object-contain object-center"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-[#F7FAFF] py-16 lg:py-20 border-y border-[#DCE7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="OUR PURPOSE"
            title="Mission, Vision & Core Values"
            subtitle="The principles that guide our development work and client relationships."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl border border-[#DCE7F5] shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-[#EEF6FF] text-[#1677FF] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-[#071A3A] mb-3">Our Mission</h3>
              <p className="text-sm text-[#52627A] leading-relaxed">
                {companyInfo.mission}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl border border-[#DCE7F5] shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-[#EEF6FF] text-[#1677FF] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-[#071A3A] mb-3">Our Vision</h3>
              <p className="text-sm text-[#52627A] leading-relaxed">
                {companyInfo.vision}
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-xl border border-[#DCE7F5] shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-[#EEF6FF] text-[#1677FF] flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-[#071A3A] mb-3">Our Core Values</h3>
              <p className="text-sm text-[#52627A] leading-relaxed">
                Innovation, transparency in development, code quality, and building long-term trusted client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline (Matching design reference screenshot) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="OUR MILESTONES"
          title="Our Journey"
          subtitle="How 5Zen Technologies evolved from collaborative projects to a dedicated tech company."
        />

        <div className="max-w-3xl mx-auto relative before:absolute before:inset-0 before:left-6 md:before:left-1/2 md:before:-ml-0.5 before:w-0.5 before:bg-[#DCE7F5] space-y-8">
          {journeyMilestones.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row items-start ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#1677FF] z-10" />

              {/* Card */}
              <div className="ml-14 md:ml-0 md:w-1/2 md:px-8">
                <div className="bg-white p-6 rounded-xl border border-[#DCE7F5] shadow-soft">
                  <span className="text-xs font-bold text-[#1677FF] uppercase">
                    Milestone {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-[#071A3A] mt-1">{item.title}</h3>
                  <p className="text-sm text-[#52627A] mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>
    </div>
  );
}
