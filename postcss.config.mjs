/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Apply Tailwind CSS
    tailwindcss: {},
    
    // Add vendor prefixes
    autoprefixer: {},
    
    // Minify CSS in production
    'cssnano': process.env.NODE_ENV === 'production' ? {
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
        normalizeWhitespace: false,
      }],
    } : false,
  },
};

export default config;
