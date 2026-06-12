import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/Al-Mahmasani-Roastery",
  images: {
    loader: "custom",
    loaderFile: "./imageLoader.ts",
  },
};

export default nextConfig;
