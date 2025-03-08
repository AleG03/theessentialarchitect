import { type ReactNode } from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import dynamic from 'next/dynamic'
import { LanguageProvider } from "@/context/language-context"

// Dynamically import non-critical providers
const ThemeProvider = dynamic(() => import('@/components/theme-provider').then(mod => mod.ThemeProvider))
const Toaster = dynamic(() => import('@/components/ui/toaster').then(mod => mod.Toaster))
const Analytics = dynamic(() => import('@vercel/analytics/react').then(mod => mod.Analytics))
const SpeedInsights = dynamic(() => import('@vercel/speed-insights/next').then(mod => mod.SpeedInsights))

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: 'swap'
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  preload: true,
  display: 'swap'
})

export const metadata: Metadata = {
  title: "The Simple Architect",
  description: "Simple laws for sustainable architectures.",
  generator: 'alegallo.dev',
}

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
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
          <Analytics />
          <SpeedInsights />
        </LanguageProvider>
      </body>
    </html>
  )
}



import './globals.css'