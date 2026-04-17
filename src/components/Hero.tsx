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
      
      <div className="relative z-10 max-w-[80rem] mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left side: Original Typography integrated carefully */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left pt-6 order-2 lg:order-1">
          
          {/* Role Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-900/20 border border-blue-500/30 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)]">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
            <span className="text-xs sm:text-sm text-cyan-50 font-bold tracking-widest uppercase">Full-Stack Engineer</span>
          </div>

          {/* Main Headline */}
          <h5 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1.1] tracking-tight text-white mb-6 drop-shadow-lg">
             Turning Ideas Into <br className="hidden lg:block" />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
               Production-Ready
             </span> <br className="hidden lg:block" />
             Web Apps.
          </h5>
          
          {/* Subtle Bio Text */}
          <p className="text-gray-300 text-base sm:text-lg font-light mb-10 max-w-xl leading-[1.8]">
             Hi, I’m Kenenisa Beyan, a software developer focused on building scalable, high-performance digital solutions that deliver real world results.
          </p>

          {/* Modern Cyan Call To Action Button */}
          <button
            onClick={scrollToWork}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black rounded-xl font-bold text-sm sm:text-base uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:-translate-y-1 transition-all duration-300"
          >
            <span>See My Work</span>
            <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
              <svg 
                className="w-4 h-4 text-black transform group-hover:rotate-45 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </button>

        </div>

        {/* Right Side: Circular Avatar with concentric rings matching user design */}
        <div className="flex justify-center md:justify-end order-1 lg:order-2">
          {/* Outer thick ring */}
          <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full p-[3px] bg-white/[0.05] shadow-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
            {/* Second ring */}
            <div className="w-full h-full rounded-full border-[6px] border-black/40 bg-black/40 flex items-center justify-center">
              {/* Profile Image container */}
              <div className="w-[90%] h-[90%] rounded-full overflow-hidden border-[4px] border-cyan-500/30 relative">
                <img 
                  src={kenoImg} 
                  alt="Kenenisa Beyan" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero