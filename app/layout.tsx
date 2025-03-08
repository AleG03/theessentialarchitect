import { type ReactNode } from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

// Optimize Inter font loading
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: 'swap',
  adjustFontFallback: false,
  // Only load the weights we actually use
  weight: ['400', '500']
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
}

// Move providers to a separate client component
import dynamic from 'next/dynamic'
const Providers = dynamic(() => import('@/components/Providers'), {
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
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

import './globals.css'