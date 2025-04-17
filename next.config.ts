import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scores.iplt20.com',
        pathname: '/ipl/**',
      },
      {
        protocol: 'https',
        hostname: 'feeds-100mb.s3-ap-southeast-1.amazonaws.com',
        pathname: '/teamLogos/**',
      }
    ],
  },
};

export default nextConfig;
