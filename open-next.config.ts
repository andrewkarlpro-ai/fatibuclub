import type { OpenNextConfig } from "@opennextjs/cloudflare";

// OpenNext Cloudflare adapter config (canonical shape for @opennextjs/cloudflare 1.x).
// Workers can't run a real incremental cache / tag cache / queue, so we use
// the no-op ("dummy") implementations. proxyExternalRequest uses "fetch".
const config: OpenNextConfig = {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      proxyExternalRequest: "fetch",
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy",
    },
  },
  edgeExternals: ["node:crypto"],
  middleware: {
    external: true,
    override: {
      wrapper: "cloudflare-edge",
      converter: "edge",
      proxyExternalRequest: "fetch",
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy",
    },
  },
};

export default config;
