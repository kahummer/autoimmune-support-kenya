import type { Metadata } from "next";
import { Poppins, Lato } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: {
    default: "Autoimmune Support Kenya — You Are Not Alone",
    template: "%s | Autoimmune Support Kenya",
  },
  description:
    "Autoimmune Support Kenya unites patients, caregivers, and communities through the Mega Walk and Run, patient support giving, and community events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${lato.variable}`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-coral focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:top-2 focus:left-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
