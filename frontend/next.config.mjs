/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"]
  },
  env: {
    BACKEND_HOST: process.env.BACKEND_HOST
  }
};

export default nextConfig;
