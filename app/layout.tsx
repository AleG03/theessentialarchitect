import { type ReactNode } from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

// Optimize Montserrat font loading
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  preload: true,
  display: 'swap',
  adjustFontFallback: false,
  // Only load the weights we need
  weight: ['400', '500', '600', '700']
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
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}