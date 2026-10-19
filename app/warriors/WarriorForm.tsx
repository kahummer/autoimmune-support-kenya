"use client";

import PaidSignupForm from "@/components/PaidSignupForm";
import { sendViaContactForm } from "@/lib/mpesa";
import { site, warriorFee } from "@/lib/site";

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
        { name: "email", label: "Email (optional)", type: "email", autoComplete: "email", required: false },
        { name: "condition", label: "Autoimmune condition", wide: true },
        { name: "yearDiagnosed", label: "Year diagnosed", type: "number", min: 1940, max: thisYear },
        { name: "medication", label: "Medication currently using", type: "textarea", wide: true },
      ]}
      send={(v) =>
        sendViaContactForm(
          "WARRIOR REGISTRATION — KSh 100 for bereaved families",
          { name: v.name, email: v.email, phone: v.phone, relationship: "Patient", reason: "Something else" },
          [
            ["Age", v.age],
            ["Condition", v.condition],
            ["Year diagnosed", v.yearDiagnosed],
            ["Medication", v.medication],
            ["M-Pesa code", v.mpesaCode],
            ["Amount", v.mpesaAmount],
            ["M-Pesa message", v.mpesaMessage],
          ]
        )
      }
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
