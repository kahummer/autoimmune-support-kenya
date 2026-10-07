import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-violet-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="inline-block rounded-2xl bg-white p-3">
            <Image
              src="/logo.png"
              alt="Autoimmune Support Kenya — Stronger Together, Unstoppable Always"
              width={640}
              height={600}
              sizes="160px"
              className="h-auto w-40"
            />
          </div>
          <p className="mt-4 text-white/80 max-w-md">
            AISK supports autoimmune patients through the Mega Walk and Run, a
            patient-needs donation platform, and community events.
          </p>
          <p className="mt-4 font-[family-name:var(--font-poppins)] font-semibold text-coral">
            You Are Not Alone.
          </p>
          <ul className="mt-5 space-y-1.5 text-white/85 text-[0.95rem]">
            <li>
              <a href={`tel:${site.phoneIntl}`} className="hover:text-coral">{site.phone}</a>
              {" · "}
              <a href={site.whatsapp} className="hover:text-coral" target="_blank" rel="noopener">WhatsApp</a>
            </li>
            <li><a href={`mailto:${site.email}`} className="hover:text-coral break-all">{site.email}</a></li>
            <li><a href={site.facebook} className="hover:text-coral" target="_blank" rel="noopener">Facebook support group</a></li>
          </ul>
        </div>

        <nav aria-label="Footer">
          <p className="font-[family-name:var(--font-poppins)] font-semibold mb-3 text-white/60 text-sm uppercase tracking-wider">
            Explore
          </p>
          <ul className="space-y-2 text-white/85">
            <li><Link className="hover:text-coral" href="/about">About AISK</Link></li>
            <li><Link className="hover:text-coral" href="/mega-run-and-walk">Mega Walk and Run</Link></li>
            <li><Link className="hover:text-coral" href="/support-a-patient">Support a Patient</Link></li>
            <li><Link className="hover:text-coral" href="/community">Community and Events</Link></li>
          </ul>
        </nav>

        <nav aria-label="Get involved">
          <p className="font-[family-name:var(--font-poppins)] font-semibold mb-3 text-white/60 text-sm uppercase tracking-wider">
            Act
          </p>
          <ul className="space-y-2 text-white/85">
            <li><Link className="hover:text-coral" href="/get-involved">Get Involved</Link></li>
            <li><Link className="hover:text-coral" href="/resources">Resources and Stories</Link></li>
            <li><Link className="hover:text-coral" href="/contact">Contact / Register</Link></li>
            <li><Link className="hover:text-coral" href="/support-a-patient">Donate</Link></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} Autoimmune Support Kenya · By Saetwa
            Saitoti
          </p>
          <p>Move Together. Live Stronger.</p>
        </div>
      </div>
    </footer>
  );
}
