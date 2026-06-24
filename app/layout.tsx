import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Al Mahmasani Roasteries | Premium Nuts & Snacks Since 1975",
  description:
    "Al Mahmasani Roasteries — UAE's trusted wholesale supplier of premium nuts, dried fruits and snack products since 1975. Supplying retailers, supermarkets, hotels and businesses across the UAE.",
  keywords:
    "Al Mahmasani, nuts UAE, wholesale nuts UAE, premium nuts, dried fruits UAE, roasteries UAE, snacks wholesale, cashews UAE, almonds UAE, pistachios UAE, mixed nuts UAE, wholesale food UAE",
  openGraph: {
    title: "Al Mahmasani Roasteries | Premium Nuts & Snacks Since 1975",
    description:
      "UAE's trusted wholesale supplier of premium nuts, dried fruits and snack products since 1975. Absolute Nuts.",
    url: "https://almahmasani.ae",
    siteName: "Al Mahmasani Roasteries",
    locale: "en_AE",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ background: "#FAF7F0", color: "#4A3728" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <a
          href="https://wa.me/971504622865"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="wa-float"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.123 1.532 5.855L.057 23.882a.75.75 0 0 0 .924.924l6.063-1.476A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.734-.516-5.285-1.415l-.378-.218-3.928.956.977-3.878-.234-.389A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
