import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MpesaBox from "@/components/MpesaBox";
import PageHero from "@/components/PageHero";
import { groupOffers, megaRun, site } from "@/lib/site";
import RegistrationForm from "@/app/mega-run-and-walk/RegistrationForm";

// Unlisted sign-up pages for running clubs joining at an agreed price, e.g.
// /run/featbeat. Shared directly with the club; not linked from the menu or
// indexed by search engines. Registrations go into the same Google Form and
// Sheet as the main Paybill form, with the amount column showing the group
// price.

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return groupOffers.map((o) => ({ slug: o.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const offer = groupOffers.find((o) => o.slug === slug);
  if (!offer) return {};
  return {
    title: `${offer.name} runners — Mega Walk and Run`,
    description: `${offer.name} members: register for the Mega Walk and Run on ${megaRun.date} at ${megaRun.venue} for KSh ${offer.price.toLocaleString()}.`,
    robots: { index: false, follow: false },
  };
}

export default async function GroupRunPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const offer = groupOffers.find((o) => o.slug === slug);
  if (!offer) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${offer.name} · KSh ${offer.price.toLocaleString()}`}
        title={`${offer.name} runners, join the Mega Walk and Run`}
        subtitle={`${megaRun.date} at ${megaRun.venue}, ${megaRun.start} start. ${offer.name} members register here for KSh ${offer.price.toLocaleString()} — ${megaRun.included} included.`}
      />

      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-3xl font-bold text-violet-deep">How to register</h2>
        <p className="mt-3">
          Pay KSh {offer.price.toLocaleString()} to our Paybill, then fill in
          the form and paste your confirmation message so we can match your
          payment. Choose your distance: {megaRun.distances.join(", ")}.
        </p>

        <p className="mt-10 text-coral font-bold uppercase tracking-[0.25em] text-sm">
          Step 1 · Pay
        </p>
        <MpesaBox
          className="mt-3"
          title={`Pay your KSh ${offer.price.toLocaleString()} ${offer.name} ticket via M-Pesa`}
          note="Keep the confirmation SMS — you'll paste it in the form below."
        />

        <p className="mt-10 text-coral font-bold uppercase tracking-[0.25em] text-sm">
          Step 2 · Register
        </p>
        <RegistrationForm price={offer.price} />

        <p className="mt-10 text-[0.95rem] text-charcoal/70">
          This price is for {offer.name} members. Everyone else can{" "}
          <Link href="/mega-run-and-walk#register" className="font-bold text-coral hover:text-coral-dark">
            get tickets here
          </Link>
          . Questions? WhatsApp{" "}
          <a href={site.whatsapp} className="font-bold text-coral hover:text-coral-dark" target="_blank" rel="noopener">
            {site.phone}
          </a>
          .
        </p>
      </section>
    </>
  );
}
