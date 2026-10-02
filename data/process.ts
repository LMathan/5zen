export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    description: "Understand the business, users and technical requirements.",
    details: [
      "Initial project discussion & requirement gathering",
      "Analyzing target audience & business goals",
      "Identifying key functionality & system constraints"
    ]
  },
  {
    step: "02",
    title: "Plan",
    description: "Define the scope, technology and project roadmap.",
    details: [
      "Structuring project architecture & stack selection",
      "Defining deliverable milestones & timeline",
      "Transparent technical specification document"
    ]
  },
  {
    step: "03",
    title: "Design",
    description: "Create a clean and user-focused digital experience.",
    details: [
      "User interface (UI) mockups & design system",
      "User experience (UX) flows & interactive wireframes",
      "Client feedback iteration & visual approval"
    ]
  },
  {
    step: "04",
    title: "Develop",
    description: "Build, integrate and test the complete solution.",
    details: [
      "Frontend & backend code implementation",
      "Database setup & third-party API integration",
      "Cross-device testing & performance optimization"
    ]
  },
  {
    step: "05",
    title: "Launch & Support",
    description: "Deploy the product and provide continued support.",
    details: [
      "Production deployment & server configuration",
      "Post-launch monitoring & bug fixes",
      "Ongoing updates, maintenance & support"
    ]
  }
];
