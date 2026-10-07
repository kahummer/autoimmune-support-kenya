import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { RibbonDivider } from "@/components/Ribbon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About AISK",
  description:
    "Learn about Autoimmune Support Kenya — what autoimmune conditions are, the story of founder Saetwa Saitoti and her daughter Shannon, and our mission, values, and approach.",
};

const values = [
  { name: "Compassion", text: "Warmth and dignity, never pity." },
  { name: "Dignity", text: "Practical support that respects every patient." },
  { name: "Solidarity", text: "A community that walks with you." },
  { name: "Hope", text: "Chronic-illness reality, balanced with joy." },
];

const conditions = [
  "Lupus",
  "Rheumatoid arthritis",
  "Type 1 diabetes",
  "Multiple sclerosis",
  "Psoriasis",
  "Hashimoto's & Graves' disease",
  "Coeliac disease",
  "Myositis (e.g. polymyositis)",
  "Guillain-Barré syndrome",
  "Inflammatory bowel disease",
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
              <span className="font-bold text-coral">{v.name}</span>
              <p className="text-[0.95rem] mt-1">{v.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* What autoimmune conditions are */}
      <section id="autoimmune" className="bg-lavender scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-[1fr_360px] gap-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-violet-deep">
              What are autoimmune conditions?
            </h2>
            <p className="mt-5">
              Your immune system is built to defend you against infection. In
              an autoimmune condition it gets it wrong and attacks the
              body&apos;s own healthy cells — joints, muscles, nerves, skin,
              the gut, the thyroid, or almost any organ. There are more than
              80 recognised autoimmune diseases, and together they affect
              millions of people worldwide, women far more often than men.
            </p>
            <p className="mt-4">
              Symptoms depend on what is being attacked, but fatigue, pain,
              weakness, rashes, fevers and &ldquo;flares&rdquo; that come and
              go are common. Many of these symptoms are invisible, which is why
              patients are so often told it is stress, laziness, or
              &ldquo;all in your head&rdquo;. In Kenya, diagnosis can take
              months or years of hospital visits, because the conditions are
              rare, specialists are few, and awareness is low.
            </p>
            <p className="mt-4">
              Autoimmune conditions are not contagious, are not caused by
              witchcraft or anything the patient did, and most cannot yet be
              cured — but they <strong>can</strong> be managed. With the right
              specialist (often a rheumatologist, neurologist, or
              endocrinologist), the right medication, physiotherapy,
              nutrition, and emotional support, people live full lives. The
              earlier the diagnosis, the less damage is done — which is why
              awareness is at the heart of everything AISK does.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/resources"
                className="rounded-full bg-violet-deep hover:bg-violet-ink text-white font-bold px-6 py-3 transition-colors"
              >
                Read patient stories
              </Link>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener"
                className="rounded-full border-2 border-violet-deep text-violet-deep hover:bg-violet-deep hover:text-white font-bold px-6 py-3 transition-colors"
              >
                Join the support group
              </a>
            </div>
          </div>
          <aside className="rounded-2xl bg-white p-7 self-start">
            <h3 className="font-bold text-lg text-violet-deep">
              Some common autoimmune conditions
            </h3>
            <ul className="mt-4 space-y-2">
              {conditions.map((c) => (
                <li key={c} className="flex items-start gap-2.5">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-coral" aria-hidden="true" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-charcoal/70">
              This is general information, not medical advice. If you
              recognise these symptoms, ask your doctor for a referral to a
              specialist.
            </p>
          </aside>
        </div>
      </section>

      {/* Our story */}
      <section id="story" className="mx-auto max-w-6xl px-4 py-16 scroll-mt-20">
        <div className="grid lg:grid-cols-[1fr_400px] gap-10 items-start">
          <div className="max-w-3xl">
            <p className="text-coral font-bold uppercase tracking-[0.25em] text-sm">
              Our story
            </p>
            <h2 className="mt-2 text-3xl font-bold text-violet-deep">
              It began with a daughter who could not stand
            </h2>
            <p className="mt-5">
              In July 2024, Saetwa Saitoti&apos;s daughter Shannon came home
              from boarding school with what looked like a cold. Within weeks
              she could not climb stairs, lift her arms, or hold a mug. Then
              her legs went numb. Eventually she was paralysed from the neck
              down and dependent on a wheelchair.
            </p>
            <p className="mt-4">
              Months of hospital visits in Kenya brought tests, theories, and
              bills — but no answer. Shannon was told it was arthritis, then
              that it was psychological, then that she might never walk again.
              Relatives whispered about witchcraft. Saetwa left her job to care
              for her full-time, and the family&apos;s savings drained away.
            </p>
            <p className="mt-4">
              When they finally travelled to India for treatment, doctors
              diagnosed Shannon within three days: <strong>polymyositis</strong>,
              a rare autoimmune disease in which the immune system attacks the
              muscles. Weeks of intensive treatment — immune therapy, daily
              physiotherapy, and nutrition — followed. Slowly, painfully,
              Shannon stood, then walked. After nearly a year out of school,
              she went back.
            </p>
            <blockquote className="mt-6 border-l-4 border-coral pl-5 italic text-lg text-violet-deep">
              &ldquo;If I knew more about autoimmune diseases, I would have
              heard her hints.&rdquo;
              <footer className="mt-2 not-italic text-sm font-semibold text-charcoal/70">
                — Saetwa Saitoti
              </footer>
            </blockquote>
            <p className="mt-6">
              Saetwa founded Autoimmune Support Kenya so that no other family
              would have to go through the same thing alone — a place for
              credible information, shared experience, practical help, and a
              community that walks with every patient. Today it is a support
              group of {site.facebookMembers} patients and caregivers, a
              programme of webinars and meetups, a patient-needs giving
              platform, and the annual Mega Walk and Run.
            </p>
            <p className="mt-4 text-sm text-charcoal/70">
              Shannon&apos;s story has been told in Willow Health Media:{" "}
              <a
                className="underline hover:text-coral"
                href="https://willowhealthmedia.org/she-couldnt-feel-her-legs-her-body-shut-down-now-she-walks-again/"
                target="_blank"
                rel="noopener"
              >
                She couldn&apos;t feel her legs … now she walks again
              </a>{" "}
              and{" "}
              <a
                className="underline hover:text-coral"
                href="https://willowhealthmedia.org/my-daughter-couldnt-stand-climb-stairs-hold-a-mug/"
                target="_blank"
                rel="noopener"
              >
                My daughter couldn&apos;t stand, climb stairs, hold a mug
              </a>
              .
            </p>
          </div>
          <div className="space-y-4">
            <Image
              src="/images/stories/saetwa-and-shannon.jpg"
              alt="Saetwa Saitoti and her daughter Shannon sitting together, smiling"
              width={1400}
              height={2100}
              sizes="(min-width: 1024px) 400px, 100vw"
              className="rounded-2xl w-full h-auto"
            />
            <Image
              src="/images/stories/shannon-wheelchair.jpg"
              alt="Shannon in a wheelchair during her illness"
              width={900}
              height={900}
              sizes="(min-width: 1024px) 400px, 100vw"
              className="rounded-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      <RibbonDivider />

      {/* Founder */}
      <section id="founder" className="mx-auto max-w-6xl px-4 py-16 scroll-mt-20">
        <div className="grid md:grid-cols-[320px_1fr] gap-10 items-start">
          <Image
            src="/images/founder-saetwa-saitoti.jpg"
            alt="Saetwa Saitoti, founder of Autoimmune Support Kenya"
            width={900}
            height={1125}
            sizes="(min-width: 768px) 320px, 100vw"
            className="rounded-2xl w-full max-w-sm h-auto"
          />
          <div>
            <p className="text-coral font-bold uppercase tracking-[0.25em] text-sm">
              Founder
            </p>
            <h2 className="mt-2 text-3xl font-bold text-violet-deep">
              Saetwa Saitoti
            </h2>
            <p className="mt-1 font-semibold text-charcoal/70">
              Founder · Counsellor &amp; autoimmune advocate · Caregiver
            </p>
            <p className="mt-4">
              Saetwa is a mother and caregiver who turned her family&apos;s
              hardest year into a mission. After walking with her daughter
              Shannon through paralysis, misdiagnosis, and recovery from
              polymyositis, she founded Autoimmune Support Kenya in 2025 to
              connect patients and caregivers with information, each other,
              and practical help.
            </p>
            <p className="mt-4">
              A counsellor by training, she hosts AISK&apos;s webinars and peer
              support sessions on the emotional realities of chronic illness,
              speaks on autoimmune and rare-disease platforms in Kenya and
              beyond, and advocates for policies that shorten the road to
              diagnosis and make treatment affordable.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <Image
                src="/images/saetwa-conference.jpg"
                alt="Saetwa Saitoti seated on stage at a health conference"
                width={1000}
                height={1333}
                sizes="200px"
                className="rounded-xl w-full h-auto"
              />
              <Image
                src="/images/saetwa-rare-diseases.jpg"
                alt="Saetwa Saitoti at a Rare Diseases International event"
                width={1000}
                height={1333}
                sizes="200px"
                className="rounded-xl w-full h-auto"
              />
              <Image
                src="/images/saetwa-health-summit.jpg"
                alt="Saetwa Saitoti at the National Health Summit"
                width={526}
                height={701}
                sizes="200px"
                className="rounded-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-lavender">
        <div className="mx-auto max-w-4xl px-4 py-14 flex flex-wrap justify-center gap-3">
          <Link
            href="/support-a-patient"
            className="rounded-full bg-violet-deep hover:bg-violet-ink text-white font-bold px-7 py-3.5 transition-colors"
          >
            Support a Patient
          </Link>
          <Link
            href="/mega-run-and-walk"
            className="rounded-full bg-coral hover:bg-coral-dark text-white font-bold px-7 py-3.5 transition-colors"
          >
            See the Mega Walk and Run
          </Link>
        </div>
      </section>
    </>
  );
}
