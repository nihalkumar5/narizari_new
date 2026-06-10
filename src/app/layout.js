import { Inter, Outfit, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata = {
  metadataBase: new URL("https://narizari.com"),
  title: {
    default: "NariZari | Premium Varanasi Saree & Heritage Brand Marketing Agency",
    template: "%s | NariZari"
  },
  description: "NariZari builds high-converting marketing systems and digital showrooms to scale premium Varanasi Saree brands and heritage Indian luxury labels nationwide.",
  keywords: ["Varanasi saree marketing", "heritage luxury agency", "Indian heritage brands", "saree brand growth", "eCommerce marketing"],
  openGraph: {
    title: "NariZari | Premium Varanasi Saree Marketing Agency",
    description: "Scale your heritage brand nationwide with our high-converting digital marketing systems.",
    url: "https://narizari.com",
    siteName: "NariZari",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NariZari | Heritage Brand Marketing",
    description: "Scale your heritage brand nationwide with our high-converting digital marketing systems.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${caveat.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
