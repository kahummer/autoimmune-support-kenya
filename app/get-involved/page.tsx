import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, sponsor, or partner with Autoimmune Support Kenya to support the Mega Run and Walk and patients living with autoimmune conditions.",
};

const ways = [
  {
    name: "Volunteer",
    text: "Help with event logistics, meetups, and community outreach.",
    cta: "Become a Volunteer",
  },
  {
    name: "Corporate Partnership",
    text: "Sponsor the Mega Run and Walk or an entire need category — diapers, supplements, gadgets, or medication.",
    cta: "Become a Sponsor",
  },
  {
    name: "Advocacy",
    text: "Share the message, or host a workplace or church drive.",
    cta: "Partner With Us",
  },
  {
    name: "Skilled Giving",
    text: "Offer medical, design, media, or logistics expertise.",
    cta: "Share Your Skills",
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
                i % 3 === 0
                  ? "bg-violet-deep text-white"
                  : i % 3 === 1
                    ? "bg-lavender text-charcoal"
                    : "bg-teal-care text-white"
              }`}
            >
              <h2 className="font-bold text-2xl">{w.name}</h2>
              <p className={`mt-3 grow ${i % 3 === 1 ? "" : "text-white/85"}`}>
                {w.text}
              </p>
              <Link
                href="/contact"
                className={`mt-6 self-start rounded-full font-bold px-6 py-2.5 transition-colors ${
                  i % 3 === 1
                    ? "bg-violet-deep text-white hover:bg-violet-ink"
                    : "bg-white hover:bg-lavender"
                } ${i % 3 === 0 ? "text-violet-deep" : ""} ${i % 3 === 2 ? "text-teal-care" : ""}`}
              >
                {w.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
