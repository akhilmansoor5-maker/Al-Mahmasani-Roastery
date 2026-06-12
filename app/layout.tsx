import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Al Mahmasani Roastery | Premium Nuts & Snacks Since 1975",
  description:
    "Al Mahmasani Roastery LLC — UAE's trusted wholesale supplier of premium nuts, dried fruits and snack products since 1975. Supplying retailers, supermarkets and businesses across the UAE.",
  keywords:
    "Al Mahmasani, nuts UAE, wholesale nuts UAE, premium nuts, dried fruits UAE, roastery UAE, snacks wholesale, cashews UAE, almonds UAE, pistachios UAE",
  openGraph: {
    title: "Al Mahmasani Roastery | Premium Nuts & Snacks Since 1975",
    description:
      "UAE's trusted wholesale supplier of premium nuts, dried fruits and snack products since 1975.",
    url: "https://almahmasani.ae",
    siteName: "Al Mahmasani Roastery",
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
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
