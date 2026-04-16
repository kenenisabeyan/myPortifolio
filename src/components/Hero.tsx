import React from 'react'
import kenoImg from '../assets/keno.jpg'

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-[100vh] flex items-center overflow-hidden pt-20">
      
      {/* Subtle vignette. Less intense on the left to keep text visible against the space background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 pointer-events-none z-0" />
      
      {/* Container aligned to the left for a side-by-side visual with the 3D Globe */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-20 flex flex-col items-start">
        
        <div className="max-w-3xl flex flex-col items-start text-left">
          
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-900/40 border border-blue-500/30 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:bg-blue-900/60 transition-colors cursor-default">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-blue-100 tracking-widest uppercase">
              Available for new projects
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.1] tracking-tighter text-white mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
             Engineering <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-400 via-cyan-300 to-indigo-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]">Digital</span><br /> Masterpieces
          </h1>
          
          {/* Subtitle with Avatar inline */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-6 text-gray-300 text-lg md:text-xl font-light mb-12 w-full max-w-2xl bg-[#050A14]/60 p-6 rounded-3xl backdrop-blur-xl border border-white/[0.05] shadow-2xl">
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-50 animate-pulse"></div>
              <img 
                src={kenoImg} 
                alt="Kenenisa" 
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white/20 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              />
            </div>
            <p className="leading-relaxed text-center sm:text-left pt-1">
              Hi, I'm <strong className="text-white font-semibold">Kenenisa</strong>. A software developer with a relentless passion for high-tech aesthetics and flawless interactive code. Let's sculpt the future of the web.
            </p>
          </div>
          
          {/* Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-start">
            <button
              onClick={scrollToWork}
              className="relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold tracking-widest uppercase transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] border border-blue-400/50"
            >
              Explore My Work
            </button>
            
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-[#050A14]/60 hover:bg-[#050A14]/90 text-white border border-white/10 rounded-xl font-bold tracking-widest uppercase transition-all duration-300 backdrop-blur-xl transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border-white/30"
            >
              Contact Me
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero