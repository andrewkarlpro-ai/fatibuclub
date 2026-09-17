"use client";

import * as React from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Reveal } from "./primitives";
import { ArrowNudge, Card } from "./ui-atoms";
import { DividerLine } from "./philosophy";
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
      publication: String(data.get("publication") ?? ""),
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
          title: "Submission needs review",
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
          json.message ?? "The Selection Committee will be in touch.",
      });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
      });
      setStatus("idle");
    }
  }

  return (
    <section
      id="contact"
      className="sec-contact anchor relative overflow-hidden py-24 sm:py-32 lg:py-40"
    >
      <DividerLine />

      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 aura-accent opacity-20"
      />

      <div className="mx-auto mt-20 max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT — copy */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="font-display text-sm font-medium text-cream tabular-nums">
                  08
                </span>
                <span className="h-px w-10 bg-line-strong" />
                <span className="eyebrow">Selection Committee</span>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 font-display font-medium text-ink display-tight text-[clamp(2.4rem,5.5vw,4.2rem)]">
                Connect with the Selection Committee
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-muted sm:text-[17px]">
                To maintain the exceptional quality of our high-signal social
                salons, our infrastructure only accommodates 15 standout authors
                per annual cycle. If you are an independent author whose work
                aligns with our mission of uncovering meaningful ingredients in
                overlooked places, please submit your contact and publication
                details below for committee consideration.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-cream/30 bg-cream/[0.06] px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cream" />
                <span className="text-[13px] font-medium text-cream">
                  15 standout authors per annual cycle.
                </span>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — form panel */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <Card className="p-6 sm:p-8 lg:p-10">
                {status === "success" ? (
                  <SuccessState onReset={() => setStatus("idle")} />
                ) : (
                  <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <Field
                        label="Name"
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
                      label="Book / Publication Details"
                      name="publication"
                      type="text"
                      placeholder="Title, genre, and current publication status"
                      error={errors.publication}
                    />
                    <FieldArea
                      label="Message"
                      name="message"
                      placeholder="A brief note on your work and why it aligns with FatiBuClub."
                      error={errors.message}
                    />

                    <div className="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-[12px] text-ink-muted">
                        We respond to qualified submissions only.
                      </p>
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-cream px-7 py-3.5 text-[15px] font-medium text-bg shadow-[0_8px_30px_-12px_rgba(244,215,122,0.6)] transition-all duration-300 hover:bg-cream-deep hover:shadow-[0_10px_40px_-10px_rgba(244,215,122,0.7)] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Submitting…
                          </>
                        ) : (
                          <>
                            Submit for Committee Consideration
                            <ArrowNudge />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </Card>
            </Reveal>
          </div>
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
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink-muted"
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
          "h-12 w-full rounded-xl border bg-bg/60 px-4 text-[15px] text-ink placeholder:text-ink-faint transition-all duration-200 outline-none focus:border-cream/60 focus:bg-bg focus:ring-2 focus:ring-cream/20",
          error ? "border-destructive/70" : "border-line-strong"
        )}
      />
      {error && (
        <span id={`${id}-error`} className="text-[12px] text-destructive">
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
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink-muted"
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
          "w-full resize-none rounded-xl border bg-bg/60 px-4 py-3 text-[15px] text-ink placeholder:text-ink-faint transition-all duration-200 outline-none focus:border-cream/60 focus:bg-bg focus:ring-2 focus:ring-cream/20",
          error ? "border-destructive/70" : "border-line-strong"
        )}
      />
      {error && (
        <span id={`${id}-error`} className="text-[12px] text-destructive">
          {error}
        </span>
      )}
    </div>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center py-10 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cream/40 bg-cream/10">
        <Check className="h-7 w-7 text-cream" />
      </div>
      <h3 className="mt-6 font-display text-2xl font-medium text-ink">
        Submission received
      </h3>
      <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-muted">
        Thank you. Your details have been forwarded to the Selection Committee
        for consideration. We will be in touch.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-7 text-[13px] font-medium text-cream underline-offset-4 hover:underline"
      >
        Submit another entry
      </button>
    </div>
  );
}
