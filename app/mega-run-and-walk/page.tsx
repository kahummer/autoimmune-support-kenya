import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Countdown from "@/components/Countdown";
import MpesaBox from "@/components/MpesaBox";
import { challenge150, megaRun, partners } from "@/lib/site";
import RegistrationForm from "./RegistrationForm";

export const metadata: Metadata = {
  title: "Mega Walk and Run — 22 November",
  description:
    "Register for the Autoimmune Support Kenya Mega Walk and Run on Sunday 22 November 2026 at The Hub, Karen — 5 km, 10 km, 15 km and 21 km routes supporting autoimmune patients. Tickets on Madfun from KSh 3,000.",
};

const categories = [
  {
    name: "5 km",
    who: "Families, patients, caregivers, and first-time walkers",
    color: "bg-violet-ink",
  },
  {
    name: "10 km",
    who: "Regular walkers and recreational runners",
    color: "bg-violet-deep",
  },
  {
    name: "15 km",
    who: "Experienced walkers and runners",
    color: "bg-coral",
  },
  {
    name: "21 km",
    who: "Half-marathon distance for competitive runners",
    color: "bg-coral-dark",
  },
];

const posters = [
  {
    src: "/images/mega-run/poster-mega-walk-and-run.jpg",
    alt: "Mega Walk and Run for Auto Immune Awareness — Every Step Counts. Sunday 22 November 2026, 5, 10, 15 and 21 km, The Hub, Karen, starts 7:00 AM. Ticketed by Madfun.",
  },
  {
    src: "/images/mega-run/poster-tickets.jpg",
    alt: "Mega Walk and Run ticket prices: Advance KSh 3,000, Regular KSh 3,500. Sunday 22 November 2026, The Hub, Karen.",
  },
  {
    src: "/images/mega-run/poster-early-bird-sold-out.jpg",
    alt: "Early bird tickets at KSh 2,000 are sold out. Advance and regular tickets are still available on Madfun.",
  },
  {
    src: "/images/mega-run/poster-150km-virtual.jpg",
    alt: "150km virtual walk and run, 20 October to 19 November, in preparation for the Mega Walk and Run. KSh 3,000 gets a T-shirt and a medal.",
  },
  {
    src: "/images/mega-run/poster-vendor-callout.jpg",
    alt: "Vendor callout: Bronze KSh 15,000, Silver KSh 30,000, Gold KSh 50,000; package includes tent, seats and tables.",
  },
  {
    src: "/images/mega-run/poster-partners.jpg",
    alt: "Our partners: HealthyU, IPCA, The Hub Karen, INETIQ Fit, Decathlon and PathCare Medical Laboratory Kenya.",
  },
];

// The Paybill route charges the Advance price.
const TICKET_PRICE = megaRun.tickets[0].price;

const ticketPrices = megaRun.tickets
  .map((t) => `${t.name} KSh ${t.price.toLocaleString()}`)
  .join(" · ");

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
              {megaRun.date} at {megaRun.venue} — a community walk and run in
              support of autoimmune patients across Kenya. Walk it. Run it.
              Talk about it. Every ticket funds diapers, supplements, assistive
              gadgets, and medication.
            </p>
            <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-white/90">
              <dt className="font-bold text-white">Date</dt>
              <dd>{megaRun.date}</dd>
              <dt className="font-bold text-white">Venue</dt>
              <dd>{megaRun.venue}</dd>
              <dt className="font-bold text-white">Start time</dt>
              <dd>{megaRun.start}</dd>
              <dt className="font-bold text-white">Distances</dt>
              <dd>{megaRun.distances.join(" · ")}</dd>
              <dt className="font-bold text-white">Tickets</dt>
              <dd>{ticketPrices} — includes a {megaRun.included}</dd>
            </dl>
            <a
              href={megaRun.ticketsUrl}
              target="_blank"
              rel="noopener"
              className="inline-block mt-8 rounded-full bg-coral hover:bg-coral-dark text-white font-bold px-7 py-3.5 transition-colors"
            >
              Buy tickets on Madfun
            </a>
          </div>
          <div className="lg:justify-self-end">
            <Countdown />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-violet-deep">Distances</h2>
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

      <section id="register" className="bg-lavender scroll-mt-20">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="text-3xl font-bold text-violet-deep">Get your ticket</h2>
          <p className="mt-3">
            Tickets are sold on Madfun — pay by M-Pesa or card, from Kenya or
            anywhere in the world. Every ticket includes a {megaRun.included}.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {megaRun.tickets.map((t) => (
              <div key={t.name} className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <h3 className="font-bold uppercase tracking-[0.2em] text-sm text-coral">{t.name}</h3>
                <p className="mt-2 font-[family-name:var(--font-poppins)] font-extrabold text-3xl text-violet-deep">
                  <span className="text-base">KSh </span>
                  {t.price.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
          <a
            href={megaRun.ticketsUrl}
            target="_blank"
            rel="noopener"
            className="inline-block mt-8 rounded-full bg-coral hover:bg-coral-dark text-white font-bold px-8 py-3.5 transition-colors"
          >
            Buy tickets on Madfun
          </a>

          <details className="mt-12 rounded-2xl bg-white p-6 group">
            <summary className="cursor-pointer font-bold text-violet-deep">
              Prefer to pay by M-Pesa Paybill? Register here instead
            </summary>
            <p className="mt-4">
              Pay KSh {TICKET_PRICE.toLocaleString()} to our Paybill, then fill
              in the form and paste your confirmation message so we can match
              your payment.
            </p>
            <p className="mt-8 text-coral font-bold uppercase tracking-[0.25em] text-sm">
              Step 1 · Pay
            </p>
            <MpesaBox
              className="mt-3"
              title={`Pay your KSh ${TICKET_PRICE.toLocaleString()} ticket via M-Pesa`}
              note="Keep the confirmation SMS — you'll paste it in the form below."
            />
            <p className="mt-10 text-coral font-bold uppercase tracking-[0.25em] text-sm">
              Step 2 · Register
            </p>
            <RegistrationForm />
          </details>
        </div>
      </section>

      <section id="virtual" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="text-coral font-bold uppercase tracking-[0.25em] text-sm">
              Virtual challenge · {challenge150.dates}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-violet-deep">
              150km in a month — walk and run from anywhere
            </h2>
            <p className="mt-4 max-w-2xl">
              Join the Founder Saetwa Saitoti and her autoimmune warrior
              Shannon as they conquer 150km for a month challenge in support
              of autoimmune warriors. Get a T-shirt and medal for KSh{" "}
              {challenge150.price.toLocaleString()}, or join on the StepUp app
              without them.
            </p>
          </div>
          <Link
            href="/150km"
            className="justify-self-start md:justify-self-end rounded-full bg-violet-deep hover:bg-violet-ink text-white font-bold px-7 py-3.5 transition-colors"
          >
            Join the 150km challenge
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-coral font-bold uppercase tracking-[0.25em] text-sm">
          Our partners
        </p>
        <h2 className="mt-2 text-3xl font-bold text-violet-deep">
          Walking with us this year
        </h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {partners.map((name) => (
            <li
              key={name}
              className="rounded-full border-2 border-lavender px-5 py-2.5 font-bold text-violet-deep"
            >
              {name}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[0.95rem] text-charcoal/70">
          Want to join them?{" "}
          <Link href="/contact?reason=sponsor" className="font-bold text-coral hover:text-coral-dark">
            Become a sponsor
          </Link>
          .
        </p>
      </section>

      <section className="bg-lavender">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold text-violet-deep">Posters</h2>
          <p className="mt-3">Share them on WhatsApp, Facebook and Instagram.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posters.map((p) => (
              <a key={p.src} href={p.src} target="_blank" rel="noopener" className="block">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={1200}
                  height={1200}
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="w-full h-auto rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-violet-deep">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center">
          <h2 className="text-2xl font-bold text-white">
            More ways to be part of the day
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/vendors"
              className="rounded-full bg-coral hover:bg-coral-dark text-white font-bold px-6 py-3 transition-colors"
            >
              Book a Vendor Stall
            </Link>
            <Link
              href="/warriors"
              className="rounded-full border-2 border-white/70 hover:border-white text-white font-bold px-6 py-3 transition-colors"
            >
              Autoimmune Warrior Registration
            </Link>
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
          </div>
        </div>
      </section>
    </>
  );
}
