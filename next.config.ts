import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // ✅ IMPORTANT
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
