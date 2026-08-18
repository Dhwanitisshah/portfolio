import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

/** Placeholder cards until Phase 2 wires in real project data. */
const PLACEHOLDER_SLOTS = [
  { id: 1, accent: "border-neon-pink/40" },
  { id: 2, accent: "border-neon-cyan/40" },
  { id: 3, accent: "border-neon-purple/40" },
  { id: 4, accent: "border-neon-cyan/40" },
  { id: 5, accent: "border-neon-purple/40" },
  { id: 6, accent: "border-neon-pink/40" },
];

export default function Projects() {
  return (
    <Layout
      title="Quests — Dhwanit's Dev Quest"
      description="Projects and things Dhwanit Shah has built."
    >
      <PageHeader
        level="LEVEL 02"
        title="QUESTS"
        subtitle="Things I've built, shipped, and broken along the way."
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PLACEHOLDER_SLOTS.map((slot) => (
            <li
              key={slot.id}
              className={`flex min-h-56 flex-col items-center justify-center gap-4 border-2 border-dashed bg-dark-secondary/40 p-6 text-center ${slot.accent}`}
            >
              <span className="font-display text-[10px] text-content-secondary">
                SLOT {String(slot.id).padStart(2, "0")}
              </span>
              <span className="animate-blink font-display text-[8px] text-neon-cyan">
                LOCKED
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-14 text-center font-mono text-xs text-content-secondary">
          Quest data loads in <span className="neon-green">PHASE 2</span>.
        </p>
      </section>
    </Layout>
  );
}
