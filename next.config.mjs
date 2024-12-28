/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CUSTOM_VAR: process.env.SECRET_API_KEY,
  },
  images: {
    domains: ["astrosearch.in"],
  },
};

export default nextConfig;