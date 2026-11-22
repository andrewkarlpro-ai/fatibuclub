"use client";

import * as React from "react";
import { Reveal } from "./primitives";
import { PillLink, ArrowNudge } from "./ui-atoms";
import { BackgroundImage } from "./background-image";

/* Hero — compact, editorial, with animated bookshelf background.
   Slim highlight ribbon replaces the bulky floating card. */

const RIBBON_STATS: { value: string; label: string }[] = [
  { value: "1,240", label: "members" },
  { value: "450", label: "active readers" },
  { value: "150", label: "avg readers per book" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 sm:pt-28 pb-10 sm:pb-12"
    >
      {/* Animated bookshelf background — higher visibility (overlay 60) */}
      <BackgroundImage
        src="/images/bg-bookshelf.png"
        alt="A bright, sunlit wooden bookshelf filled with colorful books."
        tint="warm"
        overlay={60}
        priority
      />

      <div className="relative z-10 mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow text-[11px]">
              FatiBuClub · Private Indie Reading Society · Est. 2018
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-4 font-display font-semibold text-ink tracking-tight text-[26px] leading-[1.15] sm:text-[clamp(1.75rem,4vw,2.875rem)] sm:leading-[1.12]">
              Thoughtful Readers for Independent Books Worth Talking About.
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-4 max-w-xl text-[14px] leading-[1.55] text-ink-body sm:text-[15px] sm:leading-[1.6]">
              We connect independent authors with small, attentive reading
              circles for genuine reading, lively group discussion, and honest
              Goodreads reviews.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center">
              <PillLink href="#contact" size="md">
                Share Your Book With Us
                <ArrowNudge />
              </PillLink>
              <PillLink href="#how-it-works" variant="secondary" size="md">
                See How It Works
              </PillLink>
            </div>
          </Reveal>
        </div>

        {/* Slim highlight ribbon — replaces the bulky floating card */}
        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-1.5 rounded-xl border border-sage-border bg-surface/80 px-4 py-3 backdrop-blur-sm sm:mt-10 sm:gap-x-7">
            {RIBBON_STATS.map((s) => (
              <div key={s.label} className="flex items-baseline gap-1.5">
                <span className="font-display text-[18px] font-bold text-brand tabular-nums sm:text-[20px]">
                  {s.value}
                </span>
                <span className="text-[12px] text-ink-body sm:text-[13px]">
                  {s.label}
                </span>
              </div>
            ))}
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-[18px] font-bold text-brand tabular-nums sm:text-[20px]">
                Est. 2018
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
