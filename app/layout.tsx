import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoPreloader from "@/components/VideoPreloader";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "5Zen Technologies | Connect. Create. Elevate.",
    template: "%s | 5Zen Technologies"
  },
  description: "5Zen Technologies is a modern IT & software solutions company. We build websites, web applications, mobile applications, custom software, SaaS platforms, AI-powered solutions, and digital tools.",
  keywords: [
    "software development company",
    "web development",
    "mobile app development",
    "custom software development",
    "SaaS development",
    "AI solutions",
    "automation solutions",
    "5Zen Technologies"
  ],
  authors: [{ name: "5Zen Technologies" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://5zentech.com",
    title: "5Zen Technologies | Connect. Create. Elevate.",
    description: "Building Digital Solutions That Move Businesses Forward.",
    siteName: "5Zen Technologies"
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white text-[#071A3A] selection:bg-[#EEF6FF] selection:text-[#1677FF]">
        <VideoPreloader />
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
