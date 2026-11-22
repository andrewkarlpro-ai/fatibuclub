"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PillLink, ArrowNudge } from "./ui-atoms";
import { useScrollSpy } from "./primitives";

const NAV = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reading Shelf", href: "#reading-shelf" },
  { label: "Our Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const SPY_IDS = ["about", "how-it-works", "reading-shelf", "team", "faq", "contact"];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const active = useScrollSpy(SPY_IDS, 80);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-sage bg-bg/95 backdrop-blur">
        <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2" aria-label="FatiBuClub home">
            <Image src="/images/logo-mark.png" alt="" width={32} height={32} className="h-8 w-8" />
            <span className="flex flex-col leading-none">
              <span className="text-sm font-bold text-ink">FatiBuClub</span>
              <span className="mt-0.5 text-[10px] uppercase tracking-wide text-ink-faint">
                Private Reading Society · Est. 2018
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-5">
            {NAV.map((item) => {
              const id = item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  data-active={active === id}
                  className="nav-link text-sm font-medium"
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <PillLink href="#contact" size="sm" className="hidden sm:inline-flex">
              Submit Your Book <ArrowNudge />
            </PillLink>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-sage text-brand"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-bg md:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex h-14 items-center justify-between px-4 sm:px-6 border-b border-sage">
                <a href="#top" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                  <Image src="/images/logo-mark.png" alt="" width={32} height={32} className="h-8 w-8" />
                  <span className="text-sm font-bold text-ink">FatiBuClub</span>
                </a>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-sage text-brand"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-1 flex-col justify-center gap-1 px-4 sm:px-6">
                {NAV.map((item) => {
                  const id = item.href.replace("#", "");
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      data-active={active === id}
                      className="nav-link font-display text-2xl font-semibold tracking-tight text-ink"
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
              <div className="px-4 sm:px-6 pb-8">
                <PillLink href="#contact" onClick={() => setOpen(false)} className="w-full">
                  Submit Your Book <ArrowNudge />
                </PillLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
