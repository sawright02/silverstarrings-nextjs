import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/CartDrawer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Silver Star Ring Co — Handcrafted Sterling Silver Spoon Rings",
  description:
    "Each Silver Star ring is handcrafted from genuine antique sterling silver spoons. Unique, wearable history. Est. 2026.",
  keywords: [
    "spoon rings",
    "sterling silver",
    "handcrafted jewelry",
    "antique silver rings",
    "Silver Star Ring Co",
  ],
  authors: [{ name: "Silver Star Ring Co" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Silver Star",
  },
  openGraph: {
    title: "Silver Star Ring Co — Handcrafted Sterling Silver Spoon Rings",
    description: "Where heirloom silver becomes wearable art.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silver Star Ring Co",
    description: "Handcrafted sterling silver spoon rings. Each one, unique.",
  },
};

export const viewport: Viewport = {
  themeColor: "#8A8C2A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Silver Star" />
      </head>
      <body className="font-body antialiased">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
