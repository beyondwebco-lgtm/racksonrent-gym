import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
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

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: "Racks on Rent | Gym Space for Wellness Brands",
  description:
    "Racks on Rent connects gym owners with nutrition, fitness, and wellness businesses looking for simple display-space opportunities inside gyms.",
  keywords: [
    "Racks on Rent",
    "Gym space sublet",
    "Nutrition rack rental",
    "Gym display space",
    "Wellness startup expansion",
    "Supplement rack in gym",
    "Fitness business opportunity",
    "Gym monetization"
  ],
  authors: [{ name: "Racks on Rent", url: SITE_CONFIG.domain }],
  creator: "Racks on Rent",
  publisher: "Racks on Rent",
  icons: {
    icon: "/icon.jpeg",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.jpeg",
  },
  openGraph: {
    title: "Racks on Rent | Gym Space for Wellness Brands",
    description:
      "Racks on Rent connects gym owners with nutrition, fitness, and wellness businesses looking for simple display-space opportunities inside gyms.",
    url: SITE_CONFIG.domain,
    siteName: "Racks on Rent",
    images: [
      {
        url: "/opengraph-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Racks on Rent Gym Display Space",
      },
    ],
    locale: "en_IN",
    type: "website",
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
    "logo": `${SITE_CONFIG.domain}/images/hero-gym.png`,
    "description": "Sublet space. Share Success. Connecting gym owners with nutrition and wellness businesses.",
    "telephone": "+917995424477",
    "email": ["support@racksonrent.com", "contact@racksonrent.com"]
  };

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfair.variable} h-full antialiased`}
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
