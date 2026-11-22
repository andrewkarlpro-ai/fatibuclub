"use client";

import { Mail } from "lucide-react";
import { Reveal } from "./primitives";
import { PillLink, ArrowNudge } from "./ui-atoms";
import { Logo } from "./logo";

/* Footer — clean, compact, sage bg via inline style. Standard Tailwind only. */

const FOOTER_NAV = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reading Shelf", href: "#reading-shelf" },
  { label: "Our Team", href: "#team" },
  { label: "Transparency", href: "#transparency" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer
      className="border-t border-sage"
      style={{ backgroundColor: "#EEF6F0" }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8">
        {/* Top — logo + tagline, centered */}
        <Reveal y={12}>
          <div className="flex flex-col items-center justify-center">
            <Logo size="sm" showTagline />
            <p className="mt-2 text-sm text-ink-body max-w-md mx-auto text-center">
              A private reading community for independent authors and thoughtful
              readers.
            </p>
          </div>
        </Reveal>

        {/* CTA strip */}
        <Reveal delay={0.04}>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-y border-sage py-4">
            <p className="text-sm text-ink-body">Have a book to share?</p>
            <PillLink href="#contact" size="sm">
              Submit Your Book <ArrowNudge />
            </PillLink>
          </div>
        </Reveal>

        {/* Nav links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 py-6">
          {FOOTER_NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs text-ink-body hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Email */}
        <div className="flex justify-center pb-4">
          <a
            href="mailto:fatibuclub@gmail.com"
            className="inline-flex items-center gap-1.5 text-sm text-brand font-medium hover:underline"
          >
            <Mail className="h-4 w-4" /> fatibuclub@gmail.com
          </a>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-sage">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-4 text-center">
          <p className="text-xs text-ink-faint">
            © 2018–2026 FatiBuClub. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
