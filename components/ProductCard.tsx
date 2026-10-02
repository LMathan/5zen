import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { Play, Clock, Sparkles, ArrowRight, ExternalLink } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const getStatusBadge = () => {
    const badgeContent = (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors">
        <Play className="w-3 h-3 mr-1 fill-emerald-600" />
        {product.platformBadge}
      </span>
    );

    if (product.playStoreUrl) {
      return (
        <a
          href={product.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="View on Google Play Store"
        >
          {badgeContent}
        </a>
      );
    }

    switch (product.status) {
      case "Available":
        return badgeContent;
      case "In Development":
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
            <Clock className="w-3 h-3 mr-1" />
            {product.platformBadge}
          </span>
        );
      case "Prototype":
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#1677FF] border border-[#DCE7F5]">
            <Sparkles className="w-3 h-3 mr-1" />
            {product.platformBadge}
          </span>
        );
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-[#DCE7F5] shadow-soft shadow-hover flex flex-col justify-between group">
      {/* Product Visual */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F7FAFF] border-b border-[#DCE7F5]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 z-10">{getStatusBadge()}</div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-[#1677FF] uppercase tracking-wider">
            {product.category}
          </span>
          <h3 className="text-xl font-extrabold text-[#071A3A] mt-1 group-hover:text-[#1677FF] transition-colors">
            {product.name}
          </h3>
          <p className="text-xs font-semibold text-[#52627A] mt-0.5">
            {product.subtitle}
          </p>
          <p className="mt-3 text-sm text-[#52627A] leading-relaxed">
            {product.description}
          </p>

          <ul className="mt-4 space-y-2 border-t border-[#EEF6FF] pt-3">
            {product.features.map((feat, idx) => (
              <li key={idx} className="text-xs text-[#071A3A] flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF] mr-2 flex-shrink-0" />
                {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Play Store CTA Button */}
        <div className="mt-6 pt-4 border-t border-[#F0F7FF]">
          {product.playStoreUrl ? (
            <a
              href={product.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-[#1677FF] hover:bg-[#0D2854] shadow-sm hover:shadow transition-all duration-200"
            >
              <Play className="w-4 h-4 mr-2 fill-white" />
              Get on Google Play
              <ExternalLink className="ml-2 w-4 h-4 opacity-80" />
            </a>
          ) : (
            <Link
              href="/contact?ref=product"
              className="inline-flex items-center text-sm font-bold text-[#1677FF] hover:text-[#0D2854] transition-colors group-hover:translate-x-1 duration-200"
            >
              Inquire About Product
              <ArrowRight className="ml-1.5 w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
