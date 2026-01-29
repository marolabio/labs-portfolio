export type ProjectFeature = {
  title: string;
  description: string;
  /**
   * Path under /public (e.g. "/projects/prime/dashboard.png")
   * Leave undefined if you haven't added screenshots yet.
   */
  image?: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  /**
   * High-level category used for grouping projects on the Selected Projects
   * section.
   */
  category: "freelance" | "enterprise" | "automation";
  tags: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
  coverImage?: string;
  features: ProjectFeature[];
  techStack: string[];
  businessChallenge?: {
    clientNeed: string;
    goal: string;
  };
};

export const projects: Project[] = [
  {
    slug: "prime-philippines-davao",
    title: "Prime Philippines Davao",
    summary:
      "A high-performance real estate platform that showcases luxury properties and captures potential leads. Features include advanced filtering, interactive maps, and a custom CMS.",
    year: "2024",
    category: "freelance",
    tags: ["Next.js", "React", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "#",
    caseStudyUrl: "#",
    coverImage: undefined,
    features: [
      {
        title: "Property Listings Dashboard",
        description:
          "Real-time property management with advanced filtering, search capabilities, and beautiful property cards that convert visitors into leads.",
        image: undefined,
      },
      {
        title: "Interactive Map Search",
        description:
          "Map-based browsing that helps users quickly discover listings by location with smooth UX and fast performance.",
        image: undefined,
      },
      {
        title: "Custom CMS",
        description:
          "A tailored content management flow for agents and admins to publish listings, manage images, and track inquiries.",
        image: undefined,
      },
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "TypeScript"],
    businessChallenge: {
      clientNeed:
        "The client needed a robust solution to automate their lead generation and property management workflow. The existing manual process was slow, error‑prone, and failed to convert high‑intent visitors.",
      goal: "Build an automated ecosystem that handles data validation, real‑time filtering, and seamless CRM integration—allowing the team to focus on closing deals rather than data entry.",
    },
  },
  {
    slug: "river-village-resort",
    title: "River Village Resort",
    summary:
      "A warm and inviting resort website showcasing dining, accommodations, and tourist activities in Bolinao, Pangasinan.",
    year: "2023",
    category: "freelance",
    tags: ["React", "Tailwind CSS", "Google Reviews API", "Vercel"],
    liveUrl: "#",
    caseStudyUrl: "#",
    coverImage: undefined,
    features: [
      {
        title: "Booking-focused Landing",
        description:
          "A conversion-optimized homepage with clear CTAs and fast navigation for mobile guests.",
        image: undefined,
      },
      {
        title: "Photo Galleries",
        description:
          "High-quality galleries that load quickly and present accommodations beautifully.",
        image: undefined,
      },
    ],
    techStack: ["React", "Tailwind CSS", "TypeScript"],
  },
  {
    slug: "reports-feedback-dashboard",
    title: "Reports & Feedback Dashboard",
    summary:
      "Single-page internal web app to visualize key metrics, capture feedback from teams, and streamline reporting for stakeholders.",
    year: "2022",
    category: "enterprise",
    tags: ["React", "TypeScript", "Chart.js", "REST API"],
    liveUrl: "#",
    caseStudyUrl: "#",
    coverImage: undefined,
    features: [
      {
        title: "KPI Analytics",
        description:
          "Clear charts and breakdowns for decision making with accurate, real-time data.",
        image: undefined,
      },
    ],
    techStack: ["React", "TypeScript", "REST API"],
  },
  {
    slug: "order-status-dashboard",
    title: "Order Status Dashboard",
    summary:
      "Single-page web app for operations teams to track order statuses in real time, identify bottlenecks, and keep customers informed.",
    year: "2022",
    category: "enterprise",
    tags: ["React", "TypeScript", "REST API", "Data Grid"],
    liveUrl: "#",
    caseStudyUrl: "#",
    coverImage: undefined,
    features: [
      {
        title: "Real-time Inventory & Order Sync",
        description:
          "Live syncing with backend systems so teams always see up‑to‑date order, shipping, and inventory data.",
        image: undefined,
      },
      {
        title: "Operations-focused Views",
        description:
          "Role-based views that surface the most important information for customer support and warehouse teams.",
        image: undefined,
      },
    ],
    techStack: ["React", "TypeScript", "REST API"],
  },
  {
    slug: "dynamic-faq-system",
    title: "Dynamic FAQ System",
    summary:
      "Configurable single-page FAQ web app that helps support teams manage content and reduce repetitive inquiries.",
    year: "2021",
    category: "enterprise",
    tags: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    caseStudyUrl: "#",
    coverImage: undefined,
    features: [
      {
        title: "CMS-like FAQ Management",
        description:
          "A simple interface for non-technical staff to add, reorder, and archive FAQ entries without touching code.",
        image: undefined,
      },
      {
        title: "Search & Filtering",
        description:
          "Fast search and categorization to help customers find answers quickly and reduce support tickets.",
        image: undefined,
      },
    ],
    techStack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    slug: "bangus-order-auto-compute",
    title: "Bangus Order Auto Compute",
    summary:
      "Automation web app that calculates bangus orders, costs, and margins for a seafood business in just a few clicks.",
    year: "2023",
    category: "automation",
    tags: ["Next.js", "TypeScript", "Automation"],
    liveUrl: "#",
    caseStudyUrl: "#",
    coverImage: undefined,
    features: [
      {
        title: "Automated Order Calculations",
        description:
          "Instantly computes quantities, pricing, and totals based on incoming orders, reducing manual spreadsheet work.",
        image: undefined,
      },
      {
        title: "Error-free Summaries",
        description:
          "Removes manual calculator mistakes so owners can trust the daily numbers.",
        image: undefined,
      },
    ],
    techStack: ["Next.js", "TypeScript"],
  },
  {
    slug: "payroll-with-tip-segregation",
    title: "Payroll System with Tip Segregation",
    summary:
      "Mini payroll web app that separates salary, service charge, and tips to keep payouts transparent for staff.",
    year: "2023",
    category: "automation",
    tags: ["React", "TypeScript", "Payroll"],
    liveUrl: "#",
    caseStudyUrl: "#",
    coverImage: undefined,
    features: [
      {
        title: "Automated Payout Breakdowns",
        description:
          "Generates per-employee breakdowns for salary, tip pool, and service charge in one view.",
        image: undefined,
      },
      {
        title: "Reusable Payroll Runs",
        description:
          "Allows copying previous runs so recurring calculations are a few clicks instead of hours.",
        image: undefined,
      },
    ],
    techStack: ["React", "TypeScript"],
  },
  {
    slug: "palengke-price-tracker",
    title: "Palengke Price Tracker",
    summary:
      "Shopping-list style web app for restaurant owners to track ingredients, mark items as bought, and monitor price history.",
    year: "2022",
    category: "automation",
    tags: ["Next.js", "React", "Price Tracking"],
    liveUrl: "#",
    caseStudyUrl: "#",
    coverImage: undefined,
    features: [
      {
        title: "Smart Market Checklist",
        description:
          "Lets staff add items, quantities, and mark them as bought directly from a phone while shopping.",
        image: undefined,
      },
      {
        title: "Price History Insights",
        description:
          "Stores previous prices so owners see when ingredients increase and can adjust menus or costing.",
        image: undefined,
      },
    ],
    techStack: ["Next.js", "React"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

