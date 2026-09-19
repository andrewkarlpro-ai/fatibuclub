"use client";

import * as React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "./primitives";
import { DividerLine } from "./philosophy";

/* Monthly selection calendar.
   1-2 books are selected each month; across the annual cycle that
   resolves to 18 standout authors. The grid uses DAYS (not months)
   as the user requested. */

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

// Representative months. Each carries 1-2 selection days (book picks).
const MONTHS = [
  {
    name: "October",
    startsOn: 2, // 0=Mo … 6=Su (Oct 2025 starts Wed)
    days: 31,
    picks: [7, 22],
  },
  {
    name: "November",
    startsOn: 5, // Nov 2025 starts Sat
    days: 30,
    picks: [11],
  },
  {
    name: "December",
    startsOn: 0, // Dec 2025 starts Mon
    days: 31,
    picks: [4, 18],
  },
];

// The stages every selected book moves through during its residency.
const STAGES = [
  {
    range: "Stage 01",
    title: "Selection & Onboarding",
    desc: "A chosen title enters the residency and is introduced to the engaged reader base.",
  },
  {
    range: "Stage 02",
    title: "Structured Deep-Dives",
    desc: "Guided, analytical reading through private salons and chapter-level discussion.",
  },
  {
    range: "Stage 03",
    title: "Review Velocity",
    desc: "Sustained, high-quality commentary translates into measurable review-cluster momentum.",
  },
  {
    range: "Stage 04",
    title: "Permanent Recognition",
    desc: "Long-tail engagement cements lasting intellectual recognition for the work.",
  },
];

export function Timeline() {
  return (
    <section
      id="experience"
      className="sec-timeline anchor relative overflow-hidden py-24 sm:py-32 lg:py-40"
    >
      <DividerLine />
      <div className="mx-auto mt-20 max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-4">
          <span className="font-display text-sm font-medium text-cream tabular-nums">
            03
          </span>
          <span className="h-px w-10 bg-line-strong" />
          <span className="eyebrow">The Residency</span>
        </div>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display font-medium text-ink display-tight text-[clamp(2.2rem,5vw,4rem)]">
            The 12-Month
            <br className="hidden sm:block" /> Managed Reader Experience
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* LEFT — copy */}
          <div className="lg:col-span-5">
            <Reveal delay={0.05}>
              <div className="inline-flex items-center gap-3 rounded-full border border-line bg-surface px-4 py-2">
                <span className="font-display text-sm font-semibold text-cream">
                  1–2 selections monthly
                </span>
                <span className="h-px w-5 bg-line-strong" />
                <span className="text-[12px] text-ink-muted">
                  18 authors per annual cycle
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-muted sm:text-[17px]">
                Each month the Selection Committee advances{" "}
                <span className="text-ink">one to two titles</span> into the
                residency —{" "}
                <span className="text-cream">18 standout authors</span> across
                the annual cycle. When a book is selected, it enters a
                structured, year-long ecosystem designed to maximize visibility
                and high-level engagement. The Residency is not a passive book
                club selection; it is an active, year-long immersion program. We
                cultivate long-tail momentum for our authors by guiding an elite
                reader base through structured deep-dives, ensuring sustainable
                review velocity and permanent intellectual recognition.
              </p>
            </Reveal>

            {/* legend */}
            <Reveal delay={0.18}>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3 items-center justify-center">
                    <span className="absolute h-3 w-3 rounded-full bg-cream" />
                    <span className="absolute h-3 w-3 rounded-full bg-cream/40 pulse-dot" />
                  </span>
                  <span className="text-[12px] text-ink-muted">
                    Selection day
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full border border-line-strong" />
                  <span className="text-[12px] text-ink-muted">
                    Open reading day
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — monthly calendars (days, not months) */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <CalendarGrid />
            </Reveal>
          </div>
        </div>

        {/* Stages every selected book moves through */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {STAGES.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08}>
              <StageCard stage={m} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CalendarGrid() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();

  return (
    <div ref={ref} className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {MONTHS.map((m, mi) => (
        <motion.div
          key={m.name}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={
            inView
              ? reduce
                ? { opacity: 1 }
                : { opacity: 1, y: 0 }
              : {}
          }
          transition={{
            duration: 0.6,
            delay: 0.1 + mi * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="rounded-2xl border border-line bg-surface/40 p-4"
        >
          <div className="flex items-baseline justify-between">
            <p className="font-display text-base font-medium text-ink">
              {m.name}
            </p>
            <span className="font-display text-[11px] tabular-nums text-cream">
              {m.picks.length} {m.picks.length === 1 ? "pick" : "picks"}
            </span>
          </div>
          <div className="mt-3 grid grid-cols-7 gap-1 text-center">
            {WEEKDAYS.map((d) => (
              <span
                key={d}
                className="text-[9px] font-medium uppercase tracking-[0.1em] text-ink-faint"
              >
                {d}
              </span>
            ))}
            {Array.from({ length: m.startsOn }).map((_, i) => (
              <span key={`e${i}`} />
            ))}
            {Array.from({ length: m.days }).map((_, i) => {
              const day = i + 1;
              const isPick = m.picks.includes(day);
              return (
                <span
                  key={day}
                  className={`relative flex h-7 items-center justify-center rounded-md text-[11px] tabular-nums transition-colors ${
                    isPick
                      ? "bg-cream font-semibold text-bg"
                      : "text-ink-muted hover:bg-surface/60"
                  }`}
                >
                  {day}
                </span>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function StageCard({
  stage,
  index,
}: {
  stage: (typeof STAGES)[number];
  index: number;
}) {
  return (
    <div className="group h-full rounded-2xl border border-line bg-surface/50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-line-strong hover:bg-surface">
      <div className="flex items-center justify-between">
        <span className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-cream">
          {stage.range}
        </span>
        <span className="font-display text-xs tabular-nums text-ink-faint">
          0{index + 1}
        </span>
      </div>
      <h3 className="mt-4 font-display text-lg font-medium text-ink">
        {stage.title}
      </h3>
      <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
        {stage.desc}
      </p>
    </div>
  );
}
