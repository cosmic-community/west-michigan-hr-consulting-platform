export default function WhimsicalElements() {
  return (
    <>
      {/* Subtle geometric shapes */}
      <div className="absolute top-20 right-20 subtle-float opacity-20 hidden lg:block">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-200 to-primary-300 rounded-xl"></div>
      </div>

      <div className="absolute bottom-32 left-16 subtle-float animation-delay-600 opacity-15 hidden md:block">
        <div className="w-12 h-12 bg-gradient-to-br from-warm-300 to-warm-400 rounded-full"></div>
      </div>

      {/* Professional accent elements */}
      <div className="absolute top-1/3 left-8 subtle-float animation-delay-200 opacity-15 hidden lg:block">
        <div className="w-8 h-8 bg-gradient-to-br from-primary-300 to-primary-400 rounded-lg"></div>
      </div>
      
      <div className="absolute top-2/3 right-32 subtle-float animation-delay-800 opacity-10 hidden lg:block">
        <div className="w-10 h-10 bg-gradient-to-br from-warm-300 to-warm-400 rounded-xl"></div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(214, 123, 47, 0.1) 1px, transparent 1px)',
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>
    </>
  )
}