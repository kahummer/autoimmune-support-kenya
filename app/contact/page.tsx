import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact / Register",
  description:
    "Contact Autoimmune Support Kenya to register for the Mega Run and Walk, support a patient, or ask a question.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get In Touch With Autoimmune Support Kenya"
        subtitle="Register for the Mega Run and Walk, ask about supporting a patient, or simply say hello."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>
          <h2 className="text-2xl font-bold text-violet-deep">
            Send a message
          </h2>
          <ContactForm />
        </div>

        <aside className="space-y-5">
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
                Register for the Run
              </Link>
              <Link
                href="/support-a-patient"
                className="rounded-full border-2 border-white font-bold text-center px-5 py-2.5 hover:bg-white/10 transition-colors"
              >
                Donate Now
              </Link>
            </div>
          </div>
          <div className="rounded-2xl bg-lavender p-7">
            <h2 className="font-bold text-lg text-violet-deep">
              Contact details
            </h2>
            <p className="mt-2 text-[0.95rem]">
              Official email, phone, and WhatsApp lines are being finalized —
              for now, the form is the fastest way to reach us.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
