"use client";

import { Mail } from "lucide-react";
import { Reveal } from "./primitives";
import { PillLink, ArrowNudge } from "./ui-atoms";
import { Logo } from "./logo";

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
      className="relative mt-auto overflow-hidden border-t border-sage"
      style={{ backgroundColor: "#EEF6F0" }}
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* Top — logo + tagline */}
        <Reveal y={20}>
          <div className="flex flex-col items-center pt-12 sm:pt-14 text-center">
            <Logo size="lg" showTagline />
            <p className="mt-4 max-w-md text-[14px] text-ink-body leading-[1.6]">
              A private reading community for independent authors and
              thoughtful readers.
            </p>
          </div>
        </Reveal>

        {/* CTA strip */}
        <Reveal delay={0.05}>
          <div className="mt-8 sm:mt-10 flex flex-col items-center justify-between gap-4 border-y border-sage py-6 sm:flex-row">
            <p className="text-[14px] sm:text-[15px] text-ink-body">
              Have a book to share?
            </p>
            <PillLink href="#contact" size="md">
              Submit Your Book
              <ArrowNudge />
            </PillLink>
          </div>
        </Reveal>

        {/* Nav links row */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-8">
          {FOOTER_NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] text-ink-body hover:text-brand transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Email line */}
        <div className="flex justify-center pb-8">
          <a
            href="mailto:fatibuclub@gmail.com"
            className="inline-flex items-center gap-2 text-[14px] text-brand font-medium hover:underline"
          >
            <Mail className="h-4 w-4" />
            fatibuclub@gmail.com
          </a>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-sage">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 py-5 text-center">
          <p className="text-[12px] text-ink-faint">
            © 2026 FatiBuClub. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
