export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  category: string;
  status: 'Available' | 'In Development' | 'Prototype';
  platformBadge: string;
  image: string;
  playStoreUrl?: string;
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
    image: "/projects/ExpenseMate App Showcase.webp",
    playStoreUrl: "https://play.google.com/store/apps/details?id=app.skillforge.expensemate",
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
    status: "Available",
    platformBadge: "Play Store",
    image: "/projects/MAVIO Smart College Transport Dashboard.webp",
    playStoreUrl: "https://play.google.com/store/apps/details?id=app.skillforge.mavio",
    features: [
      "Live GPS bus location map for students",
      "Estimated arrival times (ETA) per campus stop",
      "Driver management application & route toggle",
      "Admin alert dashboard for transport coordinators"
    ]
  }
];
