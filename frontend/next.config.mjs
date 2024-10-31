/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "restaurant-ttr6.onrender.com"]
  },
  env: {
    BACKEND_HOST: process.env.BACKEND_HOST
  }
};

export default nextConfig;
