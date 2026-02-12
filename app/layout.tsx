import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Builder's Club",
  description:
    "A community that builds together – with full access to every product, playbook, and process behind the scenes.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dmSerif.variable} antialiased font-sans`}
      >
        {children}
        <Script
          src="https://datafa.st/js/script.js"
          data-website-id="dfid_t6y0oUQZAOT85e2wY3o0t"
          data-domain="buildersclub.co"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
