"use client";

import Link from "next/link";
import Image from "next/image";
import { Service } from "@/data/services";

interface ServiceLandscapeCardProps {
  service: Service;
  index: number;
  total: number;
}

export default function ServiceLandscapeCard({ service }: ServiceLandscapeCardProps) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className="block w-full cursor-pointer group"
    >
      <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] rounded-3xl overflow-hidden border-2 border-[#DCE7F5] shadow-[0_20px_50px_rgba(7,26,58,0.12)] hover:border-[#1677FF] hover:shadow-[0_30px_70px_rgba(22,119,255,0.22)] transition-all duration-300 bg-white">
        {service.image ? (
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
            className="object-contain object-center group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-bold text-lg text-[#071A3A]">
            {service.title}
          </div>
        )}
      </div>
    </Link>
  );
}
