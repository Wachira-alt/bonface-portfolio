import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data";

const sans = Source_Sans_3({ variable: "--font-body", subsets: ["latin"] });
const serif = Source_Serif_4({ variable: "--font-heading", subsets: ["latin"] });

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
    <html lang="en-GB" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
