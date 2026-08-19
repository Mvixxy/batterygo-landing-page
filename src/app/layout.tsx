import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BatteryGo - Jual Aki Mobil & Motor Terpercaya | Harga Terbaik",
  description:
    "Jual aki mobil dan motor berkualitas dengan harga terbaik. GS Astra, Incoe, Yuasa, dan masih banyak lagi. Gratis konsultasi, pengiriman cepat, garansi resmi.",
  keywords: [
    "aki mobil",
    "aki motor",
    "aki gs astra",
    "aki incoe",
    "aki yuasa",
    "jual aki",
    "toko aki",
    "aki murah",
    "aki berkualitas",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "BatteryGo - Jual Aki Mobil & Motor Terpercaya",
    description:
      "Aki mobil dan motor berkualitas dengan harga terbaik. Gratis konsultasi & pengiriman cepat.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${plusJakarta.variable} ${inter.variable} antialiased`}
    >
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
