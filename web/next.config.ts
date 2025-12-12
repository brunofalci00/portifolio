import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

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

export default withNextIntl(nextConfig);
