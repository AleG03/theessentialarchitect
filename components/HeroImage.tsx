import Image from 'next/image'

export default function HeroImage() {
  return (
    <div className="relative w-full max-w-md h-80 md:h-96">
      <Image 
        src="/rooster.svg"
        alt="Elegant sketched rooster"
        fill
        className="object-contain"
        priority={false}
        loading="lazy"
        sizes="(max-width: 768px) 320px, 384px"
        style={{
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      />
    </div>
  )
} 