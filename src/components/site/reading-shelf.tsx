"use client";

import { Reveal, SectionHeader } from "./primitives";
import { Card, ArrowNudge } from "./ui-atoms";

/* Section 03 · Reading Shelf — yellow bg, compact book cards. */

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
    title: "The Sedalia Code",
    author: "Patricia Raybon",
    genre: "Historical Fiction",
    rating: null,
    reviews: "64 ratings · 37 reviews",
    hook: "A courageous young woman struggles to rise above her dirt-poor beginnings and outsmart a Nazi threat on U.S. soil during WWII in this thrilling Southern tale of bravery, love, and forgiveness.",
    link: "https://www.goodreads.com/book/show/252955041",
  },
  {
    title: "The Single Father",
    author: "Jade Lee Wright",
    genre: "Psychological Thriller",
    rating: null,
    reviews: "792 ratings · 92 reviews",
    hook: "A grieving widow takes a live-in nanny job at a remote Peak District farmhouse, only to find her employer claiming she's his fiancée in a chilling tale of deception and survival.",
    link: "https://www.goodreads.com/book/show/257574556",
  },
  {
    title: "Sisters of the Midnight Sun",
    author: "Fiona Valpy",
    genre: "Historical Fiction",
    rating: null,
    reviews: "856 ratings · 130 reviews",
    hook: "Two women, decades apart, are torn apart by grief but brought together through hope on a remote Shetland croft where long-buried secrets surface under the midnight sun.",
    link: "https://www.goodreads.com/book/show/250059261",
  },
  {
    title: "Wonderland: Memoir of a Black-Market Adoption",
    author: "Patricia Knight Meyer",
    genre: "Memoir",
    rating: "4.40",
    reviews: "225 ratings · 193 reviews",
    hook: "After discovering she was handed over outside a Texas hospital in 1970 with no legal paperwork, one woman spends decades uncovering the truth behind her black-market adoption.",
    link: "https://www.goodreads.com/book/show/252776506-wonderland",
  },
];

export function ReadingShelf() {
  return (
    <section id="reading-shelf" className="anchor bg-sunshine py-8 sm:py-16">
      <div className="mx-auto max-w-5xl px-3.5 sm:px-6">
        <SectionHeader index="03" eyebrow="Reading Shelf" title="Indie Books on Our Radar & Reading Shelf" />

        <Reveal delay={0.06}>
          <p className="mt-3 max-w-lg text-[13px] text-ink-body sm:text-sm">
            A look at the kind of character-driven independent and small-press stories our readers gravitate toward across Goodreads.
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
          {BOOKS.map((book, i) => (
            <Reveal key={book.title} delay={i * 0.05} className="h-full">
              <BookCard book={book} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookCard({ book }: { book: Book }) {
  return (
    <Card className="p-3 flex flex-col h-full sm:p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex rounded-full bg-sage px-2 py-0.5 text-[10px] font-medium uppercase text-brand">
          {book.genre}
        </span>
        {book.rating ? (
          <span className="font-display text-xs font-semibold text-ink">★ {book.rating}</span>
        ) : (
          <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-medium text-brand">
            Indie Pick
          </span>
        )}
      </div>

      <h3 className="mt-2 font-display text-base font-semibold text-ink leading-tight">{book.title}</h3>
      <p className="mt-0.5 text-xs text-ink-body">by {book.author}</p>
      <p className="mt-2 text-sm text-ink-body leading-relaxed">{book.hook}</p>
      <p className="mt-2 text-[11px] text-ink-faint">{book.reviews}</p>

      <a
        href={book.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-auto inline-flex items-center pt-3 text-xs font-medium text-brand hover:underline"
      >
        View on Goodreads <ArrowNudge className="ml-1" />
      </a>
    </Card>
  );
}
