import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

export default function Contact() {
  return (
    <Layout
      title="Contact — Dhwanit's Dev Quest"
      description="Get in touch with Dhwanit Shah."
    >
      <PageHeader
        level="LEVEL 04"
        title="CONTACT"
        subtitle="Open a comms channel. Party invites welcome."
      />

      <section className="mx-auto w-full max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <p className="font-display text-[10px] leading-loose text-neon-cyan">
          AWAITING TRANSMISSION
          <span className="animate-blink ml-1">_</span>
        </p>

        <p className="mt-8 font-mono text-xs text-content-secondary">
          Contact form goes live in <span className="neon-green">PHASE 4</span>.
        </p>
      </section>
    </Layout>
  );
}
