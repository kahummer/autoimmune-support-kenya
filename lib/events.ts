// Past AISK events, newest first. Posters live in public/images/events.
export type PastEvent = {
  title: string;
  date: string;
  format: string;
  text: string;
  image: string;
  imageHeight: number;
};

export const pastEvents: PastEvent[] = [
  {
    title: "Watch Party: Life in a Year",
    date: "Saturday 8 August 2026",
    format: "Online · 8:00–9:30 PM EAT",
    text: "Patients and caregivers watched a film about living fully in the face of illness, then talked about it together — laughter, snacks, and honest conversation from the comfort of home.",
    image: "/images/events/watch-party-life-in-a-year.jpg",
    imageHeight: 1274,
  },
  {
    title: "\"It's All in Your Head\" — stigma and autoimmune disease",
    date: "Thursday 30 July 2026",
    format: "Online · 8:00 PM EAT",
    text: "A discussion about the stigma surrounding autoimmune conditions — from being told symptoms are imaginary to beliefs like witchcraft — and how it affects patients and their families.",
    image: "/images/events/stigma-discussion.jpg",
    imageHeight: 900,
  },
  {
    title: "Hope in Every Story — X Spaces with Hope Arthritis Foundation",
    date: "Wednesday 1 July 2026",
    format: "X Spaces · 6:00 PM EAT",
    text: "Founder Saetwa Saitoti joined Hope Arthritis Foundation as guest speaker to share lived experience with autoimmune disease from the lens of an advocate and counsellor.",
    image: "/images/events/hope-arthritis-x-spaces.jpg",
    imageHeight: 900,
  },
  {
    title: "Public engagement: policies patients need from SHA",
    date: "Thursday 18 June 2026",
    format: "Google Meet · 8:00 PM EAT",
    text: "Patients and caregivers gathered to discuss the policies the Social Health Authority needs to implement for people living with autoimmune disease — from diagnosis to affordable, continuous treatment.",
    image: "/images/events/sha-public-engagement.jpg",
    imageHeight: 900,
  },
  {
    title: "The Invisible Weight — emotional realities of autoimmune disease",
    date: "Tuesday 26 May 2026",
    format: "Free webinar · 8:00–10:00 PM EAT",
    text: "With psychologist Esther Maguta and counsellor Arune Hicks, hosted by peer counsellor Saetwa Saitoti: a conversation about the mental and emotional load of living with a chronic, invisible illness.",
    image: "/images/events/webinar-invisible-weight.jpg",
    imageHeight: 900,
  },
  {
    title: "Autoimmune Disease Challenges — an introduction to AISK",
    date: "Thursday 2 April 2026",
    format: "Online · 8:00–9:30 PM EAT",
    text: "AISK's first webinar: who we are, and the challenges patients face — diagnostic delays, the burden of disease, and unmet needs in patient management, from the patient's perspective.",
    image: "/images/events/webinar-autoimmune-challenges.jpg",
    imageHeight: 900,
  },
];
