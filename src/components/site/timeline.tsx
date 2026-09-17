"use client";

import * as React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "./primitives";
import { Atmosphere } from "./editorial-image";
import { DividerLine } from "./philosophy";

const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);

const MILESTONES = [
  {
    monthIndex: 0, // M01
    range: "M01 — 03",
    title: "Selection & Onboarding",
    desc: "A chosen title enters the annual residency and is introduced to the engaged reader base.",
  },
  {
    monthIndex: 4, // M05
    range: "M04 — 06",
    title: "Structured Deep-Dives",
    desc: "Guided, analytical reading through private salons and chapter-level discussion.",
  },
  {
    monthIndex: 8, // M09
    range: "M07 — 09",
    title: "Review Velocity",
    desc: "Sustained, high-quality commentary translates into measurable review-cluster momentum.",
  },
  {
    monthIndex: 11, // M12
    range: "M10 — 12",
    title: "Permanent Recognition",
    desc: "Long-tail engagement cements lasting intellectual recognition for the work.",
  },
];

export function Timeline() {
  return (
    <section
      id="experience"
      className="anchor relative overflow-hidden py-24 sm:py-32 lg:py-40"
    >
      <DividerLine />
      <Atmosphere tint="purple" position="left" opacity={22} />
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
          <div className="lg:col-span-5">
            <Reveal delay={0.05}>
              <div className="inline-flex items-center gap-3 rounded-full border border-line bg-surface px-4 py-2">
                <span className="font-display text-sm font-semibold text-cream tabular-nums">
                  12 Months
                </span>
                <span className="h-px w-5 bg-line-strong" />
                <span className="text-[12px] text-ink-muted">
                  Managed Reader Experience
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-muted sm:text-[17px]">
                When a book is selected for our annual cycle, it enters a
                structured, year-long ecosystem designed to maximize visibility
                and high-level engagement. The Residency is not a passive book
                club selection; it is an active, year-long immersion program. We
                cultivate long-tail momentum for our authors by guiding an
                elite reader base through structured deep-dives, ensuring
                sustainable review velocity and permanent intellectual
                recognition.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            {/* Horizontal rail — tablet & desktop */}
            <Reveal delay={0.1} className="hidden sm:block">
              <MonthRailHorizontal />
            </Reveal>
            {/* Vertical timeline — mobile only */}
            <Reveal delay={0.1} className="sm:hidden">
              <TimelineMobile />
            </Reveal>
          </div>
        </div>

        {/* Milestone cards — tablet & desktop only */}
        <div className="mt-16 hidden grid-cols-1 gap-4 sm:grid sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {MILESTONES.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08}>
              <MilestoneCard milestone={m} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MonthRailHorizontal() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const reduce = useReducedMotion();

  return (
    <div ref={ref} className="relative">
      <div className="relative grid grid-cols-12 gap-1">
        <div className="absolute left-0 right-0 top-2.5 h-px bg-line" />
        <motion.div
          className="absolute left-0 top-2.5 h-px bg-gradient-to-r from-accent via-cream to-cream"
          initial={{ width: "0%" }}
          animate={inView && !reduce ? { width: "100%" } : {}}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
        {MONTHS.map((m) => {
          const isMilestone = [1, 5, 9, 12].includes(m);
          return (
            <div
              key={m}
              className="relative flex flex-col items-center gap-3"
            >
              <span
                className={`relative z-10 h-[13px] w-[13px] rounded-full border ${
                  isMilestone
                    ? "border-cream bg-cream"
                    : "border-line-strong bg-bg"
                }`}
              />
              <span className="font-display text-[11px] tabular-nums text-ink-faint">
                M{String(m).padStart(2, "0")}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* Vertical 12-month timeline for mobile, with milestone callouts inline */
function TimelineMobile() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();
  const milestoneByMonth = React.useMemo(() => {
    const map = new Map<number, (typeof MILESTONES)[number]>();
    MILESTONES.forEach((m) => map.set(m.monthIndex + 1, m));
    return map;
  }, []);

  return (
    <div ref={ref} className="relative pl-7">
      {/* vertical line */}
      <div className="absolute bottom-2 left-2.5 top-2 w-px bg-line" />
      <motion.div
        className="absolute left-2.5 top-2 w-px bg-gradient-to-b from-accent via-cream to-cream"
        initial={{ height: "0%" }}
        animate={inView && !reduce ? { height: "calc(100% - 1rem)" } : {}}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />

      <div className="flex flex-col">
        {MONTHS.map((m) => {
          const isMilestone = [1, 5, 9, 12].includes(m);
          const milestone = milestoneByMonth.get(m);
          return (
            <div key={m} className="relative flex items-start gap-4 pb-5">
              <span
                className={`absolute -left-[1.4rem] top-1 z-10 h-[11px] w-[11px] rounded-full border ${
                  isMilestone
                    ? "border-cream bg-cream"
                    : "border-line-strong bg-bg"
                }`}
              />
              <span className="font-display text-[12px] tabular-nums text-ink-faint w-9 shrink-0">
                M{String(m).padStart(2, "0")}
              </span>
              {milestone ? (
                <div className="min-w-0 flex-1">
                  <p className="font-display text-[11px] font-medium uppercase tracking-[0.16em] text-cream">
                    {milestone.range}
                  </p>
                  <p className="mt-0.5 font-display text-base font-medium text-ink">
                    {milestone.title}
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-ink-muted">
                    {milestone.desc}
                  </p>
                </div>
              ) : (
                <span className="text-[12px] text-ink-faint">
                  Managed reader engagement
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MilestoneCard({
  milestone,
  index,
}: {
  milestone: (typeof MILESTONES)[number];
  index: number;
}) {
  return (
    <div className="group h-full rounded-2xl border border-line bg-surface/50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-line-strong hover:bg-surface">
      <div className="flex items-center justify-between">
        <span className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-cream">
          {milestone.range}
        </span>
        <span className="font-display text-xs tabular-nums text-ink-faint">
          0{index + 1}
        </span>
      </div>
      <h3 className="mt-4 font-display text-lg font-medium text-ink">
        {milestone.title}
      </h3>
      <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
        {milestone.desc}
      </p>
    </div>
  );
}
