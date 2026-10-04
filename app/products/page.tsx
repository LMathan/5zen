import { productsData } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Products & SaaS Platforms | 5Zen Technologies",
  description:
    "Explore 5Zen Technologies software products and SaaS platforms built for expense management, automation, and transport logistics.",
  alternates: {
    canonical: "https://5zentech.com/products",
  },
  openGraph: {
    title: "Digital Products & SaaS Platforms | 5Zen Technologies",
    description:
      "Innovative digital products and software platforms developed by 5Zen Technologies.",
    url: "https://5zentech.com/products",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <div className="space-y-12 lg:space-y-16 py-8 pb-16">
      {/* Products Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EEF6FF] text-[#1677FF] border border-[#DCE7F5]">
          OUR PRODUCTS
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#071A3A] tracking-tight leading-tight">
          Technology Products Built for Real Needs
        </h1>
        <p className="text-lg text-[#52627A] max-w-2xl mx-auto leading-relaxed">
          Innovative digital products and software platforms developed by 5Zen Technologies.
        </p>
      </section>

      {/* Products Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
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
