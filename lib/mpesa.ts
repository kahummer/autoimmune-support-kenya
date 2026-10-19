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

export type MpesaReceipt = { code: string; amount: number | null };

// Returns the receipt, or an error message to show under the field.
export function checkMpesaMessage(
  message: string,
  minAmount: number,
  what: string
): MpesaReceipt | { error: string } {
  const { code, amount } = parseMpesaMessage(message);
  if (!code) {
    return {
      error:
        "We couldn't find an M-Pesa reference code in that message. Paste the whole confirmation SMS (it contains a code like UJ7LE9IH50).",
    };
  }
  if (amount !== null && amount < minAmount) {
    return {
      error: `That payment is for KSh ${amount.toLocaleString()} — ${what} is KSh ${minAmount.toLocaleString()}. Please pay the full amount and paste the new confirmation message.`,
    };
  }
  return { code, amount };
}

// Posts to a Google Form's formResponse endpoint. Google Forms doesn't send
// CORS headers, so the response is opaque; a resolved fetch means the request
// reached Google.
export async function postToGoogleForm(
  formId: string,
  entries: Record<string, string>,
  values: Record<string, string>
) {
  const body = new URLSearchParams();
  for (const [field, entry] of Object.entries(entries)) {
    body.set(entry, (values[field] ?? "").trim());
  }
  await fetch(`https://docs.google.com/forms/d/e/${formId}/formResponse`, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
}

// The live "AISK Website — Contact" Google Form (see app/contact/ContactForm.tsx).
// Vendor and warrior sign-ups go here, labelled in the message, until they get
// forms of their own (scripts/create-forms.gs).
const CONTACT_FORM_ID = "1FAIpQLSc1z9Uq7sjkVb2gNRRKbXrvn5qD3i4WTNF_gopjvwzds6wUzA";
const CONTACT_FORM_ENTRIES = {
  name: "entry.612065248",
  organization: "entry.206082844",
  email: "entry.23739545",
  phone: "entry.717028628",
  relationship: "entry.1209845593",
  reason: "entry.926077568",
  message: "entry.152187407",
};

export function sendViaContactForm(
  subject: string,
  contact: {
    name: string;
    organization?: string;
    email?: string;
    phone: string;
    // Must match the Contact form's dropdown options exactly.
    relationship: "Patient" | "Caregiver" | "Donor" | "Volunteer" | "Company / organisation" | "Media";
    reason: "Volunteer, sponsor, or partner" | "Something else";
  },
  details: [label: string, value: string | undefined][]
) {
  const message = [
    subject,
    ...details.map(([label, value]) => `${label}: ${(value ?? "").trim() || "—"}`),
  ].join("\n");
  return postToGoogleForm(CONTACT_FORM_ID, CONTACT_FORM_ENTRIES, {
    ...contact,
    organization: contact.organization ?? "",
    // Required in the Contact form.
    email: contact.email?.trim() || "(not given)",
    message,
  });
}
