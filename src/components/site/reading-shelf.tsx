"use client";

import { Reveal, SectionHeader } from "./primitives";
import { Card, ArrowNudge } from "./ui-atoms";

/* Section 03 · Reading Shelf — yellow bg, compact cards. */

type Book = {
  title: string; author: string; genre: string; rating: string | null;
  reviews: string; hook: string; link: string;
};

const BOOKS: Book[] = [
  { title: "And I Am The Arrow", author: "Pia Ghosh-Roy", genre: "Literary Fiction", rating: "4.51", reviews: "35 ratings · 15 reviews", hook: "A multi-generational family story spanning 1940s Calcutta, London, and New York, exploring grief, secrets, and memory.", link: "https://www.goodreads.com/book/show/254435487-and-i-am-the-arrow" },
  { title: "The New Job", author: "Elisa Gallippi", genre: "Psychological Thriller", rating: "4.11", reviews: "38 ratings · 10 reviews", hook: "Three lives collide between London and a secluded country estate in a slow-burn psychological suspense novel.", link: "https://www.goodreads.com/book/show/247554040-the-new-job" },
  { title: "The Fern Flower", author: "Kathleen Shoop", genre: "Historical Fiction", rating: null, reviews: "27 ratings · 12 reviews", hook: "Set in 1908–1917 Russia, blending folklore, ballet, and family sacrifice during a turbulent era.", link: "https://www.goodreads.com/book/show/251461149-the-fern-flower" },
  { title: "The Years Shall Run Like Rabbits", author: "Ben Berman Ghan", genre: "Speculative Literary Fiction", rating: null, reviews: "17 reviews on Goodreads", hook: "An inventive small-press novel following shifting timelines, memory, and survival in an uncertain future.", link: "https://www.goodreads.com/book/show/205857227-the-years-shall-run-like-rabbits" },
];

export function ReadingShelf() {
  return (
    <section id="reading-shelf" className="anchor bg-sunshine relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <SectionHeader index="03" eyebrow="Reading Shelf" title="Indie Books on Our Radar & Reading Shelf" />
        <Reveal delay={0.06}>
          <p className="mt-2.5 max-w-lg text-[13.5px] leading-[1.55] text-ink-body sm:text-[15px]">
            A look at the kind of character-driven independent and small-press stories our readers gravitate toward across Goodreads.
          </p>
        </Reveal>
        <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
          {BOOKS.map((book, i) => (
            <Reveal key={book.title} delay={i * 0.05}>
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
    <Card hover className="flex h-full flex-col p-3.5">
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex rounded-full bg-sage px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-brand sm:text-[11px]">{book.genre}</span>
        {book.rating ? (
          <span className="inline-flex items-center gap-0.5 font-display text-[12px] font-semibold text-ink sm:text-[13px]">
            <span aria-hidden className="text-cream">★</span>{book.rating}
          </span>
        ) : (
          <span className="inline-flex rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-medium text-brand sm:text-[11px]">Indie Pick</span>
        )}
      </div>
      <h3 className="mt-2 font-display text-[15px] font-semibold leading-tight text-ink sm:text-[16px]">{book.title}</h3>
      <p className="mt-0.5 text-[12px] text-ink-body sm:text-[13px]">by {book.author}</p>
      <p className="mt-2 text-[13px] leading-[1.55] text-ink-body sm:text-[14px]">{book.hook}</p>
      <p className="mt-2 text-[11px] text-ink-faint sm:text-[12px]">{book.reviews}</p>
      <a href={book.link} target="_blank" rel="noopener noreferrer" className="group mt-auto inline-flex items-center pt-2.5 text-[12px] font-medium text-brand hover:underline sm:text-[13px]">
        View on Goodreads <ArrowNudge className="ml-1" />
      </a>
    </Card>
  );
}
