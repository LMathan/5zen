import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/data/company";
import { projectsData } from "@/data/projects";
import SectionHeading from "@/components/SectionHeading";
import ServicesStackSection from "@/components/ServicesStackSection";
import ProjectCard from "@/components/ProjectCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import CTASection from "@/components/CTASection";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <div className="space-y-20 lg:space-y-28 pb-16">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[88vh] flex items-center py-10 lg:py-16 overflow-hidden border-b border-[#EEF6FF]">
        {/* Full Cover Background Image */}
        <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
          <Image
            src="/hero-bg1.png"
            alt="5Zen Hero Background"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center opacity-95"
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* LEFT COLUMN: Bold Headlines, Text & CTAs */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left order-1">

              {/* Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-black text-[#071A3A] tracking-tight leading-[1.08]">
                Building Digital Solutions That{" "}
                <span className="gradient-blue-text">Move Businesses Forward</span>
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-xl lg:text-2xl text-[#52627A] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {companyInfo.heroSubtext}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4.5 rounded-2xl text-base sm:text-lg font-extrabold text-white bg-[#1677FF] hover:bg-[#0D2854] shadow-lg hover:shadow-xl transition-all duration-200 group"
                >
                  Start a Project
                  <ArrowRight className="ml-2.5 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                </Link>
                <Link
                  href="/work"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4.5 rounded-2xl text-base sm:text-lg font-extrabold text-[#071A3A] bg-white border-2 border-[#DCE7F5] hover:bg-[#F7FAFF] hover:border-[#1677FF] transition-all shadow-sm"
                >
                  Explore Our Work
                </Link>
              </div>

            </div>

            {/* RIGHT COLUMN: Synchronized 3D Bouncing Laptop & Mobile Hero Showcase */}
            <div className="lg:col-span-6 relative flex justify-center items-center order-2 pt-6 lg:pt-0">

              {/* Hero Devices Composite Container */}
              <div className="relative w-full max-w-2xl lg:max-w-3xl aspect-[1.25/1] flex items-center justify-center">

                {/* Laptop Image (hero-lap.png) with Synchronized 3D Animation */}
                <div className="relative w-full h-full animate-sync-laptop filter drop-shadow-[0_20px_40px_rgba(7,26,58,0.25)] z-10">
                  <Image
                    src="/hero-lap.png"
                    alt="5Zen Laptop Showcase"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                    className="object-contain object-center scale-125"
                  />
                </div>

                {/* Mobile Phone Image (hero-mbl.png) with Synchronized 3D Animation */}
                <div className="absolute right-[-2%] sm:right-[-4%] bottom-[-2%] sm:bottom-[-4%] w-[42%] h-[82%] z-20 animate-sync-mobile filter drop-shadow-[0_25px_45px_rgba(7,26,58,0.3)]">
                  <Image
                    src="/hero-mbl.png"
                    alt="5Zen Mobile App Showcase"
                    fill
                    sizes="(max-width: 1024px) 45vw, 25vw"
                    priority
                    className="object-contain object-center scale-110"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SERVICES STACK SECTION (3D LANDSCAPE STACKING) ================= */}
      <ServicesStackSection />

      {/* ================= SELECTED WORK SECTION ================= */}
      <section className="bg-[#F7FAFF] py-16 lg:py-24 border-y border-[#DCE7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FEATURED WORK"
            title="Projects That Create Real Value"
            subtitle="Explore digital products, booking systems and mobile platforms built by 5Zen Technologies."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-[#1677FF] hover:bg-[#0D2854] shadow-md transition-all group"
            >
              View All Work & Case Studies
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY 5ZEN SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="WHY 5ZEN"
          title="Built Around Your Business"
          subtitle="We focus on practical engineering, transparent communication, and long-term tech reliability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyInfo.values.map((val, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-[#DCE7F5] shadow-soft hover:border-[#1677FF]/50 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#EEF6FF] text-[#1677FF] font-black text-sm flex items-center justify-center mb-4">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-bold text-[#071A3A] mb-2">{val.title}</h3>
              <p className="text-sm text-[#52627A] leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW WE WORK SECTION ================= */}
      <section className="bg-[#F7FAFF] py-16 lg:py-24 border-y border-[#DCE7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="OUR PROCESS"
            title="A Simple, Transparent Process"
            subtitle="From initial requirement analysis to final launch and maintenance, here is how we bring software projects to life."
          />

          <ProcessTimeline />
        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>
    </div>
  );
}
