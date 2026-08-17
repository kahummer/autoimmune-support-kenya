import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Support a Patient",
  description:
    "Donate to Autoimmune Support Kenya to provide adult diapers, supplements, assistive gadgets, and medication for autoimmune patients in need.",
};

const needs = [
  {
    title: "Adult diapers",
    text: "Dignity for patients managing incontinence or limited mobility.",
  },
  {
    title: "Supplements",
    text: "Nutritional and medical support for daily health.",
  },
  {
    title: "Assistive gadgets",
    text: "Wheelchairs, walkers, and mobility aids.",
  },
  {
    title: "Medication",
    text: "Essential, ongoing treatment access.",
  },
];

const ways = [
  {
    name: "One-time donation",
    text: "Give any amount toward the need that speaks to you.",
    cta: "Donate Now",
  },
  {
    name: "Monthly giving",
    text: "Steady support that patients can count on, month after month.",
    cta: "Set Up Monthly Giving",
  },
  {
    name: "Sponsor a Patient",
    text: "Cover one patient's monthly needs in full.",
    cta: "Sponsor a Patient",
  },
  {
    name: "In-kind donation",
    text: "Give diapers, supplements, or equipment directly. Drop-off details coming soon.",
    cta: "Give In-Kind",
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        tone="teal"
        title="Support a Patient. Restore Dignity."
        subtitle="Your donation funds the everyday essentials autoimmune patients often struggle to afford."
      />

      <section className="mx-auto max-w-3xl px-4 pt-16 text-center">
        <p>
          Living with an autoimmune condition often means ongoing costs
          insurance and income can&apos;t fully cover. Your donation goes
          directly toward essentials that restore comfort, mobility, and
          dignity.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-violet-deep text-center">
          What your donation provides
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {needs.map((n) => (
            <div
              key={n.title}
              className="rounded-2xl bg-lavender p-6 border-t-4 border-teal-care"
            >
              <h3 className="font-bold text-lg text-violet-deep">{n.title}</h3>
              <p className="mt-1.5 text-[0.95rem]">{n.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-lavender">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold text-violet-deep text-center">
            Ways to give
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {ways.map((w) => (
              <div
                key={w.name}
                className="bg-white rounded-2xl p-7 flex flex-col"
              >
                <h3 className="font-bold text-xl text-violet-deep">{w.name}</h3>
                <p className="mt-2 grow">{w.text}</p>
                <Link
                  href="/contact"
                  className="mt-5 self-start rounded-full bg-teal-care hover:bg-teal-dark text-white font-bold px-6 py-2.5 transition-colors"
                >
                  {w.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-charcoal/75 max-w-2xl mx-auto">
            M-Pesa and card giving is launching soon. In the meantime,{" "}
            <Link href="/contact" className="font-bold text-teal-care hover:text-teal-dark">
              contact us
            </Link>{" "}
            and we&apos;ll connect your gift directly to a patient&apos;s needs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-violet-deep">
          Giving you can trust
        </h2>
        <p className="mt-4">
          Donations are tracked against patient needs, and AISK publishes
          periodic, consent-based impact updates — so you always know your
          giving reached a real person, with their dignity intact.
        </p>
      </section>
    </>
  );
}
