import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hoirqrkdgbmvpwutwuwj-all.supabase.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Evita que o Turbopack suba no diretório errado quando há múltiplos lockfiles no sistema
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
