import { type ReactNode } from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

// Optimize Roboto font loading
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  preload: true,
  display: 'swap',
  adjustFontFallback: false,
  // Only load the weights we need
  weight: ['400', '500', '700']
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
      <body className={`${roboto.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}