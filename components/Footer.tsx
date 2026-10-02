import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/data/company";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071A3A] text-white pt-16 pb-12 border-t border-[#0D2854]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-[#0D2854]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-14 sm:h-16 w-[148px] sm:w-[168px] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/footer-logo1.png"
                alt="5Zen Technologies Logo"
                fill
                sizes="(max-width: 640px) 148px, 168px"
                className="object-cover object-center rounded-2xl"
              />
            </div>
            <p className="text-gray-300 text-sm max-w-sm leading-relaxed">
              Building digital solutions that move businesses forward. We design and develop websites, web apps, mobile applications, SaaS products and custom software tailored to real-world needs.
            </p>
            <div className="pt-2 flex flex-col space-y-2 text-xs text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#2F8CFF]" />
                <span>{companyInfo.contact.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#2F8CFF]" />
                <span>{companyInfo.contact.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#2F8CFF] mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Insights & Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#2F8CFF] mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/services#web-development" className="hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#mobile-app-development" className="hover:text-white transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services#custom-software" className="hover:text-white transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services#saas-development" className="hover:text-white transition-colors">
                  SaaS Development
                </Link>
              </li>
              <li>
                <Link href="/services#ai-automation" className="hover:text-white transition-colors">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link href="/services#cloud-solutions" className="hover:text-white transition-colors">
                  Cloud Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#2F8CFF] mb-4">
              Get in Touch
            </h3>
            <p className="text-xs text-gray-300 mb-4">
              Have a project in mind? Let&apos;s build practical software solutions for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-xs font-semibold px-4 py-2.5 rounded-lg text-white bg-[#1677FF] hover:bg-[#2F8CFF] transition-all shadow-md"
            >
              Start a Project
              <ArrowUpRight className="ml-1.5 w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} 5Zen Technologies. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
