/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  presets: ["next/babel"],
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
