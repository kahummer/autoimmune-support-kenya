import { site } from "@/lib/site";

export default function MpesaBox({
  title = "Pay via M-Pesa",
  note,
  className = "",
}: {
  title?: string;
  note?: string;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border-2 border-coral bg-white p-6 ${className}`}>
      <h3 className="font-bold text-lg text-violet-deep">{title}</h3>
      <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 items-baseline">
        <dt className="text-sm font-semibold text-charcoal/70">Paybill</dt>
        <dd className="font-[family-name:var(--font-poppins)] font-extrabold text-2xl text-violet-deep tracking-wider">
          {site.mpesa.paybill}
        </dd>
        <dt className="text-sm font-semibold text-charcoal/70">Account no.</dt>
        <dd className="font-[family-name:var(--font-poppins)] font-extrabold text-2xl text-coral tracking-wider">
          {site.mpesa.account}
        </dd>
      </dl>
      <p className="mt-3 text-sm text-charcoal/70">
        Lipa na M-Pesa → Pay Bill → Business no. {site.mpesa.paybill} → Account
        no. {site.mpesa.account}. The account is held by Autoimmune Support
        Kenya at {site.mpesa.bank}.
        {note ? ` ${note}` : ""}
      </p>
    </div>
  );
}
