import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { siteConfig } from "@/config/site.config";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const baseUrl = new URL(siteConfig.seo.url);

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.metaDescription,
  metadataBase: baseUrl,
  openGraph: {
    title: `${siteConfig.company.name} — Paysagiste à ${siteConfig.location.city}`,
    description:
      "Conception, création et entretien de jardins. Devis gratuit sous 48h.",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.company.name,
    description: `Conception, création et entretien de jardins haut de gamme accessibles à ${siteConfig.location.city} et autour.`,
    areaServed: siteConfig.location.region,
    telephone: siteConfig.contact.phoneE164,
    url: siteConfig.seo.url,
    priceRange: "€€",
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.location.coords.lat,
      longitude: siteConfig.location.coords.lng,
    },
  };

  return (
    <html
      lang="fr"
      className={`${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <MobileStickyCTA />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </body>
    </html>
  );
}
