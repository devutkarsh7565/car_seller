const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        // pathname: '/account123/**',
      },
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
