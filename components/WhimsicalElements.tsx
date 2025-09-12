export default function WhimsicalElements() {
  return (
    <>
      {/* Floating cassette tape with wings - inspired by empowered-artist.com */}
      <div className="absolute top-20 right-20 floating-element opacity-60 hidden lg:block">
        <div className="relative">
          {/* Cassette body */}
          <div className="w-20 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-lg relative border-2 border-accent-700">
            {/* Cassette holes */}
            <div className="absolute top-2 left-3 w-4 h-4 bg-accent-800 rounded-full"></div>
            <div className="absolute top-2 right-3 w-4 h-4 bg-accent-800 rounded-full"></div>
            {/* Cassette label */}
            <div className="absolute bottom-1 left-1 right-1 h-2 bg-white rounded-sm opacity-80"></div>
          </div>
          
          {/* Wings */}
          <div className="absolute -left-4 top-1 w-8 h-6 bg-gradient-to-r from-warm-400 to-warm-500 rounded-full transform -rotate-12 opacity-80"></div>
          <div className="absolute -right-4 top-1 w-8 h-6 bg-gradient-to-l from-warm-400 to-warm-500 rounded-full transform rotate-12 opacity-80"></div>
        </div>
        
        {/* Sparkles around cassette */}
        <div className="absolute -top-2 -left-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-pink-400 rounded-full animate-ping animation-delay-400"></div>
      </div>

      {/* Floating planet with rings - inspired by the screenshots */}
      <div className="absolute bottom-32 left-16 floating-element animation-delay-600 opacity-50 hidden md:block">
        <div className="relative w-16 h-16">
          {/* Planet */}
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rounded-full"></div>
          
          {/* Ring */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-4 border-yellow-400 rounded-full opacity-70" style={{transform: 'translate(-50%, -50%) rotateX(75deg)'}}></div>
        </div>
        
        {/* Stars around planet */}
        <div className="absolute -top-3 -right-2 text-yellow-400 text-xl animate-pulse">✨</div>
        <div className="absolute -bottom-2 -left-3 text-pink-400 text-sm animate-pulse animation-delay-200">⭐</div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-1/3 left-8 floating-element animation-delay-200 opacity-40 hidden lg:block">
        <div className="w-8 h-8 bg-gradient-to-br from-accent-300 to-accent-500 rounded-blob"></div>
      </div>
      
      <div className="absolute top-2/3 right-32 floating-element animation-delay-800 opacity-30 hidden lg:block">
        <div className="w-12 h-12 bg-gradient-to-br from-warm-300 to-warm-500 rounded-full"></div>
      </div>

      {/* Small dots pattern */}
      <div className="absolute inset-0 star-bg opacity-10"></div>
      
      {/* Additional whimsical elements */}
      <div className="absolute top-40 left-1/4 text-6xl opacity-20 floating-element animation-delay-400 hidden lg:block">
        💜
      </div>
      
      <div className="absolute bottom-40 right-1/4 text-4xl opacity-30 floating-element animation-delay-600 hidden lg:block">
        ✨
      </div>
    </>
  )
}