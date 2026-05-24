import type { Metadata } from "next";
import {
  Playfair_Display,
  Great_Vibes,
  Poppins,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";
import { COUPLE } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vibes",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://Sandeep-Ardra.vercel.app"),
  title: `${COUPLE.groom} & ${COUPLE.bride} | Wedding Invitation`,
  description: `Wedding invitation for ${COUPLE.groom} and ${COUPLE.bride} on ${COUPLE.displayDate}.`,
  openGraph: {
    title: `${COUPLE.groom} & ${COUPLE.bride} | Wedding Invitation`,
    description: `Wedding invitation for ${COUPLE.groom} and ${COUPLE.bride} on ${COUPLE.displayDate}.`,
    url: "/",
    siteName: `${COUPLE.groom} & ${COUPLE.bride} Wedding`,
    images: [
      {
        url: "/images/couple-intro.png",
        width: 600,
        height: 800,
        alt: `${COUPLE.groom} & ${COUPLE.bride}`,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${greatVibes.variable} ${poppins.variable} ${cormorant.variable}`}
    >
      <body className="min-h-[100dvh] overflow-x-hidden bg-cream">
        {children}
      </body>
    </html>
  );
}
