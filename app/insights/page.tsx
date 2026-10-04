import { articlesData } from "@/data/insights";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Insights & Web Development Articles | 5Zen Technologies",
  description:
    "Read technical articles, web development best practices, AI automation guides, and software engineering insights from 5Zen Technologies.",
  alternates: {
    canonical: "https://5zentech.com/insights",
  },
  openGraph: {
    title: "Tech Insights & Web Development Articles | 5Zen Technologies",
    description:
      "Our thoughts on software architecture, web development, mobile technologies, and AI automation.",
    url: "https://5zentech.com/insights",
    type: "website",
  },
};

export default function InsightsPage() {
  return (
    <div className="space-y-12 lg:space-y-16 py-8 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EEF6FF] text-[#1677FF] border border-[#DCE7F5]">
          BLOG & INSIGHTS
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#071A3A] tracking-tight leading-tight">
          Insights & Updates
        </h1>
        <p className="text-lg text-[#52627A] max-w-2xl mx-auto leading-relaxed">
          Our thoughts on software architecture, web development, mobile technologies, and AI automation.
        </p>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesData.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>
    </div>
  );
}
