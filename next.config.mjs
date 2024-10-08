/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "naruto-official.com",
      },
    ],
  },
};

export default nextConfig;
