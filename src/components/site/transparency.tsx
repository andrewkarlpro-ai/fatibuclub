"use client";

import { Gift, Mail } from "lucide-react";
import { Reveal, SectionHeader } from "./primitives";

/* Section 05 · Transparency — compact, two side-by-side cards. */

const CARDS = [
  {
    icon: Gift,
    title: "Free Consideration",
    body: "Sharing your book with us costs nothing. We review each title personally to see if it fits an upcoming reading circle.",
  },
  {
    icon: Mail,
    title: "Personal Onboarding by Email",
    body: "If your book is selected, we reach out directly by email to walk through how our volunteer reading circles work, let you choose the reader group size that feels right for you, and answer every question before you decide. Reviews are always honest reflections shared by our readers on Goodreads.",
  },
] as const;

export function Transparency() {
  return (
    <section id="transparency" className="anchor bg-bg py-9 sm:py-14 md:py-16">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="05"
          eyebrow="Transparency"
          title="Clear, Honest, and Zero Pressure"
          className="mb-4 sm:mb-5"
        />

        <Reveal delay={0.05}>
          <p className="max-w-xl text-[14px] sm:text-[15px] text-ink-body leading-[1.6] mb-6 sm:mb-8">
            We believe authors deserve clear answers and zero pressure.
            Selection is based purely on whether your story fits what our
            readers love to read and talk about.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={0.08 + i * 0.06}>
              <div className="card-surface p-3.5 sm:p-5 h-full">
                <div className="h-9 w-9 rounded-full bg-sage flex items-center justify-center text-brand">
                  <card.icon className="h-[18px] w-[18px]" />
                </div>
                <h3 className="font-display text-[15px] sm:text-[17px] font-semibold text-ink mt-2.5">
                  {card.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-ink-body leading-[1.55] mt-1.5">
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
