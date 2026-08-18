import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

export default function Skills() {
  return (
    <Layout
      title="Skills — Dhwanit's Dev Quest"
      description="The tech stack and tools Dhwanit Shah works with."
    >
      <PageHeader
        level="LEVEL 03"
        title="SKILLS"
        subtitle="Stats, perks, and the tools in the inventory."
      />

      <section className="mx-auto w-full max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <p className="font-display text-[10px] leading-loose text-neon-cyan">
          SKILL TREE LOADING
          <span className="animate-blink ml-1">_</span>
        </p>

        <p className="mt-8 font-mono text-xs text-content-secondary">
          Skill tree unlocks in <span className="neon-green">PHASE 3</span>.
        </p>
      </section>
    </Layout>
  );
}
