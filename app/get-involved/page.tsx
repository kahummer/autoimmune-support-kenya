import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, sponsor, or partner with Autoimmune Support Kenya to support the Mega Walk and Run and patients living with autoimmune conditions.",
};

const ways = [
  {
    name: "Volunteer",
    text: "Help with event logistics, meetups, and community outreach.",
    cta: "Become a Volunteer",
    reason: "volunteer",
  },
  {
    name: "Corporate Partnership",
    text: "Sponsor the Mega Walk and Run or an entire need category — diapers, supplements, gadgets, or medication.",
    cta: "Become a Sponsor",
    reason: "sponsor",
  },
  {
    name: "Advocacy",
    text: "Share the message, or host a workplace or church drive.",
    cta: "Partner With Us",
    reason: "partner",
  },
  {
    name: "Skilled Giving",
    text: "Offer medical, design, media, or logistics expertise.",
    cta: "Share Your Skills",
    reason: "skills",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        title="Get Involved With AISK"
        subtitle="There are many ways to stand with autoimmune patients beyond giving money."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid sm:grid-cols-2 gap-5">
          {ways.map((w, i) => (
            <div
              key={w.name}
              className={`rounded-2xl p-8 flex flex-col ${
                i % 2 === 0 ? "bg-violet-deep text-white" : "bg-lavender text-charcoal"
              }`}
            >
              <h2 className="font-bold text-2xl">{w.name}</h2>
              <p className={`mt-3 grow ${i % 2 === 0 ? "text-white/85" : ""}`}>
                {w.text}
              </p>
              <Link
                href={`/contact?reason=${w.reason}`}
                className={`mt-6 self-start rounded-full font-bold px-6 py-2.5 transition-colors ${
                  i % 2 === 0
                    ? "bg-coral hover:bg-coral-dark text-white"
                    : "bg-violet-deep hover:bg-violet-ink text-white"
                }`}
              >
                {w.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-charcoal/75 max-w-2xl mx-auto">
          Each button opens a short form that comes straight to the AISK team —
          we reply by email or WhatsApp within a few days.
        </p>
      </section>
    </>
  );
}
