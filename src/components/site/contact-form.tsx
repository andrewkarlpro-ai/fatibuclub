"use client";

import * as React from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeader } from "./primitives";
import { ArrowNudge } from "./ui-atoms";
import { BackgroundImage } from "./background-image";
import { Loader2, Check } from "lucide-react";

type FieldErrors = Record<string, string>;

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
    <section
      id="contact"
      className="anchor bg-bg-alt relative overflow-hidden py-12 sm:py-16 md:py-18"
    >
      <BackgroundImage
        src="/images/bg-community.png"
        alt="A bright community of readers enjoying books together in a sunlit room."
        tint="green"
        overlay={88}
      />
      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left — copy */}
          <div>
            <SectionHeader
              index="06"
              eyebrow="Get in Touch"
              title="Share Your Book With FatiBuClub"
              className="mb-5 sm:mb-6"
            />
            <Reveal delay={0.06}>
              <p className="max-w-2xl text-[15px] text-ink-body leading-[1.7]">
                Writing an indie thriller, memoir, literary novel, or
                historical story? Send us your book title, Goodreads or Amazon
                link, and a quick note about what inspired it. We read every
                message personally.
              </p>
            </Reveal>
          </div>

          {/* Right — form card */}
          <Reveal delay={0.1}>
            <div className="card-surface rounded-2xl p-5 sm:p-6 lg:p-8 max-w-2xl mx-auto w-full">
              {status === "success" ? (
                <SuccessState onReset={() => setStatus("idle")} />
              ) : (
                <form
                  onSubmit={onSubmit}
                  noValidate
                  className="flex flex-col gap-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand text-white px-6 py-3 text-[14px] font-medium min-h-[44px] hover:bg-brand-dark transition-all disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        Submit Your Book
                        <ArrowNudge />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        {/* Direct email line */}
        <Reveal delay={0.12}>
          <p className="mt-6 text-center text-[14px] text-ink-body">
            Prefer email? Reach us directly at{" "}
            <a
              href="mailto:fatibuclub@gmail.com"
              className="text-brand font-medium hover:underline"
            >
              fatibuclub@gmail.com
            </a>
          </p>
        </Reveal>
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
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-[12px] font-semibold uppercase tracking-wide text-ink-body"
      >
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
        className={cn(
          "h-11 w-full rounded-xl border border-sage bg-surface px-4 text-[15px] text-ink placeholder:text-ink-faint transition-all outline-none focus:border-brand focus:ring-2 focus:ring-brand/20",
          error && "border-danger focus:border-danger focus:ring-danger/20"
        )}
      />
      {error && (
        <span id={`${id}-error`} className="text-[12px] text-danger">
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
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-[12px] font-semibold uppercase tracking-wide text-ink-body"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={4}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "min-h-[110px] w-full resize-none rounded-xl border border-sage bg-surface px-4 py-3 text-[15px] text-ink placeholder:text-ink-faint transition-all outline-none focus:border-brand focus:ring-2 focus:ring-brand/20",
          error && "border-danger focus:border-danger focus:ring-danger/20"
        )}
      />
      {error && (
        <span id={`${id}-error`} className="text-[12px] text-danger">
          {error}
        </span>
      )}
    </div>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center py-8 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sage text-brand">
        <Check className="h-7 w-7" />
      </div>
      <h3 className="mt-5 font-display text-2xl font-bold text-ink">
        Thank you — your book is in.
      </h3>
      <p className="mt-3 max-w-sm text-[15px] leading-[1.6] text-ink-body">
        We read every submission personally and will reach out by email if
        your book fits an upcoming reading circle.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 text-[14px] font-medium text-brand underline-offset-4 hover:underline"
      >
        Submit another book
      </button>
    </div>
  );
}
