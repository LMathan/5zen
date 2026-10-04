import React from "react";
import { companyInfo } from "@/data/company";
import { servicesData } from "@/data/services";

export default function JsonLd() {
  const baseUrl = "https://5zentech.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: companyInfo.name,
    alternateName: ["5Zen Tech", "5Zen", "5Zen Technologies India"],
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/Abt.png`,
    description: companyInfo.heroSubtext,
    email: companyInfo.contact.email,
    telephone: companyInfo.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
      description: "Tamil Nadu, India / Remote Worldwide",
    },
    geo: {
      "@type": "GeoCoordinates",
      addressCountry: "IN",
    },
    sameAs: [
      companyInfo.socials.linkedin,
      companyInfo.socials.github,
      companyInfo.socials.twitter,
      companyInfo.socials.instagram,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: companyInfo.contact.email,
        telephone: companyInfo.contact.phone,
        contactType: "customer service",
        availableLanguage: ["English", "Tamil"],
      },
    ],
    knowsAbout: [
      "Web Development",
      "Web Application Engineering",
      "Mobile Application Development",
      "Custom Software Development",
      "SaaS Development",
      "AI & Machine Learning Solutions",
      "Business Automation",
      "Cloud Infrastructure & API Integrations",
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "Python",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software & Technology Services",
      itemListElement: servicesData.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.fullDescription || service.shortDescription,
          url: `${baseUrl}/services#${service.id}`,
        },
        position: index + 1,
      })),
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#localbusiness`,
    name: companyInfo.name,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/Abt.png`,
    email: companyInfo.contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: companyInfo.name,
    description: companyInfo.heroSubtext,
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
