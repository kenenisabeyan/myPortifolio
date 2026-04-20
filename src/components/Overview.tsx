import React from 'react'
import { HiOutlineLightBulb, HiOutlineUsers, HiOutlineSparkles } from 'react-icons/hi'
import homePageImg from '../assets/home-page.png'

const stats = [
  {
    title: 'Architectural Design',
    description: 'I design and build modern, scalable web applications with clean interfaces and smooth user experiences. I focus on performance, accessibility, and writing maintainable code.',
    icon: <HiOutlineLightBulb size={38} className="text-cyan-400 group-hover:rotate-12 transition-transform duration-500" />,
    glowColor: 'cyan'
  },
  {
    title: 'Collaborative Growth',
    description: 'I work on real projects and continuously improve by learning, building, and refining my skills. I focus on creating practical solutions that solve real problems and deliver value to users.',
    icon: <HiOutlineUsers size={38} className="text-blue-400 group-hover:-rotate-12 transition-transform duration-500" />,
    glowColor: 'blue'
  },
  {
    title: 'Continuous Progress',
    description: 'I build consistently, improve my development speed, and focus on delivering high-quality applications. My goal is to create reliable, user-centered systems without compromising performance or design.',
    icon: <HiOutlineSparkles size={38} className="text-indigo-400 group-hover:scale-110 transition-transform duration-500" />,
    glowColor: 'indigo'
  },
]

const Overview = () => {
  return (
    <section id="overview" className="py-16 md:py-24 px-6 relative z-10 bg-gray-50 dark:bg-transparent dark:border-t dark:border-white/[0.05]">
      
      {/* Subtle overlay gradients for contrast (Dark Mode Only) */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none hidden dark:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-24">
          
          {/* Left: Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-3 bg-gray-200 dark:bg-cyan-950/30 py-2.5 px-6 rounded-full mb-8 dark:border dark:border-cyan-500/20 dark:shadow-[0_0_25px_rgba(34,211,238,0.15)] dark:backdrop-blur-md transition-colors hover:dark:bg-cyan-900/40">
              <span className="text-gray-500 dark:text-cyan-400 animate-pulse">❖</span>
              <span className="text-lg font-medium text-gray-500 uppercase dark:text-cyan-100 dark:tracking-widest">About Me</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Who I <span className="dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-300 dark:via-blue-400 dark:to-indigo-400">Am.</span>
            </h2>
            <div className="text-base md:text-lg font-normal leading-relaxed text-gray-600 dark:text-gray-300 space-y-6">
              <p>
                I engineer robust, end-to-end web applications that bridge the gap between complex business requirements and seamless user experiences. With a foundation in Computer Science and Engineering and a dual focus on Management, I bring a unique perspective that combines technical precision with business logic.
              </p>
              <p>
                My journey is defined by building production-ready solutions—from education ecosystems to automated performance management systems. I don't just write code; I design scalable workflows that optimize productivity. Currently, I am evolving my vision through my company, EDOT, where I focus on developing digital learning resources that empower users.
              </p>
              <p>I am a perpetual learner, actively architecting systems that are secure, responsive, and performance-optimized. I thrive in environments that challenge me to solve real-world problems through clean code and innovative system design.</p>
        

            </div>
          </div>

          {/* Right: Graphic */}
          <div className="bg-gray-100 dark:bg-gradient-to-br dark:from-[#050A14] dark:to-blue-900/20 rounded-3xl dark:rounded-[2.5rem] min-h-[400px] flex justify-center items-center relative overflow-hidden border border-gray-200 dark:border-white/[0.05] group shadow-sm dark:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] w-full">
            {/* Animated glowing backdrops */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-[120px] scale-150 transform opacity-30 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none hidden dark:block" />
            
            <div className="absolute inset-0 z-10 w-full h-full overflow-hidden">
               {/* Vignette overly to blend the image into the sci-fi theme */}
               <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-20 pointer-events-none group-hover:bg-transparent transition-colors duration-700 hidden dark:block"></div>
               <img 
                 src={homePageImg} 
                 alt="About Me Graphic" 
                 className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-[1.03] dark:group-hover:scale-110"
               />
            </div>
          </div>

        </div>

        {/* Feature Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((item) => (
            <div 
              key={item.title} 
              className={`group relative bg-white dark:bg-[#050A14]/80 border border-gray-100 dark:border-white/[0.05] dark:hover:border-${item.glowColor}-500/40 rounded-2xl p-8 overflow-hidden transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] transition-all duration-300 dark:backdrop-blur-xl`}
            >
               {/* Dark mode only edge glow */}
               <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.glowColor}-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden dark:block`} />
               
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Container */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 dark:bg-black/20 mb-6 border border-gray-100 dark:border-${item.glowColor}-500/20`}>
                  {item.icon}
                </div>
                
                {/* Typography */}
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base font-normal leading-relaxed text-gray-600 dark:text-gray-400 flex-grow">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default Overview
