import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Lucy: Being awake inside your own dreams",
    template: "%s · Lucy",
  },
  description:
    "Lucy trains lucid dreaming with a smartphone, built on the Northwestern 2024 Targeted Lucidity Reactivation study. A gentle daily loop: reality-check reminders by day, a cue played during REM at night, dream journaling in the morning.",
  applicationName: "Lucy",
  keywords: [
    "lucid dreaming",
    "lucid dream app",
    "Targeted Lucidity Reactivation",
    "TLR",
    "MILD technique",
    "dream journal",
    "REM",
    "sleep science",
    "lucy",
  ],
  authors: [{ name: site.developer }],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: "Lucy",
    title: "Lucy: Being awake inside your own dreams",
    description:
      "Train lucid dreaming with your phone, grounded in real sleep science. Reality checks by day, a cue during REM at night, journaling in the morning.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucy: Being awake inside your own dreams",
    description:
      "Train lucid dreaming with your phone, grounded in real sleep science.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
