// M-Pesa receipt numbers are 10 upper-case letters/digits, e.g. UJ7LE9IH50
// or UJSQPBQTCP (they can be all letters). Bank SMSs label it "M-Pesa Ref:";
// Safaricom's own SMS starts with it: "UJSQPBQTCP Confirmed. Ksh100.00 sent
// to…". Anywhere else we only trust a code that contains a digit, so an
// ordinary 10-letter word isn't mistaken for one.
const MPESA_REF_LABEL = /REF:?\s*([A-Z0-9]{10})\b/;
const MPESA_CONFIRMED = /\b([A-Z][A-Z0-9]{9})\s+CONFIRMED\b/;
const MPESA_CODE = /\b(?=[A-Z0-9]{10}\b)(?=[A-Z]*\d)([A-Z][A-Z0-9]{9})\b/;
const MPESA_AMOUNT = /K(?:ES|SH|sh)\.?\s*([\d,]+(?:\.\d{1,2})?)/i;

export function parseMpesaMessage(text: string) {
  const upper = text.toUpperCase();
  const code =
    upper.match(MPESA_REF_LABEL)?.[1] ??
    upper.match(MPESA_CONFIRMED)?.[1] ??
    upper.match(MPESA_CODE)?.[1] ??
    null;
  const amountRaw = text.match(MPESA_AMOUNT)?.[1];
  const amount = amountRaw ? Number(amountRaw.replace(/,/g, "")) : null;
  return { code, amount };
}

export type MpesaReceipt = { code: string; amount: number | null };

// Returns the receipt, or an error message to show under the field.
// `alsoAccept` lists exact amounts that pass even when below `minAmount`
// (e.g. a stall price agreed with a vendor privately).
export function checkMpesaMessage(
  message: string,
  minAmount: number,
  what: string,
  alsoAccept: number[] = []
): MpesaReceipt | { error: string } {
  const { code, amount } = parseMpesaMessage(message);
  if (!code) {
    return {
      error:
        "We couldn't find an M-Pesa reference code in that message. Paste the whole confirmation SMS (it contains a code like UJ7LE9IH50).",
    };
  }
  if (amount !== null && amount < minAmount && !alsoAccept.includes(amount)) {
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

