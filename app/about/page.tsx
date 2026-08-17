import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { RibbonDivider } from "@/components/Ribbon";

export const metadata: Metadata = {
  title: "About AISK",
  description:
    "Learn about Autoimmune Support Kenya, its mission, values, founder, and approach to patient-centered giving and community.",
};

const values = [
  { name: "Compassion", text: "Warmth and dignity, never pity." },
  { name: "Dignity", text: "Practical support that respects every patient." },
  { name: "Solidarity", text: "A community that walks with you." },
  { name: "Hope", text: "Chronic-illness reality, balanced with joy." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Autoimmune Support Kenya"
        subtitle="A community-first organization supporting autoimmune patients through movement, giving, and connection."
      />

      <section className="mx-auto max-w-3xl px-4 py-16">
        <p>
          AISK exists to serve patients and caregivers navigating the physical,
          financial, and emotional weight of autoimmune illness. Support should
          be practical, dignified, and rooted in community.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          <div className="rounded-2xl bg-lavender p-7">
            <h2 className="font-bold text-xl text-violet-deep">Vision</h2>
            <p className="mt-2">
              A Kenya where every autoimmune patient has access to dignity,
              practical support, and a community that walks with them.
            </p>
          </div>
          <div className="rounded-2xl bg-lavender p-7">
            <h2 className="font-bold text-xl text-violet-deep">Mission</h2>
            <p className="mt-2">
              To mobilize movement, giving, and community around the everyday
              needs of autoimmune patients in Kenya.
            </p>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-violet-deep">Our values</h2>
        <ul className="mt-5 grid sm:grid-cols-2 gap-4">
          {values.map((v) => (
            <li key={v.name} className="rounded-xl border-2 border-lavender p-5">
              <span className="font-bold text-teal-care">{v.name}</span>
              <p className="text-[0.95rem] mt-1">{v.text}</p>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-2xl font-bold text-violet-deep">Our story</h2>
        <p className="mt-4 rounded-xl bg-lavender/60 border border-violet-deep/10 p-5 italic text-charcoal/80">
          Our founding story is coming soon — we&apos;re putting it into words
          with the care it deserves.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-violet-deep">
          What makes AISK distinctive
        </h2>
        <p className="mt-4">
          AISK brings together a flagship movement event, a direct-to-need
          giving platform, and a genuine community calendar — awareness turned
          into everyday, practical care.
        </p>
      </section>

      <RibbonDivider />

      <section id="founder" className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-coral font-bold uppercase tracking-[0.25em] text-sm">
          Founder
        </p>
        <h2 className="mt-2 text-3xl font-bold text-violet-deep">
          Saetwa Saitoti
        </h2>
        <p className="mt-4">
          Saetwa Saitoti is the founder of Autoimmune Support Kenya, dedicated
          to helping autoimmune patients across Kenya access dignity, practical
          support, and community.
        </p>
        <p className="mt-3 text-charcoal/70 italic">
          Full bio and photo coming soon.
        </p>
      </section>

      <section className="bg-lavender">
        <div className="mx-auto max-w-4xl px-4 py-14 flex flex-wrap justify-center gap-3">
          <Link
            href="/support-a-patient"
            className="rounded-full bg-teal-care hover:bg-teal-dark text-white font-bold px-7 py-3.5 transition-colors"
          >
            Support a Patient
          </Link>
          <Link
            href="/mega-run-and-walk"
            className="rounded-full bg-coral hover:bg-coral-dark text-white font-bold px-7 py-3.5 transition-colors"
          >
            See the Mega Run and Walk
          </Link>
        </div>
      </section>
    </>
  );
}
