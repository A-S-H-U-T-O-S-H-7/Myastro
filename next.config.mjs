/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CUSTOM_VAR: process.env.SECRET_API_KEY,
  },
};

export default nextConfig;
