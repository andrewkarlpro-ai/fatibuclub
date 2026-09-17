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

export const metadata: Metadata = {
  title: "FatiBuClub | Private Literary Society & Managed Reader Experience",
  description:
    "FatiBuClub is a private literary society connecting independent authors with an engaged global reading community through a structured, year-long literary experience.",
  keywords: [
    "FatiBuClub",
    "literary society",
    "private reading community",
    "independent authors",
    "managed reader experience",
    "literary salon",
    "book residency",
  ],
  authors: [{ name: "FatiBuClub" }],
  openGraph: {
    title: "FatiBuClub | Private Literary Society & Managed Reader Experience",
    description:
      "A private literary society connecting independent authors with an engaged global reading community through a structured, year-long literary experience.",
    siteName: "FatiBuClub",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FatiBuClub | Private Literary Society",
    description:
      "A private literary society connecting independent authors with an engaged global reading community.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased bg-bg text-ink selection:bg-accent selection:text-white`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
