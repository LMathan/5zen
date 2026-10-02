export interface Service {
  id: string;
  title: string;
  slug: string;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  capabilities: string[];
  useCases: string[];
  visualTag: string;
  image?: string;
}

export const servicesData: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    slug: "web-development",
    iconName: "Globe",
    shortDescription: "Modern, responsive websites and web applications designed around your business goals and user needs.",
    fullDescription: "We build modern, high-performance websites and web applications using cutting-edge technologies like Next.js, React, and TypeScript. Our focus is delivering fast loading speeds, exceptional mobile responsiveness, clean accessibility, and intuitive user experiences.",
    image: "/service/Web Development Glassmorphism Hero Card.png",
    capabilities: [
      "Custom Business Websites",
      "Progressive Web Applications (PWA)",
      "E-commerce & Portal Solutions",
      "CMS & Content Platforms",
      "Performance & SEO Optimization"
    ],
    useCases: [
      "Corporate brand websites",
      "Customer portals and dashboards",
      "High-conversion landing pages",
      "E-commerce storefronts"
    ],
    visualTag: "Web Development"
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    iconName: "Smartphone",
    shortDescription: "Android and iOS applications designed for practical, intuitive user experiences and daily business operations.",
    fullDescription: "We design and develop cross-platform and native mobile applications tailored for real-world business requirements. Our mobile solutions combine fluid navigation, offline sync capability, secure authentication, and sleek interface design.",
    image: "/service/Mobile App Development Showcase.png",
    capabilities: [
      "Cross-Platform iOS & Android Apps",
      "Native App Development",
      "UI/UX Mobile Design Systems",
      "App Store & Play Store Deployment",
      "Push Notifications & API Integration"
    ],
    useCases: [
      "Service booking apps",
      "Customer loyalty & account apps",
      "Field employee management tools",
      "Real-time tracking platforms"
    ],
    visualTag: "Mobile Apps"
  },
  {
    id: "custom-software",
    title: "Custom Software",
    slug: "custom-software",
    iconName: "Code2",
    shortDescription: "Business-specific software designed around workflows, requirements and operational efficiency.",
    fullDescription: "Every business has unique operational needs. We engineer bespoke software systems that automate manual tasks, centralize data management, and streamline team workflows without unnecessary complexity.",
    image: "/service/Custom Software Tech Showcase.png",
    capabilities: [
      "Custom Business Dashboards",
      "Workflow & ERP Systems",
      "Database & Inventory Tools",
      "API Integrations & Backend Systems",
      "Legacy Code Modernization"
    ],
    useCases: [
      "Internal team management portals",
      "Inventory & order tracking systems",
      "Automated reporting tools",
      "Client management CRMs"
    ],
    visualTag: "Custom Software"
  },
  {
    id: "saas-development",
    title: "SaaS Development",
    slug: "saas-development",
    iconName: "Layers",
    shortDescription: "Scalable platforms for growing businesses and cloud-based software applications.",
    fullDescription: "From multi-tenant architecture to subscription billing and administrative control panels, we design and launch cloud-based Software as a Service platforms built to scale reliably as user adoption expands.",
    image: "/service/SaaS Development Dashboard Showcase.png",
    capabilities: [
      "Multi-tenant SaaS Architecture",
      "Subscription & Billing Gateway Integration",
      "Role-Based Access Control (RBAC)",
      "User Onboarding & Dashboard UI",
      "API & Webhook Infrastructure"
    ],
    useCases: [
      "B2B productivity tools",
      "Industry-specific management platforms",
      "Analytics & metrics dashboards",
      "Subscription membership web apps"
    ],
    visualTag: "SaaS Solutions"
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    slug: "ai-automation",
    iconName: "Bot",
    shortDescription: "AI-powered tools and workflow automation designed to reduce repetitive work and improve experiences.",
    fullDescription: "We integrate practical AI capabilities and automated workflow pipelines into business applications—helping teams save hours of manual data entry, enhance customer support, and extract meaningful insights.",
    image: "/service/AI & Automation Workflow Hero.png",
    capabilities: [
      "AI Assistant & Chatbot Integration",
      "Workflow & Document Automation",
      "Custom Data Processing Pipelines",
      "Intelligent Search & Categorization",
      "API Integration with LLMs & ML Models"
    ],
    useCases: [
      "Automated customer inquiry routing",
      "Document data extraction",
      "Smart email notifications",
      "AI-assisted content generation tools"
    ],
    visualTag: "AI & Automation"
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    iconName: "Cloud",
    shortDescription: "Deployment, infrastructure setup and cloud-based applications tailored for performance.",
    fullDescription: "We help companies deploy, host, and manage digital products in secure cloud environments with high availability, automated backups, and scalable infrastructure setup.",
    image: "/service/Futuristic Cloud Solutions Dashboard.png",
    capabilities: [
      "Cloud Infrastructure Setup (AWS / Vercel / GCP)",
      "Database Management & Backup Systems",
      "CI/CD Pipeline Configuration",
      "Server Monitoring & Performance Tuning",
      "SSL, Security & Domain Management"
    ],
    useCases: [
      "Application hosting & migration",
      "Database scaling & optimization",
      "Continuous deployment pipelines",
      "High-availability web systems"
    ],
    visualTag: "Cloud Solutions"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    slug: "digital-marketing",
    iconName: "TrendingUp",
    shortDescription: "Digital presence and growth solutions aligned with business goals.",
    fullDescription: "We provide technical SEO, digital strategy, brand identity implementation, and web analytics setups that help your business establish a strong online presence and reach your target audience effectively.",
    image: "/service/Digital Marketing Dashboard Growth.png",
    capabilities: [
      "Technical SEO & On-Page Optimization",
      "Google Analytics & Event Tracking",
      "Conversion Rate Optimization (CRO)",
      "Digital Brand Consistency",
      "Content Strategy & Landing Page Design"
    ],
    useCases: [
      "Organic search visibility improvement",
      "Product launch campaigns",
      "User behavior analysis & funnel optimization"
    ],
    visualTag: "Digital Growth"
  }
];
