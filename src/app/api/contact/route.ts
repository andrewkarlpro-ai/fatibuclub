import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  book_title?: string;
  book_link?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type AppEnv = {
  SUBMISSIONS: KVNamespace;
  RESEND_API_KEY: string;
  DESTINATION_EMAIL: string;
  FROM_EMAIL: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const bookTitle = (body.book_title ?? "").trim();
  const bookLink = (body.book_link ?? "").trim();
  const message = (body.message ?? "").trim();

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (bookTitle.length < 1) errors.book_title = "Please enter your book title.";
  if (message.length < 5) errors.message = "Please add a short note about your book.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, errors, message: "Please review the highlighted fields." },
      { status: 422 }
    );
  }

  const { env } = await getCloudflareContext();
  const appEnv = env as unknown as AppEnv;

  const createdAt = new Date().toISOString();
  const id = `${createdAt.replace(/[-:T]/g, "").slice(0, 14)}-${crypto
    .randomUUID()
    .slice(0, 8)}`;
  const submission = {
    id,
    name,
    email,
    book_title: bookTitle,
    book_link: bookLink,
    message,
    created_at: createdAt,
  };

  // 1) Persist to Workers KV
  let stored = false;
  if (appEnv.SUBMISSIONS) {
    try {
      await appEnv.SUBMISSIONS.put(`submission:${id}`, JSON.stringify(submission), {
        expirationTtl: 60 * 60 * 24 * 400,
      });
      stored = true;
    } catch (err) {
      console.error("KV put failed:", err);
    }
  }

  // 2) Email via Resend
  let emailDelivered = false;
  if (appEnv.RESEND_API_KEY) {
    try {
      const resend = new Resend(appEnv.RESEND_API_KEY);
      const to = appEnv.DESTINATION_EMAIL || "fatibuclub@gmail.com";
      const from = appEnv.FROM_EMAIL || "FatiBuClub <onboarding@resend.dev>";

      await resend.emails.send({
        from,
        to,
        subject: `New book submission — ${bookTitle}`,
        replyTo: email,
        html: renderEmailHtml({ ...submission, stored }),
        text: renderEmailText({ ...submission, stored }),
      });
      emailDelivered = true;
    } catch (err) {
      console.error("Resend email failed:", err);
    }
  }

  return NextResponse.json({
    ok: true,
    message:
      "Your book has been received. We read every submission personally and will reach out by email if it fits an upcoming reading circle.",
    received: {
      name,
      email,
      book_title: bookTitle,
      has_link: !!bookLink,
      messageLength: message.length,
      submissionId: stored ? id : null,
      emailed: emailDelivered,
    },
  });
}

function renderEmailHtml(p: {
  id: string;
  name: string;
  email: string;
  book_title: string;
  book_link: string;
  message: string;
  created_at: string;
  stored: boolean;
}) {
  return `<!DOCTYPE html><html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f3f8f4;color:#1c2b22;padding:32px 0;margin:0">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #d1e5d8;border-radius:16px;overflow:hidden">
    <div style="padding:24px 28px;border-bottom:1px solid #d1e5d8;background:#2e7d52">
      <p style="margin:0;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#e6f2ea">FatiBuClub · New Book Submission</p>
      <h1 style="margin:8px 0 0;font-size:20px;color:#ffffff">${escapeHtml(p.book_title)}</h1>
    </div>
    <div style="padding:24px 28px">
      ${field("Author Name", p.name)}
      ${field("Email", p.email)}
      ${p.book_link ? field("Book Link", p.book_link) : ""}
      ${field("Note", p.message)}
      ${field("Submission ID", p.id)}
      ${field("Received at", p.created_at)}
    </div>
    <div style="padding:16px 28px;background:#f3f8f4;color:#7a8a82;font-size:12px">
      Reply directly to this email to reach the author. Submitted via fatibuclub.workers.dev
    </div>
  </div></body></html>`;
}

function field(label: string, value: string) {
  return `<div style="margin-bottom:16px">
    <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#7a8a82">${label}</p>
    <p style="margin:0;font-size:15px;color:#1c2b22;white-space:pre-wrap;word-break:break-word">${escapeHtml(value)}</p>
  </div>`;
}

function renderEmailText(p: {
  id: string;
  name: string;
  email: string;
  book_title: string;
  book_link: string;
  message: string;
  created_at: string;
  stored: boolean;
}) {
  return `FatiBuClub — New book submission

Author: ${p.name}
Email: ${p.email}
Book Title: ${p.book_title}${p.book_link ? `\nBook Link: ${p.book_link}` : ""}
Note: ${p.message}
Submission ID: ${p.id}
Received at: ${p.created_at}

Submitted via fatibuclub.workers.dev — reply to reach the author.`;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
