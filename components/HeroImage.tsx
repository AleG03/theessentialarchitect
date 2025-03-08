export default function HeroImage() {
  return (
    <div className="relative w-full max-w-md h-80 md:h-96">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 400 400"
        className="w-full h-full"
        aria-label="Elegant sketched rooster"
        style={{
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      >
        <style>{`.rooster-line{fill:none;stroke:#000;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}`}</style>
        <path d="M200 150c30-10 50-30 60-50s20-30 30-35q15-7.5 30 0c10 5 15 15 10 25s-15 15-25 10-15-15-10-25" className="rooster-line"/>
        <path d="M260 100c10-20 20-30 30-35q15-7.5 30 0c10 5 15 15 10 25s-15 15-25 10-15-15-10-25" style={{fill:'#ff6b6b'}}/>
        <path d="M200 150c-20 10-30 30-30 50s10 40 30 50q30 15 60 0c20-10 30-30 30-50s-10-40-30-50" className="rooster-line"/>
        <path d="M260 200c20-10 40-15 60-10s30 20 25 35-20 20-35 15-20-20-10-30" className="rooster-line"/>
        <path d="M260 210c20 10 40 15 60 10s30-20 25-35-20-20-35-15-20 20-10 30M190 250c-5 20-10 40-5 60s15 30 25 25 15-20 10-35-15-25-30-20" className="rooster-line"/>
        <path d="M240 250c5 20 10 40 5 60s-15 30-25 25-15-20-10-35 15-25 30-20" className="rooster-line"/>
        <path d="M170 150c-10 5-20 10-30 5s-15-15-10-25 15-15 25-10 15 15 10 25" style={{fill:'#ffa94d'}}/>
        <path d="M170 150c-10 5-20 10-30 5s-15-15-10-25 15-15 25-10 15 15 10 25" className="rooster-line"/>
        <circle cx="180" cy="140" r="5"/>
        <path d="M185 330c-5 5-10 10-15 5q-7.5-7.5 0-15M185 330c5 5 10 10 15 5q7.5-7.5 0-15M245 330c-5 5-10 10-15 5q-7.5-7.5 0-15M245 330c5 5 10 10 15 5q7.5-7.5 0-15" className="rooster-line"/>
        <path d="M150 100c5-5 10-10 15-5M250 100c5-5 10-10 15-5M150 200c5-5 10-10 15-5M250 200c5-5 10-10 15-5" className="rooster-line" style={{opacity:0.6,strokeWidth:1}}/>
        <path d="M220 170c5 5 10 10 15 5M180 220c5 5 10 10 15 5" className="rooster-line" style={{opacity:0.4,strokeWidth:0.8}}/>
      </svg>
    </div>
  )
} 