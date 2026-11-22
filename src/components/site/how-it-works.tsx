"use client";

import * as React from "react";
import { Reveal, SectionHeader } from "./primitives";
import { Card } from "./ui-atoms";
import { BackgroundImage } from "./background-image";

/* Section 02 · How It Works — compact, with reading background. */

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

// Upcoming late-2026 / early-2027 reading calendar.
// `startsOn` is the weekday index (0 = Monday) the 1st falls on.
// Dec 1 2026 = Tuesday (index 1), Jan 1 2027 = Friday (index 4), Feb 1 2027 = Monday (index 0).
const MONTHS = [
  { name: "Dec 2026", startsOn: 1, days: 31, picks: [8, 22] },
  { name: "Jan 2027", startsOn: 4, days: 31, picks: [12, 26] },
  { name: "Feb 2027", startsOn: 0, days: 28, picks: [9] },
] as const;

const STEPS = [
  {
    title: "Book Review & Selection",
    body: "We look at each indie book to see if it matches what our readers enjoy discussing. Submitting your book for consideration is completely free.",
  },
  {
    title: "Reader Sign-Up",
    body: "When a title is selected, interested members sign up to join that book's reading circle—averaging around 150 readers, or a smaller group if an author prefers.",
  },
  {
    title: "Group Reading & Discussion",
    body: "Readers move through the book together in our private discussion channels, sharing reactions, favorite passages, and questions.",
  },
  {
    title: "Honest Goodreads Reviews",
    body: "After finishing the book and wrapping up the discussion, readers share their honest reviews on Goodreads to help future readers discover the story.",
  },
] as const;

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="anchor bg-bg-alt relative overflow-hidden py-9 sm:py-14 md:py-16"
    >
      <BackgroundImage
        src="/images/bg-reading.png"
        alt="Warm close-up of hands holding an open book in soft sunlight."
        tint="warm"
        overlay={62}
      />
      <div className="relative z-10 mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="02"
          eyebrow="How Reading Circles Work"
          title="Simple, Personal, and Built Around Your Book"
        />

        {/* 3-month reading calendar */}
        <Reveal delay={0.08} className="mt-7 sm:mt-10">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {MONTHS.map((m) => (
              <CalendarCard key={m.name} month={m} />
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-brand" />
              <span className="text-[11px] text-ink-body sm:text-[12px]">Selection day</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full border border-sage-border" />
              <span className="text-[11px] text-ink-body sm:text-[12px]">Open day</span>
            </div>
          </div>
        </Reveal>

        {/* 4 plain steps */}
        <div className="mt-7 grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <Card className="h-full p-3.5 sm:p-5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand font-display text-[12px] font-semibold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2.5 font-display text-[14px] font-semibold text-ink sm:text-[15px]">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[12px] leading-[1.55] text-ink-body sm:text-[13px] sm:leading-[1.6]">
                  {step.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Compact 7-column calendar for a single month. */
function CalendarCard({ month }: { month: (typeof MONTHS)[number] }) {
  const { name, startsOn, days, picks } = month;
  const pickCount = picks.length;

  return (
    <div className="card-surface p-3 sm:p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-[13px] font-semibold text-ink sm:text-[14px]">
          {name}
        </h3>
        <span className="rounded-full bg-sage px-2 py-0.5 text-[10px] font-medium text-brand sm:text-[11px]">
          {pickCount} {pickCount === 1 ? "pick" : "picks"}
        </span>
      </div>

      <div className="mt-2.5 grid grid-cols-7 gap-0.5 text-center sm:gap-1">
        {WEEKDAYS.map((d) => (
          <span
            key={d}
            className="text-[8px] font-medium uppercase text-ink-faint sm:text-[9px]"
          >
            {d}
          </span>
        ))}

        {Array.from({ length: startsOn }).map((_, i) => (
          <span key={`empty-${i}`} aria-hidden className="h-5 sm:h-7" />
        ))}

        {Array.from({ length: days }).map((_, i) => {
          const day = i + 1;
          const isPick = picks.includes(day);
          return (
            <span
              key={day}
              className={`flex h-5 items-center justify-center rounded text-[10px] tabular-nums sm:h-7 sm:text-[11px] ${
                isPick
                  ? "bg-brand font-semibold text-white"
                  : "text-ink-body"
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
