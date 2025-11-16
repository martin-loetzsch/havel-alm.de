/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 60,
  },
}
