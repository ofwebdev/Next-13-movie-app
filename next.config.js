/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    loader: "default",
    minimumCacheTTL: 60,
    domains: [
      "image.tmdb.org",
      "rb.gy"
    ],
    protocol: 'https',
    hostname: 'image.tmdb.org',
    port: '',
    pathname: 'https://image.tmdb.org/t/p/original/',
  },
  
}

module.exports = nextConfig
