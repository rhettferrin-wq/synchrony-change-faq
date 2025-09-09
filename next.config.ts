import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/synchrony-change-faq' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/synchrony-change-faq/' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
