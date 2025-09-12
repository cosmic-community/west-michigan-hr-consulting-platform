export default function WhimsicalElements() {
  return (
    <>
      {/* Large floating circles - inspired by the original image */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-vibrant-300/30 to-vibrant-500/30 rounded-full animate-float-slow blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-vibrant-400/20 to-vibrant-600/20 rounded-full animate-float animation-delay-600 blur-3xl"></div>
      
      {/* Medium floating shapes */}
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-soft-300/40 to-soft-500/40 rounded-full animate-bounce-soft animation-delay-400 blur-2xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-vibrant-200/50 to-vibrant-400/50 rounded-full animate-float-fast animation-delay-800 blur-xl"></div>
      
      {/* Small accent elements */}
      <div className="absolute top-40 left-20 w-16 h-16 bg-gradient-to-br from-vibrant-400 to-vibrant-600 rounded-full animate-pulse-soft opacity-60"></div>
      <div className="absolute top-2/3 right-32 w-12 h-12 bg-gradient-to-br from-soft-400 to-soft-600 rounded-full animate-bounce-soft animation-delay-200 opacity-70"></div>
      <div className="absolute bottom-40 right-20 w-8 h-8 bg-gradient-to-br from-vibrant-300 to-vibrant-500 rounded-full animate-float animation-delay-1000 opacity-80"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-60 left-1/3 w-20 h-20 bg-gradient-to-br from-vibrant-400/60 to-vibrant-600/60 rotate-45 animate-float-slow animation-delay-400 rounded-2xl"></div>
      <div className="absolute bottom-60 right-1/3 w-14 h-14 bg-gradient-to-br from-soft-400/70 to-soft-600/70 rotate-12 animate-bounce-soft animation-delay-600 rounded-xl"></div>
      
      {/* Floating badges similar to original design */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 floating-badge animate-scale-in animation-delay-800 text-vibrant-600 z-20">
        ✨ Professional Excellence
      </div>
      
      <div className="absolute bottom-32 right-1/4 floating-badge animate-scale-in animation-delay-1000 text-vibrant-600 z-20">
        🎯 Expert Results
      </div>
      
      {/* Background pattern dots */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(221, 84, 240, 0.3) 2px, transparent 2px)',
               backgroundSize: '60px 60px'
             }}>
        </div>
      </div>
      
      {/* Additional floating elements for depth */}
      <div className="absolute top-1/4 left-16 w-6 h-6 bg-vibrant-400 rounded-full animate-float animation-delay-200 opacity-40"></div>
      <div className="absolute top-3/4 right-16 w-4 h-4 bg-soft-500 rounded-full animate-bounce-soft animation-delay-600 opacity-50"></div>
      <div className="absolute top-1/2 left-8 w-10 h-10 bg-gradient-to-br from-vibrant-300 to-vibrant-500 rounded-full animate-pulse-soft animation-delay-400 opacity-30"></div>
    </>
  )
}