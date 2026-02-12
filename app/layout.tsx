import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "../src/config/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },

  description: site.description,

  keywords: site.keywords,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "es_MX",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: site.name,
    image: `${site.url}/og-image.jpg`,
    "@id": site.url,
    url: site.url,
    telephone: site.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.location.address,
      addressLocality: site.location.city,
      addressRegion: site.location.state,
      postalCode: site.location.postalCode,
      addressCountry: site.location.country,
    },
    areaServed: {
      "@type": "City",
      name: "Nuevo Laredo",
    },
    sameAs: [
      site.social.facebook,
    ],
  };

  return (
    <html lang="es-MX">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Navbar />
        {children}
        <WhatsAppFloat />
        <Footer></Footer>
      </body>
    </html>
  );
}
