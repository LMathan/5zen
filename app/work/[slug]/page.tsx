import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import CTASection from "@/components/CTASection";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Calendar,
  User,
  Tag,
  Code2,
  Globe,
} from "lucide-react";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} | Case Study`,
    description: project.shortDescription,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-12 lg:space-y-16 py-8 pb-16">
      {/* Top Back Link & Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Link
          href="/work"
          className="inline-flex items-center text-sm font-bold text-[#1677FF] hover:text-[#0D2854] transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Portfolio
        </Link>

        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EEF6FF] text-[#1677FF] border border-[#DCE7F5]">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F7FAFF] text-[#52627A] border border-[#DCE7F5]">
              {project.projectType}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071A3A] tracking-tight">
            {project.name} Case Study
          </h1>
          <p className="text-lg text-[#52627A] max-w-3xl leading-relaxed">
            {project.shortDescription}
          </p>
        </div>
      </section>

      {/* Hero Showcase Mockup */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-[#DCE7F5] shadow-card bg-[#071A3A] p-4 sm:p-8">
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-white">
            <Image
              src={project.heroImage || project.thumbnail}
              alt={project.name}
              fill
              sizes="100vw"
              priority
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Main Case Study Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Main Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview Section */}
            <div className="bg-white rounded-2xl border border-[#DCE7F5] p-8 shadow-soft space-y-4">
              <h2 className="text-2xl font-extrabold text-[#071A3A]">Project Overview</h2>
              <p className="text-base text-[#52627A] leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Challenge & Solution (if available) */}
            {(project.challenge || project.solution) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.challenge && (
                  <div className="bg-[#F7FAFF] rounded-xl border border-[#DCE7F5] p-6 space-y-2">
                    <h3 className="text-base font-bold text-[#071A3A]">The Challenge</h3>
                    <p className="text-sm text-[#52627A] leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                )}
                {project.solution && (
                  <div className="bg-[#EEF6FF] rounded-xl border border-[#DCE7F5] p-6 space-y-2">
                    <h3 className="text-base font-bold text-[#1677FF]">The 5Zen Solution</h3>
                    <p className="text-sm text-[#071A3A] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Key Features Section */}
            <div className="bg-white rounded-2xl border border-[#DCE7F5] p-8 shadow-soft space-y-6">
              <h2 className="text-2xl font-extrabold text-[#071A3A]">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-[#F7FAFF] border border-[#EEF6FF]">
                    <CheckCircle2 className="w-5 h-5 text-[#1677FF] shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-[#071A3A]">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Gallery Section */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-extrabold text-[#071A3A]">Project Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((img, gIdx) => (
                    <div
                      key={gIdx}
                      className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#DCE7F5] shadow-sm bg-white"
                    >
                      <Image
                        src={img}
                        alt={`${project.name} screenshot ${gIdx + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Information Sidebar Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white rounded-2xl border border-[#DCE7F5] p-6 shadow-card space-y-6">
              <h3 className="text-xl font-extrabold text-[#071A3A] pb-4 border-b border-[#EEF6FF]">
                Project Information
              </h3>

              <div className="space-y-4 text-sm">
                {project.client && (
                  <div className="flex items-start justify-between">
                    <span className="text-[#52627A] flex items-center">
                      <User className="w-4 h-4 mr-2 text-[#1677FF]" /> Client
                    </span>
                    <span className="font-bold text-[#071A3A] text-right">{project.client}</span>
                  </div>
                )}

                <div className="flex items-start justify-between">
                  <span className="text-[#52627A] flex items-center">
                    <Tag className="w-4 h-4 mr-2 text-[#1677FF]" /> Category
                  </span>
                  <span className="font-bold text-[#071A3A] text-right">{project.category}</span>
                </div>

                {project.duration && (
                  <div className="flex items-start justify-between">
                    <span className="text-[#52627A] flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-[#1677FF]" /> Duration
                    </span>
                    <span className="font-bold text-[#071A3A] text-right">{project.duration}</span>
                  </div>
                )}

                <div className="pt-2 border-t border-[#EEF6FF] space-y-2">
                  <span className="text-[#52627A] flex items-center text-xs uppercase font-bold">
                    <Code2 className="w-4 h-4 mr-2 text-[#1677FF]" /> Technologies Used
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs px-2.5 py-1 rounded-md bg-[#EEF6FF] text-[#071A3A] font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.liveUrl && (
                  <div className="pt-4 border-t border-[#EEF6FF]">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-sm font-bold text-white bg-[#1677FF] hover:bg-[#0D2854] shadow-md transition-all"
                    >
                      Visit Live Website
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-[#F7FAFF] rounded-xl border border-[#DCE7F5] p-6 text-center space-y-3">
              <h4 className="text-base font-bold text-[#071A3A]">Have a similar project?</h4>
              <p className="text-xs text-[#52627A]">
                We build web applications, mobile software and booking solutions tailored to your operational needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-xs font-bold text-[#1677FF] hover:underline"
              >
                Start a Discussion →
              </Link>
            </div>
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
