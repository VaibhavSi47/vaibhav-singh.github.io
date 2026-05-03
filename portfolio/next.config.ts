import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // This creates the 'out' folder during build
  images: {
    unoptimized: true, // Required for static export if using next/image
  },
  // If your site is at username.github.io/repo-name/, add:
  // basePath: '/your-repo-name',
};

export default nextConfig;
