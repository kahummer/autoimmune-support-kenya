"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { site } from "@/lib/site";

// Messages go straight to the "AISK Website — Contact" Google Form, whose
// responses land in its linked Google Sheet. If a question is added, renamed
// or reordered in Google Forms, update the entry IDs here.
const GOOGLE_FORM_ID = "1GrzjyoCYLhUR9mOdT3NLh0e0OQXai3nwTmmXZLnYLEA";
const GOOGLE_FORM_ENTRIES: Record<string, string> = {
  name: "entry.612065248",
  organization: "entry.206082844",
  email: "entry.23739545",
  phone: "entry.717028628",
  relationship: "entry.1209845593",
  reason: "entry.926077568",
  message: "entry.152187407",
};

const REASONS = [
  "Register for the Mega Walk and Run",
  "Support a patient / donate",
  "Community events",
  "Volunteer, sponsor, or partner",
  "Share my story",
  "Something else",
] as const;

const ROLES = [
  "Patient",
  "Caregiver",
  "Donor",
  "Volunteer",
  "Company / organisation",
  "Media",
] as const;

// ?reason=… values used by buttons around the site.
const REASON_PRESETS: Record<string, { reason: string; role?: string }> = {
  register: { reason: REASONS[0] },
  donate: { reason: REASONS[1], role: "Donor" },
  events: { reason: REASONS[2] },
  volunteer: { reason: REASONS[3], role: "Volunteer" },
  sponsor: { reason: REASONS[3], role: "Company / organisation" },
  partner: { reason: REASONS[3], role: "Company / organisation" },
  skills: { reason: REASONS[3], role: "Volunteer" },
  story: { reason: REASONS[4] },
};

const inputCls =
  "w-full rounded-lg border-2 border-lavender bg-white px-4 py-2.5 focus:border-violet-deep transition-colors";
const labelCls = "block font-bold text-sm text-violet-deep mb-1.5";

type Status = "idle" | "submitting" | "sent" | "error";

export default function ContactForm() {
  const params = useSearchParams();
  const preset = REASON_PRESETS[params.get("reason") ?? ""];
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const data = new FormData(e.currentTarget);
    const body = new URLSearchParams();
    for (const [field, entry] of Object.entries(GOOGLE_FORM_ENTRIES)) {
      body.set(entry, String(data.get(field) ?? "").trim());
    }

    try {
      // Google Forms doesn't send CORS headers, so the response is opaque;
      // a resolved fetch means the request reached Google.
      await fetch(`https://docs.google.com/forms/d/${GOOGLE_FORM_ID}/formResponse`, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="mt-8 rounded-2xl bg-lavender p-8">
        <h3 className="text-xl font-bold text-violet-deep">
          Message received 💜
        </h3>
        <p className="mt-2">
          Thank you for reaching out. We&apos;ll get back to you by email or
          WhatsApp as soon as we can — usually within a few days.
        </p>
      </div>
    );
  }

  return (
    <form className="mt-6 grid sm:grid-cols-2 gap-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="c-name" className={labelCls}>Name</label>
        <input id="c-name" name="name" required className={inputCls} autoComplete="name" />
      </div>
      <div>
        <label htmlFor="c-org" className={labelCls}>Organization (optional)</label>
        <input id="c-org" name="organization" className={inputCls} autoComplete="organization" />
      </div>
      <div>
        <label htmlFor="c-email" className={labelCls}>Email</label>
        <input id="c-email" name="email" type="email" required className={inputCls} autoComplete="email" />
      </div>
      <div>
        <label htmlFor="c-phone" className={labelCls}>Phone / WhatsApp</label>
        <input id="c-phone" name="phone" type="tel" required className={inputCls} autoComplete="tel" />
      </div>
      <div>
        <label htmlFor="c-relationship" className={labelCls}>I am a…</label>
        <select
          id="c-relationship"
          name="relationship"
          required
          className={inputCls}
          defaultValue={preset?.role ?? ""}
        >
          <option value="" disabled>Choose one</option>
          {ROLES.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="c-reason" className={labelCls}>Reason for contact</label>
        <select
          id="c-reason"
          name="reason"
          required
          className={inputCls}
          defaultValue={preset?.reason ?? ""}
        >
          <option value="" disabled>Choose one</option>
          {REASONS.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="c-message" className={labelCls}>Message</label>
        <textarea id="c-message" name="message" rows={5} required className={inputCls} />
      </div>
      <div className="sm:col-span-2 flex items-start gap-3">
        <input
          id="c-consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1.5 h-4 w-4 accent-violet-deep"
        />
        <label htmlFor="c-consent" className="text-[0.95rem]">
          I consent to AISK storing my details to respond to this message.
        </label>
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-violet-deep hover:bg-violet-ink disabled:opacity-60 disabled:cursor-wait text-white font-bold px-8 py-3.5 transition-colors"
        >
          {status === "submitting" ? "Sending…" : "Send a Message"}
        </button>
        {status === "error" && (
          <p role="alert" className="mt-3 text-sm font-semibold text-coral-dark">
            We couldn&apos;t send your message — please check your connection
            and try again, or email us at{" "}
            <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
