"use client";

import { Mail } from "lucide-react";
import { Reveal } from "./primitives";
import { PillLink, ArrowNudge } from "./ui-atoms";
import { Logo } from "./logo";

/* Footer — compact, sage bg, © 2018–2026. */

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
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        {/* Top — logo + tagline */}
        <Reveal y={16}>
          <div className="flex flex-col items-center pt-9 sm:pt-12 text-center">
            <Logo size="md" showTagline />
            <p className="mt-3 max-w-md text-[13px] text-ink-body leading-[1.55] sm:text-[14px]">
              A private reading community for independent authors and
              thoughtful readers.
            </p>
          </div>
        </Reveal>

        {/* CTA strip */}
        <Reveal delay={0.04}>
          <div className="mt-6 sm:mt-8 flex flex-col items-center justify-between gap-3 border-y border-sage py-4 sm:flex-row sm:py-5">
            <p className="text-[13px] sm:text-[14px] text-ink-body">
              Have a book to share?
            </p>
            <PillLink href="#contact" size="sm">
              Submit Your Book
              <ArrowNudge />
            </PillLink>
          </div>
        </Reveal>

        {/* Nav links row */}
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 py-6 sm:py-7">
          {FOOTER_NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[12px] text-ink-body hover:text-brand transition-colors sm:text-[13px]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Email line */}
        <div className="flex justify-center pb-6 sm:pb-7">
          <a
            href="mailto:fatibuclub@gmail.com"
            className="inline-flex items-center gap-1.5 text-[13px] text-brand font-medium hover:underline sm:text-[14px]"
          >
            <Mail className="h-[15px] w-[15px]" />
            fatibuclub@gmail.com
          </a>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-sage">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8 py-4 text-center">
          <p className="text-[11px] text-ink-faint sm:text-[12px]">
            © 2018–2026 FatiBuClub. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
