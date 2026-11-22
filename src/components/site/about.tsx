"use client";

import { Reveal } from "./primitives";

/* About — Why We Exist. Compact. */

const ABOUT_PILLS = ["Thoughtful Reading", "Indie Authors", "Small Circles", "Honest Discussion"];

export function About() {
  return (
    <section id="about" className="anchor bg-bg-alt">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-2">
              <span className="font-display text-[11px] font-semibold text-brand tabular-nums">01</span>
              <span aria-hidden className="h-px w-6 bg-sage-border" />
              <span className="eyebrow !text-[11px]">Why We Exist</span>
            </div>
          </Reveal>
          <Reveal delay={0.04}>
            <h2 className="mt-2.5 font-display font-semibold text-ink tracking-tight text-[20px] leading-[1.25] sm:text-[clamp(1.25rem,3vw,2.125rem)]">
              Good Indie Books Deserve Real Conversation
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-3 max-w-lg text-[13.5px] leading-[1.55] text-ink-body sm:text-[15px] sm:leading-[1.6]">
              Thousands of remarkable independent books get buried before the right readers ever find them.
              Since 2018, FatiBuClub has been a welcoming corner of the internet built for readers who love
              slowing down, reading closely, and talking through stories together. Whether it is a tense
              thriller, a moving memoir, or sweeping historical fiction, we care about stories with real
              heart and craft.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
              {ABOUT_PILLS.map((pill) => (
                <span key={pill} className="rounded-full border border-sage bg-sage px-3 py-1 text-[11px] text-ink-body sm:text-[12px]">
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
