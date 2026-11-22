"use client";

import * as React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, SectionHeader } from "./primitives";
import { cn } from "@/lib/utils";

/* Section 06 · Questions & Answers — slim accordion rows, 5 questions (no Goodreads Q). */

const FAQ_ITEMS = [
  { q: "How do I submit my book for consideration?", a: "Fill out the contact form on this page with your name, email, book title, a Goodreads or Amazon link, and a short note about what inspired your book. We read every submission personally and respond by email if your book fits an upcoming reading circle." },
  { q: "Is there a fee to submit my book?", a: "No. Sharing your book with us is completely free. We review each title personally to see if it fits what our readers enjoy discussing. There is no cost at any stage of consideration." },
  { q: "How many readers will read my book?", a: "Our reading circles average around 150 readers per book, but we can arrange a smaller group if you prefer a more intimate discussion. We'll discuss the group size with you by email before anything starts." },
  { q: "What genres do you accept?", a: "We welcome indie thrillers, memoirs, literary novels, historical fiction, speculative fiction, and other character-driven stories. If your book has real heart and craft, we're happy to take a look." },
  { q: "How long does the reading circle take?", a: "A typical reading circle runs for about 4 to 6 weeks, depending on the book's length and the group's pace. Readers move through the book together, share reactions in private discussion channels, and then post their honest reviews on Goodreads." },
] as const;

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="anchor bg-sunshine relative overflow-hidden">
      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <SectionHeader index="06" eyebrow="Questions & Answers" title="Frequently Asked Questions" />
        <Reveal delay={0.04}>
          <p className="mt-2.5 max-w-lg text-[13px] leading-[1.55] text-ink-body sm:text-[14px]">
            Common questions from indie authors. Don't see your question? Reach out at{" "}
            <a href="mailto:fatibuclub@gmail.com" className="font-medium text-brand underline decoration-sage-border underline-offset-4 hover:decoration-brand">fatibuclub@gmail.com</a>.
          </p>
        </Reveal>

        {/* Slim accordion */}
        <div className="mt-4 flex flex-col gap-2">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.q} delay={0.02 * i}>
                <div className={cn("card-surface overflow-hidden", isOpen && "border-brand")}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-2.5 py-3 px-3.5 text-left outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset"
                  >
                    <span className="font-display text-[14px] font-semibold text-ink">{item.q}</span>
                    <ChevronDown className={cn("h-4 w-4 shrink-0 text-brand transition-transform duration-300", isOpen && "rotate-180")} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-3.5 pb-3 text-[13px] leading-[1.55] text-ink-body">{item.a}</p>
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
