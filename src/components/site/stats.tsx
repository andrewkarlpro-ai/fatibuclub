"use client";

import { Reveal } from "./primitives";
import { Card } from "./ui-atoms";

type Stat = { value: string; label: string; sub: string };

const STATS: Stat[] = [
  {
    value: "1,240",
    label: "Community Members",
    sub: "Readers from around the world who love discovering indie books.",
  },
  {
    value: "450",
    label: "Active Readers",
    sub: "Members actively joining monthly reading circles and discussions.",
  },
  {
    value: "150",
    label: "Average Readers Per Book",
    sub: "Split into focused discussion circles so every voice is heard.",
  },
  {
    value: "1–2",
    label: "Monthly Picks",
    sub: "Selected carefully each month so every book gets real attention.",
  },
];

export function Stats() {
  return (
    <section id="community" className="bg-bg py-8 sm:py-16">
      <div className="mx-auto max-w-5xl px-3.5 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <span className="eyebrow">Community Numbers</span>
            <h2 className="mt-2 font-display font-semibold text-ink text-lg sm:text-2xl text-center">
              Readers Who Care
            </h2>
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05}>
              <Card className="h-full p-2.5 text-center sm:p-4">
                <p className="font-display text-[20px] sm:text-3xl font-bold text-brand tabular-nums leading-none">
                  {stat.value}
                </p>
                <p className="mt-2 font-display text-xs sm:text-sm font-semibold text-ink">
                  {stat.label}
                </p>
                <p className="mt-1 text-[11px] sm:text-xs text-ink-body leading-snug">
                  {stat.sub}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
