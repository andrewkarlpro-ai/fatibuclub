"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { PillLink, ArrowNudge } from "./ui-atoms";
import { useScrollSpy } from "./primitives";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Selection Committee", href: "#committee" },
  { label: "How We Operate", href: "#operate" },
  { label: "Voices", href: "#voices" },
  { label: "Contact", href: "#contact" },
];

const SPY_IDS = ["about", "experience", "committee", "operate", "voices", "contact"];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const active = useScrollSpy(SPY_IDS, 160);
  const reduce = useReducedMotion();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
            ? "rgba(8,9,20,0.72)"
            : "rgba(8,9,20,0)",
          borderColor: scrolled
            ? "rgba(245,243,238,0.1)"
            : "rgba(245,243,238,0)",
          backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 border-b"
        style={{ WebkitBackdropFilter: scrolled ? "blur(16px)" : "none" }}
      >
        <nav className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-5 sm:h-[72px] sm:px-8 lg:px-12">
          {/* Brand */}
          <a
            href="#top"
            className="group flex items-center gap-2.5"
            aria-label="FatiBuClub home"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-line-strong bg-surface">
              <span className="font-display text-[15px] font-bold text-ink">F</span>
              <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-cream" />
            </span>
            <span className="font-display text-[17px] font-semibold tracking-tight text-ink">
              FatiBuClub
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => {
              const id = item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  data-active={active === id}
                  className="nav-link text-[13px] font-medium tracking-wide"
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <PillLink
              href="#contact"
              className="hidden sm:inline-flex"
              size="md"
            >
              Connect With Us
              <ArrowNudge />
            </PillLink>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-white/[0.04] lg:hidden"
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-bg/95 backdrop-blur-xl" />
            <div className="relative flex h-full flex-col">
              <div className="flex h-16 items-center justify-between px-5 sm:px-8">
                <span className="font-display text-[17px] font-semibold text-ink">
                  FatiBuClub
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink"
                >
                  <X className="h-[18px] w-[18px]" />
                </button>
              </div>

              <div className="flex flex-1 flex-col justify-center gap-1 px-5 sm:px-8">
                {NAV.map((item, i) => {
                  const id = item.href.replace("#", "");
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      initial={
                        reduce ? { opacity: 0 } : { opacity: 0, x: -24 }
                      }
                      animate={
                        reduce ? { opacity: 1 } : { opacity: 1, x: 0 }
                      }
                      transition={{
                        duration: 0.4,
                        delay: 0.06 + i * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group flex items-baseline justify-between border-b border-line py-5"
                    >
                      <span
                        className={cn(
                          "font-display text-[clamp(1.9rem,9vw,3rem)] font-medium leading-none transition-colors",
                          active === id ? "text-cream" : "text-ink"
                        )}
                      >
                        {item.label}
                      </span>
                      <span className="font-display text-xs text-ink-faint tabular-nums">
                        0{i + 1}
                      </span>
                    </motion.a>
                  );
                })}
              </div>

              <div className="px-5 pb-10 sm:px-8">
                <PillLink href="#contact" onClick={() => setOpen(false)} size="lg" className="w-full">
                  Connect With Us
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
