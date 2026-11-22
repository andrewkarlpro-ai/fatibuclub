"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { PillLink, ArrowNudge } from "./ui-atoms";
import { Logo } from "./logo";
import { useScrollSpy } from "./primitives";

const NAV = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reading Shelf", href: "#reading-shelf" },
  { label: "Our Team", href: "#team" },
  { label: "Transparency", href: "#transparency" },
  { label: "Contact", href: "#contact" },
];

const SPY_IDS = ["about", "how-it-works", "reading-shelf", "team", "transparency", "contact"];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const active = useScrollSpy(SPY_IDS, 120);

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
            ? "rgba(251, 253, 251, 0.85)"
            : "rgba(251, 253, 251, 1)",
          borderColor: scrolled
            ? "rgba(209, 229, 216, 1)"
            : "rgba(209, 229, 216, 0)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 border-b"
        style={{ WebkitBackdropFilter: scrolled ? "blur(12px)" : "none" }}
      >
        <nav className="mx-auto flex h-[60px] max-w-[1200px] items-center justify-between px-5 sm:h-16 sm:px-8">
          {/* Logo */}
          <a href="#top" className="flex items-center" aria-label="FatiBuClub home">
            <Logo size="sm" />
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 lg:flex">
            {NAV.map((item) => {
              const id = item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  data-active={active === id}
                  className="nav-link text-[14px] font-medium"
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <PillLink href="#contact" size="md" className="hidden sm:inline-flex">
              Submit Your Book
              <ArrowNudge />
            </PillLink>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-sage-border bg-surface text-brand lg:hidden"
            >
              <Menu className="h-5 w-5" />
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
              <div className="flex h-[60px] items-center justify-between px-5 sm:px-8">
                <Logo size="sm" />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-sage-border bg-surface text-brand"
                >
                  <X className="h-5 w-5" />
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
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: 0.05 + i * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group flex items-baseline justify-between border-b border-sage-border py-4"
                    >
                      <span
                        className={cn(
                          "font-display text-2xl font-semibold tracking-tight transition-colors",
                          active === id ? "text-brand" : "text-ink"
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

              <div className="px-5 pb-8 sm:px-8">
                <PillLink
                  href="#contact"
                  onClick={() => setOpen(false)}
                  size="lg"
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
