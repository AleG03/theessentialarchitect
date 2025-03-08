"use client"

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import { useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/context/language-context'
import { translations } from '@/data/translations'

// Lazy load components
const AnimatedLawsSection = dynamic(() => import('../components/AnimatedLawsSection'), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96 rounded-lg"></div>,
  ssr: false
})

const LanguageSwitcher = dynamic(() => import('../components/language-switcher').then(mod => mod.LanguageSwitcher), {
  loading: () => <div className="w-24 h-8 bg-gray-100 animate-pulse rounded" />,
  ssr: true
})

export default function Home() {
  const router = useRouter()
  const { t } = useLanguage()

  // Preload important routes
  useEffect(() => {
    // Preload the most accessed law pages
    router.prefetch('/laws/1')
    router.prefetch('/laws/2')
  }, [router])

  const handleLawClick = (id: string) => {
    router.push(`/laws/${id}`)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Language switcher in the top right */}
      <div className="absolute top-4 right-4 z-10">
        <LanguageSwitcher />
      </div>
      
      {/* Main content container */}
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">
        
        {/* Header section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">
              <span className="block">{t('title.the')}</span>
              <span className="block">{t('title.simple')}</span>
              <span className="block">{t('title.architect')}</span>
            </h1>
            <Separator className="my-6 h-0.5 bg-black w-full max-w-md" />
            <p className="text-xl mt-4">
              {t('subtitle')}
            </p>
          </div>
          
          <div className="relative w-full max-w-md h-80 md:h-96">
            <Image 
              src="/rooster.svg"
              alt="Elegant sketched rooster"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>
        
        {/* Laws section */}
        <AnimatedLawsSection onLawClick={handleLawClick} translations={translations} t={t} />
      </div>
    </main>
  )
}