import type { Metadata } from "next";
import Image from "next/image";
import MpesaBox from "@/components/MpesaBox";
import PageHero from "@/components/PageHero";
import { megaRun, site, vendorPackages } from "@/lib/site";
import VendorForm from "./VendorForm";

export const metadata: Metadata = {
  title: "Vendors — Mega Walk and Run",
  description:
    "Book a vendor stall at the Autoimmune Support Kenya Mega Walk and Run, Sunday 22 November 2026 at The Hub, Karen. Bronze KSh 15,000, Silver KSh 30,000, Gold KSh 50,000 — tent, seats and tables included.",
};

export default function VendorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Vendor callout"
        title="Sell and showcase at the Mega Walk and Run"
        subtitle={`${megaRun.date} at ${megaRun.venue} — meet walkers, runners, families and the autoimmune community while supporting patients.`}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-[1fr_400px] gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold text-violet-deep">Vendor packages</h2>
          <p className="mt-3">
            Every package includes a tent, seats and tables. Call or WhatsApp{" "}
            <a href={site.whatsapp} className="font-bold text-coral hover:text-coral-dark" target="_blank" rel="noopener">
              {site.phone}
            </a>{" "}
            to ask what each package covers.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-5">
            {vendorPackages.map((p, i) => (
              <div
                key={p.name}
                className={`rounded-2xl p-6 text-center ${
                  i === 2 ? "bg-coral text-white" : i === 1 ? "bg-violet-deep text-white" : "bg-lavender text-violet-deep"
                }`}
              >
                <h3 className="font-bold uppercase tracking-[0.2em] text-sm">{p.name}</h3>
                <p className="mt-2 font-[family-name:var(--font-poppins)] font-extrabold text-3xl">
                  <span className="text-base font-bold">KSh </span>
                  {p.price.toLocaleString()}
                </p>
                <p className={`mt-2 text-sm ${i === 0 ? "text-charcoal/75" : "text-white/85"}`}>
                  Tent · seats · tables
                </p>
              </div>
            ))}
          </div>

          <div id="register" className="scroll-mt-20">
            <p className="mt-14 text-coral font-bold uppercase tracking-[0.25em] text-sm">
              Step 1 · Pay
            </p>
            <MpesaBox
              className="mt-3"
              title="Pay for your package via M-Pesa"
              note="Keep the confirmation SMS — you'll paste it in the form below."
            />
            <p className="mt-10 text-coral font-bold uppercase tracking-[0.25em] text-sm">
              Step 2 · Sign up
            </p>
            <VendorForm />
          </div>
        </div>

        <Image
          src="/images/mega-run/poster-vendor-callout.jpg"
          alt="Mega Walk and Run vendor callout poster: Bronze KSh 15,000, Silver KSh 30,000, Gold KSh 50,000; package includes tent, seats and tables; Sunday 22 November 2026, The Hub, Karen, 7:00 AM."
          width={1200}
          height={1200}
          sizes="(min-width: 1024px) 400px, 100vw"
          className="w-full h-auto rounded-2xl shadow-sm lg:sticky lg:top-24"
        />
      </section>
    </>
  );
}
