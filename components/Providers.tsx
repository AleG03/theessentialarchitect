'use client'

import { type ReactNode, useEffect, useState } from "react"
import dynamic from 'next/dynamic'
import { LanguageProvider } from "@/context/language-context"

// Dynamically import non-critical providers with explicit loading settings
const ThemeProvider = dynamic(() => import('./theme-provider').then(mod => mod.ThemeProvider), {
  ssr: false
})

// Defer non-UI critical components
const Toaster = dynamic(() => import('./ui/toaster').then(mod => mod.Toaster), {
  ssr: false
})

// Load analytics only after main content is loaded
const Analytics = dynamic(() => import('@vercel/analytics/react').then(mod => mod.Analytics), {
  ssr: false,
  loading: () => null
})

const SpeedInsights = dynamic(() => import('@vercel/speed-insights/next').then(mod => mod.SpeedInsights), {
  ssr: false,
  loading: () => null
})

export default function Providers({ children }: { children: ReactNode }) {
  // Only load analytics components after hydration
  const [isHydrated, setIsHydrated] = useState(false)
  
  useEffect(() => {
    setIsHydrated(true)
  }, [])
  
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
        {isHydrated && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </ThemeProvider>
    </LanguageProvider>
  )
} 