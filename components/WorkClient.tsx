"use client";

import { useState } from "react";
import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";

const categories = ["All", "Websites", "Web Apps", "Mobile Apps", "SaaS", "Others"];

export default function WorkClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Others") {
      return !["Websites", "Web Apps", "Mobile Apps", "SaaS"].includes(project.category);
    }
    return project.category === activeCategory;
  });

  return (
    <div className="space-y-12 lg:space-y-16 py-8 pb-16">
      {/* Portfolio Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EEF6FF] text-[#1677FF] border border-[#DCE7F5]">
          OUR WORK
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#071A3A] tracking-tight leading-tight">
          Projects That Create Real Impact
        </h1>
        <p className="text-lg text-[#52627A] max-w-2xl mx-auto leading-relaxed">
          A collection of our recent projects, websites, web applications, and client solutions.
        </p>

        {/* Category Filters */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#1677FF] text-white shadow-md scale-105"
                    : "bg-white text-[#071A3A] border border-[#DCE7F5] hover:bg-[#EEF6FF] hover:text-[#1677FF]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 animate-in fade-in duration-300">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#F7FAFF] rounded-2xl border border-[#DCE7F5]">
            <p className="text-base text-[#52627A]">
              No projects found in this category yet.
            </p>
          </div>
        )}
      </section>

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>
    </div>
  );
}
