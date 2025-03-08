"use client"

import dynamic from 'next/dynamic'

const MainContent = dynamic(() => import('../components/MainContent'), {
  loading: () => (
    <div className="min-h-screen bg-white animate-pulse">
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">
        <div className="h-96 bg-gray-100 rounded-lg" />
      </div>
    </div>
  )
})


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <MainContent />
    </main>
  )
}