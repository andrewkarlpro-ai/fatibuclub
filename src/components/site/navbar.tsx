"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
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
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const active = useScrollSpy(SPY_IDS, 100);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled
            ? "rgba(251, 253, 251, 0.9)"
            : "rgba(251, 253, 251, 1)",
          borderColor: scrolled
            ? "rgba(209, 229, 216, 1)"
            : "rgba(209, 229, 216, 0)",
          backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 border-b"
        style={{ WebkitBackdropFilter: scrolled ? "blur(10px)" : "none" }}
      >
        <nav className="mx-auto flex h-14 max-w-[1120px] items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
          {/* Logo — compact mark + stacked text */}
          <a href="#top" className="flex items-center gap-2" aria-label="FatiBuClub home">
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={36}
              height={36}
              className="h-8 w-8 sm:h-9 sm:w-9"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[15px] font-bold text-ink tracking-tight">
                FatiBuClub
              </span>
              <span className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-ink-faint font-medium">
                Private Reading Society · Est. 2018
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-5 lg:flex">
            {NAV.map((item) => {
              const id = item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  data-active={active === id}
                  className="nav-link text-[13px] font-medium"
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2.5">
            <PillLink href="#contact" size="sm" className="hidden sm:inline-flex">
              Submit Your Book
              <ArrowNudge />
            </PillLink>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-sage-border bg-surface text-brand lg:hidden"
            >
              <Menu className="h-[18px] w-[18px]" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-bg/95 backdrop-blur-xl" />
            <div className="relative flex h-full flex-col">
              <div className="flex h-14 items-center justify-between px-4 sm:px-6">
                <a href="#top" className="flex items-center gap-2" aria-label="FatiBuClub home">
                  <Image
                    src="/images/logo-mark.png"
                    alt=""
                    width={36}
                    height={36}
                    className="h-8 w-8"
                  />
                  <span className="flex flex-col leading-none">
                    <span className="font-display text-[15px] font-bold text-ink">FatiBuClub</span>
                    <span className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-ink-faint">
                      Est. 2018
                    </span>
                  </span>
                </a>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-sage-border bg-surface text-brand"
                >
                  <X className="h-[18px] w-[18px]" />
                </button>
              </div>

              <div className="flex flex-1 flex-col justify-center gap-0.5 px-4 sm:px-6">
                {NAV.map((item, i) => {
                  const id = item.href.replace("#", "");
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.04 + i * 0.04,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group flex items-baseline justify-between border-b border-sage-border py-3.5"
                    >
                      <span
                        className={cn(
                          "font-display text-xl font-semibold tracking-tight transition-colors",
                          active === id ? "text-brand" : "text-ink"
                        )}
                      >
                        {item.label}
                      </span>
                      <span className="font-display text-[11px] text-ink-faint tabular-nums">
                        0{i + 1}
                      </span>
                    </motion.a>
                  );
                })}
              </div>

              <div className="px-4 pb-6 sm:px-6">
                <PillLink
                  href="#contact"
                  onClick={() => setOpen(false)}
                  size="md"
                  className="w-full"
                >
                  Submit Your Book
                  <ArrowNudge />
                </PillLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
