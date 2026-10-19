import type { Metadata } from "next";
import Link from "next/link";
import MpesaBox from "@/components/MpesaBox";
import PageHero from "@/components/PageHero";
import { site, warriorFee } from "@/lib/site";
import WarriorForm from "./WarriorForm";

export const metadata: Metadata = {
  title: "Autoimmune Warrior Registration",
  description:
    "Living with an autoimmune condition? Register with Autoimmune Support Kenya for KSh 100 — your registration supports bereaved families of autoimmune patients.",
};

export default function WarriorsPage() {
  return (
    <>
      <PageHero
        eyebrow={`KSh ${warriorFee} registration`}
        title="Autoimmune Warrior Registration"
        subtitle="Living with an autoimmune condition? Register with AISK so we can walk with you — and your KSh 100 goes to families who have lost a loved one to autoimmune disease."
      />

      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-3xl font-bold text-violet-deep">Why register?</h2>
        <ul className="mt-5 space-y-3">
          {[
            "Your KSh 100 supports bereaved families of autoimmune patients.",
            "AISK learns which conditions and treatments our community lives with, so we can plan support, events and advocacy around real needs.",
            "You join a community of warriors — you are not alone.",
          ].map((t) => (
            <li key={t} className="flex items-start gap-3">
              <svg viewBox="0 0 20 20" className="h-5 w-5 mt-1 shrink-0 stroke-coral" fill="none" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <path d="m4 10 4 4 8-8" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-coral font-bold uppercase tracking-[0.25em] text-sm">
          Step 1 · Pay KSh {warriorFee}
        </p>
        <MpesaBox
          className="mt-3"
          title={`Pay KSh ${warriorFee} via M-Pesa`}
          note="Keep the confirmation SMS — you'll paste it in the form below."
        />
        <p className="mt-10 text-coral font-bold uppercase tracking-[0.25em] text-sm">
          Step 2 · Register
        </p>
        <WarriorForm />
        <p className="mt-8 text-sm text-charcoal/70">
          Want to walk or run with us too? See the{" "}
          <Link href="/mega-run-and-walk" className="font-bold text-coral hover:text-coral-dark">
            Mega Walk and Run
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
