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

// Canonical production URL. Update this if you add a custom domain.
const SITE_URL = "https://fatibuclub.fatibuclub.workers.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "FatiBuClub | Private Literary Society & Managed Reader Experience",
  description:
    "FatiBuClub is a private literary society connecting independent authors with an engaged global reading community through a structured, year-long literary experience.",
  applicationName: "FatiBuClub",
  keywords: [
    "FatiBuClub",
    "literary society",
    "private reading community",
    "independent authors",
    "managed reader experience",
    "literary salon",
    "book residency",
    "selection committee",
    "literary culture",
    "deep reading",
  ],
  authors: [{ name: "FatiBuClub", url: SITE_URL }],
  creator: "FatiBuClub",
  publisher: "FatiBuClub",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "FatiBuClub",
    title: "FatiBuClub | Private Literary Society & Managed Reader Experience",
    description:
      "A private literary society connecting independent authors with an engaged global reading community through a structured, year-long literary experience.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "FatiBuClub — Where Intellectual Curiosity Meets Companionable Consideration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FatiBuClub | Private Literary Society",
    description:
      "A private literary society connecting independent authors with an engaged global reading community.",
    images: ["/og.png"],
  },
  // Google Search Console verification.
  // Replace the empty string with the content value from your Google
  // Search Console meta tag (e.g. "google-site-verification" content="ABC123xyz").
  verification: {
    google: "",
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

// JSON-LD structured data — helps Google understand the site is an
// Organization with a WebSite + SearchAction, improving rich results.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "FatiBuClub",
      url: SITE_URL,
      description:
        "A private literary society connecting independent authors with an engaged global reading community through a structured, year-long literary experience.",
      slogan: "Where Intellectual Curiosity Meets Companionable Consideration.",
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
        className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased bg-bg text-ink selection:bg-accent selection:text-white`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
