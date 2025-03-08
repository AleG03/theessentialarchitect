'use client'

import { useEffect } from 'react'

export default function DeferredStyleLoader() {
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '/_next/static/css/426c12ce3a2d7acd.css'
    link.media = 'print'
    
    link.onload = () => {
      link.media = 'all'
    }
    
    document.head.appendChild(link)
  }, [])

  return (
    <noscript>
      <link 
        rel="stylesheet" 
        href="/_next/static/css/426c12ce3a2d7acd.css"
      />
    </noscript>
  )
} 