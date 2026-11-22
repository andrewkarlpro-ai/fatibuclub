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
    <section id="reading-shelf" className="anchor bg-sunshine py-10 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader index="03" eyebrow="Reading Shelf" title="Indie Books on Our Radar & Reading Shelf" />

        <Reveal delay={0.06}>
          <p className="mt-3 max-w-lg text-sm text-ink-body">
            A look at the kind of character-driven independent and small-press stories our readers gravitate toward across Goodreads.
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
    <Card className="p-4 flex flex-col h-full">
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
