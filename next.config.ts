import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@prisma/client", "prisma"], 
  
  webpack: (config) => {
    config.externals = [
      ...(config.externals || []),
      { "@prisma/client": "@prisma/client" },
    ];
    return config;
  },
};

export default nextConfig;
