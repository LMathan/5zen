import { Metadata } from "next";
import WorkClient from "@/components/WorkClient";

export const metadata: Metadata = {
  title: "Our Work & Case Studies | 5Zen Technologies",
  description:
    "Explore portfolio projects, websites, web applications, booking platforms, mobile software, and SaaS products engineered by 5Zen Technologies.",
  alternates: {
    canonical: "https://5zentech.com/work",
  },
  openGraph: {
    title: "Our Work & Case Studies | 5Zen Technologies",
    description:
      "Explore digital products, booking systems, mobile apps, and custom software built by 5Zen Technologies.",
    url: "https://5zentech.com/work",
    type: "website",
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
