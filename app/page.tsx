import type { Metadata } from "next";
import Link from "next/link";
import Countdown from "@/components/Countdown";
import { RibbonDivider } from "@/components/Ribbon";

export const metadata: Metadata = {
  description:
    "Autoimmune Support Kenya unites patients, caregivers, and communities through the Mega Run and Walk, patient support giving, and community events.",
};

const needs = [
  {
    title: "Adult diapers",
    text: "Dignity for patients managing incontinence or limited mobility.",
    icon: (
      <path d="M8 14h32v10a16 16 0 0 1-32 0V14Zm0 0 4-6h24l4 6" strokeLinejoin="round" />
    ),
  },
  {
    title: "Supplements",
    text: "Nutritional and medical support for daily health.",
    icon: (
      <>
        <rect x="10" y="18" width="28" height="14" rx="7" />
        <path d="M24 18v14" />
      </>
    ),
  },
  {
    title: "Assistive gadgets",
    text: "Wheelchairs, walkers, and mobility aids.",
    icon: (
      <>
        <circle cx="20" cy="32" r="8" />
        <path d="M20 32V12h10l4 12h6" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Medication",
    text: "Essential, ongoing treatment access.",
    icon: (
      <>
        <rect x="12" y="8" width="24" height="10" rx="2" />
        <path d="M14 18v20a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V18M24 24v10M19 29h10" />
      </>
    ),
  },
];

function NeedIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-12 w-12 stroke-teal-care"
      fill="none"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-violet-deep relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #fff 2px, transparent 2px), radial-gradient(circle at 70% 60%, #fff 2px, transparent 2px)",
            backgroundSize: "90px 90px, 120px 120px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.1]">
              You Are Not Alone.
              <span className="block text-coral mt-2">Move Together.</span>
              <span className="block mt-2">Live Stronger.</span>
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-xl">
              Autoimmune Support Kenya (AISK) by Saetwa Saitoti supports
              patients and caregivers through community, practical giving, and
              the annual Mega Run and Walk.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/mega-run-and-walk#register"
                className="rounded-full bg-coral hover:bg-coral-dark text-white font-bold px-7 py-3.5 transition-colors"
              >
                Register for the Mega Run and Walk
              </Link>
              <Link
                href="/support-a-patient"
                className="rounded-full border-2 border-white/70 hover:border-white text-white font-bold px-7 py-3.5 transition-colors"
              >
                Support a Patient
              </Link>
            </div>
          </div>
          <div className="lg:justify-self-end">
            <Countdown />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-lavender">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-violet-deep font-semibold text-sm sm:text-base text-center">
          <span>Patient-first community organization</span>
          <span className="hidden sm:inline text-coral" aria-hidden="true">•</span>
          <span>Movement · Giving · Community</span>
          <span className="hidden sm:inline text-coral" aria-hidden="true">•</span>
          <span>Walking With Every Patient</span>
        </div>
      </section>

      {/* About preview */}
      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-violet-deep">
          Awareness, turned into everyday care
        </h2>
        <p className="mt-5">
          Autoimmune Support Kenya walks alongside people living with
          autoimmune conditions in Kenya. Through the Mega Run and Walk, a
          dedicated patient-support donation platform, and regular community
          activities, AISK turns awareness into everyday, practical care.
        </p>
        <p className="mt-4">
          We partner with patients, caregivers, families, corporates, and
          well-wishers who want autoimmune illness in Kenya met with dignity,
          resources, and community rather than silence.
        </p>
        <Link
          href="/about"
          className="inline-block mt-6 font-bold text-teal-care hover:text-teal-dark"
        >
          Learn more about AISK →
        </Link>
      </section>

      <RibbonDivider />

      {/* Event highlight */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl bg-violet-deep text-white overflow-hidden grid md:grid-cols-[1fr_auto] items-center">
          <div className="p-8 sm:p-12">
            <p className="text-coral font-bold uppercase tracking-[0.25em] text-sm">
              Flagship event · 22 November
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
              The Mega Run and Walk
            </h2>
            <p className="mt-4 text-white/85 max-w-2xl">
              Our flagship event brings the community together on 22 November
              for a 5km walk, 10km run, and kids&apos; fun walk — raising funds
              and awareness in one movement.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["10km Run", "5km Walk", "Kids' Fun Walk", "Virtual"].map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-white/10 border border-white/25 px-4 py-1.5 text-sm font-semibold"
                >
                  {c}
                </span>
              ))}
            </div>
            <Link
              href="/mega-run-and-walk"
              className="inline-block mt-8 rounded-full bg-coral hover:bg-coral-dark font-bold px-7 py-3.5 transition-colors"
            >
              Event details &amp; registration
            </Link>
          </div>
          <div
            aria-hidden="true"
            className="hidden md:flex h-full items-center px-10 bg-coral/90"
          >
            <svg viewBox="0 0 64 64" className="h-32 w-32 stroke-white" fill="none" strokeWidth="3" strokeLinecap="round">
              <circle cx="40" cy="12" r="5" />
              <path d="M38 20 28 30l8 8-4 16M28 30l-8-2-8 6M36 38l10 4 6 12" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* Give section */}
      <section className="bg-lavender">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-violet-deep">
              Give with purpose
            </h2>
            <p className="mt-4">
              Support a Patient connects donors directly to real needs —
              essentials that restore comfort, mobility, and dignity.
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {needs.map((n) => (
              <div key={n.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <NeedIcon>{n.icon}</NeedIcon>
                <h3 className="mt-4 font-bold text-lg text-violet-deep">
                  {n.title}
                </h3>
                <p className="mt-1.5 text-[0.95rem]">{n.text}</p>
              </div>
            ))}
          </div>
          <Link
            href="/support-a-patient"
            className="inline-block mt-8 rounded-full bg-teal-care hover:bg-teal-dark text-white font-bold px-7 py-3.5 transition-colors"
          >
            Support a Patient
          </Link>
        </div>
      </section>

      {/* Community preview */}
      <section className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-violet-deep">
            Community and fun
          </h2>
          <p className="mt-4">
            Beyond fundraising, AISK hosts movie watch parties, raffle draws,
            and support meetups so patients and caregivers can connect and
            enjoy being together.
          </p>
          <Link
            href="/community"
            className="inline-block mt-6 font-bold text-teal-care hover:text-teal-dark"
          >
            See community activities →
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-4">
          {["Movie Watch Parties", "Raffle Draws", "Support Circles", "Wellness Days"].map(
            (a) => (
              <li
                key={a}
                className="rounded-2xl border-2 border-lavender bg-white p-5 font-semibold text-violet-deep text-center"
              >
                {a}
              </li>
            )
          )}
        </ul>
      </section>

      {/* Founder highlight */}
      <section className="bg-violet-deep/[0.04] border-y border-lavender">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center">
          <p className="text-coral font-bold uppercase tracking-[0.25em] text-sm">
            Founder
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-violet-deep">
            Saetwa Saitoti
          </h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Founder of Autoimmune Support Kenya, dedicated to helping
            autoimmune patients across Kenya access dignity, practical support,
            and community.
          </p>
          <Link
            href="/about#founder"
            className="inline-block mt-5 font-bold text-teal-care hover:text-teal-dark"
          >
            Meet Saetwa →
          </Link>
        </div>
      </section>

      {/* Resources preview */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-violet-deep">
          Stories and resources
        </h2>
        <p className="mt-4 max-w-2xl">
          Real stories, practical guidance, and updates from the AISK
          community.
        </p>
        <div className="mt-8 grid sm:grid-cols-3 gap-5">
          {[
            "What Living With an Autoimmune Condition Really Looks Like",
            "Why We Run and Walk Together",
            "A Caregiver's Guide to Everyday Support",
          ].map((t) => (
            <Link
              key={t}
              href="/resources"
              className="rounded-2xl bg-lavender p-6 font-semibold text-violet-deep hover:bg-violet-deep hover:text-white transition-colors"
            >
              {t}
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-coral">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Every action helps someone feel less alone.
          </h2>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            Whether you&apos;re registering to run, giving toward a
            patient&apos;s needs, or joining a movie night — you belong here.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/mega-run-and-walk#register"
              className="rounded-full bg-white text-coral font-bold px-7 py-3.5 hover:bg-lavender transition-colors"
            >
              Register for the Run and Walk
            </Link>
            <Link
              href="/support-a-patient"
              className="rounded-full border-2 border-white font-bold px-7 py-3.5 hover:bg-white/10 transition-colors"
            >
              Support a Patient
            </Link>
            <Link
              href="/community"
              className="rounded-full border-2 border-white font-bold px-7 py-3.5 hover:bg-white/10 transition-colors"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
