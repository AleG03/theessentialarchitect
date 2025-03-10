/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for hosting on any platform
  output: 'export',
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Optimize images
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/webp'], // Prefer WebP format
    deviceSizes: [320, 480, 768, 1024, 1200], // Responsive image sizes
    minimumCacheTTL: 31536000, // Cache images for 1 year
  },
  
  // Production optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Asset optimization
  assetPrefix: process.env.NODE_ENV === 'production' ? '/_next' : '',
  
  // Experimental features for better performance
  experimental: {
    // Optimize CSS
    optimizeCss: true
  },

  // Disable unnecessary features
  poweredByHeader: false
}

export default nextConfig 