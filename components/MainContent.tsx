import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Separator } from "@/components/ui/separator"
import { useLanguage } from '@/context/language-context'
import { translations } from '@/data/translations'
import dynamic from 'next/dynamic'

const HeroImage = dynamic(() => import('./HeroImage'), {
  loading: () => <div className="relative w-full max-w-md h-80 md:h-96 bg-gray-100 animate-pulse" />,
  ssr: true
})

const AnimatedLawsSection = dynamic(() => import('./AnimatedLawsSection'), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96 rounded-lg"></div>,
  ssr: false
})

const LanguageSwitcher = dynamic(() => import('./language-switcher').then(mod => mod.LanguageSwitcher), {
  loading: () => <div className="w-24 h-8 bg-gray-100 animate-pulse rounded" />,
  ssr: true
})

export default function MainContent() {
  const router = useRouter()
  const { t } = useLanguage()

  useEffect(() => {
    router.prefetch('/laws/1')
    router.prefetch('/laws/2')
  }, [router])

  const handleLawClick = (id: string) => {
    router.push(`/laws/${id}`)
  }

  return (
    <>
      <div className="absolute top-2 md:top-4 right-2 md:right-4 z-10">
        <LanguageSwitcher />
      </div>
      
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold tracking-tight">
              <span className="block">{t('title.the')}</span>
              <span className="block">{t('title.simple')}</span>
              <span className="block">{t('title.architect')}</span>
            </h1>
            <Separator className="my-4 md:my-6 h-0.5 bg-black w-full max-w-md" />
            <p className="text-lg md:text-xl mt-3 md:mt-4">
              {t('subtitle')}
            </p>
          </div>
          
          <HeroImage />
        </div>
        
        <AnimatedLawsSection onLawClick={handleLawClick} translations={translations} t={t} />
      </div>
    </>
  )
} 