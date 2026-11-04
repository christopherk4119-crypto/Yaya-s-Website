import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All site imagery is now local job photos; only the Jotform embed
    // still loads from a remote host.
    remotePatterns: [{ protocol: "https", hostname: "www.jotform.com" }],
  },
  async redirects() {
    return [
      { source: "/emergency-electrician-calgary", destination: "/electrical/emergency-electrician", permanent: true },
      { source: "/panel-upgrade-calgary", destination: "/electrical/panel-upgrades", permanent: true },
      { source: "/dryer-repair-calgary", destination: "/appliance/washer-dryer-repair", permanent: true },
      { source: "/dishwasher-repair-calgary", destination: "/appliance/dishwasher-repair", permanent: true },
    ];
  },
};

export default nextConfig;
