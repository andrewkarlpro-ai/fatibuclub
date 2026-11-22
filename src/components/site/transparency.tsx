"use client";

import { Gift, Mail } from "lucide-react";
import { Reveal, SectionHeader } from "./primitives";
import { Card } from "./ui-atoms";

/* Section 05 · Transparency — two side-by-side cards. */

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
    <section id="transparency" className="anchor bg-bg py-10 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader index="05" eyebrow="Transparency" title="Clear, Honest, and Zero Pressure" className="mb-4" />

        <Reveal delay={0.04}>
          <p className="max-w-lg text-sm text-ink-body leading-relaxed mb-6">
            We believe authors deserve clear answers and zero pressure. Selection is based purely on whether your story fits what our readers love to read and talk about.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={0.06 + i * 0.05}>
              <Card className="p-4 h-full">
                <div className="h-9 w-9 rounded-full bg-sage flex items-center justify-center text-brand">
                  <card.icon className="h-4 w-4" />
                </div>
                <h3 className="font-display text-sm font-semibold text-ink mt-3">{card.title}</h3>
                <p className="text-sm text-ink-body mt-1.5 leading-relaxed">{card.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
