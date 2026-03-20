import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // ✅ disable eslint errors
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ disable TS errors
  },
  images: {
    remotePatterns: [
      {
        protocol: "https", // ✅ must be https
        hostname: "doctor-app-medicines-2.onrender.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
