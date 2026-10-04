import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = true }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="block h-full cursor-pointer group"
    >
      <div className="h-full bg-white rounded-xl overflow-hidden border border-[#DCE7F5] shadow-soft shadow-hover flex flex-col justify-between">
        {/* Thumbnail Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EEF6FF]">
          <Image
            src={project.thumbnail}
            alt={project.name}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-[#1677FF] border border-[#DCE7F5] shadow-sm">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-extrabold text-[#071A3A] group-hover:text-[#1677FF] transition-colors">
                {project.name}
              </h3>
              <span className="text-xs text-[#52627A] font-medium px-2 py-0.5 rounded bg-[#F7FAFF] border border-[#DCE7F5]">
                {project.projectType}
              </span>
            </div>
            <p className="mt-2 text-sm text-[#52627A] line-clamp-2 leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Tech tags */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="text-[11px] px-2.5 py-1 rounded-md bg-[#EEF6FF] text-[#071A3A] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* View Case Study CTA */}
          <div className="mt-6 pt-4 border-t border-[#F0F7FF] flex items-center justify-between">
            <span className="inline-flex items-center text-sm font-bold text-[#1677FF] group-hover:text-[#0D2854] transition-colors group-hover:translate-x-1 duration-200">
              View Case Study
              <ArrowUpRight className="ml-1.5 w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
