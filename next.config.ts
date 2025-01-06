import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

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
  images: {
    domains: ["www.bigbang.si"], // Add external image domain here
  },
};

export default withNextIntl(nextConfig);
