import { type ReactNode } from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import dynamic from 'next/dynamic'

// Optimize Inter font loading
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: 'swap',
  adjustFontFallback: true,
  // Only load the weights we actually use
  weight: ['400', '500'],
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
})

// Optimize Playfair font loading
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  preload: true,
  display: 'optional',
  adjustFontFallback: true,
  // Only load the weight we use
  weight: ['700'],
  fallback: ['Georgia', 'serif']
})

export const metadata: Metadata = {
  title: "The Simple Architect",
  description: "Simple laws for sustainable architectures.",
  generator: 'alegallo.dev',
}

// Move providers to a separate client component
const Providers = dynamic(() => import('@/components/Providers'), {
  ssr: false
})

const DeferredStyleLoader = dynamic(() => import('@/components/DeferredStyleLoader'), {
  ssr: false
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous"
          fetchPriority="high"
        />
        {/* Inline critical CSS */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --font-inter: '__Inter_4a11de';
            --font-playfair: '__Playfair_Display_ac930e';
          }
          /* Critical styles for first paint */
          body {
            margin: 0;
            font-family: var(--font-inter), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            -webkit-font-smoothing: antialiased;
            text-rendering: optimizeLegibility;
          }
          .font-serif {
            font-family: var(--font-playfair), Georgia, serif;
          }
          /* Preload critical fonts with high fetchpriority */
          @font-face {
            font-family: '__Inter_4a11de';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url('/fonts/inter-latin-400-normal.woff2') format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          @font-face {
            font-family: '__Playfair_Display_ac930e';
            font-style: normal;
            font-weight: 700;
            font-display: optional;
            src: url('/fonts/playfair-display-latin-700-normal.woff2') format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
        ` }} />
        <DeferredStyleLoader />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}