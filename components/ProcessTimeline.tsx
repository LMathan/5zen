import { processSteps } from "@/data/process";
import { CheckCircle2 } from "lucide-react";

export default function ProcessTimeline() {
  return (
    <div className="w-full">
      {/* Desktop Horizontal Process Layout */}
      <div className="hidden lg:grid grid-cols-5 gap-4 relative">
        {/* Connecting Line */}
        <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-[#DCE7F5] -z-0" />

        {processSteps.map((step, idx) => (
          <div
            key={idx}
            className="relative z-10 flex flex-col items-center text-center bg-white p-5 rounded-xl border border-[#DCE7F5] shadow-soft hover:border-[#1677FF] hover:shadow-card transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-full bg-[#EEF6FF] border-2 border-[#1677FF] text-[#1677FF] font-black text-lg flex items-center justify-center mb-4 group-hover:bg-[#1677FF] group-hover:text-white transition-colors duration-300">
              {step.step}
            </div>
            <h3 className="text-base font-bold text-[#071A3A] mb-2">{step.title}</h3>
            <p className="text-xs text-[#52627A] leading-relaxed mb-4">{step.description}</p>
            <ul className="text-[11px] text-left text-[#52627A] space-y-1.5 w-full pt-3 border-t border-[#EEF6FF]">
              {step.details.map((detail, dIdx) => (
                <li key={dIdx} className="flex items-start">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1677FF] shrink-0 mr-1.5 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Mobile & Tablet Vertical Process Layout */}
      <div className="lg:hidden space-y-6 relative before:absolute before:inset-0 before:left-6 before:w-0.5 before:bg-[#DCE7F5]">
        {processSteps.map((step, idx) => (
          <div key={idx} className="relative flex items-start space-x-4 pl-2">
            <div className="relative z-10 w-12 h-12 rounded-full bg-[#EEF6FF] border-2 border-[#1677FF] text-[#1677FF] font-black text-sm flex items-center justify-center shrink-0">
              {step.step}
            </div>
            <div className="flex-1 bg-white p-5 rounded-xl border border-[#DCE7F5] shadow-soft">
              <h3 className="text-lg font-bold text-[#071A3A] mb-1">{step.title}</h3>
              <p className="text-sm text-[#52627A] leading-relaxed mb-3">{step.description}</p>
              <ul className="space-y-1.5 text-xs text-[#52627A] pt-3 border-t border-[#EEF6FF]">
                {step.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1677FF] shrink-0 mr-2 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
