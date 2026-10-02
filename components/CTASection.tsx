import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden my-16 rounded-3xl bg-gradient-to-r from-[#071A3A] via-[#0D2854] to-[#1677FF] text-white p-8 sm:p-12 lg:p-16 shadow-card">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#2F8CFF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#1677FF]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#2F8CFF] border border-white/20 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#2F8CFF]" />
          READY TO START?
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
          Let&apos;s Build Something Amazing Together
        </h2>

        <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal max-w-2xl mx-auto">
          Have a project in mind? Let&apos;s talk about how we can turn your business requirements into a reliable, high-performance digital solution.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-[#071A3A] bg-white hover:bg-[#EEF6FF] transition-all shadow-lg hover:shadow-xl group"
          >
            Start a Project
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white border border-white/30 hover:bg-white/10 transition-colors"
          >
            Explore Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
