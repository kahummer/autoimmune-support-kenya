import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact / Register",
  description:
    "Contact Autoimmune Support Kenya to register for the Mega Walk and Run, support a patient, volunteer, or ask a question. Call or WhatsApp 0720 560 328.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get In Touch With Autoimmune Support Kenya"
        subtitle="Register for the Mega Walk and Run, ask about supporting a patient, volunteer, or simply say hello."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>
          <h2 className="text-2xl font-bold text-violet-deep">
            Send a message
          </h2>
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>

        <aside className="space-y-5">
          <div className="rounded-2xl bg-lavender p-7">
            <h2 className="font-bold text-lg text-violet-deep">
              Contact details
            </h2>
            <dl className="mt-4 space-y-3 text-[0.95rem]">
              <div>
                <dt className="font-semibold text-charcoal/70">Phone / WhatsApp</dt>
                <dd>
                  <a href={`tel:${site.phoneIntl}`} className="font-bold text-violet-deep hover:text-coral">
                    {site.phone}
                  </a>
                  {" · "}
                  <a href={site.whatsapp} className="font-bold text-coral hover:text-coral-dark" target="_blank" rel="noopener">
                    WhatsApp
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-charcoal/70">Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="font-bold text-violet-deep hover:text-coral break-all">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-charcoal/70">Support group</dt>
                <dd>
                  <a href={site.facebook} className="font-bold text-violet-deep hover:text-coral" target="_blank" rel="noopener">
                    Autoimmune Support Kenya on Facebook
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-charcoal/70">Location</dt>
                <dd>Nairobi, Kenya</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-2xl bg-coral text-white p-7">
            <h2 className="font-bold text-xl">In a hurry?</h2>
            <p className="mt-2 text-white/90 text-[0.95rem]">
              Jump straight to the action you came for.
            </p>
            <div className="mt-5 flex flex-col gap-2.5">
              <Link
                href="/mega-run-and-walk#register"
                className="rounded-full bg-white text-coral font-bold text-center px-5 py-2.5 hover:bg-lavender transition-colors"
              >
                Register for the Walk and Run
              </Link>
              <Link
                href="/support-a-patient#donate"
                className="rounded-full border-2 border-white font-bold text-center px-5 py-2.5 hover:bg-white/10 transition-colors"
              >
                Donate via M-Pesa
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
