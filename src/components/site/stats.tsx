"use client";

import { Reveal, useCountUp } from "./primitives";
import { DividerLine } from "./philosophy";

type Stat = {
  target: number;
  suffix: string;
  label: string;
  sub: string;
};

const STATS: Stat[] = [
  {
    target: 21000,
    suffix: "+",
    label: "Global Hub Members",
    sub: "An engaged, international reading community.",
  },
  {
    target: 2000,
    suffix: "+",
    label: "Active Social Salon Readers",
    sub: "Readers participating in private discourse channels.",
  },
  {
    target: 150,
    suffix: "+",
    label: "Average Goodreads Reviews per Selection",
    sub: "Consistent review velocity across major platforms.",
  },
  {
    target: 18,
    suffix: "",
    label: "Standout Authors Per Annual Cycle",
    sub: "A deliberately limited, high-attention residency cohort.",
  },
];

export function Stats() {
  return (
    <section className="sec-stats relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <DividerLine />
      <div className="mx-auto mt-20 max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {STATS.map((s, i) => (
            <StatCell key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCell({ stat, index }: { stat: Stat; index: number }) {
  const { ref, display } = useCountUp(stat.target, {
    suffix: stat.suffix,
    duration: 1800 + index * 150,
  });

  return (
    <div className="sec-stats group relative p-8 transition-colors duration-500 hover:bg-surface/60 sm:p-10 lg:p-12">
      <div className="absolute right-6 top-6 font-display text-[11px] tabular-nums text-ink-faint">
        0{index + 1}
      </div>
      <div className="flex flex-col">
        <span
          ref={ref}
          className="font-display text-[clamp(3rem,8vw,5.5rem)] font-semibold leading-none tracking-tight text-gradient-ink"
        >
          {display}
        </span>
        <p className="mt-5 max-w-[16rem] font-display text-[15px] font-medium leading-snug text-ink sm:text-base">
          {stat.label}
        </p>
        <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
          {stat.sub}
        </p>
      </div>
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-px w-0 bg-cream transition-all duration-700 ease-out group-hover:w-full"
      />
    </div>
  );
}
