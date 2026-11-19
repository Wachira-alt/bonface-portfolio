import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });

const title = `${site.name} · ${site.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.tagline,
  alternates: { canonical: "/" },
  openGraph: { type: "profile", url: site.url, siteName: site.name, title, description: site.tagline },
  twitter: { card: "summary_large_image", title, description: site.tagline },
  // Kept out of search engines until the placeholders are filled in and
  // Bonface has approved the content. Flip to true at launch.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
