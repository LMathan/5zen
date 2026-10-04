import Link from "next/link";
import { Home, Layers, Briefcase, Mail } from "lucide-react";

export const metadata = {
  title: "Page Not Found | 5Zen Technologies",
  description: "The page you are looking for could not be found. Explore 5Zen Technologies software services, case studies, or contact us.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-xl w-full text-center space-y-8">
        <div className="space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#EEF6FF] text-[#1677FF] border border-[#DCE7F5]">
            404 ERROR
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#071A3A] tracking-tight">
            Page Not Found
          </h1>
          <p className="text-base text-[#52627A] leading-relaxed max-w-md mx-auto">
            Sorry, the page you are looking for doesn&apos;t exist or may have been moved. Let&apos;s get you back on track.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-bold text-white bg-[#1677FF] hover:bg-[#0D2854] shadow-md transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Homepage
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-bold text-[#071A3A] bg-white border border-[#DCE7F5] hover:bg-[#EEF6FF] hover:text-[#1677FF] transition-colors"
          >
            <Layers className="w-4 h-4 mr-2 text-[#1677FF]" />
            Explore Services
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-bold text-[#071A3A] bg-white border border-[#DCE7F5] hover:bg-[#EEF6FF] hover:text-[#1677FF] transition-colors"
          >
            <Briefcase className="w-4 h-4 mr-2 text-[#1677FF]" />
            View Our Work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-bold text-[#071A3A] bg-white border border-[#DCE7F5] hover:bg-[#EEF6FF] hover:text-[#1677FF] transition-colors"
          >
            <Mail className="w-4 h-4 mr-2 text-[#1677FF]" />
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
