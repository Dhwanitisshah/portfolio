/** Status drives the badge colours in `ProjectCard`. */
export type ProjectStatus =
  | "Production"
  | "Deployed"
  | "In Progress"
  | "Research Paper in Progress";

export type Project = {
  slug: string;
  title: string;
  role: string;
  stack: string[];
  description: string;
  highlights: string[];
  github: string;
  /** `null` when there is nothing deployed to link to. */
  demo: string | null;
  status: ProjectStatus;
};

export const PROJECTS: Project[] = [
  {
    slug: "setu",
    title: "Setu — DPDP-Compliant Clinic Triage Companion",
    role: "Lead Developer",
    stack: ["Next.js 15", "TypeScript", "Supabase", "FastAPI", "Groq LLM"],
    description:
      "Production-grade multi-tenant triage platform for India's small clinics. Integrates the clinical NEWS2 scoring standard with a deterministic rules engine and an async AI summary layer.",
    highlights: [
      "Full DPDP Act compliance — consent lifecycle, two-step patient erasure, data export, audit-log tombstones",
      "Real-time queue with 616ms propagation, single-use SHA-256 doctor share links",
      "232 tests passing across vitest + RLS isolation checks (32/32)",
    ],
    github: "https://github.com/Dhwanitisshah/setu-triage",
    demo: null,
    status: "Production",
  },
  {
    slug: "ledgerline",
    title: "Ledgerline — Idempotent Payments Backend",
    role: "Backend Engineer",
    stack: ["FastAPI", "PostgreSQL", "Alembic", "Docker", "pytest"],
    description:
      "Payment gateway that eliminates double-charges via idempotency keys and database-level locking. Implements a double-entry accounting ledger where balances are derived from immutable transaction entries.",
    highlights: [
      "Idempotency keys + SELECT FOR UPDATE / advisory locks prevent race conditions",
      "Double-entry ledger: balances derived, never stored as mutable columns",
    ],
    github: "https://github.com/Dhwanitisshah/ledgerline",
    demo: null,
    status: "In Progress",
  },
  {
    slug: "cv-interpretability",
    title: "CV Interpretability — MobileNetV3 + Grad-CAM on CIFAR-10",
    role: "ML Researcher",
    stack: ["PyTorch", "Grad-CAM", "LIME", "SciPy", "Python"],
    description:
      "Research-grade computer vision interpretability study across four MobileNetV3-Small variants. Implements custom Grad-CAM with rigorous faithfulness metrics and statistical equivalence testing.",
    highlights: [
      "Key finding: fine-tuned model is accuracy-robust yet explanation-unstable — a novel accuracy/faithfulness dissociation",
      "TOST equivalence testing confirms SE ablation null across all three faithfulness metrics (d=0.03–0.12)",
      "Phase 7.5 complete; 57,600 drift values verified bitwise-identical across two independent runs",
    ],
    github:
      "https://github.com/Dhwanitisshah/Interpreting-MobileNetV3-Small-on-CIFAR-10",
    demo: null,
    status: "Research Paper in Progress",
  },
  {
    slug: "fake-news-detector",
    title: "Fake News Detector — End-to-End NLP Classifier",
    role: "ML Engineer",
    stack: ["Python", "DistilBERT", "BiLSTM", "Streamlit", "LIME"],
    description:
      "End-to-end fake news classification system comparing three architectures on a 39,103-row dataset. Ships LIME explainability and a rule-based source-credibility scorer.",
    highlights: [
      "DistilBERT achieved 99.87% accuracy (6 false negatives); BiLSTM 99.00%; TF-IDF baseline 98.61%",
      "Deployed on Streamlit Community Cloud with LIME word-level explanations",
    ],
    github: "https://github.com/Dhwanitisshah/FAKE-NEWS-DETECTOR",
    demo: "https://fake-news-detector.streamlit.app",
    status: "Deployed",
  },
];
