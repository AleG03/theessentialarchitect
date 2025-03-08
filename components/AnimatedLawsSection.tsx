import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Separator } from "@/components/ui/separator"

interface AnimatedLawsSectionProps {
  onLawClick: (id: string) => void
  translations: any // You should replace this with a proper type
  t: (key: string) => string
}

export default function AnimatedLawsSection({ onLawClick, translations, t }: AnimatedLawsSectionProps) {
  const lawsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(lawsRef, { once: false, amount: 0.2 })
  const controls = useAnimation()

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

  return (
    <div ref={lawsRef} className="max-w-2xl mx-auto mt-16">
      {Object.entries(translations.laws).map(([id, _], index) => (
        <motion.div 
          key={id}
          className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 cursor-pointer mb-8"
          onClick={() => onLawClick(id)}
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
  )
} 