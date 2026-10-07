import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Community and Events",
  description:
    "Join Autoimmune Support Kenya's community — online watch parties, webinars, and support meetups for patients and caregivers.",
};

const activities = [
  {
    name: "Movie Watch Parties",
    text: "Relaxed screenings with snacks and connection.",
    icon: (
      <>
        <rect x="6" y="12" width="36" height="24" rx="3" />
        <path d="M6 20h36M14 12v8M24 12v8M34 12v8M20 26l8 4-8 4v-8Z" strokeLinejoin="round" />
      </>
    ),
  },
  {
    name: "Raffle Draws",
    text: "Fun, low-pressure fundraising with prizes — we're working out the details, and will announce the first draw in the group.",
    icon: (
      <>
        <path d="M8 18v-4a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v4a4 4 0 0 0 0 12v4a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-4a4 4 0 0 0 0-12Z" strokeLinejoin="round" />
        <path d="M28 12v24" strokeDasharray="3 4" />
      </>
    ),
  },
  {
    name: "Support Circles / Meetups",
    text: "Peer gatherings for shared experience and encouragement.",
    icon: (
      <>
        <circle cx="16" cy="16" r="5" />
        <circle cx="32" cy="16" r="5" />
        <path d="M6 38c0-6 4-10 10-10s10 4 10 10M26 32c2-2.5 4-4 8-4 6 0 8 4 8 10" strokeLinejoin="round" />
      </>
    ),
  },
  {
    name: "Wellness Days",
    text: "Guided stretching, nutrition talks, and rest-focused sessions.",
    icon: (
      <>
        <path d="M24 40s-14-8-14-18a8 8 0 0 1 14-5 8 8 0 0 1 14 5c0 10-14 18-14 18Z" strokeLinejoin="round" />
      </>
    ),
  },
];

export default function CommunityPage() {
  return (
    <>
      <PageHero
        title="Community That Cares, Moments That Heal"
        subtitle="Living with autoimmune illness isn't only hospitals and hardship — it's also laughter, rest, and belonging."
      />

      <section className="mx-auto max-w-3xl px-4 pt-16 text-center">
        <p>
          Alongside fundraising, AISK hosts regular activities where patients,
          caregivers, volunteers, and friends can enjoy being together.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-violet-deep text-center">
          Featured activities
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {activities.map((a) => (
            <div
              key={a.name}
              className="rounded-2xl border-2 border-lavender p-7 flex gap-5 items-start hover:border-violet-deep/40 transition-colors"
            >
              <svg
                viewBox="0 0 48 48"
                className="h-12 w-12 shrink-0 stroke-coral"
                fill="none"
                strokeWidth="2.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {a.icon}
              </svg>
              <div>
                <h3 className="font-bold text-xl text-violet-deep">{a.name}</h3>
                <p className="mt-1.5">{a.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-lavender">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-violet-deep">
            Upcoming events
          </h2>
          <p className="mt-4 max-w-xl mx-auto">
            The next big one is the Mega Walk and Run on 22 November. Webinars,
            watch parties, and meetups are announced first in our Facebook
            group of {site.facebookMembers} patients and caregivers.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener"
              className="rounded-full bg-coral hover:bg-coral-dark text-white font-bold px-6 py-3 transition-colors"
            >
              Join the Facebook Group
            </a>
            <Link
              href="/resources#events"
              className="rounded-full bg-violet-deep hover:bg-violet-ink text-white font-bold px-6 py-3 transition-colors"
            >
              See Past Events
            </Link>
            <Link
              href="/contact?reason=events"
              className="rounded-full border-2 border-violet-deep text-violet-deep hover:bg-violet-deep hover:text-white font-bold px-6 py-3 transition-colors"
            >
              Join a Support Circle
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
