import type { Metadata } from "next";
import Link from "next/link";
import Countdown from "@/components/Countdown";
import RegistrationForm from "./RegistrationForm";

export const metadata: Metadata = {
  title: "Mega Run and Walk — 22 November",
  description:
    "Register for the Autoimmune Support Kenya Mega Run and Walk on 22 November — 10km run, 5km walk, and kids' fun walk supporting autoimmune patients.",
};

const categories = [
  {
    name: "10km Run",
    who: "Competitive and recreational runners",
    color: "bg-coral",
  },
  {
    name: "5km Walk",
    who: "Families, patients, caregivers, casual participants",
    color: "bg-violet-deep",
  },
  {
    name: "Kids' Fun Walk",
    who: "Short guided walk for children and families",
    color: "bg-teal-care",
  },
  {
    name: "Virtual Participation",
    who: "Supporters anywhere in Kenya or abroad",
    color: "bg-violet-ink",
  },
];

const included = [
  "Event T-shirt & bib",
  "Finisher medal",
  "Refreshments & hydration points",
  "Warm-up session",
  "Post-event community program",
];

export default function EventPage() {
  return (
    <>
      <section className="bg-violet-deep text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-sm text-coral">
              Flagship annual event
            </p>
            <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold leading-tight">
              The Mega Run and Walk
            </h1>
            <p className="mt-3 text-xl font-semibold text-white/90">
              Move Together, Live Stronger
            </p>
            <p className="mt-5 text-white/85 max-w-xl">
              Saturday, 22 November — a community walk and run in support of
              autoimmune patients across Kenya. A morning of movement, music,
              and community that raises funds and awareness. Every registration
              funds diapers, supplements, assistive gadgets, and medication.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-white/90">
              <p>
                <span className="font-bold text-white">Date:</span> 22 November
              </p>
              <p>
                <span className="font-bold text-white">Venue &amp; start time:</span>{" "}
                to be announced
              </p>
              <p>
                <span className="font-bold text-white">Registration fee:</span>{" "}
                to be announced
              </p>
            </div>
          </div>
          <div className="lg:justify-self-end">
            <Countdown />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-violet-deep">Categories</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl overflow-hidden border-2 border-lavender"
            >
              <div className={`${c.color} h-2`} aria-hidden="true" />
              <div className="p-6">
                <h3 className="font-bold text-lg text-violet-deep">{c.name}</h3>
                <p className="mt-1.5 text-[0.95rem]">{c.who}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-lavender">
        <div className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-violet-deep">
              What&apos;s included
            </h2>
            <ul className="mt-5 space-y-3">
              {included.map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg viewBox="0 0 20 20" className="h-5 w-5 mt-1 shrink-0 stroke-coral" fill="none" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <path d="m4 10 4 4 8-8" />
                  </svg>
                  <span className="font-semibold">{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-violet-deep">
              How to register
            </h2>
            <ol className="mt-5 space-y-3 list-none">
              {[
                "Choose your category",
                "Complete the form — name, age, phone, email, T-shirt size, emergency contact",
                "Pay via card or M-Pesa (payment launching soon)",
                "Get confirmation by email or SMS",
              ].map((s, i) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="h-7 w-7 shrink-0 rounded-full bg-violet-deep text-white font-bold text-sm flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="register" className="mx-auto max-w-3xl px-4 py-16 scroll-mt-20">
        <h2 className="text-3xl font-bold text-violet-deep">Register now</h2>
        <p className="mt-3">
          Reserve your place — we&apos;ll confirm your registration and share
          payment details by email or SMS once fees are announced.
        </p>
        <RegistrationForm />
      </section>

      <section className="bg-violet-deep">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center">
          <h2 className="text-2xl font-bold text-white">
            More ways to be part of the day
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/get-involved"
              className="rounded-full border-2 border-white/70 hover:border-white text-white font-bold px-6 py-3 transition-colors"
            >
              Become a Sponsor
            </Link>
            <Link
              href="/get-involved"
              className="rounded-full border-2 border-white/70 hover:border-white text-white font-bold px-6 py-3 transition-colors"
            >
              Volunteer at the Event
            </Link>
            <Link
              href="#register"
              className="rounded-full bg-coral hover:bg-coral-dark text-white font-bold px-6 py-3 transition-colors"
            >
              Register to Walk Virtually
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
