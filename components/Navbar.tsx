"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Work", href: "/work" },
  { name: "How We Work", href: "/process" },
  { name: "Insights", href: "/insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full max-w-full overflow-x-hidden z-[100] bg-white transition-all duration-300 ${
        scrolled
          ? "border-b border-[#DCE7F5] shadow-sm pb-3"
          : "border-b border-[#EEF6FF] pb-3.5"
      }`}
      style={{ paddingTop: "calc(0.75rem + env(safe-area-inset-top, 0px))" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-9 sm:h-10 w-36 sm:w-40 flex items-center">
              <Image
                src="/logo.png"
                alt="5Zen Technologies Logo"
                fill
                sizes="(max-width: 640px) 144px, 160px"
                priority
                className="object-contain object-left transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[#1677FF] bg-[#EEF6FF] font-semibold"
                      : "text-[#071A3A] hover:text-[#1677FF] hover:bg-[#F7FAFF]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-[#1677FF] hover:bg-[#0D2854] shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              Start a Project
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#071A3A] bg-[#F7FAFF] border border-[#DCE7F5] hover:bg-[#EEF6FF] hover:text-[#1677FF] active:scale-95 transition-all"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#1677FF]" />
              ) : (
                <Menu className="w-6 h-6 text-[#071A3A]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#DCE7F5] px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-5 duration-200 max-h-[calc(100dvh-4rem)] overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  isActive
                    ? "text-[#1677FF] bg-[#EEF6FF]"
                    : "text-[#071A3A] hover:bg-[#F7FAFF] hover:text-[#1677FF]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-[#DCE7F5]">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-full px-5 py-3.5 rounded-xl text-base font-bold text-white bg-[#1677FF] hover:bg-[#0D2854] shadow-md"
            >
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
