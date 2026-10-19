"use client";

import PaidSignupForm from "@/components/PaidSignupForm";
import { postToGoogleForm } from "@/lib/mpesa";
import { site, warriorFee } from "@/lib/site";

// "Mega Walk and Run 2026 – Autoimmune Warrior Registration" Google Form
// (created by scripts/create-forms.gs); responses land in its linked Sheet. If
// a question is added, renamed or reordered in Google Forms, update the entry
// IDs here.
const GOOGLE_FORM_ID = "1FAIpQLSe-GS_dKYbh_aifkXeMUiUvaB-fDKgBMefrEOL9UN6O-cER4w";
const GOOGLE_FORM_ENTRIES = {
  name: "entry.667459316",
  age: "entry.1174466374",
  phone: "entry.430215046",
  condition: "entry.1481739029",
  yearDiagnosed: "entry.681520767",
  medication: "entry.33815317",
  mpesaMessage: "entry.617636264",
  mpesaCode: "entry.591289414",
  mpesaAmount: "entry.1011493930",
};

const thisYear = new Date().getFullYear();

export default function WarriorForm() {
  return (
    <PaidSignupForm
      id="warrior"
      amount={warriorFee}
      amountFor={`the KSh ${warriorFee} registration`}
      submitLabel="Register as a warrior"
      consent="I consent to AISK storing these details, including my health information, to support me and plan its programmes. AISK will not share them publicly."
      fields={[
        { name: "name", label: "Full name", autoComplete: "name" },
        { name: "age", label: "Age", type: "number", min: 1, max: 120 },
        { name: "phone", label: "Phone / WhatsApp", type: "tel", autoComplete: "tel" },
        { name: "condition", label: "Autoimmune condition", wide: true },
        { name: "yearDiagnosed", label: "Year diagnosed", type: "number", min: 1940, max: thisYear },
        { name: "medication", label: "Medication currently using", type: "textarea", wide: true },
      ]}
      send={(v) => postToGoogleForm(GOOGLE_FORM_ID, GOOGLE_FORM_ENTRIES, v)}
      success={(r) => (
        <>
          <h3 className="text-xl font-bold text-violet-deep">Welcome, warrior 💜</h3>
          <p className="mt-2">
            You&apos;re registered. We&apos;ve recorded payment reference{" "}
            <span className="font-[family-name:var(--font-poppins)] font-extrabold text-violet-deep">{r.code}</span>
            {r.amount ? ` for KSh ${r.amount.toLocaleString()}` : ""} — thank you
            for standing with bereaved families.
          </p>
          <p className="mt-3 text-sm text-charcoal/70">
            We&apos;ll be in touch by WhatsApp. Questions? WhatsApp {site.phone}.
          </p>
        </>
      )}
    />
  );
}
