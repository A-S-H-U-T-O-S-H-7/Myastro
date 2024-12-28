/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CUSTOM_VAR: process.env.SECRET_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "13.201.226.189",
        port: "",
        pathname: "/statics/**",
      },
    ],
  },
};

export default nextConfig;
