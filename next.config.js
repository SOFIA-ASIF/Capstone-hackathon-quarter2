const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io"
      }
    ]
  },
  webpack: (config, _context) => {
    config.resolve.alias["jotai"] = path.resolve(
      __dirname,
      "node_modules/jotai"
    );
    return config;
  },
};

module.exports = nextConfig;
