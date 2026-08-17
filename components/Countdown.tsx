"use client";

import { useEffect, useState } from "react";

function nextEventDate(): Date {
  const now = new Date();
  const year = now.getFullYear();
  const event = new Date(year, 10, 22, 6, 0, 0); // 22 November, 6:00 AM
  return now > event ? new Date(year + 1, 10, 22, 6, 0, 0) : event;
}

function diff(target: Date) {
  const ms = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms % 86400000) / 3600000),
    minutes: Math.floor((ms % 3600000) / 60000),
    seconds: Math.floor((ms % 60000) / 1000),
  };
}

function Bib({ value, label }: { value: number; label: string }) {
  return (
    <div className="relative bg-white rounded-lg px-3 py-2.5 sm:px-5 sm:py-4 text-center shadow-lg rotate-[-1deg] even:rotate-[1.5deg]">
      {/* bib pin dots */}
      <span className="absolute top-1.5 left-1.5 h-1.5 w-1.5 rounded-full bg-lavender ring-1 ring-violet-deep/30" aria-hidden="true" />
      <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-lavender ring-1 ring-violet-deep/30" aria-hidden="true" />
      <span className="block font-[family-name:var(--font-poppins)] font-extrabold text-3xl sm:text-5xl text-violet-deep tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="block text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-coral">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    const target = nextEventDate();
    const tick = () => setTime(diff(target));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div aria-label="Countdown to the Mega Run and Walk on 22 November">
      <p className="text-white/90 font-semibold text-sm uppercase tracking-[0.25em] mb-3">
        Mega Run and Walk · 22 November
      </p>
      <div className="flex gap-2.5 sm:gap-4">
        <Bib value={time?.days ?? 0} label="Days" />
        <Bib value={time?.hours ?? 0} label="Hours" />
        <Bib value={time?.minutes ?? 0} label="Mins" />
        <Bib value={time?.seconds ?? 0} label="Secs" />
      </div>
    </div>
  );
}
