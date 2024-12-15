import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/profile",
        destination: "/profile/order-history",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
