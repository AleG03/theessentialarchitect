import Image from 'next/image'

export default function HeroImage() {
  return (
    <div className="relative w-full max-w-md h-80 md:h-96">
      <picture>
        <source
          type="image/avif"
          srcSet="/rooster.avif"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <Image 
          src="/rooster.svg"
          alt="Elegant sketched rooster"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, 400px"
          loading="eager"
          fetchPriority="high"
          style={{
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
          }}
        />
      </picture>
    </div>
  )
} 