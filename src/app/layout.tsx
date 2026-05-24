import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Aividyou - Discover the Best AI Tools & Free Utilities",
    template: "%s | Aividyou",
  },
  description: "Discover the best AI tools for video creation, image generation, productivity, and more. Plus free browser-based utilities for everyday tasks.",
  keywords: ["AI tools", "AI video generator", "AI image generator", "free tools", "online utilities", "AI productivity"],
  authors: [{ name: "Aividyou" }],
  creator: "Aividyou",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aividyou.com",
    siteName: "Aividyou",
    title: "Aividyou - Discover the Best AI Tools & Free Utilities",
    description: "Discover the best AI tools for video creation, image generation, productivity, and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aividyou - AI Tools Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aividyou - Discover the Best AI Tools & Free Utilities",
    description: "Discover the best AI tools for video creation, image generation, productivity, and more.",
    images: ["/og-image.png"],
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
  metadataBase: new URL("https://aividyou.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16 lg:pt-18">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
