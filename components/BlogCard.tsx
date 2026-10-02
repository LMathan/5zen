import Link from "next/link";
import Image from "next/image";
import { Article } from "@/data/insights";
import { ArrowRight, Clock, Calendar } from "lucide-react";

interface BlogCardProps {
  article: Article;
}

export default function BlogCard({ article }: BlogCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-[#DCE7F5] shadow-soft shadow-hover flex flex-col justify-between group">
      <div>
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F7FAFF]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-[#1677FF] border border-[#DCE7F5]">
              {article.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center space-x-4 text-xs text-[#52627A] mb-3">
            <span className="flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1 text-[#1677FF]" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-[#1677FF]" />
              {article.readTime}
            </span>
          </div>

          <h3 className="text-xl font-bold text-[#071A3A] group-hover:text-[#1677FF] transition-colors leading-snug">
            {article.title}
          </h3>

          <p className="mt-2 text-sm text-[#52627A] leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Link
          href={`/insights/${article.slug}`}
          className="inline-flex items-center text-sm font-bold text-[#1677FF] hover:text-[#0D2854] group-hover:translate-x-1 transition-all"
        >
          Read Article
          <ArrowRight className="ml-1.5 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
