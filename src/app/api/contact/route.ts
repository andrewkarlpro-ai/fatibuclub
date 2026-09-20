import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  publication?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Bindings we expect on the Worker env (declared for type-safety).
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
  const publication = (body.publication ?? "").trim();
  const message = (body.message ?? "").trim();

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your full name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (publication.length < 2)
    errors.publication = "Please share your book or publication details.";
  if (message.length < 10)
    errors.message = "Please write a few sentences (at least 10 characters).";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, errors, message: "Please review the highlighted fields." },
      { status: 422 }
    );
  }

  // Pull Cloudflare bindings (KV + secrets + vars).
  const { env } = await getCloudflareContext();
  const appEnv = env as unknown as AppEnv;

  const createdAt = new Date().toISOString();
  // Deterministic, sortable key: YYYYMMDDHHMMSS-<random> for uniqueness.
  const id = `${createdAt.replace(/[-:T]/g, "").slice(0, 14)}-${crypto
    .randomUUID()
    .slice(0, 8)}`;
  const submission = { id, name, email, publication, message, created_at: createdAt };

  // 1) Persist to Workers KV (if the binding is present).
  let stored = false;
  if (appEnv.SUBMISSIONS) {
    try {
      await appEnv.SUBMISSIONS.put(`submission:${id}`, JSON.stringify(submission), {
        // Keep submissions for 400 days, then KV auto-expires them.
        expirationTtl: 60 * 60 * 24 * 400,
      });
      stored = true;
    } catch (err) {
      // Log but do not fail the request — the email still goes out.
      console.error("KV put failed:", err);
    }
  }

  // 2) Email the submission to the Selection Committee inbox via Resend.
  let emailDelivered = false;
  if (appEnv.RESEND_API_KEY) {
    try {
      const resend = new Resend(appEnv.RESEND_API_KEY);
      const to = appEnv.DESTINATION_EMAIL || "fatibuclub@gmail.com";
      const from = appEnv.FROM_EMAIL || "FatiBuClub <onboarding@resend.dev>";

      await resend.emails.send({
        from,
        to,
        subject: `New FatiBuClub submission — ${name}`,
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
      "Your submission has been received for committee consideration. We will be in touch.",
    received: {
      name,
      email,
      publication: !!publication,
      messageLength: message.length,
      submissionId: stored ? id : null,
      emailed: emailDelivered,
    },
  });
}

/* ---- email templates ---- */
function renderEmailHtml(p: {
  id: string;
  name: string;
  email: string;
  publication: string;
  message: string;
  created_at: string;
  stored: boolean;
}) {
  return `<!DOCTYPE html><html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#0b0a1c;color:#f5f3ee;padding:32px 0;margin:0">
  <div style="max-width:560px;margin:0 auto;background:#11132a;border:1px solid #2a2c4a;border-radius:16px;overflow:hidden">
    <div style="padding:24px 28px;border-bottom:1px solid #2a2c4a">
      <p style="margin:0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#a8aab6">FatiBuClub · Selection Committee</p>
      <h1 style="margin:8px 0 0;font-size:20px;color:#f5f3ee">New submission for committee consideration</h1>
    </div>
    <div style="padding:24px 28px">
      ${field("Name", p.name)}
      ${field("Email", p.email)}
      ${field("Book / Publication", p.publication)}
      ${field("Message", p.message)}
      ${field("Submission ID", p.id)}
      ${field("Received at", p.created_at)}
    </div>
    <div style="padding:16px 28px;background:#0b0a1c;color:#6b6e80;font-size:12px">
      Submitted via fatibuclub.workers.dev · Reply directly to this email to reach the applicant.
    </div>
  </div></body></html>`;
}

function field(label: string, value: string) {
  return `<div style="margin-bottom:16px">
    <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#6b6e80">${label}</p>
    <p style="margin:0;font-size:15px;color:#f5f3ee;white-space:pre-wrap;word-break:break-word">${escapeHtml(value)}</p>
  </div>`;
}

function renderEmailText(p: {
  id: string;
  name: string;
  email: string;
  publication: string;
  message: string;
  created_at: string;
  stored: boolean;
}) {
  return `FatiBuClub — New submission for committee consideration

Name: ${p.name}
Email: ${p.email}
Book / Publication: ${p.publication}
Message: ${p.message}
Submission ID: ${p.id}
Received at: ${p.created_at}

Submitted via fatibuclub.workers.dev — reply to this email to reach the applicant.`;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
