"use client";

import * as React from "react";
import { Card } from "./ui-atoms";
import { Reveal, useCountUp } from "./primitives";

type Stat = {
  value: number | string;
  label: string;
  sub: string;
};

const STATS: Stat[] = [
  {
    value: 240,
    label: "Community Members",
    sub: "Readers from around the world who love discovering indie books.",
  },
  {
    value: 65,
    label: "Active Readers",
    sub: "Members actively joining monthly reading circles and discussions.",
  },
  {
    value: 25,
    label: "Average Readers Per Book",
    sub: "Small enough for real discussion, big enough to spark momentum.",
  },
  {
    value: "1\u20132",
    label: "Monthly Picks",
    sub: "Selected carefully each month so every book gets real attention.",
  },
];

export function Stats() {
  return (
    <section id="community" className="bg-bg py-12 sm:py-16 md:py-18">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* header */}
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <span className="eyebrow">Community Numbers</span>
            <h2 className="mt-3 font-display font-semibold text-ink text-xl sm:text-2xl">
              Readers Who Care
            </h2>
          </div>
        </Reveal>

        {/* grid — 2x2 on mobile, 4 cols on desktop */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <Card className="card-surface h-full rounded-2xl p-5 sm:p-6 text-center lg:text-left">
                <StatValue value={stat.value} index={i} />
                <p className="mt-3 font-display text-[14px] sm:text-[15px] font-semibold text-ink">
                  {stat.label}
                </p>
                <p className="mt-1 text-[13px] text-ink-body leading-[1.5]">
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

function StatValue({
  value,
  index,
}: {
  value: number | string;
  index: number;
}) {
  if (typeof value === "string") {
    return (
      <p className="font-display text-[26px] sm:text-[30px] lg:text-[36px] font-bold text-brand leading-none tabular-nums">
        {value}
      </p>
    );
  }
  return <StatNumber value={value} index={index} />;
}

function StatNumber({ value, index }: { value: number; index: number }) {
  const { ref, display } = useCountUp(value, {
    duration: 1400 + index * 120,
  });
  return (
    <span
      ref={ref}
      className="block font-display text-[26px] sm:text-[30px] lg:text-[36px] font-bold text-brand leading-none tabular-nums"
    >
      {display}
    </span>
  );
}
