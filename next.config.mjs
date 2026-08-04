/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Security headers can't be set from a static export; GitHub Pages controls them.
  // If hosting ever moves to a server runtime, add a headers() config here.
}

export default nextConfig
