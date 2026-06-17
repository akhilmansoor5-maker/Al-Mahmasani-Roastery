import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
      <body style={{ background: "#f7f2e8", color: "#1a1108" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
