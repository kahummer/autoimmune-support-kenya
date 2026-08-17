import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Resources and Stories",
  description:
    "Read patient stories, caregiver guidance, and event updates from Autoimmune Support Kenya.",
};

const categories = [
  "Understanding Autoimmune Conditions",
  "Patient & Caregiver Stories",
  "Event Recaps & Impact",
  "Caregiver Tips",
  "Advocacy & Awareness",
];

const articles = [
  {
    title: "What Living With an Autoimmune Condition Really Looks Like",
    category: "Understanding Autoimmune Conditions",
  },
  {
    title: "Why We Run and Walk Together",
    category: "Advocacy & Awareness",
  },
  {
    title: "Meet a Patient AISK Has Supported",
    category: "Patient & Caregiver Stories",
  },
  {
    title: "A Caregiver's Guide to Everyday Support",
    category: "Caregiver Tips",
  },
  {
    title: "Behind the Scenes of the Support a Patient Platform",
    category: "Event Recaps & Impact",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Stories and Resources"
        subtitle="Real stories, practical guidance, and updates from the AISK community."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-wrap gap-2.5" aria-label="Categories">
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full bg-lavender text-violet-deep font-semibold text-sm px-4 py-1.5"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((a) => (
            <article
              key={a.title}
              className="rounded-2xl border-2 border-lavender p-7 flex flex-col hover:border-violet-deep/40 transition-colors"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-teal-care">
                {a.category}
              </p>
              <h2 className="mt-2 font-bold text-xl text-violet-deep grow">
                {a.title}
              </h2>
              <p className="mt-4 text-sm text-charcoal/70 italic">
                Coming soon
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-lavender">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center">
          <h2 className="text-2xl font-bold text-violet-deep">
            Have a story to tell?
          </h2>
          <p className="mt-3 max-w-xl mx-auto">
            Patient and caregiver stories are shared with consent only — and
            they help others feel less alone.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-coral hover:bg-coral-dark text-white font-bold px-6 py-3 transition-colors"
            >
              Share Your Story
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-violet-deep hover:bg-violet-ink text-white font-bold px-6 py-3 transition-colors"
            >
              Subscribe for Updates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
