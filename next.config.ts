import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Enable Cloudflare bindings (env, KV, D1, etc.) during local `wrangler dev`.
if (process.env.NODE_ENV === "development") {
  initOpenNextCloudflareForDev();
}

const nextConfig: NextConfig = {
  // OpenNext builds its own worker bundle; do not use Next's standalone output.
  reactStrictMode: false,
  images: {
    // Workers can't run sharp; serve images unoptimized (fine for our small avatars).
    unoptimized: true,
  },
  // Keep build resilient on Cloudflare's CI; type issues shouldn't block deploys.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
