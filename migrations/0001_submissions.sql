-- FatiBuClub — D1 schema for contact-form submissions.
-- Apply with: wrangler d1 execute fatibuclub --remote --file=migrations/0001_submissions.sql

CREATE TABLE IF NOT EXISTS submissions (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  name         TEXT NOT NULL,
  email        TEXT NOT NULL,
  publication  TEXT NOT NULL,
  message      TEXT NOT NULL,
  created_at   TEXT NOT NULL,
  handled_at   TEXT
);

CREATE INDEX IF NOT EXISTS submissions_created_at_idx ON submissions(created_at DESC);
