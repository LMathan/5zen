"use client";

import {
  Globe,
  Smartphone,
  LayoutDashboard,
  Layers,
  Bot,
  Cloud,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Cpu,
  BarChart3,
  TrendingUp,
  Sparkles,
  Search,
  Lock,
  MessageSquare,
  Server,
  ArrowUpRight,
} from "lucide-react";

interface VisualPreviewProps {
  slug: string;
}

export default function ServiceVisualPreview({ slug }: VisualPreviewProps) {
  switch (slug) {
    case "web-development":
      return (
        <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] bg-gradient-to-br from-[#071A3A] to-[#0D2854] rounded-2xl p-4 sm:p-6 text-white overflow-hidden shadow-xl border border-[#1677FF]/30 flex flex-col justify-between">
          {/* Browser Header Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
              <div className="ml-2 px-3 py-1 rounded-md bg-white/10 text-[11px] font-mono text-gray-300 flex items-center space-x-1">
                <Lock className="w-3 h-3 text-emerald-400 mr-1" />
                <span>5zentech.com/web</span>
              </div>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#1677FF] text-white">
              ⚡ 99.9% Speed
            </span>
          </div>

          {/* Web Mockup Body */}
          <div className="my-4 space-y-3">
            <div className="h-6 w-3/4 bg-gradient-to-r from-[#1677FF] to-[#2F8CFF] rounded-md animate-pulse" />
            <div className="h-3 w-1/2 bg-white/20 rounded" />
            
            <div className="grid grid-cols-3 gap-2 pt-3">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center">
                <span className="block text-xs font-bold text-[#2F8CFF]">Responsive</span>
                <span className="text-[10px] text-gray-400">Mobile & Desktop</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center">
                <span className="block text-xs font-bold text-emerald-400">SEO Ready</span>
                <span className="text-[10px] text-gray-400">Top Rankings</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center">
                <span className="block text-xs font-bold text-amber-400">Next.js 16</span>
                <span className="text-[10px] text-gray-400">App Router</span>
              </div>
            </div>
          </div>

          {/* Bottom Live Indicator */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-300">
            <span className="flex items-center">
              <Sparkles className="w-3.5 h-3.5 text-[#2F8CFF] mr-1.5" />
              High Conversion Layout
            </span>
            <span className="text-emerald-400 font-bold">Live Preview</span>
          </div>
        </div>
      );

    case "mobile-app-development":
      return (
        <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] bg-gradient-to-br from-[#1677FF] via-[#0D2854] to-[#071A3A] rounded-2xl p-5 text-white overflow-hidden shadow-xl border border-[#2F8CFF]/40 flex items-center justify-center">
          {/* Mobile Phone Device Frame */}
          <div className="w-[180px] sm:w-[210px] bg-[#071A3A] rounded-[28px] border-4 border-[#2F8CFF]/60 shadow-2xl p-3 space-y-3 text-white">
            {/* Camera notch */}
            <div className="w-12 h-2 bg-white/20 rounded-full mx-auto" />
            
            <div className="flex items-center justify-between text-[10px] text-gray-300">
              <span className="font-bold">5Zen Mobile App</span>
              <span className="text-emerald-400">60 FPS</span>
            </div>

            {/* App Card */}
            <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#1677FF] to-[#2F8CFF] space-y-1">
              <div className="text-[11px] font-extrabold">iOS & Android Native</div>
              <div className="text-[9px] text-blue-100">Cross-Platform Sync</div>
            </div>

            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between text-[9px] p-2 rounded-lg bg-white/5 border border-white/10">
                <span>Push Notifications</span>
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              </div>
              <div className="flex items-center justify-between text-[9px] p-2 rounded-lg bg-white/5 border border-white/10">
                <span>Offline Data Storage</span>
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              </div>
            </div>

            {/* Bottom Nav Bar */}
            <div className="flex justify-around pt-1 text-[10px] text-gray-400">
              <span className="text-[#2F8CFF] font-bold">Home</span>
              <span>Services</span>
              <span>Account</span>
            </div>
          </div>
        </div>
      );

    case "custom-software":
      return (
        <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] bg-gradient-to-br from-[#040D1E] via-[#071A3A] to-[#0D2854] rounded-2xl p-5 text-white overflow-hidden shadow-xl border border-[#1677FF]/30 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <LayoutDashboard className="w-4 h-4 text-[#2F8CFF]" />
              <span className="text-xs font-bold text-white">Enterprise Software Portal</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Active CRM/ERP
            </span>
          </div>

          <div className="space-y-2.5 my-2">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div>
                <span className="block text-xs font-bold text-white">Internal Team Workflows</span>
                <span className="text-[10px] text-gray-400">Automated task assignment & billing</span>
              </div>
              <Zap className="w-4 h-4 text-amber-400" />
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div>
                <span className="block text-xs font-bold text-white">Inventory & Order Tracking</span>
                <span className="text-[10px] text-gray-400">Real-time database sync</span>
              </div>
              <BarChart3 className="w-4 h-4 text-[#2F8CFF]" />
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-300">
            <span>Security: 256-Bit Encrypted</span>
            <span className="text-[#2F8CFF] font-bold">100% Tailored</span>
          </div>
        </div>
      );

    case "saas-development":
      return (
        <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] bg-gradient-to-br from-[#0D2854] via-[#1677FF] to-[#071A3A] rounded-2xl p-5 text-white overflow-hidden shadow-xl border border-white/20 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-white/15">
            <div className="flex items-center space-x-2">
              <Layers className="w-4 h-4 text-white" />
              <span className="text-xs font-extrabold text-white">SaaS Multi-Tenant Engine</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white">
              Stripe Ready
            </span>
          </div>

          <div className="my-3 space-y-3">
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
              <div className="flex justify-between items-center text-xs font-bold mb-1">
                <span>Monthly Recurring Revenue</span>
                <span className="text-emerald-300">+34% MRR Growth</span>
              </div>
              <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-emerald-400 rounded-full" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded-lg bg-white/10 border border-white/15 text-center">
                <span className="block font-bold">Role-Based Access</span>
                <span className="text-[9px] text-blue-100">RBAC Security</span>
              </div>
              <div className="p-2 rounded-lg bg-white/10 border border-white/15 text-center">
                <span className="block font-bold">API & Webhooks</span>
                <span className="text-[9px] text-blue-100">Instant Sync</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[11px] text-blue-100">
            <span>Architecture: Cloud Scalable</span>
            <span className="font-bold text-white">99.99% Uptime</span>
          </div>
        </div>
      );

    case "ai-automation":
      return (
        <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] bg-gradient-to-br from-[#071A3A] via-[#0D2854] to-[#1677FF] rounded-2xl p-5 text-white overflow-hidden shadow-xl border border-[#2F8CFF]/40 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <Bot className="w-4 h-4 text-[#2F8CFF]" />
              <span className="text-xs font-bold text-white">AI Agent & LLM Pipeline</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#2F8CFF]/20 text-[#2F8CFF] border border-[#2F8CFF]/40">
              Automated 85%
            </span>
          </div>

          <div className="space-y-2 my-2">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex items-center justify-between text-xs font-bold text-[#2F8CFF]">
                <span className="flex items-center">
                  <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                  AI Support Assistant
                </span>
                <span className="text-[10px] text-emerald-400">Instant Reply</span>
              </div>
              <p className="text-[10px] text-gray-300">
                "Extracted customer data and auto-generated response in 0.4s."
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
              <span className="text-gray-200">Document PDF Processing</span>
              <span className="text-emerald-400 font-bold">Auto-Parsed</span>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-300">
            <span>LLM: OpenAI / Custom Model</span>
            <span className="text-[#2F8CFF] font-bold">24/7 Automation</span>
          </div>
        </div>
      );

    case "cloud-solutions":
      return (
        <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] bg-gradient-to-br from-[#040D1E] to-[#071A3A] rounded-2xl p-5 text-white overflow-hidden shadow-xl border border-[#1677FF]/30 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <Cloud className="w-4 h-4 text-[#2F8CFF]" />
              <span className="text-xs font-bold text-white">Global Edge Cloud</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-400/20 text-emerald-400">
              AWS & Vercel
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 my-3">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <Server className="w-4 h-4 text-[#2F8CFF]" />
              <div className="text-xs font-bold text-white">CI/CD Deploy</div>
              <div className="text-[10px] text-gray-400">Auto-build on Git push</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <div className="text-xs font-bold text-white">SSL & Backup</div>
              <div className="text-[10px] text-gray-400">Automated daily snapshots</div>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-300">
            <span>Latency: &lt;15ms Global Edge</span>
            <span className="text-emerald-400 font-bold">High Availability</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="relative w-full h-full min-h-[260px] bg-[#071A3A] rounded-2xl p-6 text-white flex items-center justify-center">
          <Globe className="w-16 h-16 text-[#1677FF]" />
        </div>
      );
  }
}
