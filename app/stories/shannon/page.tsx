import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shannon's Story — From Paralysis to Walking Again",
  description:
    "How a Kenyan teenager with polymyositis went from total paralysis, misdiagnosis and stigma to walking again — and why her mother founded Autoimmune Support Kenya.",
};

export default function ShannonStoryPage() {
  return (
    <>
      <section className="bg-violet-deep text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
          <p className="text-coral font-bold uppercase tracking-[0.25em] text-sm">
            Patient story · Polymyositis
          </p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold leading-tight">
            Shannon: from paralysis to walking again
          </h1>
          <p className="mt-5 text-lg text-white/90 max-w-2xl">
            A teenager, a rare disease nobody could name, and a mother who
            refused to accept &ldquo;she will never walk again&rdquo;.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-[1fr_380px] gap-12">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-violet-deep">A cold that wouldn&apos;t go</h2>
          <p className="mt-4">
            In July 2024, 13-year-old Shannon joined boarding school. Within
            weeks she had a cough that would not clear, then an ache in her
            neck, blurry vision, and no appetite. Her mother, Saetwa, put it
            down to allergies and the change of environment. Then Shannon
            found she could not lift her arms above her head. She could not
            climb stairs. She could not hold a mug.
          </p>
          <p className="mt-4">
            Her legs went numb. Over the following months the weakness crept
            upward until she was paralysed from the neck down, dependent on a
            wheelchair and on her mother for everything.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-violet-deep">
            Tests, theories, and &ldquo;it&apos;s in her head&rdquo;
          </h2>
          <p className="mt-4">
            What followed was months of hospital visits across Nairobi. Blood
            tests, scans, spinal taps. One doctor said arthritis. Another
            suggested the symptoms were psychological — while still
            prescribing medication. A telemedicine consultation proposed
            transverse myelitis. Every doctor added a bill; none added an
            answer. Eventually Shannon was told she would never walk again.
          </p>
          <p className="mt-4">
            Outside the hospital the pressure was different but just as
            heavy. Relatives and neighbours whispered about witchcraft and
            curses. Saetwa lost her job to become Shannon&apos;s full-time
            caregiver, and the family&apos;s savings drained away on tests and
            medicines that changed nothing.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-violet-deep">Three days in India</h2>
          <p className="mt-4">
            With help from friends, church members, and strangers who gave
            online, Saetwa raised the money to take Shannon to a hospital in
            India. Doctors there took a full history, examined her properly,
            and within three days had a diagnosis: <strong>polymyositis</strong>
            — a rare autoimmune disease in which the immune system attacks the
            body&apos;s own muscles and breaks them down.
          </p>
          <p className="mt-4">
            Unlike the symptom-by-symptom treatment at home, the Indian team
            aimed at the root cause: therapy to regulate the immune system,
            daily physiotherapy and muscle stimulation, and careful nutrition.
            It was intensive and often painful. Progress came in millimetres,
            then in steps. Shannon stood. Then, as a birthday gift to her
            mother, she walked.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-violet-deep">Back to school — and forward</h2>
          <p className="mt-4">
            After nearly a year away, Shannon returned to school and to the
            ordinary life of a teenager. Polymyositis is a lifelong condition,
            managed rather than cured, so the journey continues — but she is
            walking it on her own feet.
          </p>
          <blockquote className="mt-8 border-l-4 border-coral pl-5 italic text-lg text-violet-deep">
            &ldquo;I found that many people are living with autoimmune
            diseases and don&apos;t even know it. Others are diagnosed but
            don&apos;t have access to proper treatment or information.&rdquo;
            <footer className="mt-2 not-italic text-sm font-semibold text-charcoal/70">
              — Saetwa Saitoti
            </footer>
          </blockquote>
          <p className="mt-6">
            Saetwa founded Autoimmune Support Kenya so that the next family
            would not have to search alone: a community of patients and
            caregivers, honest information, practical help with the costs of
            care, and advocacy for faster diagnosis in Kenya. Shannon&apos;s
            story is the reason for every webinar, every meetup, and every
            step of the Mega Walk and Run.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/support-a-patient"
              className="rounded-full bg-coral hover:bg-coral-dark text-white font-bold px-6 py-3 transition-colors"
            >
              Support a Patient
            </Link>
            <Link
              href="/about#autoimmune"
              className="rounded-full bg-violet-deep hover:bg-violet-ink text-white font-bold px-6 py-3 transition-colors"
            >
              What are autoimmune conditions?
            </Link>
          </div>

          <p className="mt-10 text-sm text-charcoal/70">
            Shared with the family&apos;s consent. Read the full reporting by
            Sarah Kamande at Willow Health Media:{" "}
            <a
              className="underline hover:text-coral"
              href="https://willowhealthmedia.org/she-couldnt-feel-her-legs-her-body-shut-down-now-she-walks-again/"
              target="_blank"
              rel="noopener"
            >
              part one
            </a>{" "}
            and{" "}
            <a
              className="underline hover:text-coral"
              href="https://willowhealthmedia.org/my-daughter-couldnt-stand-climb-stairs-hold-a-mug/"
              target="_blank"
              rel="noopener"
            >
              part two
            </a>
            .
          </p>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 self-start">
          <Image
            src="/images/stories/shannon-wheelchair.jpg"
            alt="Shannon in a wheelchair during her illness"
            width={900}
            height={900}
            sizes="(min-width: 1024px) 380px, 100vw"
            className="rounded-2xl w-full h-auto"
          />
          <Image
            src="/images/stories/saetwa-and-shannon.jpg"
            alt="Saetwa and Shannon together after her recovery"
            width={1400}
            height={2100}
            sizes="(min-width: 1024px) 380px, 100vw"
            className="rounded-2xl w-full h-auto"
          />
          <div className="rounded-2xl bg-lavender p-6">
            <p className="font-bold text-violet-deep">Recognise these symptoms?</p>
            <p className="mt-2 text-[0.95rem]">
              Ask your doctor for a referral to a specialist, and join{" "}
              {site.facebookMembers} patients and caregivers in the AISK
              support group.
            </p>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener"
              className="inline-block mt-3 font-bold text-coral hover:text-coral-dark"
            >
              Join the Facebook group →
            </a>
          </div>
        </aside>
      </article>
    </>
  );
}
