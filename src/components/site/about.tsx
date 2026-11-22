"use client";

import { Reveal } from "./primitives";

const ABOUT_PILLS = ["Thoughtful Reading", "Indie Authors", "Small Circles", "Honest Discussion"];

export function About() {
  return (
    <section id="about" className="anchor bg-bg-alt py-10 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-2">
              <span className="text-[11px] font-semibold text-brand">01</span>
              <span className="h-px w-6 bg-sage-border" aria-hidden />
              <span className="eyebrow">Why We Exist</span>
            </div>
          </Reveal>

          <Reveal delay={0.04}>
            <h2 className="mt-3 font-display font-semibold text-ink tracking-tight text-xl sm:text-3xl">
              Good Indie Books Deserve Real Conversation
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-3 text-sm leading-relaxed text-ink-body sm:text-base">
              Thousands of remarkable independent books get buried before the
              right readers ever find them. Since 2018, FatiBuClub has been a
              welcoming corner of the internet built for readers who love slowing
              down, reading closely, and talking through stories together.
              Whether it is a tense thriller, a moving memoir, or sweeping
              historical fiction, we care about stories with real heart and
              craft.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {ABOUT_PILLS.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-sage bg-sage px-3 py-1 text-xs text-ink-body"
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
