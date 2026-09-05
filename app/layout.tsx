import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_CONFIG } from "@/data/config";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: "Gym Space & Rack Rental for Wellness Brands in India | Racks on Rent",
  description:
    "Racks on Rent connects gym owners with nutrition, fitness, and wellness businesses through simple rack and display-space opportunities.",
  keywords: [
    "Racks on Rent",
    "Gym rack rental",
    "Gym display space for rent",
    "Fitness space sublet",
    "Wellness product display inside gyms",
    "Protein shake corner rental",
    "Gym nutrition rack space",
    "Fitness accessories display space",
    "Gym space for wellness brands",
    "Rent gym rack India"
  ],
  authors: [{ name: "Racks on Rent", url: SITE_CONFIG.domain }],
  creator: "Racks on Rent",
  publisher: "Racks on Rent",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Gym Space & Rack Rental for Wellness Brands in India | Racks on Rent",
    description:
      "Racks on Rent connects gym owners with nutrition, fitness, and wellness businesses through simple rack and display-space opportunities.",
    url: SITE_CONFIG.domain,
    siteName: "Racks on Rent",
    images: [
      {
        url: "/opengraph-image.jpeg",
        width: 1254,
        height: 1254,
        alt: "Racks on Rent - Gym Space & Rack Rental for Wellness Brands",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gym Space & Rack Rental for Wellness Brands in India | Racks on Rent",
    description:
      "Racks on Rent connects gym owners with nutrition, fitness, and wellness businesses through simple rack and display-space opportunities.",
    images: ["/opengraph-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Racks on Rent",
    "url": SITE_CONFIG.domain,
    "logo": `${SITE_CONFIG.domain}/images/logo.png`,
    "description": "Sublet Gym Space. Share Success. Connecting gym owners with nutrition, fitness, and wellness businesses.",
    "telephone": "+917995424477",
    "email": "support@racksonrent.com"
  };

  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FFFDF5] text-[#1F1F1F] font-sans">
        <TopBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

