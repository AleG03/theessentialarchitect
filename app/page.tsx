"use client"

import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import { useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, useInView, useAnimation } from 'framer-motion'
import { LanguageSwitcher } from '@/components/language-switcher'
import { useLanguage } from '@/context/language-context'
import { translations } from '@/data/translations'

export default function Home() {
  const router = useRouter()
  const lawsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(lawsRef, { once: false, amount: 0.2 })
  const controls = useAnimation()
  const { t } = useLanguage()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const lawVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

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
            />
          </div>
        </div>
        
        {/* Laws section */}
        <div ref={lawsRef} className="max-w-2xl mx-auto mt-16">
          {/* Currently only showing Law 1, but code is ready for multiple laws */}
          {Object.entries(translations.laws).map(([id, _], index) => (
            <motion.div 
              key={id}
              className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 cursor-pointer mb-8"
              onClick={() => handleLawClick(id)}
              variants={lawVariants}
              initial="hidden"
              animate={controls}
              custom={index}
            >
              <div className="text-center mb-4">
                <h2 className="text-2xl font-serif font-bold">{t('law')} {id}.</h2>
                <Separator className="my-2 mx-auto w-3/4" />
              </div>
              <h3 className="text-lg font-medium text-center mb-4">{t(`laws.${id}.title`)}</h3>
              <p className="text-sm text-gray-700">
                {t(`laws.${id}.summary`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}