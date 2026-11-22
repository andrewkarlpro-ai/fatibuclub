"use client";

import * as React from "react";
import { Reveal, SectionHeader } from "./primitives";
import { Card } from "./ui-atoms";
import { PhotoBanner } from "./background-image";

/* Section 02 · How It Works — reading photo banner + month-tab calendar + 4 compact steps. */

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const MONTHS = [
  { name: "Dec 2026", startsOn: 1, days: 31, picks: [8, 22] },
  { name: "Jan 2027", startsOn: 4, days: 31, picks: [12, 26] },
  { name: "Feb 2027", startsOn: 0, days: 28, picks: [9] },
] as const;

const STEPS = [
  { title: "Book Review & Selection", body: "We look at each indie book to see if it matches what our readers enjoy discussing. Submitting your book for consideration is completely free." },
  { title: "Reader Sign-Up", body: "When a title is selected, interested members sign up to join that book's reading circle—averaging around 150 readers, or a smaller group if an author prefers." },
  { title: "Group Reading & Discussion", body: "Readers move through the book together in our private discussion channels, sharing reactions, favorite passages, and questions." },
  { title: "Honest Goodreads Reviews", body: "After finishing the book and wrapping up the discussion, readers share their honest reviews on Goodreads to help future readers discover the story." },
] as const;

export function HowItWorks() {
  const [activeMonth, setActiveMonth] = React.useState(0);

  return (
    <section id="how-it-works" className="anchor bg-bg-alt">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <SectionHeader index="02" eyebrow="How Reading Circles Work" title="Simple, Personal, and Built Around Your Book" />

        {/* Reading photo banner — 100% opacity, clean editorial */}
        <Reveal delay={0.06}>
          <PhotoBanner
            src="/images/bg-reading.png"
            alt="Warm close-up of hands holding an open book in soft sunlight."
            className="mt-4 h-40 sm:h-56"
          />
        </Reveal>

        {/* Month-tab calendar — tabs on mobile, all 3 side-by-side on desktop */}
        <Reveal delay={0.1}>
          {/* Mobile: tabs */}
          <div className="mt-5 flex gap-1.5 sm:hidden">
            {MONTHS.map((m, i) => (
              <button
                key={m.name}
                type="button"
                onClick={() => setActiveMonth(i)}
                className={`flex-1 rounded-[10px] border px-2 py-2 text-[12px] font-medium transition-colors ${
                  activeMonth === i ? "border-brand bg-brand text-white" : "border-sage-border bg-surface text-ink-body"
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>

          {/* Mobile: single calendar */}
          <div className="mt-3 sm:hidden">
            <CalendarCard month={MONTHS[activeMonth]} compact />
          </div>

          {/* Desktop: all 3 side-by-side */}
          <div className="mt-5 hidden gap-4 sm:grid sm:grid-cols-3">
            {MONTHS.map((m) => (
              <CalendarCard key={m.name} month={m} />
            ))}
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-brand" />
              <span className="text-[11px] text-ink-body">Selection day</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full border border-sage-border" />
              <span className="text-[11px] text-ink-body">Open day</span>
            </div>
          </div>
        </Reveal>

        {/* 4 compact steps */}
        <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4 lg:mt-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.05}>
              <Card className="h-full p-3.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand font-display text-[11px] font-semibold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-[15px] font-semibold text-ink leading-[1.3]">{step.title}</h3>
                <p className="mt-1.5 text-[13px] leading-[1.55] text-ink-body">{step.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CalendarCard({ month, compact = false }: { month: (typeof MONTHS)[number]; compact?: boolean }) {
  const { name, startsOn, days, picks } = month;
  const pickCount = picks.length;

  return (
    <div className={`card-surface ${compact ? "p-2.5" : "p-3.5"}`}>
      <div className="flex items-center justify-between">
        <h3 className="font-display text-[13px] font-semibold text-ink sm:text-[14px]">{name}</h3>
        <span className="rounded-full bg-sage px-1.5 py-0.5 text-[10px] font-medium text-brand sm:text-[11px]">
          {pickCount} {pickCount === 1 ? "pick" : "picks"}
        </span>
      </div>
      <div className="mt-2 grid grid-cols-7 gap-0.5 text-center">
        {WEEKDAYS.map((d) => (
          <span key={d} className="text-[8px] font-medium uppercase text-ink-faint sm:text-[9px]">{d}</span>
        ))}
        {Array.from({ length: startsOn }).map((_, i) => (
          <span key={`empty-${i}`} aria-hidden className="h-7" />
        ))}
        {Array.from({ length: days }).map((_, i) => {
          const day = i + 1;
          const isPick = picks.includes(day);
          return (
            <span
              key={day}
              className={`flex h-7 items-center justify-center rounded text-[11px] tabular-nums ${
                isPick ? "bg-brand font-semibold text-white" : "text-ink-body"
              }`}
            >
              {day}
            </span>
          );
        })}
      </div>
    </div>
  );
}
