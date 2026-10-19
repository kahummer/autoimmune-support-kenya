import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { challenge150, megaRun, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "150km Virtual Walk and Run — 20 Oct to 19 Nov",
  description:
    "Join founder Saetwa Saitoti and autoimmune warrior Shannon as they conquer 150km in a month for autoimmune warriors. Walk or run from anywhere, 20 October – 19 November 2026.",
};

export default function Challenge150Page() {
  const stepUpHref =
    challenge150.stepUpUrl ||
    `${site.whatsapp}?text=${encodeURIComponent("Hi AISK, please send me the StepUp link for the 150km challenge.")}`;

  return (
    <>
      <section className="bg-violet-deep text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-sm text-coral">
              Virtual challenge · {challenge150.dates}
            </p>
            <h1 className="mt-2 text-4xl sm:text-6xl font-extrabold leading-tight">
              150km in a month
            </h1>
            <p className="mt-5 text-xl text-white/90 max-w-xl">
              Join the Founder Saetwa Saitoti and her autoimmune warrior
              Shannon as they conquer 150km for a month challenge in support
              of autoimmune warriors.
            </p>
            <p className="mt-4 text-white/80 max-w-xl">
              Walk or run from wherever you are — in Kenya or abroad — log your
              kilometres, and build up to the Mega Walk and Run on 22 November
              at {megaRun.venue}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={megaRun.ticketsUrl}
                target="_blank"
                rel="noopener"
                className="rounded-full bg-coral hover:bg-coral-dark text-white font-bold px-7 py-3.5 transition-colors"
              >
                Join with T-shirt &amp; medal
              </a>
              <a
                href={stepUpHref}
                target="_blank"
                rel="noopener"
                className="rounded-full border-2 border-white/70 hover:border-white text-white font-bold px-7 py-3.5 transition-colors"
              >
                Join on StepUp
              </a>
            </div>
          </div>
          <Image
            src="/images/stories/saetwa-and-shannon.jpg"
            alt="Founder Saetwa Saitoti with Shannon"
            width={1400}
            height={2100}
            sizes="(min-width: 1024px) 384px, 100vw"
            className="w-full max-w-sm h-auto rounded-3xl lg:justify-self-end"
            preload
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-violet-deep">Two ways to join</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border-2 border-coral p-8 flex flex-col">
            <p className="text-coral font-bold uppercase tracking-[0.2em] text-sm">With T-shirt &amp; medal</p>
            <p className="mt-2 font-[family-name:var(--font-poppins)] font-extrabold text-4xl text-violet-deep">
              <span className="text-lg">KSh </span>{challenge150.price.toLocaleString()}
            </p>
            <p className="mt-3 grow">
              Get the challenge T-shirt and a medal. Choose the &ldquo;150km
              Virtual Walk and Run&rdquo; ticket on Madfun — pay by M-Pesa or
              card, from anywhere in the world.
            </p>
            <a
              href={megaRun.ticketsUrl}
              target="_blank"
              rel="noopener"
              className="mt-6 self-start rounded-full bg-coral hover:bg-coral-dark text-white font-bold px-7 py-3 transition-colors"
            >
              Get the ticket on Madfun
            </a>
          </div>
          <div className="rounded-2xl bg-lavender p-8 flex flex-col">
            <p className="text-violet-deep font-bold uppercase tracking-[0.2em] text-sm">Walk with us on StepUp</p>
            <p className="mt-2 font-[family-name:var(--font-poppins)] font-extrabold text-4xl text-violet-deep">
              No medal or shirt
            </p>
            <p className="mt-3 grow">
              Just want to move with us and support? Join the challenge group
              on the StepUp app and log your steps alongside Saetwa and Shannon.
              If you&apos;d like to give, you can donate any amount to Paybill{" "}
              {site.mpesa.paybill}, account {site.mpesa.account}.
            </p>
            <a
              href={stepUpHref}
              target="_blank"
              rel="noopener"
              className="mt-6 self-start rounded-full bg-violet-deep hover:bg-violet-ink text-white font-bold px-7 py-3 transition-colors"
            >
              {challenge150.stepUpUrl ? "Open StepUp" : "Get the StepUp link on WhatsApp"}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-lavender">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-[1fr_360px] gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-violet-deep">Why 150km?</h2>
            <p className="mt-4">
              Living with an autoimmune condition is a long road — often
              walked in silence. For one month, Saetwa and Shannon are turning
              that road into kilometres, and inviting everyone to walk them
              together. Every kilometre raises awareness; every ticket supports
              autoimmune patients in Kenya.
            </p>
            <p className="mt-4">
              <Link href="/stories/shannon" className="font-bold text-coral hover:text-coral-dark">
                Read Shannon&apos;s story →
              </Link>
            </p>
          </div>
          <Image
            src="/images/mega-run/poster-150km-virtual.jpg"
            alt="150km virtual walk and run poster: 20 October to 19 November, in preparation for the Mega Walk and Run; KSh 3,000 gets a T-shirt and a medal; ticketed by Madfun."
            width={1200}
            height={1200}
            sizes="(min-width: 768px) 360px, 100vw"
            className="w-full h-auto rounded-2xl shadow-sm"
          />
        </div>
      </section>
    </>
  );
}
