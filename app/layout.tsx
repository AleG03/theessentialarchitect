import { type ReactNode } from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import dynamic from 'next/dynamic'

// Optimize Inter font loading
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: 'swap',
  adjustFontFallback: false,
  // Only load the weights we use
  weight: ['400', '500', '600', '700']
})

// Optimize Playfair font loading
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  preload: true,
  display: 'swap',
  adjustFontFallback: false,
  // Only load the weight we use
  weight: ['700']
})

export const metadata: Metadata = {
  title: "The Simple Architect",
  description: "Simple laws for sustainable architectures.",
  generator: 'alegallo.dev',
  // Adding viewport settings to prevent layout shifts
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  // Adding additional metadata
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  // Cache control directives
  other: {
    'x-dns-prefetch-control': 'on',
  },
}

// Move providers to a separate client component - load asynchronously
const Providers = dynamic(() => import('@/components/Providers'), {
  ssr: false
})

// Import CSS with reduced priority
import './globals.css'

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
        />
        <link 
          rel="preload"
          href="/rooster.svg"
          as="image"
          type="image/svg+xml"
          fetchPriority="high"
        />
        {/* Add preconnect for analytics */}
        <link rel="preconnect" href="https://vercel.com" />
        
        {/* Critical CSS inline */}
        <style dangerouslySetInnerHTML={{ __html: `
          body{margin:0;font-family:sans-serif}
          .font-sans{font-family:var(--font-inter),ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}
          .font-serif{font-family:var(--font-playfair),ui-serif,Georgia,Cambria,"Times New Roman",Times,serif}
        `}} />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}