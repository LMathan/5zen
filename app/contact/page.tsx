import { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | 5Zen Technologies",
  description:
    "Contact 5Zen Technologies to discuss your software project, website, mobile application, SaaS platform, or AI automation needs. Email us at info@5zentech.com.",
  alternates: {
    canonical: "https://5zentech.com/contact",
  },
  openGraph: {
    title: "Contact Us | 5Zen Technologies",
    description:
      "Tell us about your project, requirements or business challenge. Contact 5Zen Technologies at info@5zentech.com.",
    url: "https://5zentech.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
