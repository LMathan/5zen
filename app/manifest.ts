import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "5Zen Technologies",
    short_name: "5Zen Tech",
    description:
      "5Zen Technologies is a modern IT & software solutions company in Tamil Nadu, India. We build websites, web applications, mobile apps, SaaS platforms, AI solutions, and digital tools.",
    start_url: "/",
    display: "standalone",
    background_color: "#071A3A",
    theme_color: "#1677FF",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
