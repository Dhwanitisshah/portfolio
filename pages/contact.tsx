import Head from "next/head";
import type { FormEvent } from "react";

import Button from "@/components/Button";
import { SITE } from "@/lib/constants";

const FIELD_CLASSES =
  "w-full rounded-md border border-border bg-surface px-3.5 py-2.5 text-base text-ink placeholder:text-muted/60 focus:border-sage focus:outline-none";

export default function Contact() {
  // Submission is wired up in a later phase; until then the email link below
  // is the working route.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <>
      <Head>
        <title>{`Get In Touch — ${SITE.name}`}</title>
        <meta
          name="description"
          content={`Get in touch with ${SITE.name} about freelance projects and startup ideas.`}
        />
      </Head>

      <section className="mx-auto max-w-content px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-[600px]">
          <h1 className="text-[2rem] font-semibold text-ink md:text-[2.5rem]">
            Get In Touch
          </h1>
          <p className="mt-4 text-base text-muted">
            Have a project in mind, or just want to compare notes? Send a note
            below, or email{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-sage underline-offset-4 hover:text-sage-dark hover:underline"
            >
              {SITE.email}
            </a>
            .
          </p>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-ink">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                className={FIELD_CLASSES}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-ink">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                className={FIELD_CLASSES}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-ink">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="What are you building?"
                className={`${FIELD_CLASSES} resize-y`}
              />
            </div>

            <div>
              <Button type="submit" size="lg">
                Send Message
              </Button>
            </div>

            <p className="text-sm text-muted">
              This form isn’t connected yet — it lands in a later phase.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
