"use client";

import { Reveal } from "./primitives";
import { PillLink, ArrowNudge } from "./ui-atoms";
import { SectionBackground } from "./section-background";

const RIBBON_STATS: { value: string; label: string }[] = [
  { value: "347", label: "Community Members" },
  { value: "153", label: "Active Readers" },
  { value: "65", label: "Avg Readers Per Book" },
  { value: "Est. 2015", label: "Since 2015" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-bg pt-16 pb-6 sm:pt-20 sm:pb-8">
      {/* Bookshelf photo as true background image */}
      <SectionBackground src="/images/bg-bookshelf.png" overlay={0.82} />

      <div className="relative mx-auto max-w-5xl px-3.5 sm:px-6">
        <div className="max-w-lg">
          <Reveal>
            <span className="eyebrow text-[10px] sm:text-[11px]">
              FatiBuClub · Private Indie Reading Society · Est. 2015
            </span>
          </Reveal>

          <Reveal delay={0.04}>
            <h1 className="mt-2.5 font-display font-bold text-ink tracking-tight text-[22px] leading-[1.18] sm:text-4xl sm:leading-tight">
              Thoughtful Readers for Independent Books Worth Talking About.
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-2.5 max-w-sm text-[13px] leading-[1.55] text-ink-body sm:text-base sm:leading-relaxed">
              We connect independent authors with small, attentive reading
              circles for genuine reading, lively group discussion, and honest
              Goodreads reviews.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <PillLink href="#contact" size="sm">
                Share Your Book With Us <ArrowNudge />
              </PillLink>
              <PillLink href="#how-it-works" variant="secondary" size="sm">
                See How It Works
              </PillLink>
            </div>
          </Reveal>
        </div>

        {/* Stat ribbon */}
        <Reveal delay={0.18}>
          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
            {RIBBON_STATS.map((s) => (
              <div key={s.label} className="card-surface px-3 py-2.5 text-center sm:p-3">
                <p className="font-display text-base font-bold text-brand tabular-nums sm:text-lg">
                  {s.value}
                </p>
                <p className="mt-0.5 text-[11px] text-ink-body sm:text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
