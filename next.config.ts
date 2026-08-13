import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "www.jotform.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/emergency-electrician-calgary", destination: "/electrical/emergency-electrician", permanent: true },
      { source: "/panel-upgrade-calgary", destination: "/electrical/panel-upgrades", permanent: true },
    ];
  },
};

export default nextConfig;
