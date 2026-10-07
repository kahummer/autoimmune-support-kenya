"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

// Submissions go straight to the "Mega Walk and Run 2026 – Registration"
// Google Form, whose responses land in its linked Google Sheet. The entry IDs
// come from the form's pre-filled link; if a question is added, renamed or
// reordered in Google Forms, update them here.
const GOOGLE_FORM_ID =
  "1FAIpQLSdTGHnBbuzrukcJs-N2HyY18oXf923eF5Jf_SgGAcB90RJxmw";
const GOOGLE_FORM_URL = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/viewform`;
const GOOGLE_FORM_ENTRIES: Record<string, string> = {
  name: "entry.612065248",
  age: "entry.206082844",
  phone: "entry.717028628",
  email: "entry.23739545",
  category: "entry.1209845593",
  shirt: "entry.926077568",
  emergency: "entry.152187407",
  mpesaMessage: "entry.1734571228",
  mpesaCode: "entry.649172195",
  mpesaAmount: "entry.542231448",
};

export const TICKET_PRICE = 3000;

// M-Pesa receipt numbers are 10 upper-case letters/digits (always with at
// least one digit), e.g. UJ7LE9IH50. Bank SMSs label it "M-Pesa Ref:";
// Safaricom's own SMS starts with it.
const MPESA_REF_LABEL = /REF:?\s*([A-Z0-9]{10})\b/;
const MPESA_CODE = /\b(?=[A-Z0-9]{10}\b)(?=[A-Z]*\d)([A-Z][A-Z0-9]{9})\b/;
const MPESA_AMOUNT = /K(?:ES|SH|sh)\.?\s*([\d,]+(?:\.\d{1,2})?)/i;

export function parseMpesaMessage(text: string) {
  const upper = text.toUpperCase();
  const code = upper.match(MPESA_REF_LABEL)?.[1] ?? upper.match(MPESA_CODE)?.[1] ?? null;
  const amountRaw = text.match(MPESA_AMOUNT)?.[1];
  const amount = amountRaw ? Number(amountRaw.replace(/,/g, "")) : null;
  return { code, amount };
}

const inputCls =
  "w-full rounded-lg border-2 border-lavender bg-white px-4 py-2.5 focus:border-violet-deep transition-colors";
const labelCls = "block font-bold text-sm text-violet-deep mb-1.5";

type Status = "idle" | "submitting" | "submitted" | "error";

export default function RegistrationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [mpesaError, setMpesaError] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<{ code: string; amount: number | null } | null>(null);

  function validateMpesa(message: string): { code: string; amount: number | null } | null {
    const { code, amount } = parseMpesaMessage(message);
    if (!code) {
      setMpesaError(
        "We couldn't find an M-Pesa reference code in that message. Paste the whole confirmation SMS (it contains a code like UJ7LE9IH50)."
      );
      return null;
    }
    if (amount !== null && amount < TICKET_PRICE) {
      setMpesaError(
        `That payment is for KSh ${amount.toLocaleString()} — the ticket is KSh ${TICKET_PRICE.toLocaleString()}. Please pay the full amount and paste the new confirmation message.`
      );
      return null;
    }
    setMpesaError(null);
    return { code, amount };
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const parsed = validateMpesa(String(data.get("mpesaMessage") ?? ""));
    if (!parsed) return;
    setStatus("submitting");

    const body = new URLSearchParams();
    for (const [field, entry] of Object.entries(GOOGLE_FORM_ENTRIES)) {
      body.set(entry, String(data.get(field) ?? "").trim());
    }
    body.set(GOOGLE_FORM_ENTRIES.mpesaCode, parsed.code);
    body.set(GOOGLE_FORM_ENTRIES.mpesaAmount, parsed.amount === null ? "" : String(parsed.amount));
    setReceipt(parsed);

    try {
      // Google Forms doesn't send CORS headers, so the response is opaque;
      // a resolved fetch means the request reached Google.
      await fetch(`https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      setStatus("submitted");
    } catch {
      setStatus("error");
    }
  }

  if (status === "submitted") {
    return (
      <div className="mt-8 rounded-2xl bg-lavender p-8 text-center">
        <h3 className="text-xl font-bold text-violet-deep">
          You&apos;re on the list! 🎉
        </h3>
        <p className="mt-2">
          Thank you for registering for the Mega Walk and Run. We&apos;ve
          recorded your payment reference{" "}
          <span className="font-[family-name:var(--font-poppins)] font-extrabold text-violet-deep">
            {receipt?.code}
          </span>
          {receipt?.amount ? ` for KSh ${receipt.amount.toLocaleString()}` : ""}.
        </p>
        <p className="mt-3 text-sm text-charcoal/70">
          We verify every payment against our bank statement and will confirm
          your place by SMS or WhatsApp within 48 hours. Questions? WhatsApp{" "}
          {site.phone}.
        </p>
      </div>
    );
  }

  return (
    <form className="mt-8 grid sm:grid-cols-2 gap-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="reg-name" className={labelCls}>Full name</label>
        <input id="reg-name" name="name" required className={inputCls} autoComplete="name" />
      </div>
      <div>
        <label htmlFor="reg-age" className={labelCls}>Age</label>
        <input id="reg-age" name="age" type="number" min="1" max="120" required className={inputCls} />
      </div>
      <div>
        <label htmlFor="reg-phone" className={labelCls}>Phone</label>
        <input id="reg-phone" name="phone" type="tel" required className={inputCls} autoComplete="tel" />
      </div>
      <div>
        <label htmlFor="reg-email" className={labelCls}>Email</label>
        <input id="reg-email" name="email" type="email" required className={inputCls} autoComplete="email" />
      </div>
      <div>
        <label htmlFor="reg-category" className={labelCls}>Distance</label>
        <select id="reg-category" name="category" required className={inputCls} defaultValue="">
          <option value="" disabled>Choose a distance</option>
          <option>3.5 km</option>
          <option>7.5 km</option>
          <option>14.5 km</option>
        </select>
      </div>
      <div>
        <label htmlFor="reg-shirt" className={labelCls}>T-shirt size</label>
        <select id="reg-shirt" name="shirt" required className={inputCls} defaultValue="">
          <option value="" disabled>Choose a size</option>
          <option>XS</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
          <option>XXL</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="reg-emergency" className={labelCls}>
          Emergency contact (name &amp; phone)
        </label>
        <input id="reg-emergency" name="emergency" required className={inputCls} />
      </div>
      <div className="sm:col-span-2 rounded-2xl bg-lavender p-5">
        <label htmlFor="reg-mpesa" className={labelCls}>
          M-Pesa confirmation message
        </label>
        <p className="mb-2 text-sm text-charcoal/70">
          After paying KSh {TICKET_PRICE.toLocaleString()} to Paybill{" "}
          {site.mpesa.paybill}, account {site.mpesa.account}, paste the whole
          confirmation SMS you received here. We use the reference code in it
          to match your payment.
        </p>
        <textarea
          id="reg-mpesa"
          name="mpesaMessage"
          rows={4}
          required
          className={inputCls}
          placeholder="Dear JANE DOE, your transaction of KES 3,000.00 to AUTOIMMUNE AWARENESS 040444 was successful on 22/10/2026 09:15 AM. M-Pesa Ref: AB1CD2EF34."
          aria-describedby={mpesaError ? "reg-mpesa-error" : undefined}
          aria-invalid={mpesaError ? true : undefined}
          onChange={() => mpesaError && setMpesaError(null)}
        />
        {mpesaError && (
          <p id="reg-mpesa-error" role="alert" className="mt-2 text-sm font-semibold text-coral-dark">
            {mpesaError}
          </p>
        )}
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-coral hover:bg-coral-dark disabled:opacity-60 disabled:cursor-wait text-white font-bold px-8 py-3.5 transition-colors"
        >
          {status === "submitting" ? "Sending…" : "Register for the Walk and Run"}
        </button>
        {status === "error" && (
          <p role="alert" className="mt-3 text-sm font-semibold text-coral-dark">
            We couldn&apos;t send your registration — please check your
            connection and try again, or{" "}
            <a href={GOOGLE_FORM_URL} className="underline" target="_blank" rel="noopener">
              register through our Google Form
            </a>
            .
          </p>
        )}
        <p className="mt-3 text-sm text-charcoal/70">
          Ticket: KSh 3,000 (medal, T-shirt and water bottle included).
          Registrations without a valid payment reference are not confirmed.
        </p>
      </div>
    </form>
  );
}
