export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  category: string;
  status: 'Available' | 'In Development' | 'Prototype';
  platformBadge: string;
  image: string;
  features: string[];
}

export const productsData: Product[] = [
  {
    id: "expense-mate",
    name: "ExpenseMate",
    subtitle: "Expense Management App",
    description: "Smart and easy expense tracking application designed for intuitive daily budget tracking, spending analysis, and clear financial summaries.",
    category: "Financial Technology",
    status: "Available",
    platformBadge: "Play Store",
    image: "/projects/expense-mate.png",
    features: [
      "Quick 2-step expense and income entry",
      "Category budgeting with monthly spending limits",
      "Interactive graphs and financial breakdown charts",
      "Exportable summary reports in CSV/PDF formats"
    ]
  },
  {
    id: "mavio",
    name: "MAVIO",
    subtitle: "College Bus Tracking",
    description: "Real-time bus tracking and route management platform created for university students, campus drivers, and transport administrators.",
    category: "Mobility & Logistics",
    status: "In Development",
    platformBadge: "Coming Soon",
    image: "/projects/mavio.png",
    features: [
      "Live GPS bus location map for students",
      "Estimated arrival times (ETA) per campus stop",
      "Driver management application & route toggle",
      "Admin alert dashboard for transport coordinators"
    ]
  },
  {
    id: "sightaid",
    name: "SightAid",
    subtitle: "Assistive Technology Project",
    description: "AI-powered assistance for visually impaired users designed to provide voice notifications and object assistance for daily independence.",
    category: "Assistive Tech",
    status: "In Development",
    platformBadge: "Prototype",
    image: "/projects/sightaid.png",
    features: [
      "Real-time object & barrier detection alerts",
      "Auditory feedback & voice navigation UI",
      "Lightweight smartphone & wearable integration"
    ]
  }
];
