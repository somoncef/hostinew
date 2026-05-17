import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Pinyon_Script } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata, localBusinessJsonLd, organizationJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const signature = Pinyon_Script({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = buildPageMetadata({
  title: siteConfig.tagline,
  description: siteConfig.description,
  path: "/",
  keywords: [
    "conciergerie Marrakech",
    "gestion Airbnb Marrakech",
    "conciergerie Airbnb Marrakech",
    "gestion locative Marrakech",
    "location saisonnière Marrakech",
    "conciergerie de luxe Marrakech",
    "conciergerie Maroc",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} ${signature.variable} h-full`}>
      <head>
        <JsonLd data={[organizationJsonLd(), localBusinessJsonLd()]} />
      </head>
      <body className="min-h-full flex flex-col bg-charcoal font-sans text-foreground antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
