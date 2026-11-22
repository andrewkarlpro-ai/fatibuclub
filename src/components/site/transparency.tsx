"use client";

import { Gift, Mail } from "lucide-react";
import { Reveal, SectionHeader } from "./primitives";

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
    <section id="transparency" className="anchor bg-bg py-12 sm:py-16 md:py-18">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHeader
          index="05"
          eyebrow="Transparency"
          title="Clear, Honest, and Zero Pressure"
          className="mb-5 sm:mb-6"
        />

        <Reveal delay={0.06}>
          <p className="max-w-2xl text-[15px] sm:text-base text-ink-body leading-[1.7] mb-8 sm:mb-10">
            We believe authors deserve clear answers and zero pressure.
            Selection is based purely on whether your story fits what our
            readers love to read and talk about.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={0.1 + i * 0.08}>
              <div className="card-surface rounded-2xl p-5 sm:p-6 h-full">
                <div className="h-10 w-10 rounded-full bg-sage flex items-center justify-center text-brand">
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-[16px] sm:text-[18px] font-semibold text-ink mt-3">
                  {card.title}
                </h3>
                <p className="text-[14px] text-ink-body leading-[1.6] mt-2">
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
