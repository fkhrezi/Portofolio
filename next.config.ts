import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.watchOptions = {
      ...(config.watchOptions ?? {}),
      ignored: ["**/.git/**", "**/.next/**", "**/node_modules/**", "**/.npm-cache/**"],
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
};

export default nextConfig;
