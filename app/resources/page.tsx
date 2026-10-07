import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { pastEvents } from "@/lib/events";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Stories and Resources",
  description:
    "Patient stories, event recaps, and guidance from Autoimmune Support Kenya — including Shannon's recovery from polymyositis.",
};

const press = [
  {
    title: "She couldn't feel her legs, her body shut down … now she walks again!",
    source: "Willow Health Media · 24 October 2025",
    href: "https://willowhealthmedia.org/she-couldnt-feel-her-legs-her-body-shut-down-now-she-walks-again/",
  },
  {
    title: "'My daughter couldn't stand, climb stairs, hold a mug'",
    source: "Willow Health Media · 14 February 2026",
    href: "https://willowhealthmedia.org/my-daughter-couldnt-stand-climb-stairs-hold-a-mug/",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Stories and Resources"
        subtitle="Real stories, event recaps, and practical guidance from the AISK community."
      />

      {/* Patient stories */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-coral font-bold uppercase tracking-[0.25em] text-sm">
          Patient &amp; caregiver stories
        </p>
        <h2 className="mt-2 text-3xl font-bold text-violet-deep">
          Real people, real journeys
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <article className="rounded-2xl overflow-hidden border-2 border-lavender flex flex-col">
            <Image
              src="/images/stories/saetwa-and-shannon.jpg"
              alt="Saetwa Saitoti and her daughter Shannon"
              width={1400}
              height={2100}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="w-full h-72 object-cover object-top"
            />
            <div className="p-7 flex flex-col grow">
              <p className="text-xs font-bold uppercase tracking-wider text-coral">
                Polymyositis
              </p>
              <h3 className="mt-2 font-bold text-2xl text-violet-deep">
                Shannon: from paralysis to walking again
              </h3>
              <p className="mt-3 grow">
                At 13, Shannon went from a cold at boarding school to total
                paralysis in a matter of months — and through misdiagnosis,
                stigma, and a journey to India for answers, back to her feet.
                Her mother Saetwa&apos;s experience is why AISK exists.
              </p>
              <Link
                href="/stories/shannon"
                className="mt-5 self-start rounded-full bg-violet-deep hover:bg-violet-ink text-white font-bold px-6 py-2.5 transition-colors"
              >
                Read Shannon&apos;s story
              </Link>
            </div>
          </article>

          <article className="rounded-2xl overflow-hidden border-2 border-lavender flex flex-col">
            <Image
              src="/images/stories/antony-mwago-2.jpg"
              alt="Antony Mwago during physiotherapy"
              width={720}
              height={1280}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="w-full h-72 object-cover object-top"
            />
            <div className="p-7 flex flex-col grow">
              <p className="text-xs font-bold uppercase tracking-wider text-coral">
                Guillain-Barré syndrome
              </p>
              <h3 className="mt-2 font-bold text-2xl text-violet-deep">
                Antony Mwago: rebuilding strength, one session at a time
              </h3>
              <p className="mt-3 grow">
                Guillain-Barré syndrome is a rare condition in which the
                immune system attacks the nerves, causing weakness that can
                progress to paralysis. Antony&apos;s journey through hospital
                and physiotherapy is one AISK is walking alongside. His full
                story is coming soon.
              </p>
              <Link
                href="/support-a-patient"
                className="mt-5 self-start rounded-full bg-coral hover:bg-coral-dark text-white font-bold px-6 py-2.5 transition-colors"
              >
                Support a patient like Antony
              </Link>
            </div>
          </article>
        </div>

        <h3 className="mt-14 text-xl font-bold text-violet-deep">In the press</h3>
        <ul className="mt-4 grid sm:grid-cols-2 gap-4">
          {press.map((p) => (
            <li key={p.href}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener"
                className="block rounded-xl border-2 border-lavender p-5 hover:border-violet-deep/40 transition-colors"
              >
                <p className="font-bold text-violet-deep">{p.title}</p>
                <p className="mt-1 text-sm text-charcoal/70">{p.source} ↗</p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Event recaps */}
      <section id="events" className="bg-lavender scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-coral font-bold uppercase tracking-[0.25em] text-sm">
            Event recaps
          </p>
          <h2 className="mt-2 text-3xl font-bold text-violet-deep">
            What we&apos;ve been up to
          </h2>
          <p className="mt-4 max-w-2xl">
            Webinars, discussions, and watch parties — all free, most of them
            online so anyone in Kenya can join. New events are announced in
            our{" "}
            <a href={site.facebook} target="_blank" rel="noopener" className="font-bold text-coral hover:text-coral-dark">
              Facebook group
            </a>
            .
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((e) => (
              <article key={e.title} className="bg-white rounded-2xl overflow-hidden flex flex-col">
                <Image
                  src={e.image}
                  alt={`Poster: ${e.title}`}
                  width={900}
                  height={e.imageHeight}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="w-full aspect-square object-cover object-top"
                />
                <div className="p-6 flex flex-col grow">
                  <p className="text-xs font-bold uppercase tracking-wider text-coral">
                    {e.date}
                  </p>
                  <h3 className="mt-1.5 font-bold text-lg text-violet-deep leading-snug">
                    {e.title}
                  </h3>
                  <p className="mt-1 text-sm text-charcoal/70">{e.format}</p>
                  <p className="mt-3 text-[0.95rem] grow">{e.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding */}
      <section className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border-2 border-lavender p-7">
          <p className="text-xs font-bold uppercase tracking-wider text-coral">
            Understanding autoimmune conditions
          </p>
          <h3 className="mt-2 font-bold text-xl text-violet-deep">
            What are autoimmune conditions — and why is diagnosis so hard?
          </h3>
          <p className="mt-3">
            A plain-language explanation of what happens when the immune system
            turns on the body, the conditions it covers, and what to ask your
            doctor.
          </p>
          <Link href="/about#autoimmune" className="inline-block mt-4 font-bold text-coral hover:text-coral-dark">
            Read the explainer →
          </Link>
        </div>
        <div className="rounded-2xl border-2 border-lavender p-7">
          <p className="text-xs font-bold uppercase tracking-wider text-coral">
            Caregiver tips
          </p>
          <h3 className="mt-2 font-bold text-xl text-violet-deep">
            A caregiver&apos;s guide to everyday support
          </h3>
          <p className="mt-3">
            Practical guidance from caregivers who have been there — coming
            soon. In the meantime, the support group is the best place to ask.
          </p>
          <a href={site.facebook} target="_blank" rel="noopener" className="inline-block mt-4 font-bold text-coral hover:text-coral-dark">
            Ask the community →
          </a>
        </div>
      </section>

      <section className="bg-violet-deep text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center">
          <h2 className="text-2xl font-bold">Have a story to tell?</h2>
          <p className="mt-3 max-w-xl mx-auto text-white/85">
            Patient and caregiver stories are shared with consent only — and
            they help others feel less alone.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact?reason=story"
              className="rounded-full bg-coral hover:bg-coral-dark text-white font-bold px-6 py-3 transition-colors"
            >
              Share Your Story
            </Link>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener"
              className="rounded-full border-2 border-white/70 hover:border-white text-white font-bold px-6 py-3 transition-colors"
            >
              Join the Facebook group
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
