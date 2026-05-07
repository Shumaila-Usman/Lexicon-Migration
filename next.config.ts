import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Many clients request /favicon.ico by default; map to the app icon route asset
      { source: "/favicon.ico", destination: "/icon.png" },
    ];
  },
};

export default nextConfig;
