import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/Al-Mahmasani-Roastery" : "",
  images: isProd
    ? { loader: "custom", loaderFile: "./imageLoader.ts" }
    : { unoptimized: true },
};

export default nextConfig;
