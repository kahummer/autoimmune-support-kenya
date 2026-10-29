"use client";

import PaidSignupForm from "@/components/PaidSignupForm";
import { postToGoogleForm } from "@/lib/mpesa";
import { site, vendorAgreedPrices, vendorPackages } from "@/lib/site";

// "Mega Walk and Run 2026 – Vendor Sign-up" Google Form (created by
// scripts/create-forms.gs); responses land in its linked Sheet. If a question
// is added, renamed or reordered in Google Forms, update the entry IDs here.
const GOOGLE_FORM_ID = "1FAIpQLSer4qThjJa6VXBocx2faGM3519LuR-XFM2a3YWGSGJq5SRenQ";
const GOOGLE_FORM_ENTRIES = {
  business: "entry.380485140",
  contact: "entry.1703158349",
  phone: "entry.125323347",
  email: "entry.334661892",
  products: "entry.2068902986",
  package: "entry.1314344308",
  notes: "entry.66823966",
  mpesaMessage: "entry.1130316170",
  mpesaCode: "entry.779580996",
  mpesaAmount: "entry.1054901085",
};

const packageLabel = (p: (typeof vendorPackages)[number]) =>
  `${p.name} – KSh ${p.price.toLocaleString()}`;

export default function VendorForm() {
  return (
    <PaidSignupForm
      id="vendor"
      amount={vendorPackages[0].price}
      amountFor="your package price"
      minAmount={(v) =>
        vendorPackages.find((p) => packageLabel(p) === v.package)?.price ?? vendorPackages[0].price
      }
      acceptAmounts={vendorAgreedPrices}
      submitLabel="Book my vendor stall"
      fields={[
        { name: "business", label: "Business name", autoComplete: "organization" },
        { name: "contact", label: "Contact person", autoComplete: "name" },
        { name: "phone", label: "Phone / WhatsApp", type: "tel", autoComplete: "tel" },
        { name: "email", label: "Email", type: "email", autoComplete: "email" },
        { name: "package", label: "Package", type: "select", options: vendorPackages.map(packageLabel), wide: true },
        { name: "products", label: "What will you sell or showcase?", type: "textarea", wide: true },
        {
          name: "notes",
          label: "Special requirements (optional)",
          type: "textarea",
          wide: true,
          required: false,
          hint: "Power, extra space, setup time, anything we should plan for.",
        },
      ]}
      send={(v) => postToGoogleForm(GOOGLE_FORM_ID, GOOGLE_FORM_ENTRIES, v)}
      success={(r) => (
        <>
          <h3 className="text-xl font-bold text-violet-deep">Your stall request is in 🎉</h3>
          <p className="mt-2">
            We&apos;ve recorded payment reference{" "}
            <span className="font-[family-name:var(--font-poppins)] font-extrabold text-violet-deep">{r.code}</span>
            {r.amount ? ` for KSh ${r.amount.toLocaleString()}` : ""}.
          </p>
          <p className="mt-3 text-sm text-charcoal/70">
            We verify every payment and will confirm your stall and setup
            details by WhatsApp or email. Questions? WhatsApp {site.phone}.
          </p>
        </>
      )}
    />
  );
}
