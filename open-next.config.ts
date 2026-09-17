import type { OpenNextConfig } from "@opennextjs/cloudflare";

// OpenNext Cloudflare adapter config.
// Workers can't run a real incremental cache / tag cache / queue, so we
// use the no-op ("dummy") implementations. The wrapper runs Node-compatible
// code on the Workers runtime via nodejs_compat; the converter handles
// Request/Response translation.
const config: OpenNextConfig = {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy",
    },
  },
};

export default config;
