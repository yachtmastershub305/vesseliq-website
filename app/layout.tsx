import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Orbs } from "@/components/layout/Orbs";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vesseliq.com"),
  title: {
    default: "VesselIQ. The data layer for marine.",
    template: "%s · VesselIQ",
  },
  description:
    "Two layers, one boat. A vessel record and an intelligence layer for the marine industry, owner authorized and built for builders, insurers, brokers, manufacturers, and developers.",
  openGraph: {
    title: "VesselIQ. The data layer for marine.",
    description:
      "Two layers, one boat. A vessel record and an intelligence layer for the marine industry.",
    images: ["/assets/og-share.png"],
    type: "website",
  },
  icons: { icon: "/assets/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Orbs />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
