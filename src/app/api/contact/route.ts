import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  publication?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  // In a production deployment this would persist to a datastore and/or
  // notify the Selection Committee. We acknowledge receipt here.
  return NextResponse.json({
    ok: true,
    message:
      "Your submission has been received for committee consideration. We will be in touch.",
    received: {
      name,
      email,
      publication: !!publication,
      messageLength: message.length,
    },
  });
}
