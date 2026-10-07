import type { Metadata } from "next";
import Link from "next/link";
import Countdown from "@/components/Countdown";
import MpesaBox from "@/components/MpesaBox";
import RegistrationForm from "./RegistrationForm";

export const metadata: Metadata = {
  title: "Mega Walk and Run — 22 November",
  description:
    "Register for the Autoimmune Support Kenya Mega Walk and Run on Sunday 22 November at The Waterfront, Karen — 3.5 km, 7.5 km and 14.5 km routes supporting autoimmune patients. Tickets KSh 3,000.",
};

const categories = [
  {
    name: "3.5 km",
    who: "Families, patients, caregivers, and first-time walkers",
    color: "bg-violet-ink",
  },
  {
    name: "7.5 km",
    who: "Regular walkers and recreational runners",
    color: "bg-violet-deep",
  },
  {
    name: "14.5 km",
    who: "Competitive and experienced runners",
    color: "bg-coral",
  },
];

const included = ["Event T-shirt", "Finisher medal", "Water bottle"];

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
              The Mega Walk and Run
            </h1>
            <p className="mt-3 text-xl font-semibold text-white/90">
              For Autoimmune Awareness — Every Step Counts
            </p>
            <p className="mt-5 text-white/85 max-w-xl">
              Sunday, 22 November at The Waterfront, Karen — a community walk
              and run in support of autoimmune patients across Kenya. Walk it.
              Run it. Talk about it. Every registration funds diapers,
              supplements, assistive gadgets, and medication.
            </p>
            <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-white/90">
              <dt className="font-bold text-white">Date</dt>
              <dd>Sunday, 22 November 2026</dd>
              <dt className="font-bold text-white">Venue</dt>
              <dd>The Waterfront, Karen</dd>
              <dt className="font-bold text-white">Start time</dt>
              <dd>7:00 AM</dd>
              <dt className="font-bold text-white">Distances</dt>
              <dd>3.5 km · 7.5 km · 14.5 km</dd>
              <dt className="font-bold text-white">Ticket</dt>
              <dd>KSh 3,000 — includes medal, T-shirt and water bottle</dd>
            </dl>
          </div>
          <div className="lg:justify-self-end">
            <Countdown />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-violet-deep">Distances</h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-5">
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
                "Pay the KSh 3,000 ticket via M-Pesa — Paybill 880100, account 040444",
                "Complete the form — name, age, phone, email, distance, T-shirt size, emergency contact",
                "Paste your M-Pesa confirmation message so we can match your payment",
                "Get your confirmation by SMS or WhatsApp, then collect your T-shirt and water bottle on the day",
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
          Tickets are KSh 3,000 and include a medal, T-shirt and water bottle.
          Two steps: pay via M-Pesa, then fill in the form and paste your
          confirmation message so we can match your payment.
        </p>
        <p className="mt-8 text-coral font-bold uppercase tracking-[0.25em] text-sm">
          Step 1 · Pay
        </p>
        <MpesaBox
          className="mt-3"
          title="Pay your KSh 3,000 ticket via M-Pesa"
          note="Keep the confirmation SMS — you'll paste it in the form below."
        />
        <p className="mt-10 text-coral font-bold uppercase tracking-[0.25em] text-sm">
          Step 2 · Register
        </p>
        <RegistrationForm />
      </section>

      <section id="virtual" className="bg-lavender scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="text-coral font-bold uppercase tracking-[0.25em] text-sm">
              Launching 20 October
            </p>
            <h2 className="mt-2 text-3xl font-bold text-violet-deep">
              Walk and run virtually — from anywhere
            </h2>
            <p className="mt-4 max-w-2xl">
              Can&apos;t be in Karen on 22 November? Join the virtual walk and
              run: for one month, participants across Kenya and abroad log
              their steps together through a step-tracking app and raise funds
              for autoimmune patients as they go. Registration and the app link
              open on 20 October.
            </p>
          </div>
          <Link
            href="/contact?reason=register"
            className="justify-self-start md:justify-self-end rounded-full bg-violet-deep hover:bg-violet-ink text-white font-bold px-7 py-3.5 transition-colors"
          >
            Tell me when it opens
          </Link>
        </div>
      </section>

      <section className="bg-violet-deep">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center">
          <h2 className="text-2xl font-bold text-white">
            More ways to be part of the day
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact?reason=sponsor"
              className="rounded-full border-2 border-white/70 hover:border-white text-white font-bold px-6 py-3 transition-colors"
            >
              Become a Sponsor
            </Link>
            <Link
              href="/contact?reason=volunteer"
              className="rounded-full border-2 border-white/70 hover:border-white text-white font-bold px-6 py-3 transition-colors"
            >
              Volunteer at the Event
            </Link>
            <Link
              href="#virtual"
              className="rounded-full bg-coral hover:bg-coral-dark text-white font-bold px-6 py-3 transition-colors"
            >
              Walk Virtually (from 20 Oct)
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
