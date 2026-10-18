# FatiBuClub

**A Private Literary Society & Managed Reader Experience.**

> _Where Intellectual Curiosity Meets Companionable Consideration._

🌐 **Live site:** [fatibuclub.fatibuclub.workers.dev](https://fatibuclub.fatibuclub.workers.dev)

---

## About

FatiBuClub is a private literary society connecting independent authors with an engaged global reading community through a structured, year-long literary experience. We uncover meaningful ingredients in overlooked places — scouting exceptional, independently published works that deserve a legacy spotlight.

## What's inside

A single-page editorial experience built as one continuous visual narrative:

- **Hero** — _Where Intellectual Curiosity Meets Companionable Consideration_
- **Philosophy** — literature as a permanent cultural contribution
- **Statistics** — 21,000+ global hub members, 2,000+ active salon readers, 150+ review clusters, 18 standout authors per annual cycle
- **The 12-Month Managed Reader Experience** — a structured, year-long residency with a monthly selection calendar (1–2 books picked per month)
- **High-Signal Engagement** — the benchmark of 150+ high-quality review clusters
- **The Selection Committee** — steered by Prof. Waheed Heritage, Selection Committee Chair
- **How We Operate** — an independent private literary society, not a pay-to-play marketing model
- **Voices From the Hub** — testimonials from authors and readers
- **Contact** — submit your work for committee consideration

## Tech stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- **Styling:** Tailwind CSS 4 + shadcn/ui (New York) + Lucide icons
- **Animation:** Framer Motion (fade/slide reveals, count-ups, parallax, marquees)
- **Hosting:** [Cloudflare Workers](https://workers.cloudflare.com) via [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare)
- **Email:** [Resend](https://resend.com) — contact-form submissions emailed to the committee inbox
- **Storage:** Cloudflare Workers KV — persistent submission archive
- **Fonts:** Space Grotesk (display) + Inter (body)

## Deploy

Every push to `main` auto-deploys to Cloudflare Workers via GitHub Actions.

```bash
# install
bun install

# dev
bun run dev

# build for Cloudflare Workers
bun run build
bun run cf-build

# deploy
bun run deploy
```

## Contact

To submit your work for committee consideration, visit the [contact form](https://fatibuclub.fatibuclub.workers.dev/#contact).

---

© 2025 FatiBuClub. All Rights Reserved.
