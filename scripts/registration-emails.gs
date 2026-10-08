/**
 * Mega Walk and Run 2026 — registration confirmation emails.
 *
 * Standalone Apps Script project "AISK Registration Emails", attached by ID to
 * the "Mega Walk and Run 2026 – Registration (Responses)" Google Sheet.
 * Emails are sent from whichever Google account runs setup() and authorises
 * the script — run it while signed in as autoimmunesupportkenya@gmail.com.
 *
 * Form Responses 1 columns:
 *   A Timestamp  B Full name  C Age  D Phone  E Email  F Distance  G T-shirt
 *   H Emergency contact  I M-Pesa message  J M-Pesa code  K Amount
 *   L Verified (Y/N)  M Duplicate code?  N Ticket sent (written by this script)
 */

const SPREADSHEET_ID = "1oDDnJi9w38QsbQMot0kXKb4Fnz-Zks-gpcjBbBlgnJ8";
const SHEET_NAME = "Form Responses 1";
const TICKET_SENT_COL = 14; // N
const SITE = "https://autoimmunesupportkenya.org";
const LOGO_URL = SITE + "/logo.png";
const REPLY_TO = "autoimmunesupportkenya@gmail.com";
const WHATSAPP = "0720 560 328";

const EVENT = {
  name: "Mega Walk and Run 2026",
  date: "Sunday 22 November 2026",
  time: "7:00 AM start (arrive from 6:00 AM for check-in)",
  venue: "The Waterfront, Karen, Nairobi",
  price: "KSh 3,000",
};

const COL = { name: 2, phone: 4, email: 5, distance: 6, shirt: 7, code: 10, amount: 11 };

/** Run ONCE from the foundation Gmail account: authorises the script and installs the trigger. */
function setup() {
  ScriptApp.getProjectTriggers().forEach((t) => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger("onFormSubmit")
    .forSpreadsheet(SpreadsheetApp.openById(SPREADSHEET_ID))
    .onFormSubmit()
    .create();
  Logger.log(
    "Done. Confirmation emails will now be sent from " +
      Session.getEffectiveUser().getEmail() +
      " for every new registration. To email people who registered before today, run sendMissingTickets."
  );
}

/** Trigger: fires on every new form submission. */
function onFormSubmit(e) {
  const row = e.range.getRow();
  sendTicketForRow(row);
}

/** Manual catch-up: emails every registration that has a code and no ticket yet. */
function sendMissingTickets() {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
  const last = sheet.getLastRow();
  let sent = 0;
  for (let row = 2; row <= last; row++) {
    if (sendTicketForRow(row)) sent++;
  }
  Logger.log(sent + " confirmation email(s) sent.");
}

function sendTicketForRow(row) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
  const values = sheet.getRange(row, 1, 1, TICKET_SENT_COL).getValues()[0];
  const r = {
    name: String(values[COL.name - 1] || "").trim(),
    phone: String(values[COL.phone - 1] || "").trim(),
    email: String(values[COL.email - 1] || "").trim(),
    distance: String(values[COL.distance - 1] || "").trim(),
    shirt: String(values[COL.shirt - 1] || "").trim(),
    code: String(values[COL.code - 1] || "").trim().toUpperCase(),
    amount: values[COL.amount - 1],
    ticketSent: values[TICKET_SENT_COL - 1],
  };

  if (r.ticketSent || !r.email || !r.code) return false;
  if (/test entry|please delete/i.test(r.name)) return false;

  const subject = `Your ${EVENT.name} registration — ref ${r.code}`;
  MailApp.sendEmail({
    to: r.email,
    replyTo: REPLY_TO,
    name: "Autoimmune Support Kenya",
    subject,
    htmlBody: ticketHtml(r),
    body: ticketText(r),
  });

  sheet.getRange(row, TICKET_SENT_COL).setValue(new Date());
  return true;
}

function qrUrl(code) {
  return "https://quickchart.io/qr?size=220&margin=2&text=" + encodeURIComponent(code);
}

function amountText(amount) {
  const n = Number(amount);
  return n ? "KSh " + n.toLocaleString("en-KE") : EVENT.price;
}

function ticketHtml(r) {
  const firstName = r.name.split(/\s+/)[0] || r.name;
  const violet = "#4b2470", coral = "#e8582c", lavender = "#f4eef9", charcoal = "#252525";
  return `
<!doctype html><html><body style="margin:0;padding:0;background:${lavender};font-family:Helvetica,Arial,sans-serif;color:${charcoal};">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${lavender};padding:24px 12px;">
<tr><td align="center">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;">
  <tr><td style="background:${violet};padding:24px;text-align:center;">
    <img src="${LOGO_URL}" alt="Autoimmune Support Kenya" width="140" style="display:inline-block;background:#fff;border-radius:12px;padding:8px;">
    <div style="color:#fff;font-size:22px;font-weight:bold;margin-top:14px;">${EVENT.name}</div>
    <div style="color:${coral};font-weight:bold;letter-spacing:2px;font-size:12px;margin-top:4px;">FOR AUTOIMMUNE AWARENESS · EVERY STEP COUNTS</div>
  </td></tr>
  <tr><td style="padding:28px 28px 8px;">
    <p style="margin:0 0 12px;font-size:18px;">Hi ${escapeHtml(firstName)},</p>
    <p style="margin:0 0 20px;line-height:1.6;">Thank you for registering for the ${EVENT.name}! This email is your <strong>registration ticket</strong>. Please bring it on your phone, together with your M-Pesa confirmation SMS, to the check-in desk.</p>
  </td></tr>
  <tr><td style="padding:0 28px;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:2px dashed ${coral};border-radius:14px;">
      <tr>
        <td style="padding:20px;vertical-align:top;">
          <div style="font-size:11px;letter-spacing:2px;color:${coral};font-weight:bold;">REGISTRATION TICKET</div>
          <div style="font-size:20px;font-weight:bold;color:${violet};margin-top:6px;">${escapeHtml(r.name)}</div>
          <table role="presentation" cellspacing="0" cellpadding="0" style="margin-top:14px;font-size:14px;line-height:1.7;">
            <tr><td style="color:#666;padding-right:14px;">Reference</td><td style="font-weight:bold;font-size:18px;letter-spacing:1px;color:${violet};">${escapeHtml(r.code)}</td></tr>
            <tr><td style="color:#666;padding-right:14px;">Distance</td><td style="font-weight:bold;">${escapeHtml(r.distance)}</td></tr>
            <tr><td style="color:#666;padding-right:14px;">T-shirt</td><td style="font-weight:bold;">${escapeHtml(r.shirt)}</td></tr>
            <tr><td style="color:#666;padding-right:14px;">Paid</td><td style="font-weight:bold;">${amountText(r.amount)}</td></tr>
            <tr><td style="color:#666;padding-right:14px;">Phone</td><td>${escapeHtml(r.phone)}</td></tr>
          </table>
        </td>
        <td style="padding:20px;text-align:center;vertical-align:middle;width:140px;">
          <img src="${qrUrl(r.code)}" alt="QR code ${escapeHtml(r.code)}" width="120" height="120" style="display:block;margin:0 auto;">
          <div style="font-size:11px;color:#666;margin-top:6px;">Scan at check-in</div>
        </td>
      </tr>
    </table>
  </td></tr>
  <tr><td style="padding:24px 28px 8px;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${lavender};border-radius:12px;">
      <tr><td style="padding:16px 20px;font-size:14px;line-height:1.8;">
        <strong style="color:${violet};">📅 ${EVENT.date}</strong><br>
        ⏰ ${EVENT.time}<br>
        📍 ${EVENT.venue}<br>
        🎽 Your T-shirt, bib and water bottle are collected at check-in; medal at the finish.
      </td></tr>
    </table>
  </td></tr>
  <tr><td style="padding:16px 28px 28px;font-size:13px;line-height:1.7;color:#555;">
    <p style="margin:0 0 10px;"><strong>Please note:</strong> admission is subject to verification of your payment against our bank records. If your reference cannot be confirmed you will be asked to show your M-Pesa SMS at the help desk, so keep it handy.</p>
    <p style="margin:0 0 10px;">Questions? WhatsApp us on <strong>${WHATSAPP}</strong> or reply to this email.</p>
    <p style="margin:0;">Thank you for walking with every patient.<br><strong style="color:${violet};">Autoimmune Support Kenya</strong> · <a href="${SITE}" style="color:${coral};">autoimmunesupportkenya.org</a></p>
  </td></tr>
</table>
<p style="font-size:11px;color:#888;margin:16px 0 0;">You are receiving this because you registered at autoimmunesupportkenya.org. Stronger Together, Unstoppable Always.</p>
</td></tr></table>
</body></html>`;
}

function ticketText(r) {
  return [
    `Hi ${r.name},`,
    "",
    `Thank you for registering for the ${EVENT.name}. This email is your registration ticket.`,
    "",
    `Reference: ${r.code}`,
    `Distance:  ${r.distance}`,
    `T-shirt:   ${r.shirt}`,
    `Paid:      ${amountText(r.amount)}`,
    "",
    `${EVENT.date} · ${EVENT.time}`,
    EVENT.venue,
    "",
    "Please bring this email and your M-Pesa confirmation SMS to the check-in desk. Admission is subject to verification of your payment against our bank records.",
    "",
    `Questions? WhatsApp ${WHATSAPP} or reply to this email.`,
    "",
    "Autoimmune Support Kenya — Stronger Together, Unstoppable Always",
    SITE,
  ].join("\n");
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/** Preview helper: emails a sample ticket to the account running the script. */
function sendTestTicket() {
  const me = Session.getEffectiveUser().getEmail();
  const r = { name: "Jane Doe", phone: "0700 000 000", email: me, distance: "7.5 km", shirt: "M", code: "AB1CD2EF34", amount: 3000 };
  MailApp.sendEmail({ to: me, replyTo: REPLY_TO, name: "Autoimmune Support Kenya", subject: `[TEST] Your ${EVENT.name} registration — ref ${r.code}`, htmlBody: ticketHtml(r), body: ticketText(r) });
}
