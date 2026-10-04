import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | 5Zen Technologies",
  description: "Terms and conditions for using 5Zen Technologies website and services.",
  alternates: {
    canonical: "https://5zentech.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20 space-y-8">
      <div className="space-y-3 border-b border-[#EEF6FF] pb-6">
        <h1 className="text-3xl sm:text-4xl font-black text-[#071A3A]">Terms & Conditions</h1>
        <p className="text-sm text-[#52627A]">Last updated: October 2026</p>
      </div>

      <div className="bg-white rounded-2xl border border-[#DCE7F5] p-8 shadow-soft space-y-6 text-sm text-[#52627A] leading-relaxed">
        <h2 className="text-lg font-bold text-[#071A3A]">1. Agreement to Terms</h2>
        <p>
          By accessing the 5Zen Technologies website, you agree to comply with these terms of service and all applicable laws and regulations.
        </p>

        <h2 className="text-lg font-bold text-[#071A3A]">2. Intellectual Property</h2>
        <p>
          All trademarks, logos, portfolio case studies, and site content displayed on this website are the property of 5Zen Technologies or its respective clients.
        </p>

        <h2 className="text-lg font-bold text-[#071A3A]">3. Service Agreements</h2>
        <p>
          Software development services, project timelines, deliverables, and payment milestones are governed by explicit project statements of work (SOW).
        </p>

        <h2 className="text-lg font-bold text-[#071A3A]">4. Modifications</h2>
        <p>
          5Zen Technologies reserves the right to revise site terms at any time without notice.
        </p>
      </div>
    </div>
  );
}
