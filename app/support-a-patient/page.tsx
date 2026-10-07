import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import MpesaBox from "@/components/MpesaBox";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support a Patient",
  description:
    "Donate to Autoimmune Support Kenya to provide adult diapers, supplements, assistive gadgets, medication, and counselling for autoimmune patients in need.",
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
  {
    title: "Counselling & therapy",
    text: "Sessions with counsellors and psychologists for patients and caregivers carrying the emotional weight of chronic illness.",
  },
];

const ways = [
  {
    name: "One-time donation",
    text: "Give any amount toward the need that speaks to you.",
  },
  {
    name: "Monthly giving",
    text: "Steady support that patients can count on, month after month.",
  },
  {
    name: "Sponsor a Patient",
    text: "Cover one patient's monthly needs in full.",
  },
  {
    name: "In-kind donation",
    text: "Give diapers, supplements, or equipment directly — get in touch to arrange drop-off.",
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        tone="coral"
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
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {needs.map((n, i) => (
            <div
              key={n.title}
              className={`rounded-2xl bg-lavender p-6 border-t-4 ${
                i % 2 === 0 ? "border-violet-deep" : "border-coral"
              }`}
            >
              <h3 className="font-bold text-lg text-violet-deep">{n.title}</h3>
              <p className="mt-1.5 text-[0.95rem]">{n.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="donate" className="bg-violet-deep text-white scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-coral font-bold uppercase tracking-[0.25em] text-sm">
              Donate now
            </p>
            <h2 className="mt-2 text-3xl font-bold">Give via M-Pesa</h2>
            <p className="mt-4 text-white/85 max-w-xl">
              Every shilling goes toward a patient&apos;s needs. Use the
              Paybill details here, then{" "}
              <Link href="/contact?reason=donate" className="underline font-semibold hover:text-coral">
                send us a message
              </Link>{" "}
              or WhatsApp{" "}
              <a href={site.whatsapp} className="underline font-semibold hover:text-coral">
                {site.phone}
              </a>{" "}
              if you&apos;d like your gift directed to a specific need or
              patient.
            </p>
          </div>
          <MpesaBox title="Donate via M-Pesa" />
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
                  href="/contact?reason=donate"
                  className="mt-5 self-start rounded-full bg-violet-deep hover:bg-violet-ink text-white font-bold px-6 py-2.5 transition-colors"
                >
                  Talk to us
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-charcoal/75 max-w-2xl mx-auto">
            Card payments are coming. For now, M-Pesa is the quickest way to
            give — or{" "}
            <Link href="/contact?reason=donate" className="font-bold text-coral hover:text-coral-dark">
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
