import Link from "next/link";
import { Service } from "@/data/services";
import {
  Globe,
  Smartphone,
  Code2,
  Layers,
  Bot,
  Cloud,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Smartphone,
  Code2,
  Layers,
  Bot,
  Cloud,
  TrendingUp,
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Globe;

  return (
    <Link
      href={`/services#${service.slug}`}
      className="block h-full cursor-pointer group"
    >
      <div className="h-full bg-white rounded-2xl p-7 lg:p-8 border border-[#DCE7F5] shadow-soft hover:border-[#1677FF] hover:shadow-[0_15px_35px_-5px_rgba(22,119,255,0.12)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
        
        {/* Ambient Top Corner Gradient Accent */}
        <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#1677FF]/5 rounded-full blur-2xl group-hover:bg-[#1677FF]/15 transition-all duration-500" />

        <div>
          {/* Top Header: Icon Badge & Category Tag */}
          <div className="flex items-center justify-between mb-6">
            <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-[#EEF6FF] to-[#DCE7F5] group-hover:from-[#1677FF] group-hover:to-[#2F8CFF] flex items-center justify-center text-[#1677FF] group-hover:text-white transition-all duration-300 shadow-xs group-hover:shadow-[0_8px_20px_rgba(22,119,255,0.3)]">
              <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            </div>

            <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-[#F0F7FF] text-[#1677FF] border border-[#DCE7F5] tracking-wide">
              {service.visualTag}
            </span>
          </div>

          {/* Title & Short Description */}
          <h3 className="text-xl font-black text-[#071A3A] group-hover:text-[#1677FF] transition-colors mb-2.5">
            {service.title}
          </h3>
          <p className="text-sm text-[#52627A] leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Modern Capabilities Feature Pills */}
          {service.capabilities && service.capabilities.length > 0 && (
            <div className="mt-5 pt-4 border-t border-[#EEF6FF] flex flex-wrap gap-1.5">
              {service.capabilities.slice(0, 3).map((cap, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#F7FAFF] group-hover:bg-[#EEF6FF] text-[#071A3A] group-hover:text-[#1677FF] border border-[#E2ECF9] transition-colors duration-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1677FF] mr-1.5 shrink-0" />
                  {cap}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Learn More CTA Action */}
        <div className="mt-6 pt-4 border-t border-[#F0F7FF] flex items-center justify-between">
          <span className="inline-flex items-center text-sm font-extrabold text-[#1677FF] group-hover:text-[#0D2854] transition-colors duration-200">
            Learn More
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
        </div>

      </div>
    </Link>
  );
}
