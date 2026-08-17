"use client";

import { useState } from "react";

const inputCls =
  "w-full rounded-lg border-2 border-lavender bg-white px-4 py-2.5 focus:border-violet-deep transition-colors";
const labelCls = "block font-bold text-sm text-violet-deep mb-1.5";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="mt-8 rounded-2xl bg-lavender p-8">
        <h3 className="text-xl font-bold text-violet-deep">
          Message received 💜
        </h3>
        <p className="mt-2">
          Thank you for reaching out. We&apos;ll get back to you as soon as we
          can.
        </p>
      </div>
    );
  }

  return (
    <form
      className="mt-6 grid sm:grid-cols-2 gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
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
        <label htmlFor="c-phone" className={labelCls}>Phone</label>
        <input id="c-phone" name="phone" type="tel" required className={inputCls} autoComplete="tel" />
      </div>
      <div>
        <label htmlFor="c-relationship" className={labelCls}>I am a…</label>
        <select id="c-relationship" name="relationship" required className={inputCls} defaultValue="">
          <option value="" disabled>Choose one</option>
          <option>Patient</option>
          <option>Caregiver</option>
          <option>Donor</option>
          <option>Volunteer</option>
          <option>Media</option>
        </select>
      </div>
      <div>
        <label htmlFor="c-reason" className={labelCls}>Reason for contact</label>
        <select id="c-reason" name="reason" required className={inputCls} defaultValue="">
          <option value="" disabled>Choose one</option>
          <option>Register for the Mega Run and Walk</option>
          <option>Support a patient / donate</option>
          <option>Community events</option>
          <option>Volunteer, sponsor, or partner</option>
          <option>Share my story</option>
          <option>Something else</option>
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
          className="rounded-full bg-violet-deep hover:bg-violet-ink text-white font-bold px-8 py-3.5 transition-colors"
        >
          Send a Message
        </button>
      </div>
    </form>
  );
}
