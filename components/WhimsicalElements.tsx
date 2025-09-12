'use client'

import { useEffect, useState } from 'react'

export default function WhimsicalElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Minimal floating dots - very subtle */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-vibrant-400 rounded-full opacity-30 animate-float"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-bounce-soft animation-delay-200"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-vibrant-300 rounded-full opacity-20 animate-float animation-delay-400"></div>
      <div className="absolute bottom-60 right-40 w-1 h-1 bg-gray-300 rounded-full opacity-50 animate-bounce-soft animation-delay-600"></div>
      
      {/* Very subtle gradient overlays */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-vibrant-500 rounded-full opacity-5 blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full opacity-5 blur-2xl animate-float animation-delay-800"></div>
    </div>
  )
}