import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { articlesData } from "@/data/insights";
import CTASection from "@/components/CTASection";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  const canonicalUrl = `https://5zentech.com/insights/${article.slug}`;

  return {
    title: `${article.title} | 5Zen Technologies`,
    description: article.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: article.image,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="space-y-12 lg:space-y-16 py-8 pb-16">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Link
          href="/insights"
          className="inline-flex items-center text-sm font-bold text-[#1677FF] hover:text-[#0D2854] transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Insights
        </Link>

        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EEF6FF] text-[#1677FF] border border-[#DCE7F5]">
            {article.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071A3A] tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center space-x-6 text-xs text-[#52627A] pt-2 border-t border-[#EEF6FF]">
            <span className="flex items-center">
              <User className="w-4 h-4 mr-1.5 text-[#1677FF]" />
              {article.author}
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1.5 text-[#1677FF]" />
              {article.date}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1.5 text-[#1677FF]" />
              {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#DCE7F5] shadow-card bg-[#F7FAFF]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#DCE7F5] p-8 sm:p-12 shadow-soft space-y-6 prose prose-slate max-w-none">
          <p className="text-lg text-[#071A3A] font-semibold leading-relaxed">
            {article.excerpt}
          </p>
          <div className="text-base text-[#52627A] leading-relaxed whitespace-pre-line space-y-4">
            {article.content}
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
