import React from 'react'
import kenoImg from '../assets/keno.jpg'

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-[100vh] flex items-center overflow-hidden pt-20">
      
      {/* Subtle overlay gradients for contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 pointer-events-none z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left side: Typography matching the clean reference design */}
        <div className="flex flex-col items-start text-left pt-10">
          
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-bold leading-[1.1] tracking-tight text-white mb-8 drop-shadow-xl">
             I help businesses <br />
             turn ideas into <br />
             production-ready <br />
             web applications <br />
             that deliver results.
          </h1>
          
          {/* Subtle Bio Text */}
          <p className="text-gray-400 text-lg sm:text-xl font-light mb-10 max-w-lg">
             Hi, I'm Kenenisa, a full-stack software developer specializing in building fast, scalable, and user-focused web applications.
          </p>

          {/* Minimal Clean Call To Action Button */}
          <button
            onClick={scrollToWork}
            className="inline-flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-white text-black hover:bg-gray-200 rounded-xl font-semibold text-sm sm:text-base transition-colors shadow-lg"
          >
            See My Work
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>

        </div>

        {/* Right side: Independent Profile Image */}
        <div className="hidden lg:flex w-full h-full items-center justify-center lg:justify-end">
           <div className="relative w-64 lg:w-80 xl:w-96 aspect-[3/4] rounded-[2.5rem] overflow-hidden border-2 border-white/20 shadow-[0_0_60px_rgba(59,130,246,0.2)] group">
             {/* Subtle internal glow overlay */}
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent pointer-events-none z-10 mix-blend-overlay"></div>
             <img 
               src={kenoImg} 
               alt="Kenenisa Beyan" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
             />
           </div>
        </div>

      </div>
    </section>
  )
}

export default Hero