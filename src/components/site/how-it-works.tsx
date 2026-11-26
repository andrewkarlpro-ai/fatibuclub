"use client";

import * as React from "react";
import { useState } from "react";
import { Reveal, SectionHeader } from "./primitives";
import { Card } from "./ui-atoms";
import { SectionBackground } from "./section-background";

/* Section 02 · How It Works — reading photo as background + calendar + steps. */

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const MONTHS = [
  { name: "Nov 2026", startsOn: 6, days: 30, picks: [30] },
  { name: "Dec 2026", startsOn: 1, days: 31, picks: [14, 28] },
  { name: "Jan 2027", startsOn: 4, days: 31, picks: [15, 29] },
] as const;

const STEPS = [
  { title: "Book Review & Selection", body: "We look at each indie book to see if it matches what our readers enjoy discussing. Submitting your book for consideration is completely free." },
  { title: "Reader Sign-Up", body: "When a title is selected, interested members sign up to join that book's reading circle—averaging around 65 readers, or a smaller group if an author prefers." },
  { title: "Group Reading & Discussion", body: "Readers move through the book together in our private discussion channels, sharing reactions, favorite passages, and questions." },
  { title: "Honest Goodreads Reviews", body: "After finishing the book and wrapping up the discussion, readers share their honest reviews on Goodreads to help future readers discover the story." },
] as const;

type Month = (typeof MONTHS)[number];

function CalendarCard({ month }: { month: Month }) {
  const { name, startsOn, days, picks } = month;
  const pickCount = picks.length;

  return (
    <div className="card-surface p-3 sm:p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-[13px] font-semibold text-ink sm:text-sm">{name}</h3>
        <span className="rounded-full bg-sage px-2 py-0.5 text-[10px] font-medium text-brand">
          {pickCount} {pickCount === 1 ? "pick" : "picks"}
        </span>
      </div>
      <div className="mt-2 grid grid-cols-7 gap-0.5 text-center">
        {WEEKDAYS.map((d) => (
          <span key={d} className="text-[8px] uppercase text-ink-faint">{d}</span>
        ))}
        {Array.from({ length: startsOn }).map((_, i) => (
          <span key={`empty-${i}`} aria-hidden className="h-6 sm:h-7" />
        ))}
        {Array.from({ length: days }).map((_, i) => {
          const day = i + 1;
          const isPick = picks.includes(day);
          return (
            <span
              key={day}
              className={`flex h-6 items-center justify-center rounded text-[10px] tabular-nums sm:h-7 sm:text-[11px] ${
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

export function HowItWorks() {
  const [activeMonth, setActiveMonth] = useState(0);

  return (
    <section id="how-it-works" className="anchor relative overflow-hidden bg-bg-alt py-8 sm:py-16">
      {/* Reading photo as true background image */}
      <SectionBackground src="/images/bg-reading.png" overlay={0.75} />

      <div className="relative mx-auto max-w-5xl px-3.5 sm:px-6">
        <SectionHeader index="02" eyebrow="How Reading Circles Work" title="Simple, Personal, and Built Around Your Book" />

        {/* Mobile: month tabs */}
        <Reveal delay={0.06}>
          <div className="mt-4 flex gap-1.5 md:hidden">
            {MONTHS.map((m, i) => (
              <button
                key={m.name}
                type="button"
                onClick={() => setActiveMonth(i)}
                className={`flex-1 rounded-lg border px-1.5 py-1.5 text-[11px] font-medium transition-colors ${
                  activeMonth === i ? "border-brand bg-brand text-white" : "border-sage bg-surface text-ink-body"
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>
          <div className="mt-2.5 md:hidden">
            <CalendarCard month={MONTHS[activeMonth]} />
          </div>
        </Reveal>

        {/* Desktop: all 3 calendars side-by-side */}
        <Reveal delay={0.08}>
          <div className="mt-4 hidden gap-4 md:grid md:grid-cols-3">
            {MONTHS.map((m) => (
              <CalendarCard key={m.name} month={m} />
            ))}
          </div>
        </Reveal>

        {/* Legend */}
        <div className="mt-2.5 flex items-center gap-3 sm:mt-3 sm:gap-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-brand" />
            <span className="text-[10px] text-ink-body sm:text-[11px]">Selection day</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full border border-sage" />
            <span className="text-[10px] text-ink-body sm:text-[11px]">Open day</span>
          </div>
        </div>

        {/* 4 steps */}
        <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:mt-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.04}>
              <Card className="h-full p-3 sm:p-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-[11px] font-semibold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-[14px] font-semibold text-ink leading-tight sm:text-sm">{step.title}</h3>
                <p className="mt-1.5 text-[12px] leading-[1.5] text-ink-body sm:text-sm sm:leading-relaxed">{step.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
