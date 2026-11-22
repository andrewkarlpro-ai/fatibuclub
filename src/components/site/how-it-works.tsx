"use client";

import * as React from "react";
import {
  Reveal,
  SectionHeader,
  StaggerGroup,
  StaggerItem,
} from "./primitives";
import { Card } from "./ui-atoms";

/* ------------------------------------------------------------------ */
/*  Section 4 · How It Works                                           */
/* ------------------------------------------------------------------ */

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

// Three representative months of the 2026 reading calendar.
// `startsOn` is the weekday index (0 = Monday) the 1st falls on.
const MONTHS = [
  { name: "October", startsOn: 2, days: 31, picks: [7, 22] },
  { name: "November", startsOn: 5, days: 30, picks: [11] },
  { name: "December", startsOn: 0, days: 31, picks: [4, 18] },
] as const;

const STEPS = [
  {
    title: "Book Review & Selection",
    body: "We look at each indie book to see if it matches what our readers enjoy discussing. Submitting your book for consideration is completely free.",
  },
  {
    title: "Reader Sign-Up",
    body: "When a title is selected, interested members sign up to join that book's reading circle—averaging around 25 readers, or a smaller group if an author prefers.",
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
      className="anchor bg-bg-alt relative overflow-hidden py-12 sm:py-16 md:py-18"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHeader
          index="02"
          eyebrow="How Reading Circles Work"
          title="Simple, Personal, and Built Around Your Book"
        />

        {/* Part A — 3-month reading calendar */}
        <Reveal delay={0.1} className="mt-10 sm:mt-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {MONTHS.map((m) => (
              <CalendarCard key={m.name} month={m} />
            ))}
          </div>

          {/* Legend */}
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand" />
              <span className="text-[12px] text-ink-body">Selection day</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full border border-sage-border" />
              <span className="text-[12px] text-ink-body">Open day</span>
            </div>
          </div>
        </Reveal>

        {/* Part B — 4 plain steps */}
        <StaggerGroup className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <StaggerItem key={step.title} className="h-full">
              <Card className="h-full p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand font-display text-sm font-semibold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-[15px] font-semibold text-ink sm:text-base">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-ink-body sm:text-[14px]">
                  {step.body}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* Compact 7-column calendar for a single month. */
function CalendarCard({ month }: { month: (typeof MONTHS)[number] }) {
  const { name, startsOn, days, picks } = month;
  const pickCount = picks.length;

  return (
    <div className="card-surface rounded-2xl p-4 sm:p-5">
      {/* Header — month name + picks badge */}
      <div className="flex items-center justify-between">
        <h3 className="font-display text-sm font-semibold text-ink sm:text-base">
          {name}
        </h3>
        <span className="rounded-full bg-sage px-2 py-0.5 text-[11px] font-medium text-brand">
          {pickCount} {pickCount === 1 ? "pick" : "picks"}
        </span>
      </div>

      {/* 7-col grid: weekdays + days */}
      <div className="mt-3 grid grid-cols-7 gap-1 text-center">
        {WEEKDAYS.map((d) => (
          <span
            key={d}
            className="text-[9px] font-medium uppercase text-ink-faint sm:text-[10px]"
          >
            {d}
          </span>
        ))}

        {/* Empty offset cells before day 1 */}
        {Array.from({ length: startsOn }).map((_, i) => (
          <span key={`empty-${i}`} aria-hidden className="h-7 sm:h-8" />
        ))}

        {/* Day cells */}
        {Array.from({ length: days }).map((_, i) => {
          const day = i + 1;
          const isPick = picks.includes(day);
          return (
            <span
              key={day}
              className={`flex h-7 items-center justify-center rounded-md text-[11px] tabular-nums sm:h-8 sm:text-[12px] ${
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
