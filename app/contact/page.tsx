"use client";

import { useState } from "react";
import { companyInfo } from "@/data/company";
import SectionHeading from "@/components/SectionHeading";
import { Mail, MapPin, Clock, Send, CheckCircle2, ArrowRight } from "lucide-react";

const projectTypes = [
  "Website",
  "Web Application",
  "Mobile Application",
  "Custom Software",
  "SaaS Platform",
  "AI & Automation",
  "Digital Marketing",
  "Other"
];

const budgetRanges = [
  "< $2,500",
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+"
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Website",
    budgetRange: "$2,500 - $5,000",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-12 lg:space-y-16 py-8 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EEF6FF] text-[#1677FF] border border-[#DCE7F5]">
          GET IN TOUCH
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#071A3A] tracking-tight leading-tight">
          Let&apos;s Build Something Together
        </h1>
        <p className="text-lg text-[#52627A] max-w-2xl mx-auto leading-relaxed">
          Tell us about your project, requirements or business challenge. We typically respond within 24 hours.
        </p>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#DCE7F5] p-8 sm:p-10 shadow-card">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#071A3A]">Enquiry Received!</h3>
                <p className="text-sm text-[#52627A] max-w-md mx-auto leading-relaxed">
                  Thank you for contacting 5Zen Technologies. Our team will review your requirements and get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold text-[#1677FF] bg-[#EEF6FF] hover:bg-[#DCE7F5] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-extrabold text-[#071A3A] pb-2 border-b border-[#EEF6FF]">
                  Project Inquiry
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#071A3A] uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DCE7F5] focus:outline-none focus:border-[#1677FF] focus:ring-2 focus:ring-[#EEF6FF] text-sm text-[#071A3A]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#071A3A] uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DCE7F5] focus:outline-none focus:border-[#1677FF] focus:ring-2 focus:ring-[#EEF6FF] text-sm text-[#071A3A]"
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#071A3A] uppercase tracking-wider">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#DCE7F5] focus:outline-none focus:border-[#1677FF] focus:ring-2 focus:ring-[#EEF6FF] text-sm text-[#071A3A]"
                  />
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#071A3A] uppercase tracking-wider">
                    Project Type *
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#DCE7F5] focus:outline-none focus:border-[#1677FF] focus:ring-2 focus:ring-[#EEF6FF] text-sm text-[#071A3A] bg-white"
                  >
                    {projectTypes.map((pt, idx) => (
                      <option key={idx} value={pt}>
                        {pt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget Range */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#071A3A] uppercase tracking-wider">
                    Estimated Budget (Optional)
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#DCE7F5] focus:outline-none focus:border-[#1677FF] focus:ring-2 focus:ring-[#EEF6FF] text-sm text-[#071A3A] bg-white"
                  >
                    {budgetRanges.map((b, idx) => (
                      <option key={idx} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#071A3A] uppercase tracking-wider">
                    Project Details & Requirements *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Describe your project goals, key features, target audience or technical questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#DCE7F5] focus:outline-none focus:border-[#1677FF] focus:ring-2 focus:ring-[#EEF6FF] text-sm text-[#071A3A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-[#1677FF] hover:bg-[#0D2854] shadow-md transition-all group"
                >
                  Send Enquiry
                  <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Details Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#071A3A] text-white rounded-2xl p-8 shadow-card space-y-6">
              <h3 className="text-2xl font-extrabold text-white">Direct Communication</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Whether you need a full web application built from scratch or guidance on tech architecture, we are ready to assist.
              </p>

              <div className="space-y-5 pt-4 text-sm border-t border-[#0D2854]">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0D2854] text-[#2F8CFF] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#2F8CFF]">Email Us</h4>
                    <p className="text-sm text-white font-medium mt-0.5">{companyInfo.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0D2854] text-[#2F8CFF] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#2F8CFF]">Location</h4>
                    <p className="text-sm text-white font-medium mt-0.5">{companyInfo.contact.location}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0D2854] text-[#2F8CFF] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#2F8CFF]">Working Hours</h4>
                    <p className="text-sm text-white font-medium mt-0.5">{companyInfo.contact.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#DCE7F5] p-6 shadow-soft space-y-3">
              <h4 className="text-base font-bold text-[#071A3A]">Why Work With 5Zen?</h4>
              <ul className="space-y-2 text-xs text-[#52627A]">
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] mr-2" />
                  Direct developer consultation
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] mr-2" />
                  Clear roadmap & deliverable milestones
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] mr-2" />
                  Clean, production-ready code base
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
