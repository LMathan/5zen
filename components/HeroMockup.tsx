"use client";

import Image from "next/image";
import { Laptop, Smartphone, Bot, Layers, Globe, Code, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function HeroMockup() {
  return (
    <div className="relative w-full max-w-5xl mx-auto mt-8 lg:mt-12">
      {/* Background Subtle Radial Blue Glow */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-gradient-to-tr from-[#1677FF]/20 via-[#2F8CFF]/15 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />

      {/* Main Composite Container */}
      <div className="relative rounded-2xl bg-white border border-[#DCE7F5] shadow-card p-4 sm:p-6 lg:p-8 backdrop-blur-sm overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        {/* Laptop & Mobile Phone Showcase Frame */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Main Browser Dashboard Preview (Laptop Screen View) */}
          <div className="lg:col-span-8 rounded-xl overflow-hidden border border-[#DCE7F5] shadow-lg bg-white group">
            {/* Top Window Bar */}
            <div className="bg-[#071A3A] px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
              </div>
              <div className="bg-[#0D2854] text-[#A0AEC0] text-xs px-4 py-1 rounded-md max-w-xs w-full text-center truncate font-mono">
                https://5zentech.com/dashboard
              </div>
              <div className="w-12 text-right">
                <span className="w-2 h-2 rounded-full bg-[#1677FF] inline-block animate-ping" />
              </div>
            </div>

            {/* Dashboard Content Mockup */}
            <div className="p-5 bg-[#F7FAFF] space-y-4">
              <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-[#DCE7F5] shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EEF6FF] flex items-center justify-center text-[#1677FF]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#071A3A]">Enterprise Portal Solution</h4>
                    <p className="text-xs text-[#52627A]">Cloud Infrastructure & Real-time Web App</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center">
                  <CheckCircle2 className="w-3 h-3 mr-1" /> Active System
                </span>
              </div>

              {/* Metrics / Cards Row inside mockup */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded-lg border border-[#DCE7F5]">
                  <p className="text-[10px] uppercase font-bold text-[#52627A]">Core Services</p>
                  <p className="text-sm font-extrabold text-[#071A3A] mt-1">Web & Mobile</p>
                  <div className="w-full h-1.5 bg-[#EEF6FF] rounded-full mt-2 overflow-hidden">
                    <div className="w-4/5 h-full bg-[#1677FF] rounded-full" />
                  </div>
                </div>

                <div className="bg-white p-3 rounded-lg border border-[#DCE7F5]">
                  <p className="text-[10px] uppercase font-bold text-[#52627A]">Automation</p>
                  <p className="text-sm font-extrabold text-[#071A3A] mt-1">AI Workflows</p>
                  <div className="w-full h-1.5 bg-[#EEF6FF] rounded-full mt-2 overflow-hidden">
                    <div className="w-3/5 h-full bg-[#2F8CFF] rounded-full" />
                  </div>
                </div>

                <div className="bg-white p-3 rounded-lg border border-[#DCE7F5]">
                  <p className="text-[10px] uppercase font-bold text-[#52627A]">Platform</p>
                  <p className="text-sm font-extrabold text-[#071A3A] mt-1">SaaS Architecture</p>
                  <div className="w-full h-1.5 bg-[#EEF6FF] rounded-full mt-2 overflow-hidden">
                    <div className="w-full h-full bg-[#071A3A] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Graphical Visual Bar Chart */}
              <div className="bg-white p-4 rounded-lg border border-[#DCE7F5] flex items-end justify-between h-28 space-x-2 pt-6">
                {[40, 65, 50, 85, 70, 95, 80, 100].map((height, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      style={{ height: `${height}%` }}
                      className={`w-full rounded-t-sm transition-all duration-500 ${
                        idx % 2 === 0 ? "bg-[#1677FF]" : "bg-[#2F8CFF]/60"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Phone Mockup (Side View) */}
          <div className="lg:col-span-4 relative flex justify-center">
            <div className="w-56 sm:w-64 rounded-3xl bg-[#071A3A] p-2.5 shadow-2xl border-4 border-[#0D2854] relative">
              {/* Speaker notch */}
              <div className="w-20 h-4 bg-[#071A3A] rounded-b-xl mx-auto absolute top-2 left-1/2 -translate-x-1/2 z-20" />
              
              {/* Phone Screen */}
              <div className="bg-white rounded-2xl overflow-hidden pt-6 pb-4 px-3 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#EEF6FF]">
                  <span className="text-xs font-extrabold text-[#071A3A]">5Zen Mobile</span>
                  <Smartphone className="w-4 h-4 text-[#1677FF]" />
                </div>
                <div className="bg-[#EEF6FF] p-3 rounded-xl space-y-1.5">
                  <div className="text-[10px] font-bold text-[#1677FF] uppercase">ExpenseMate App</div>
                  <div className="text-xs font-semibold text-[#071A3A]">Financial Tracker</div>
                  <div className="text-[10px] text-[#52627A]">Available on Play Store</div>
                </div>
                <div className="bg-[#F7FAFF] p-3 rounded-xl border border-[#DCE7F5] space-y-1">
                  <div className="text-[10px] font-bold text-[#071A3A]">MAVIO Transport</div>
                  <div className="text-[10px] text-emerald-600 font-semibold">● GPS Tracking Live</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Pill Badges around the Hero Visual (Matching user prompt & reference design) */}
        <div className="hidden sm:flex absolute top-6 right-6 z-20 items-center space-x-2 bg-white px-3.5 py-2 rounded-full border border-[#DCE7F5] shadow-md animate-float-slow">
          <Globe className="w-4 h-4 text-[#1677FF]" />
          <span className="text-xs font-bold text-[#071A3A]">Web Development</span>
        </div>

        <div className="hidden sm:flex absolute bottom-8 left-6 z-20 items-center space-x-2 bg-white px-3.5 py-2 rounded-full border border-[#DCE7F5] shadow-md animate-float-slow" style={{ animationDelay: "1.5s" }}>
          <Smartphone className="w-4 h-4 text-[#1677FF]" />
          <span className="text-xs font-bold text-[#071A3A]">Mobile Apps</span>
        </div>

        <div className="hidden sm:flex absolute top-20 left-8 z-20 items-center space-x-2 bg-white px-3.5 py-2 rounded-full border border-[#DCE7F5] shadow-md animate-float-slow" style={{ animationDelay: "2.5s" }}>
          <Bot className="w-4 h-4 text-[#1677FF]" />
          <span className="text-xs font-bold text-[#071A3A]">AI & Automation</span>
        </div>

        <div className="hidden sm:flex absolute bottom-12 right-12 z-20 items-center space-x-2 bg-white px-3.5 py-2 rounded-full border border-[#DCE7F5] shadow-md animate-float-slow" style={{ animationDelay: "3.5s" }}>
          <Layers className="w-4 h-4 text-[#1677FF]" />
          <span className="text-xs font-bold text-[#071A3A]">SaaS Solutions</span>
        </div>
      </div>
    </div>
  );
}
