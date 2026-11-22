"use client";

import * as React from "react";
import {
  Reveal,
  SectionHeader,
  StaggerGroup,
  StaggerItem,
} from "./primitives";
import { Card, ArrowNudge } from "./ui-atoms";

/* ------------------------------------------------------------------ */
/*  Section 5 · On Our Reading Shelf                                  */
/* ------------------------------------------------------------------ */

type Book = {
  title: string;
  author: string;
  genre: string;
  rating: string | null;
  reviews: string;
  hook: string;
  link: string;
};

const BOOKS: Book[] = [
  {
    title: "And I Am The Arrow",
    author: "Pia Ghosh-Roy",
    genre: "Literary Fiction",
    rating: "4.51",
    reviews: "35 ratings · 15 reviews",
    hook: "A multi-generational family story spanning 1940s Calcutta, London, and New York, exploring grief, secrets, and memory.",
    link: "https://www.goodreads.com/book/show/254435487-and-i-am-the-arrow",
  },
  {
    title: "The New Job",
    author: "Elisa Gallippi",
    genre: "Psychological Thriller",
    rating: "4.11",
    reviews: "38 ratings · 10 reviews",
    hook: "Three lives collide between London and a secluded country estate in a slow-burn psychological suspense novel.",
    link: "https://www.goodreads.com/book/show/247554040-the-new-job",
  },
  {
    title: "The Fern Flower",
    author: "Kathleen Shoop",
    genre: "Historical Fiction",
    rating: null,
    reviews: "27 ratings · 12 reviews",
    hook: "Set in 1908–1917 Russia, blending folklore, ballet, and family sacrifice during a turbulent era.",
    link: "https://www.goodreads.com/book/show/251461149-the-fern-flower",
  },
  {
    title: "The Years Shall Run Like Rabbits",
    author: "Ben Berman Ghan",
    genre: "Speculative Literary Fiction",
    rating: null,
    reviews: "17 reviews on Goodreads",
    hook: "An inventive small-press novel following shifting timelines, memory, and survival in an uncertain future.",
    link: "https://www.goodreads.com/book/show/205857227-the-years-shall-run-like-rabbits",
  },
];

export function ReadingShelf() {
  return (
    <section
      id="reading-shelf"
      className="anchor bg-sunshine py-12 sm:py-16 md:py-18 relative overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHeader
          index="03"
          eyebrow="Reading Shelf"
          title="Indie Books on Our Radar & Reading Shelf"
        />
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.6] text-ink-body">
            A look at the kind of character-driven independent and small-press
            stories our readers gravitate toward across Goodreads.
          </p>
        </Reveal>

        <StaggerGroup className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
          {BOOKS.map((book) => (
            <StaggerItem key={book.title} className="h-full">
              <BookCard book={book} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function BookCard({ book }: { book: Book }) {
  return (
    <Card hover className="flex h-full flex-col p-5 sm:p-6">
      {/* Top row — genre tag + rating */}
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex rounded-full bg-sage px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-brand">
          {book.genre}
        </span>
        {book.rating ? (
          <span className="inline-flex items-center gap-1 font-display text-[13px] font-semibold text-ink">
            <span aria-hidden className="text-cream">
              ★
            </span>
            {book.rating}
          </span>
        ) : (
          <span className="text-[12px] text-ink-faint">New on Goodreads</span>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-3 font-display text-[17px] font-semibold leading-tight text-ink sm:text-[18px]">
        {book.title}
      </h3>

      {/* Author */}
      <p className="mt-1 text-[13px] text-ink-body">by {book.author}</p>

      {/* Hook */}
      <p className="mt-3 text-[14px] leading-[1.6] text-ink-body">
        {book.hook}
      </p>

      {/* Review count */}
      <p className="mt-3 text-[12px] text-ink-faint">{book.reviews}</p>

      {/* View on Goodreads */}
      <a
        href={book.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-auto inline-flex items-center pt-4 text-[13px] font-medium text-brand hover:underline"
      >
        View on Goodreads
        <ArrowNudge className="ml-1.5" />
      </a>
    </Card>
  );
}
