"use client";

import * as React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, SectionHeader } from "./primitives";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Section 7 · Frequently Asked Questions                            */
/* ------------------------------------------------------------------ */

const FAQ_ITEMS = [
  {
    q: "How do I submit my book for consideration?",
    a: "Fill out the contact form on this page with your name, email, book title, a Goodreads or Amazon link, and a short note about what inspired your book. We read every submission personally and respond by email if your book fits an upcoming reading circle.",
  },
  {
    q: "Is there a fee to submit my book?",
    a: "No. Sharing your book with us is completely free. We review each title personally to see if it fits what our readers enjoy discussing. There is no cost at any stage of consideration.",
  },
  {
    q: "How many readers will read my book?",
    a: "Our reading circles average around 25 readers per book, but we can arrange a smaller group if you prefer a more intimate discussion. We'll discuss the group size with you by email before anything starts.",
  },
  {
    q: "Are the Goodreads reviews guaranteed to be positive?",
    a: "No. Reviews are always honest reflections shared by our readers on Goodreads. We never promise positive reviews, rankings, or sales. What we offer is genuine reading and thoughtful discussion by real readers who care about stories.",
  },
  {
    q: "What genres do you accept?",
    a: "We welcome indie thrillers, memoirs, literary novels, historical fiction, speculative fiction, and other character-driven stories. If your book has real heart and craft, we're happy to take a look.",
  },
  {
    q: "How long does the reading circle take?",
    a: "A typical reading circle runs for about 4 to 6 weeks, depending on the book's length and the group's pace. Readers move through the book together, share reactions in private discussion channels, and then post their honest reviews on Goodreads.",
  },
] as const;

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="anchor bg-sunshine relative overflow-hidden py-12 sm:py-16 md:py-18"
    >
      {/* Soft decorative glow — keeps the section warm without distracting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sage/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeader
          index="07"
          eyebrow="Questions & Answers"
          title="Frequently Asked Questions"
        />

        <Reveal delay={0.08}>
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.6] text-ink-body sm:text-base">
            Common questions from indie authors thinking about sharing their
            book with us. Don't see your question? Reach out at{" "}
            <a
              href="mailto:fatibuclub@gmail.com"
              className="font-medium text-brand underline decoration-sage-border underline-offset-4 transition-colors hover:decoration-brand"
            >
              fatibuclub@gmail.com
            </a>
            .
          </p>
        </Reveal>

        {/* Accordion */}
        <div className="mt-8 flex flex-col gap-3 sm:mt-10">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.q} delay={0.04 * i}>
                <div
                  className={cn(
                    "card-surface overflow-hidden rounded-2xl transition-all duration-300",
                    isOpen &&
                      "border-brand shadow-[0_2px_8px_rgba(28,43,34,0.06),0_8px_28px_rgba(46,125,82,0.1)]"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset"
                  >
                    <span className="font-display text-[15px] font-semibold text-ink sm:text-base">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-brand transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-[14px] leading-[1.6] text-ink-body sm:text-[15px]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
