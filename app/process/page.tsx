import SectionHeading from "@/components/SectionHeading";
import ProcessTimeline from "@/components/ProcessTimeline";
import CTASection from "@/components/CTASection";
import { MessageSquare, Cpu, ShieldCheck, HeartHandshake } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Process & Methodology | 5Zen Technologies",
  description:
    "Learn about 5Zen Technologies transparent 5-step software development process from requirement discovery to architecture, agile engineering, QA, and launch.",
  alternates: {
    canonical: "https://5zentech.com/process",
  },
  openGraph: {
    title: "Software Development Process | 5Zen Technologies",
    description:
      "A simple, structured, and transparent process designed to turn business ideas into reliable software products.",
    url: "https://5zentech.com/process",
    type: "website",
  },
};

const principles = [
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Regular updates, transparent progress tracking, and direct developer communication throughout project milestones."
  },
  {
    icon: Cpu,
    title: "Practical Solutions",
    description: "Choosing the optimal tech stack for your actual business goals rather than introducing unnecessary complexity."
  },
  {
    icon: ShieldCheck,
    title: "Transparent Development",
    description: "Structured project roadmaps, clear delivery estimates, and clean code documentation."
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Support",
    description: "Continued maintenance, security updates, and scalable feature additions post launch."
  }
];

export default function ProcessPage() {
  return (
    <div className="space-y-16 lg:space-y-24 py-8 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EEF6FF] text-[#1677FF] border border-[#DCE7F5]">
          HOW WE WORK
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#071A3A] tracking-tight leading-tight">
          From Requirement to Reality
        </h1>
        <p className="text-lg text-[#52627A] max-w-2xl mx-auto leading-relaxed">
          A simple, structured, and transparent process designed to turn business ideas into reliable software products.
        </p>
      </section>

      {/* 5-Step Process Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="5-STEP METHODOLOGY"
          title="Our Development Process"
          subtitle="Every project follows a predictable timeline focused on clarity, quality and timely delivery."
        />

        <ProcessTimeline />
      </section>

      {/* Development Principles */}
      <section className="bg-[#F7FAFF] py-16 border-y border-[#DCE7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="OUR COMMITMENT"
            title="Built on Trust & Engineering Excellence"
            subtitle="The core standards we maintain across every client collaboration."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-xl border border-[#DCE7F5] shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-[#EEF6FF] text-[#1677FF] flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#071A3A] mb-2">{p.title}</h3>
                  <p className="text-xs text-[#52627A] leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>
    </div>
  );
}
