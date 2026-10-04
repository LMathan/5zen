import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoPreloader from "@/components/VideoPreloader";
import JsonLd from "@/components/JsonLd";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://5zentech.com"),
  title: {
    default: "5Zen Technologies | Web, Mobile, SaaS & AI Solutions Company",
    template: "%s | 5Zen Technologies",
  },
  description:
    "5Zen Technologies is a modern IT & software engineering company based in Tamil Nadu, India. We design and develop websites, web apps, mobile applications, SaaS products, AI solutions, and digital automation systems.",
  keywords: [
    "5Zen Technologies",
    "5zentech",
    "software development company",
    "web development company India",
    "mobile app development company",
    "custom software development",
    "SaaS development company",
    "AI automation solutions",
    "Tamil Nadu software company",
    "Next.js web development",
    "React mobile application",
    "cloud solutions",
  ],
  authors: [{ name: "5Zen Technologies", url: "https://5zentech.com" }],
  creator: "5Zen Technologies",
  publisher: "5Zen Technologies",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://5zentech.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://5zentech.com",
    siteName: "5Zen Technologies",
    title: "5Zen Technologies | Web, Mobile, SaaS & AI Solutions",
    description:
      "Building Digital Solutions That Move Businesses Forward. Practical software engineering, custom web apps, mobile apps, SaaS, and AI automation.",
    images: [
      {
        url: "/Abt.png",
        width: 1200,
        height: 630,
        alt: "5Zen Technologies - Connect. Create. Elevate.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5Zen Technologies | Web, Mobile, SaaS & AI Solutions",
    description: "Building Digital Solutions That Move Businesses Forward.",
    images: ["/Abt.png"],
    creator: "@5zentech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased`}>
      <head>
        <JsonLd />
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'yshxzrspbe'}");
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#071A3A] selection:bg-[#EEF6FF] selection:text-[#1677FF]">
        <VideoPreloader />
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
