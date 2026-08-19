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
  metadataBase: new URL("https://gantiaki24jam.web.id"),
  title: "Toko Aki 24 Jam Bogor | BatteryGo - Aki Mobil & Motor",
  description:
    "Toko aki 24 jam di Bogor. Jual aki mobil & motor GS Astra, Incoe, Yuasa, Marathon. Harga terbaik, garansi resmi, gratis pemasangan, pengiriman cepat ke lokasi Anda.",
  keywords: [
    "toko aki 24 jam",
    "toko aki bogor",
    "jual aki mobil bogor",
    "jual aki motor bogor",
    "aki gs astra",
    "aki incoe",
    "aki yuasa",
    "aki murah bogor",
    "ganti aki mobil cibinong",
    "ganti aki motor cibinong",
    "toko aki terdekat",
    "aki mobil terbaik",
    "aki motor terbaik",
    "pemasangan aki 24 jam",
    "baterai mobil",
    "baterai motor",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Toko Aki 24 Jam Bogor | BatteryGo - Aki Mobil & Motor",
    description:
      "Toko aki 24 jam di Bogor. Jual aki mobil & motor, harga terbaik, garansi resmi, gratis pemasangan.",
    url: "https://gantiaki24jam.web.id",
    siteName: "BatteryGo",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BatteryGo - Toko Aki 24 Jam Bogor",
      },
    ],
  },
  alternates: {
    canonical: "https://gantiaki24jam.web.id",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "BatteryGo",
              description:
                "Toko aki 24 jam di Bogor. Jual aki mobil & motor GS Astra, Incoe, Yuasa, Marathon. Garansi resmi, gratis pemasangan.",
              url: "https://gantiaki24jam.web.id",
              telephone: "+6282321006968",
              email: "support@gantiaki24jam.web.id",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Jl. Raya Karadenan RT 3 RW 4, Kel. Karadenan",
                addressLocality: "Cibinong",
                addressRegion: "Kabupaten Bogor",
                postalCode: "16913",
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -6.4536,
                longitude: 106.8476,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "07:00",
                  closes: "21:00",
                },
              ],
              priceRange: "Rp 145.000 - Rp 795.000",
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: -6.4536,
                  longitude: 106.8476,
                },
                geoRadius: "25000",
              },
              brand: [
                { "@type": "Brand", name: "GS Astra" },
                { "@type": "Brand", name: "Incoe" },
                { "@type": "Brand", name: "Yuasa" },
                { "@type": "Brand", name: "Marathon" },
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
