export type SkillCategory = {
  category: string;
  skills: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "Go"],
  },
  {
    category: "Backend",
    skills: [
      "FastAPI",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Docker",
      "REST APIs",
    ],
  },
  {
    category: "Frontend",
    skills: ["React", "Tailwind CSS", "HTML / CSS"],
  },
  {
    category: "ML & AI",
    skills: [
      "PyTorch",
      "MobileNetV3",
      "Grad-CAM",
      "LIME",
      "DistilBERT",
      "BiLSTM",
      "Scikit-learn",
      "Groq LLM",
    ],
  },
  {
    category: "Tooling",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
      "Alembic",
      "pytest",
      "Vitest",
    ],
  },
  {
    category: "Concepts",
    skills: [
      "DPDP Act Compliance",
      "Idempotency",
      "Double-Entry Accounting",
      "RLS",
      "System Design",
      "CI/CD",
    ],
  },
];
