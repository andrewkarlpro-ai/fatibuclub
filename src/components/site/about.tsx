"use client";

import * as React from "react";
import { Reveal } from "./primitives";

/* ============================================================
   About — Why We Exist
   Light, alternating sage-cream bg. Centered, intimate tone.
   ============================================================ */

const ABOUT_PILLS: string[] = [
  "Thoughtful Reading",
  "Indie Authors",
  "Small Circles",
  "Honest Discussion",
];

export function About() {
  return (
    <section
      id="about"
      className="anchor bg-bg-alt py-12 sm:py-16 md:py-18"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* eyebrow centered with a small index mark */}
          <Reveal>
            <div className="flex items-center justify-center gap-3">
              <span className="font-display text-xs font-semibold text-brand tabular-nums">
                01
              </span>
              <span aria-hidden className="h-px w-8 bg-[var(--color-sage-border)]" />
              <span className="eyebrow">Why We Exist</span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-4 font-display font-semibold text-ink tracking-tight text-[22px] leading-[1.2] sm:text-[clamp(1.375rem,3vw,2.25rem)]">
              Good Indie Books Deserve Real Conversation
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.6] text-ink-body sm:text-base">
              Thousands of remarkable independent books get buried before the
              right readers ever find them. FatiBuClub is a welcoming corner of
              the internet built for readers who love slowing down, reading
              closely, and talking through stories together. Whether it is a
              tense thriller, a moving memoir, or sweeping historical fiction,
              we care about stories with real heart and craft.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
              {ABOUT_PILLS.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-sage bg-sage px-4 py-2 text-[13px] text-ink-body"
                >
                  {pill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
