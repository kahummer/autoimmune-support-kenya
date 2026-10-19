"use client";

import { FormEvent, ReactNode, useState } from "react";
import { site } from "@/lib/site";
import { checkMpesaMessage, MpesaReceipt } from "@/lib/mpesa";

// A pay-first sign-up form: the visitor pays via the M-Pesa Paybill, fills in
// the fields and pastes the confirmation SMS. `send` receives the answers plus
// the parsed mpesaCode and mpesaAmount.

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "number" | "textarea" | "select";
  options?: string[];
  required?: boolean;
  wide?: boolean;
  autoComplete?: string;
  min?: number;
  max?: number;
  hint?: string;
};

const inputCls =
  "w-full rounded-lg border-2 border-lavender bg-white px-4 py-2.5 focus:border-violet-deep transition-colors";
const labelCls = "block font-bold text-sm text-violet-deep mb-1.5";

type Status = "idle" | "submitting" | "submitted" | "error";

export default function PaidSignupForm({
  id,
  send,
  fields,
  amount,
  amountFor,
  minAmount = () => amount,
  submitLabel,
  consent,
  success,
}: {
  id: string;
  send: (values: Record<string, string>) => Promise<void>;
  fields: Field[];
  amount: number;
  amountFor: string;
  // Lets the minimum depend on the form's answers (e.g. the vendor package).
  minAmount?: (values: Record<string, string>) => number;
  submitLabel: string;
  consent?: string;
  success: (receipt: MpesaReceipt) => ReactNode;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [mpesaError, setMpesaError] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<MpesaReceipt | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const values = Object.fromEntries(
      [...new FormData(e.currentTarget)].map(([k, v]) => [k, String(v)])
    );
    const checked = checkMpesaMessage(values.mpesaMessage ?? "", minAmount(values), amountFor);
    if ("error" in checked) {
      setMpesaError(checked.error);
      return;
    }
    setMpesaError(null);
    setReceipt(checked);
    setStatus("submitting");

    try {
      await send({
        ...values,
        mpesaCode: checked.code,
        mpesaAmount: checked.amount === null ? "" : String(checked.amount),
      });
      setStatus("submitted");
    } catch {
      setStatus("error");
    }
  }

  if (status === "submitted" && receipt) {
    return <div className="mt-8 rounded-2xl bg-lavender p-8 text-center">{success(receipt)}</div>;
  }

  return (
    <form className="mt-8 grid sm:grid-cols-2 gap-5" onSubmit={handleSubmit}>
      {fields.map((f) => {
        const fieldId = `${id}-${f.name}`;
        const common = {
          id: fieldId,
          name: f.name,
          required: f.required ?? true,
          className: inputCls,
        };
        return (
          <div key={f.name} className={f.wide ? "sm:col-span-2" : undefined}>
            <label htmlFor={fieldId} className={labelCls}>{f.label}</label>
            {f.hint && <p className="mb-2 text-sm text-charcoal/70">{f.hint}</p>}
            {f.type === "textarea" ? (
              <textarea {...common} rows={3} />
            ) : f.type === "select" ? (
              <select {...common} defaultValue="">
                <option value="" disabled>Choose one</option>
                {f.options?.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : (
              <input
                {...common}
                type={f.type ?? "text"}
                min={f.min}
                max={f.max}
                autoComplete={f.autoComplete}
              />
            )}
          </div>
        );
      })}
      <div className="sm:col-span-2 rounded-2xl bg-lavender p-5">
        <label htmlFor={`${id}-mpesa`} className={labelCls}>
          M-Pesa confirmation message
        </label>
        <p className="mb-2 text-sm text-charcoal/70">
          After paying {amountFor} to Paybill {site.mpesa.paybill}, account{" "}
          {site.mpesa.account}, paste the whole confirmation SMS you received
          here. We use the reference code in it to match your payment.
        </p>
        <textarea
          id={`${id}-mpesa`}
          name="mpesaMessage"
          rows={4}
          required
          className={inputCls}
          placeholder={`Dear JANE DOE, your transaction of KES ${amount.toLocaleString()}.00 to AUTOIMMUNE AWARENESS ${site.mpesa.account} was successful on 22/10/2026 09:15 AM. M-Pesa Ref: AB1CD2EF34.`}
          aria-describedby={mpesaError ? `${id}-mpesa-error` : undefined}
          aria-invalid={mpesaError ? true : undefined}
          onChange={() => mpesaError && setMpesaError(null)}
        />
        {mpesaError && (
          <p id={`${id}-mpesa-error`} role="alert" className="mt-2 text-sm font-semibold text-coral-dark">
            {mpesaError}
          </p>
        )}
      </div>
      {consent && (
        <div className="sm:col-span-2 flex items-start gap-3">
          <input
            id={`${id}-consent`}
            type="checkbox"
            required
            className="mt-1.5 h-4 w-4 accent-violet-deep"
          />
          <label htmlFor={`${id}-consent`} className="text-[0.95rem]">{consent}</label>
        </div>
      )}
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-coral hover:bg-coral-dark disabled:opacity-60 disabled:cursor-wait text-white font-bold px-8 py-3.5 transition-colors"
        >
          {status === "submitting" ? "Sending…" : submitLabel}
        </button>
        {status === "error" && (
          <p role="alert" className="mt-3 text-sm font-semibold text-coral-dark">
            We couldn&apos;t send your form — please check your connection and
            try again, or WhatsApp us on {site.phone}.
          </p>
        )}
      </div>
    </form>
  );
}
