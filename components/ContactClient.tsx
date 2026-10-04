"use client";

import { useState, useEffect } from "react";
import { companyInfo } from "@/data/company";
import { Mail, MapPin, Clock, Send, CheckCircle2, Globe, Loader2, AlertCircle } from "lucide-react";

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

interface CurrencyOption {
  code: string;
  symbol: string;
  label: string;
  ranges: string[];
}

const currencyOptions: Record<string, CurrencyOption> = {
  INR: {
    code: "INR",
    symbol: "₹",
    label: "INR (₹)",
    ranges: [
      "< ₹50,000",
      "₹50,000 - ₹1,50,000",
      "₹1,50,000 - ₹3,00,000",
      "₹3,00,000 - ₹5,00,000",
      "₹5,00,000+"
    ]
  },
  USD: {
    code: "USD",
    symbol: "$",
    label: "USD ($)",
    ranges: [
      "< $2,500",
      "$2,500 - $5,000",
      "$5,000 - $10,000",
      "$10,000 - $25,000",
      "$25,000+"
    ]
  },
  EUR: {
    code: "EUR",
    symbol: "€",
    label: "EUR (€)",
    ranges: [
      "< €2,000",
      "€2,000 - €5,000",
      "€5,000 - €10,000",
      "€10,000 - €25,000",
      "€25,000+"
    ]
  },
  GBP: {
    code: "GBP",
    symbol: "£",
    label: "GBP (£)",
    ranges: [
      "< £2,000",
      "£2,000 - £4,000",
      "£4,000 - £8,000",
      "£8,000 - £20,000",
      "£20,000+"
    ]
  },
  AUD: {
    code: "AUD",
    symbol: "A$",
    label: "AUD (A$)",
    ranges: [
      "< A$3,500",
      "A$3,500 - A$7,000",
      "A$7,000 - A$15,000",
      "A$15,000 - A$35,000",
      "A$35,000+"
    ]
  },
  AED: {
    code: "AED",
    symbol: "AED",
    label: "AED",
    ranges: [
      "< AED 8,000",
      "AED 8,000 - AED 18,000",
      "AED 18,000 - AED 35,000",
      "AED 35,000 - AED 90,000",
      "AED 90,000+"
    ]
  }
};

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currency, setCurrency] = useState<string>("USD");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Website",
    budgetRange: "$2,500 - $5,000",
    message: ""
  });

  // Auto-detect visitor's region and currency
  useEffect(() => {
    const detectRegionCurrency = async () => {
      let detected = "USD";

      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
        const lang = typeof navigator !== "undefined" ? navigator.language || "" : "";

        if (tz.includes("Kolkata") || tz.includes("Calcutta") || lang.endsWith("-IN")) {
          detected = "INR";
        } else if (tz.includes("London") || lang.endsWith("-GB")) {
          detected = "GBP";
        } else if (
          tz.includes("Berlin") ||
          tz.includes("Paris") ||
          tz.includes("Rome") ||
          tz.includes("Madrid") ||
          tz.includes("Amsterdam")
        ) {
          detected = "EUR";
        } else if (tz.includes("Sydney") || tz.includes("Melbourne") || lang.endsWith("-AU")) {
          detected = "AUD";
        } else if (tz.includes("Dubai")) {
          detected = "AED";
        } else if (tz.includes("America/")) {
          detected = "USD";
        }
      } catch {
        // Ignore fallback
      }

      setCurrency(detected);
      const initialRanges = currencyOptions[detected]?.ranges || currencyOptions.USD.ranges;
      setFormData((prev) => ({ ...prev, budgetRange: initialRanges[1] || initialRanges[0] }));

      try {
        const res = await fetch("https://ipapi.co/json/", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          const country = data.country_code;

          let ipDetected = detected;
          if (country === "IN") ipDetected = "INR";
          else if (country === "US") ipDetected = "USD";
          else if (country === "GB") ipDetected = "GBP";
          else if (country === "AU") ipDetected = "AUD";
          else if (country === "AE") ipDetected = "AED";
          else if (
            ["DE", "FR", "ES", "IT", "NL", "BE", "AT", "IE", "FI", "PT", "GR"].includes(country)
          ) {
            ipDetected = "EUR";
          }

          if (ipDetected !== detected) {
            setCurrency(ipDetected);
            const ranges = currencyOptions[ipDetected]?.ranges || currencyOptions.USD.ranges;
            setFormData((prev) => ({ ...prev, budgetRange: ranges[1] || ranges[0] }));
          }
        }
      } catch {
        // Silence API errors to rely on timezone detection
      }
    };

    detectRegionCurrency();
  }, []);

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
    const ranges = currencyOptions[newCurrency]?.ranges || currencyOptions.USD.ranges;
    setFormData((prev) => ({ ...prev, budgetRange: ranges[1] || ranges[0] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          currency
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit enquiry. Please try again.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentRanges = currencyOptions[currency]?.ranges || currencyOptions.USD.ranges;

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
                  Thank you for contacting 5Zen Technologies. Our team has received your details and will get back to you shortly.
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

                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

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

                {/* Budget Range with Region & Currency Selector */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-[#071A3A] uppercase tracking-wider">
                      Estimated Budget (Optional)
                    </label>
                    <div className="flex items-center space-x-1.5 text-xs text-[#52627A]">
                      <Globe className="w-3.5 h-3.5 text-[#1677FF]" />
                      <span className="font-semibold">Currency:</span>
                      <select
                        value={currency}
                        onChange={(e) => handleCurrencyChange(e.target.value)}
                        className="text-xs font-bold text-[#071A3A] bg-[#EEF6FF] border border-[#DCE7F5] rounded-lg px-2 py-1 focus:outline-none focus:border-[#1677FF]"
                      >
                        {Object.keys(currencyOptions).map((cKey) => (
                          <option key={cKey} value={cKey}>
                            {currencyOptions[cKey].label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#DCE7F5] focus:outline-none focus:border-[#1677FF] focus:ring-2 focus:ring-[#EEF6FF] text-sm text-[#071A3A] bg-white"
                  >
                    {currentRanges.map((b, idx) => (
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
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-[#1677FF] hover:bg-[#0D2854] shadow-md transition-all group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending Enquiry...
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
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
