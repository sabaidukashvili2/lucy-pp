import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const title = "Lucyd: Being awake inside your own dreams";
const description =
  "Lucyd trains lucid dreaming with nothing but your phone, built on the Northwestern 2024 Targeted Lucidity Reactivation study. A gentle daily loop: reality-check reminders by day, a cue played during REM at night, dream journaling in the morning. No accounts, no cloud.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s · Lucyd",
  },
  description,
  applicationName: "Lucyd",
  category: "Health & Fitness",
  keywords: [
    "lucid dreaming",
    "lucid dream app",
    "how to lucid dream",
    "lucid dreaming app iPhone",
    "Targeted Lucidity Reactivation",
    "TLR",
    "MILD technique",
    "dream journal app",
    "REM sleep",
    "sleep science",
    "lucyd",
  ],
  authors: [{ name: site.developer, url: site.url }],
  creator: site.developer,
  publisher: site.developer,
  alternates: { canonical: "/" },
  formatDetection: { telephone: false, email: false, address: false },
  appleWebApp: {
    capable: true,
    title: "Lucyd",
    statusBarStyle: "black-translucent",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: "Lucyd",
    locale: "en_US",
    title,
    description:
      "Train lucid dreaming with your phone, grounded in real sleep science. Reality checks by day, a cue during REM at night, journaling in the morning.",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Train lucid dreaming with your phone, grounded in real sleep science.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
    apple: [{ url: "/favicon.svg" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.developer,
      url: site.url,
      logo: `${site.url}/favicon.svg`,
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: "Lucyd",
      url: site.url,
      description,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "MobileApplication",
      "@id": `${site.url}/#app`,
      name: "Lucyd",
      operatingSystem: "iOS",
      applicationCategory: "HealthApplication",
      description,
      url: site.url,
      inLanguage: "en-US",
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
