export type ExperienceEntry = {
  role: string;
  company: string;
  /** Shown after an em dash, in muted grey. */
  companyDescription: string;
  period: string;
  type: string;
  bullets: string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Research & Engineering Intern",
    company: "NTPC Limited",
    companyDescription: "India's largest power generation company",
    period: "Jun 2025 – Nov 2025",
    type: "Internship",
    bullets: [
      "Conducted data analysis and process optimisation on operational datasets using Python automation",
      "Delivered reproducible reporting pipelines that streamlined engineering workflows",
    ],
  },
  {
    role: "Product & Engineering Intern",
    company: "D.R.E.A.M. Labs",
    companyDescription: "Early-stage product studio",
    period: "May 2026 – Present",
    type: "Internship",
    bullets: [
      "Developed sales playbooks and product framing for a website-building SaaS",
      "Reframed a product spec into SiteSignal — a web presence intelligence platform",
    ],
  },
  {
    role: "Chief Information Officer (CIO)",
    company: "GreenFlag",
    companyDescription:
      "India-first dating app focused on verified profiles and intentional connections",
    period: "Jul 2026 – Present",
    type: "Full-time",
    bullets: [
      "Lead all technical decisions — architecture, engineering roadmap, DPDP Act compliance, and AI safety layers",
      "Stack: NestJS backend, React Native/Expo client, Supabase",
    ],
  },
];
