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
    title: "Circus of the Vanishing Elephant",
    author: "Tim Schooley",
    genre: "Historical Fiction",
    rating: "4.58",
    reviews: "75 ratings · 71 reviews",
    hook: "In 1974, when a struggling circus's beloved elephant vanishes during a parade, her owner's search across the American West forces estranged family members to confront loyalty and belonging.",
    link: "https://www.goodreads.com/book/show/249549577",
  },
  {
    title: "Number One",
    author: "Michelle Powers",
    genre: "Psychological Thriller",
    rating: "4.48",
    reviews: "69 ratings · 52 reviews",
    hook: "When a bestselling novelist is murdered, her longtime rival suddenly claims the top spot on the charts—until anonymous gifts and growing suspicion turn success into a fight for survival.",
    link: "https://www.goodreads.com/en/book/show/250702112-number-one",
  },
  {
    title: "One Beautiful Year of Normal",
    author: "Sandra K. Griffith",
    genre: "Mystery & Suspense",
    rating: "4.03",
    reviews: "289 ratings · 73 reviews",
    hook: "After learning the aunt she believed died fifteen years ago has only just passed away, August returns to Savannah to untangle buried family secrets and her father's unsolved murder.",
    link: "https://www.goodreads.com/book/show/236558333",
  },
  {
    title: "Jungle of Ashes",
    author: "Brynn Barineau",
    genre: "Historical Fiction",
    rating: "4.41",
    reviews: "183 ratings · 115 reviews",
    hook: "Set in Henry Ford's ill-fated 1928 rubber town in the Brazilian Amazon, a young American woman and a local mechanic are drawn together as ambition, resistance, and the rainforest close in.",
    link: "https://www.goodreads.com/book/show/245764123",
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
