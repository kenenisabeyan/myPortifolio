import React from 'react'
import kenoImg from '../assets/keno.jpg'

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-24 px-6 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center w-full gap-12">
        
        {/* Left Column: Text */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300 tracking-wide">Available for new projects</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-white mb-6">
            Shaping <span className="inline-block bg-white text-black rounded-full p-1 mx-1 text-2xl md:text-4xl shadow-lg border-2 border-white/[0.1]"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 15V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V15L4 17V18H20V17L18 15Z" fill="currentColor"/></svg></span> Ideas into
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 drop-shadow-sm">
              Real Projects
            </span>
            <span className="block mt-1">that Deliver Results</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg mb-10 font-light text-center md:text-left">
            Hi, I'm <strong className="text-white font-medium">Kenenisa</strong>, a developer based in Croatia with a passion for code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start w-full justify-center md:justify-start -ml-2">
            <button
              onClick={scrollToWork}
              className="px-8 py-4 bg-white text-black hover:bg-gray-100 rounded-lg font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.3)] w-full sm:w-auto"
            >
              SEE MY WORK
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] rounded-lg font-semibold tracking-wide transition-all duration-300 backdrop-blur-md w-full sm:w-auto text-center"
            >
              CONTACT ME
            </button>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0 w-full perspective-1000">
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] aspect-square group mx-auto md:mx-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-[2.5rem] blur-[60px] opacity-40 group-hover:opacity-80 transition-opacity duration-700" />
            
            {/* Glass Border Container */}
            <div className="relative w-full h-full rounded-[2.5rem] bg-gradient-to-br from-white/20 via-white/5 to-transparent overflow-hidden transform transition-all duration-700 group-hover:-translate-y-4 group-hover:rotate-2 group-hover:shadow-[0_30px_60px_rgba(59,130,246,0.4)] z-10">
              <img 
                src={kenoImg} 
                alt="Kenenisa" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Floating Element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-500/20 backdrop-blur-3xl rounded-2xl border border-white/10 z-20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700 animate-bounce" style={{ animationDuration: '4s' }}>
               <span className="text-3xl">✨</span>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero