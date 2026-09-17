"use client";

import { Reveal } from "./primitives";
import { PillLink, ArrowNudge } from "./ui-atoms";

const FOOTER_NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Selection Committee", href: "#committee" },
  { label: "How We Operate", href: "#operate" },
  { label: "Voices", href: "#voices" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-line bg-bg-2">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 aura-accent opacity-20"
      />
      {/* oversized brand wordmark */}
      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <Reveal y={20}>
          <div className="flex flex-col items-center pt-16 text-center sm:pt-20">
            <span className="eyebrow">FatiBuClub</span>
            <h2 className="mt-5 font-display font-medium text-ink display-tighter text-[clamp(3rem,14vw,11rem)]">
              FatiBuClub
            </h2>
          </div>
        </Reveal>

        {/* CTA strip */}
        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-col items-center justify-between gap-6 border-y border-line py-8 sm:flex-row sm:py-10">
            <p className="max-w-md text-center text-[15px] text-ink-muted sm:text-left">
              A Private Literary Society &amp; Managed Reader Experience.
            </p>
            <PillLink href="#contact" size="lg">
              Connect With the Selection Committee
              <ArrowNudge />
            </PillLink>
          </div>
        </Reveal>

        {/* nav grid */}
        <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 py-10">
          {FOOTER_NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-[13px] font-medium tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* copyright */}
      <div className="relative border-t border-line">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-3 px-5 py-7 sm:flex-row sm:px-8 lg:px-12">
          <p className="text-[12px] text-ink-faint">
            © 2025 FatiBuClub. All Rights Reserved.
          </p>
          <p className="text-[12px] text-ink-faint">
            A private literary society &amp; managed reader experience.
          </p>
        </div>
      </div>
    </footer>
  );
}
