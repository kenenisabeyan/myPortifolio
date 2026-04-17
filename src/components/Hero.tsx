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
          
          {/* Role Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-900/20 border border-blue-500/30 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)]">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
            <span className="text-xs sm:text-sm text-cyan-50 font-bold tracking-widest uppercase">Full-Stack Engineer</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-black leading-[1.1] tracking-tighter text-white mb-6 drop-shadow-xl">
             Turning Ideas Into <br className="hidden lg:block" />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
               Production-Ready
             </span> <br className="hidden lg:block" />
             Web Apps.
          </h1>
          
          {/* Subtle Bio Text */}
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl font-light mb-10 max-w-xl leading-relaxed">
             Hi, I’m Kenenisa Beyan, a software developer focused on building scalable, high-performance digital solutions that deliver real world results.
          </p>

          {/* Modern Cyan Call To Action Button */}
          <button
            onClick={scrollToWork}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black rounded-xl font-black text-sm sm:text-base uppercase tracking-widest shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:-translate-y-1 transition-all duration-300"
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