import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/Al-Mahmasani-Roastery",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
