"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Ribbon from "./Ribbon";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/mega-run-and-walk", label: "Mega Run and Walk" },
  { href: "/support-a-patient", label: "Support a Patient" },
  { href: "/community", label: "Community" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-lavender">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between gap-4 h-16">
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
          onClick={() => setOpen(false)}
        >
          <Ribbon className="h-7 w-7" />
          <span className="font-[family-name:var(--font-poppins)] font-700 leading-tight">
            <span className="block text-violet-deep font-bold text-sm tracking-wide">
              AUTOIMMUNE SUPPORT
            </span>
            <span className="block text-coral font-bold text-sm tracking-[0.3em]">
              KENYA
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-5" aria-label="Main">
          {links.slice(0, 8).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[0.9rem] font-semibold transition-colors hover:text-coral ${
                pathname === l.href ? "text-coral" : "text-violet-deep"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block shrink-0">
          <Link
            href="/mega-run-and-walk#register"
            className="inline-block rounded-full bg-coral hover:bg-coral-dark text-white font-bold text-sm px-5 py-2.5 transition-colors"
          >
            Register for the Run
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-violet-deep"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          className="lg:hidden border-t border-lavender bg-white px-4 pb-4 pt-2 flex flex-col gap-1"
          aria-label="Main mobile"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`py-2.5 px-2 rounded-lg font-semibold ${
                pathname === l.href
                  ? "text-coral bg-lavender"
                  : "text-violet-deep hover:bg-lavender"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/mega-run-and-walk#register"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-coral text-white font-bold text-center px-5 py-3"
          >
            Register for the Run
          </Link>
        </nav>
      )}
    </header>
  );
}
