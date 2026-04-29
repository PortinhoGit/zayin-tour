import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH="" for custom domain (zayintour.com.br)
// Default "/zayin-tour" for GitHub Pages at portinhogit.github.io/zayin-tour
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/zayin-tour";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
