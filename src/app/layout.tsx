import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://fatibuclub.fatibuclub.workers.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "FatiBuClub | Private Indie Reading Society for Independent Authors",
  description:
    "FatiBuClub connects independent authors with small, attentive reading circles for genuine reading, lively group discussion, and honest Goodreads reviews.",
  applicationName: "FatiBuClub",
  keywords: [
    "FatiBuClub",
    "indie books",
    "independent authors",
    "reading circle",
    "book club",
    "Goodreads reviews",
    "reading community",
    "literary community",
    "indie publishing",
  ],
  authors: [{ name: "FatiBuClub", url: SITE_URL }],
  creator: "FatiBuClub",
  publisher: "FatiBuClub",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/images/logo-mark.png", type: "image/png", sizes: "1024x1024" },
    ],
    apple: [{ url: "/images/logo-mark.png", sizes: "1024x1024" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "FatiBuClub",
    title: "FatiBuClub | Private Indie Reading Society for Independent Authors",
    description:
      "We connect independent authors with small, attentive reading circles for genuine reading, lively group discussion, and honest Goodreads reviews.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "FatiBuClub — Thoughtful Readers for Independent Books Worth Talking About",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FatiBuClub | Private Indie Reading Society",
    description:
      "We connect independent authors with small, attentive reading circles for genuine reading, lively group discussion, and honest Goodreads reviews.",
    images: ["/og.png"],
  },
  verification: {
    google: "HRFsJvVZGRvzf59l9ICfRgAaG2z0Zq_mSYRtt-4wnjs",
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
  category: "books",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "FatiBuClub",
      url: SITE_URL,
      description:
        "A private reading community for independent authors and thoughtful readers. We connect independent authors with small, attentive reading circles for genuine reading, lively group discussion, and honest Goodreads reviews.",
      email: "fatibuclub@gmail.com",
      slogan: "Thoughtful Readers for Independent Books Worth Talking About.",
      sameAs: [] as string[],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "FatiBuClub",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased bg-bg text-ink-body selection:bg-brand selection:text-white`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
