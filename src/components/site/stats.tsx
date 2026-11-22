"use client";

import { Reveal } from "./primitives";
import { Card } from "./ui-atoms";

/* Stats — Community Numbers. Static numbers (no count-up).
   2x2 on mobile, 4 columns on desktop. Compact. */

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
    sub: "Small enough for real discussion, big enough to spark momentum.",
  },
  {
    value: "1–2",
    label: "Monthly Picks",
    sub: "Selected carefully each month so every book gets real attention.",
  },
];

export function Stats() {
  return (
    <section id="community" className="bg-bg py-9 sm:py-14 md:py-16">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        {/* header */}
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <span className="eyebrow !text-[11px]">Community Numbers</span>
            <h2 className="mt-2.5 font-display font-semibold text-ink text-[18px] sm:text-[22px]">
              Readers Who Care
            </h2>
          </div>
        </Reveal>

        {/* grid — 2x2 on mobile, 4 cols on desktop */}
        <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06}>
              <Card className="card-surface h-full p-3.5 sm:p-5 text-center lg:text-left">
                <p className="font-display text-[24px] sm:text-[32px] lg:text-[36px] font-bold text-brand leading-none tabular-nums">
                  {stat.value}
                </p>
                <p className="mt-2.5 font-display text-[13px] sm:text-[14px] font-semibold text-ink">
                  {stat.label}
                </p>
                <p className="mt-1 text-[12px] text-ink-body leading-[1.5] sm:text-[13px]">
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
