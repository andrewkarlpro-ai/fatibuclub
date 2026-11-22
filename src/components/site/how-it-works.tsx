"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Reveal, SectionHeader } from "./primitives";
import { Card } from "./ui-atoms";

/* Section 02 · How It Works — reading photo banner + month-tab calendar + 4 steps. */

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

type Month = (typeof MONTHS)[number];

function CalendarCard({ month }: { month: Month }) {
  const { name, startsOn, days, picks } = month;
  const pickCount = picks.length;

  return (
    <div className="card-surface p-3 sm:p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-sm font-semibold text-ink">{name}</h3>
        <span className="rounded-full bg-sage px-2 py-0.5 text-[10px] font-medium text-brand">
          {pickCount} {pickCount === 1 ? "pick" : "picks"}
        </span>
      </div>
      <div className="mt-2 grid grid-cols-7 gap-0.5 text-center">
        {WEEKDAYS.map((d) => (
          <span key={d} className="text-[8px] uppercase text-ink-faint">{d}</span>
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
              className={`flex h-7 items-center justify-center text-[11px] tabular-nums ${
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
    <section id="how-it-works" className="anchor bg-bg-alt py-10 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader index="02" eyebrow="How Reading Circles Work" title="Simple, Personal, and Built Around Your Book" />

        {/* Reading photo banner — 100% opacity, clean editorial */}
        <Reveal delay={0.06}>
          <div className="mt-4 relative w-full h-44 sm:h-60 rounded-xl overflow-hidden border border-sage">
            <Image
              src="/images/bg-reading.png"
              alt="Warm close-up of hands holding an open book in soft sunlight."
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </Reveal>

        {/* Month-tab calendar — tabs on mobile, all 3 side-by-side on desktop */}
        <Reveal delay={0.1}>
          {/* Mobile: tab buttons */}
          <div className="mt-5 flex gap-2 md:hidden">
            {MONTHS.map((m, i) => (
              <button
                key={m.name}
                type="button"
                onClick={() => setActiveMonth(i)}
                className={`flex-1 rounded-lg border px-2 py-2 text-xs font-medium transition-colors ${
                  activeMonth === i ? "border-brand bg-brand text-white" : "border-sage text-ink-body"
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>

          {/* Mobile: single active calendar */}
          <div className="mt-3 md:hidden">
            <CalendarCard month={MONTHS[activeMonth]} />
          </div>

          {/* Desktop: all 3 calendars side-by-side */}
          <div className="mt-5 hidden md:grid md:grid-cols-3 gap-4">
            {MONTHS.map((m) => (
              <CalendarCard key={m.name} month={m} />
            ))}
          </div>

          {/* Legend */}
          <div className="mt-3 flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-brand" />
              <span className="text-[11px] text-ink-body">Selection day</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full border border-sage" />
              <span className="text-[11px] text-ink-body">Open day</span>
            </div>
          </div>
        </Reveal>

        {/* 4 steps */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.05}>
              <Card className="p-4 h-full">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white font-display text-xs font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-sm font-semibold text-ink mt-2">{step.title}</h3>
                <p className="text-sm text-ink-body mt-1.5 leading-relaxed">{step.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
