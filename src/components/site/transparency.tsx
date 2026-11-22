"use client";

import { Gift, Mail } from "lucide-react";
import { Reveal, SectionHeader } from "./primitives";

/* Section 05 · Transparency — compact, two side-by-side cards. */

const CARDS = [
  { icon: Gift, title: "Free Consideration", body: "Sharing your book with us costs nothing. We review each title personally to see if it fits an upcoming reading circle." },
  { icon: Mail, title: "Personal Onboarding by Email", body: "If your book is selected, we reach out directly by email to walk through how our volunteer reading circles work, let you choose the reader group size that feels right for you, and answer every question before you decide. Reviews are always honest reflections shared by our readers on Goodreads." },
] as const;

export function Transparency() {
  return (
    <section id="transparency" className="anchor bg-bg">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <SectionHeader index="05" eyebrow="Transparency" title="Clear, Honest, and Zero Pressure" className="mb-3 sm:mb-4" />
        <Reveal delay={0.04}>
          <p className="max-w-lg text-[13.5px] leading-[1.55] text-ink-body sm:text-[15px] sm:leading-[1.6] mb-4 sm:mb-6">
            We believe authors deserve clear answers and zero pressure. Selection is based purely on whether your story fits what our readers love to read and talk about.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={0.06 + i * 0.05}>
              <div className="card-surface p-3.5 h-full sm:p-5">
                <div className="h-8 w-8 rounded-full bg-sage flex items-center justify-center text-brand">
                  <card.icon className="h-4 w-4" />
                </div>
                <h3 className="mt-2 font-display text-[15px] font-semibold text-ink sm:text-[17px]">{card.title}</h3>
                <p className="mt-1.5 text-[13px] leading-[1.55] text-ink-body sm:text-[14px]">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
