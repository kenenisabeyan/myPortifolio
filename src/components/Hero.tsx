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
        <div className="flex flex-col items-center md:items-start text-center md:text-left pt-6 order-2 lg:order-1 relative z-20">
          
          {/* Role Badge */}
          <div className="group inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#030610]/50 border border-cyan-500/30 mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-500 cursor-default">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
            <span className="text-xs sm:text-sm text-cyan-100 font-black tracking-[0.2em] uppercase">Full-Stack Engineer</span>
          </div>

          {/* Main Headline */}
          <h5 className="text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] font-black leading-[1.05] tracking-tighter text-white mb-6 drop-shadow-2xl">
             Turning Ideas Into <br className="hidden lg:block" />
             <span className="relative inline-block mt-2">
               <span className="absolute -inset-1 blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-40 animate-pulse"></span>
               <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400">
                 Production-Ready
               </span>
             </span> <br className="hidden lg:block mt-2" />
             Web Apps.
          </h5>
          
          {/* Subtle Bio Text */}
          <p className="text-gray-300 md:text-blue-100/70 text-lg sm:text-xl font-light mb-12 max-w-xl leading-[1.8] tracking-wide">
             Hi, I’m Kenenisa Beyan, a software developer focused on building scalable, high-performance digital solutions that deliver real-world results.
          </p>

          {/* Modern Cyan Call To Action Button */}
          <div className="relative group">
            {/* Ambient Base Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            <button
              onClick={scrollToWork}
              className="relative flex items-center justify-center gap-4 px-10 py-4 lg:py-5 bg-[#030610] text-cyan-50 border border-cyan-400/50 rounded-full font-black text-sm sm:text-base uppercase tracking-[0.2em] shadow-2xl hover:bg-cyan-500 hover:text-black hover:border-transparent transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Shine Sweep Effect */}
              <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
              
              <span className="relative z-10 transition-colors">See My Work</span>
              <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center bg-cyan-500/10 group-hover:bg-black/10 transition-colors relative z-10">
                <svg 
                  className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300" 
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

        </div>

        {/* Right Side: High-Tech Avatar Portal */}
        <div className="flex justify-center md:justify-end order-1 lg:order-2 relative">
          
          {/* Animated Background Ambience */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-[130px] rounded-full pointer-events-none -z-10" />

          {/* Orbiting Tech Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50 z-0">
            <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-dashed border-cyan-500/40 animate-[spin_30s_linear_infinite]" />
            <div className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full border border-blue-500/20 animate-[spin_40s_linear_infinite_reverse]" />
          </div>

          {/* Outer containment ring */}
          <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full p-[2px] bg-gradient-to-tr from-cyan-500 via-transparent to-blue-600 shadow-[0_0_50px_rgba(34,211,238,0.2)] flex items-center justify-center z-10 group cursor-default">
            
            {/* Black void core */}
            <div className="w-full h-full rounded-full border-[8px] border-[#030610] bg-[#030610] flex items-center justify-center overflow-hidden">
              
              {/* Profile Image Container with inner edge glow */}
              <div className="w-full h-full rounded-full relative transform group-hover:scale-110 transition-transform duration-700 ease-out">
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 to-transparent mix-blend-overlay z-10"></div>
                
                <img 
                  src={kenoImg} 
                  alt="Kenenisa Beyan" 
                  className="w-full h-full object-cover object-center" 
                />
              </div>

            </div>

            {/* Glowing Accent Dots */}
            <div className="absolute top-4 right-10 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,1)] animate-ping" />
            <div className="absolute bottom-8 left-8 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero