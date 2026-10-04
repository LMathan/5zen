import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | 5Zen Technologies",
  description: "Privacy policy and data protection guidelines for 5Zen Technologies.",
  alternates: {
    canonical: "https://5zentech.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20 space-y-8">
      <div className="space-y-3 border-b border-[#EEF6FF] pb-6">
        <h1 className="text-3xl sm:text-4xl font-black text-[#071A3A]">Privacy Policy</h1>
        <p className="text-sm text-[#52627A]">Last updated: October 2026</p>
      </div>

      <div className="bg-white rounded-2xl border border-[#DCE7F5] p-8 shadow-soft space-y-6 text-sm text-[#52627A] leading-relaxed">
        <h2 className="text-lg font-bold text-[#071A3A]">1. Information Collection</h2>
        <p>
          5Zen Technologies collects information provided voluntarily when you submit project inquiries, contact forms, or communicate with us regarding software development services.
        </p>

        <h2 className="text-lg font-bold text-[#071A3A]">2. Use of Information</h2>
        <p>
          We use collected information solely to respond to project requests, deliver software services, maintain communication, and improve our website experience.
        </p>

        <h2 className="text-lg font-bold text-[#071A3A]">3. Data Protection</h2>
        <p>
          We implement standard technical and organizational security measures to safeguard client communication and project specifications.
        </p>

        <h2 className="text-lg font-bold text-[#071A3A]">4. Contact Us</h2>
        <p>
          If you have questions regarding our privacy practices, contact us at info@5zentech.com.
        </p>
      </div>
    </div>
  );
}
