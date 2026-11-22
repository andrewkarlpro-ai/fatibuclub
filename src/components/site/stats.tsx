"use client";

import { Reveal } from "./primitives";
import { Card } from "./ui-atoms";

/* Stats — Community Numbers. Static, tight 2x2 on mobile, 4 cols on desktop. */

type Stat = { value: string; label: string; sub: string };

const STATS: Stat[] = [
  { value: "1,240", label: "Community Members", sub: "Readers from around the world who love discovering indie books." },
  { value: "450", label: "Active Readers", sub: "Members actively joining monthly reading circles and discussions." },
  { value: "150", label: "Average Readers Per Book", sub: "Split into focused discussion circles so every voice is heard." },
  { value: "1–2", label: "Monthly Picks", sub: "Selected carefully each month so every book gets real attention." },
];

export function Stats() {
  return (
    <section id="community" className="bg-bg">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <span className="eyebrow !text-[11px]">Community Numbers</span>
            <h2 className="mt-2 font-display font-semibold text-ink text-[18px] sm:text-[22px]">Readers Who Care</h2>
          </div>
        </Reveal>
        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05}>
              <Card className="h-full p-3 text-center lg:text-left sm:p-4">
                <p className="font-display text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-brand leading-none tabular-nums">
                  {stat.value}
                </p>
                <p className="mt-2 font-display text-[12px] sm:text-[13px] font-semibold text-ink">{stat.label}</p>
                <p className="mt-0.5 text-[11px] text-ink-body leading-[1.45] sm:text-[12px]">{stat.sub}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
