export interface Project {
  id: string;
  name: string;
  slug: string;
  category: 'Websites' | 'Web Apps' | 'Mobile Apps' | 'SaaS' | 'Other';
  shortDescription: string;
  description: string;
  thumbnail: string;
  heroImage?: string;
  gallery: string[];
  technologies: string[];
  projectType: string;
  client?: string;
  duration?: string;
  liveUrl?: string;
  features: string[];
  challenge?: string;
  solution?: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "bali-droom-villas",
    name: "Bali Droom Villas",
    slug: "bali-droom-villas",
    category: "Websites",
    shortDescription: "Luxury villa resort booking website redevelopment featuring modern design and intuitive reservation UI.",
    description: "We redesigned and rebuilt the official website for Bali Droom Villas with a modern, luxurious, and user-friendly interface. The new website improves user experience, highlights their premium villas, and helps increase direct booking inquiries.",
    thumbnail: "/projects/Bali-web.webp",
    heroImage: "/projects/Bali-web.webp",
    gallery: [
      "/projects/Bali-web.webp"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    projectType: "Website Redevelopment",
    client: "Bali Droom Villas",
    duration: "2 Months",
    features: [
      "Modern and premium UI/UX design",
      "Fully responsive layout for all devices",
      "Multi-language support ready",
      "Room booking integration & inquiry flow",
      "SEO optimization for resort search visibility",
      "Improved load performance and accessibility"
    ],
    challenge: "The previous website had outdated visual design, slow loading speeds on mobile devices, and lacked clear call-to-action paths for direct villa booking inquiries.",
    solution: "5Zen Technologies built a high-performance Next.js website with high-definition gallery layouts, direct booking buttons, and responsive design optimized for international travellers.",
    featured: true
  },
  {
    id: "gen-b-bike-care",
    name: "GEN B BIKE CARE",
    slug: "gen-b-bike-care",
    category: "Websites",
    shortDescription: "Interactive web platform for two-wheeler service center, packages showcase, and customer booking.",
    description: "A complete website development project for GEN B BIKE CARE, allowing bike owners to explore service packages, schedule appointments, and locate nearby branch facilities.",
    thumbnail: "/projects/Gen B Bike Care Mockup.webp",
    heroImage: "/projects/Gen B Bike Care Mockup.webp",
    gallery: [
      "/projects/Gen B Bike Care Mockup.webp"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS"],
    projectType: "Website Development",
    client: "GEN B BIKE CARE",
    duration: "1.5 Months",
    features: [
      "Service package comparison matrix",
      "Online appointment scheduling form",
      "Branch locator & map integration",
      "Mobile-optimized interface for quick booking",
      "Customer reviews & service gallery"
    ],
    challenge: "Managing phone-based service bookings led to scheduling conflicts and missed appointments for bike servicing.",
    solution: "We designed an intuitive web portal where customers can choose bike service plans, select time slots, and receive instant booking confirmations.",
    featured: true
  },
  {
    id: "expense-mate",
    name: "ExpenseMate",
    slug: "expense-mate",
    category: "Web Apps",
    shortDescription: "Smart expense management app built to simplify daily financial tracking and budget control.",
    description: "ExpenseMate is a modern financial tracking application created to help individuals and small teams track daily expenses, set budget limits, and gain clear visual insights into spending habits.",
    thumbnail: "/projects/ExpenseMate App Showcase.webp",
    heroImage: "/projects/ExpenseMate App Showcase.webp",
    gallery: [
      "/projects/ExpenseMate App Showcase.webp"
    ],
    technologies: ["React Native", "Next.js", "TypeScript", "PostgreSQL"],
    projectType: "Web & Mobile Application",
    duration: "3 Months",
    features: [
      "Instant expense & income logging",
      "Category budget caps with smart notifications",
      "Visual chart analytics & monthly trends",
      "Export reports in PDF and CSV formats",
      "Secure encrypted storage & cloud sync"
    ],
    challenge: "Existing expense apps were either overly complex for daily use or lacked clean cloud syncing capabilities across web and mobile.",
    solution: "5Zen engineered a streamlined cross-platform app prioritizing instant 2-tap entry, clear charts, and real-time category balance tracking.",
    featured: true
  },
  {
    id: "mavio",
    name: "MAVIO",
    slug: "mavio",
    category: "Web Apps",
    shortDescription: "Real-time college transportation and bus tracking platform for students and administration.",
    description: "MAVIO is a specialized web and mobile platform designed for educational institutions to provide real-time bus tracking, route schedules, and driver coordination.",
    thumbnail: "/projects/MAVIO Smart College Transport Dashboard.webp",
    heroImage: "/projects/MAVIO Smart College Transport Dashboard.webp",
    gallery: [
      "/projects/MAVIO Smart College Transport Dashboard.webp"
    ],
    technologies: ["React", "Node.js", "WebSockets", "Google Maps API"],
    projectType: "Web & Mobile Application",
    duration: "3 Months",
    features: [
      "Live GPS bus route tracking",
      "Accurate ETA calculations per stop",
      "Driver application with trip toggle",
      "Admin control portal for route assignment",
      "Emergency broadcast notifications"
    ],
    challenge: "Students frequently missed campus transport due to lack of real-time visibility into bus locations and delays.",
    solution: "5Zen built a WebSocket-powered live tracking dashboard allowing students to monitor exact vehicle positions on interactive map interfaces.",
    featured: true
  },
  {
    id: "restaurant-website",
    name: "Restaurant Website",
    slug: "restaurant-website",
    category: "Websites",
    shortDescription: "Digital menu and table reservation web application for fine dining experience.",
    description: "A custom designed restaurant website with interactive visual menu, table reservation system, and location showcase.",
    thumbnail: "/projects/SpiceHaven Restaurant Website Mockup.webp",
    heroImage: "/projects/SpiceHaven Restaurant Website Mockup.webp",
    gallery: ["/projects/SpiceHaven Restaurant Website Mockup.webp"],
    technologies: ["Next.js", "Tailwind CSS"],
    projectType: "Website Development",
    features: [
      "Interactive menu with category filters",
      "Table reservation request system",
      "High-res food photography gallery",
      "Integrated location map & opening hours"
    ],
    featured: true
  },
  {
    id: "ecommerce-website",
    name: "E-commerce Website",
    slug: "ecommerce-website",
    category: "Web Apps",
    shortDescription: "High-performance online store web application with fast catalog filtering and checkout.",
    description: "Custom built e-commerce web platform engineered for smooth product browsing, cart management, and seamless checkout experience.",
    thumbnail: "/projects/Organic E-Commerce Showcase Mockup.webp",
    heroImage: "/projects/Organic E-Commerce Showcase Mockup.webp",
    gallery: ["/projects/Organic E-Commerce Showcase Mockup.webp"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    projectType: "Web Application",
    liveUrl: "https://organic-product-azure.vercel.app/",
    features: [
      "Dynamic product search & category filters",
      "Fast add-to-cart state management",
      "Mobile-friendly checkout workflow",
      "Order status overview"
    ],
    featured: true
  }
];
