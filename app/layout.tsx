import { type ReactNode } from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

// Only load the minimal font subsets needed for initial render
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: 'swap',
  adjustFontFallback: false // Disable additional font metrics calculation
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  preload: true,
  display: 'swap',
  adjustFontFallback: false
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
          rel="preload"
          href="/rooster.svg"
          as="image"
          type="image/svg+xml"
          fetchPriority="high"
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}



import './globals.css'