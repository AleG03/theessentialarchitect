'use client'

import { type ReactNode } from "react"
import dynamic from 'next/dynamic'
import { LanguageProvider } from "@/context/language-context"

// Dynamically import non-critical providers
const ThemeProvider = dynamic(() => import('./theme-provider').then(mod => mod.ThemeProvider))
const Toaster = dynamic(() => import('./ui/toaster').then(mod => mod.Toaster))
const Analytics = dynamic(() => import('@vercel/analytics/react').then(mod => mod.Analytics))
const SpeedInsights = dynamic(() => import('@vercel/speed-insights/next').then(mod => mod.SpeedInsights))

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </ThemeProvider>
    </LanguageProvider>
  )
} 