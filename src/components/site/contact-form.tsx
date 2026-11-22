"use client";

import * as React from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeader } from "./primitives";
import { Card, ArrowNudge } from "./ui-atoms";
import { SectionBackground } from "./section-background";
import { Loader2, Check } from "lucide-react";

/* Section 07 · Get in Touch — community photo + book submission form.
   Posts to /api/contact (sends { name, email, book_title, book_link, message }).
   Response: ok:true = success; errors = validation map. */

type FieldErrors = Record<string, string>;

const INPUT_CLASS =
  "h-10 w-full rounded-lg border border-sage bg-white px-3 text-sm text-ink placeholder:text-ink-faint outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";

const LABEL_CLASS = "text-xs font-semibold uppercase tracking-wide text-ink-body mb-1";

export function ContactForm() {
  const { toast } = useToast();
  const [status, setStatus] = React.useState<"idle" | "loading" | "success">(
    "idle"
  );
  const [errors, setErrors] = React.useState<FieldErrors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setErrors({});

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      book_title: String(data.get("book_title") ?? ""),
      book_link: String(data.get("book_link") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (!res.ok || !json.ok) {
        if (json.errors) {
          setErrors(json.errors as FieldErrors);
        }
        toast({
          title: "Please review the fields",
          description:
            json.message ?? "Please correct the highlighted fields and retry.",
        });
        setStatus("idle");
        return;
      }

      setStatus("success");
      form.reset();
      toast({
        title: "Submission received",
        description:
          json.message ??
          "We will reach out by email if your book fits an upcoming reading circle.",
      });
    } catch {
      toast({
        title: "Please review the fields",
        description: "Something went wrong. Please try again in a moment.",
      });
      setStatus("idle");
    }
  }

  return (
    <section id="contact" className="anchor relative overflow-hidden bg-bg-alt py-8 sm:py-16">
      {/* Community photo as true background image */}
      <SectionBackground src="/images/bg-community.png" overlay={0.75} />
      <div className="relative mx-auto max-w-5xl px-3.5 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left — copy + community photo */}
          <div>
            <SectionHeader
              index="07"
              eyebrow="Get in Touch"
              title="Share Your Book With FatiBuClub"
              className="mb-2.5 sm:mb-3"
            />
            <p className="text-[13px] text-ink-body leading-relaxed sm:text-sm">
              Writing an indie thriller, memoir, literary novel, or historical
              story? Send us your book title, Goodreads or Amazon link, and a
              quick note about what inspired it. We read every message
              personally.
            </p>

            <p className="mt-3 text-[13px] text-ink-body">
              Prefer email? Reach us at{" "}
              <a
                href="mailto:fatibuclub@gmail.com"
                className="text-brand font-medium underline"
              >
                fatibuclub@gmail.com
              </a>
            </p>
          </div>

          {/* Right — form card */}
          <Reveal delay={0.06}>
            <Card className="p-4 sm:p-5">
              {status === "success" ? (
                <div className="text-center py-6">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage text-brand">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    Thank you — your book is in.
                  </h3>
                  <p className="mt-2 text-sm text-ink-body leading-relaxed">
                    We read every submission personally and will reach out by
                    email if your book fits an upcoming reading circle.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-sm text-brand font-medium underline-offset-4 hover:underline"
                  >
                    Submit another book
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Field
                      label="Author Name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      autoComplete="name"
                      error={errors.name}
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      error={errors.email}
                    />
                  </div>
                  <Field
                    label="Book Title"
                    name="book_title"
                    type="text"
                    placeholder="Title of your book"
                    error={errors.book_title}
                  />
                  <Field
                    label="Book Link"
                    name="book_link"
                    type="url"
                    placeholder="Goodreads or Amazon URL"
                    error={errors.book_link}
                  />
                  <FieldArea
                    label="Short Note"
                    name="message"
                    placeholder="A quick note about what inspired your book."
                    error={errors.message}
                  />

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand text-white h-10 px-5 text-sm font-medium hover:bg-brand-dark transition-colors disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        Submit Your Book <ArrowNudge />
                      </>
                    )}
                  </button>
                </form>
              )}
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---- form fields ---- */
function Field({
  label,
  name,
  type,
  placeholder,
  autoComplete,
  error,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  autoComplete?: string;
  error?: string;
}) {
  const id = `field-${name}`;
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={LABEL_CLASS}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(INPUT_CLASS, error && "border-danger focus:border-danger focus:ring-danger/20")}
      />
      {error && (
        <span id={`${id}-error`} className="text-xs text-danger mt-1">
          {error}
        </span>
      )}
    </div>
  );
}

function FieldArea({
  label,
  name,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  placeholder?: string;
  error?: string;
}) {
  const id = `field-${name}`;
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={LABEL_CLASS}>
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={3}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "w-full resize-none rounded-lg border border-sage bg-white px-3 py-2 text-sm text-ink placeholder:text-ink-faint outline-none focus:border-brand focus:ring-2 focus:ring-brand/20",
          error && "border-danger focus:border-danger focus:ring-danger/20"
        )}
      />
      {error && (
        <span id={`${id}-error`} className="text-xs text-danger mt-1">
          {error}
        </span>
      )}
    </div>
  );
}
