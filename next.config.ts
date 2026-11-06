import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "acdn-us.mitiendanube.com" },
      { protocol: "https", hostname: "d26lpennugtm8s.cloudfront.net" },
    ],
  },
};

export default nextConfig;
