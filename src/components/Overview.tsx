import React from 'react'
import { HiOutlineLightBulb, HiOutlineUsers, HiOutlineSparkles } from 'react-icons/hi'

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

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header container */}
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <div className="flex items-center gap-3 bg-gray-200 dark:bg-blue-900/20 py-2.5 px-6 rounded-full mb-8 dark:border dark:border-blue-500/30 dark:shadow-[0_0_20px_rgba(59,130,246,0.15)] dark:backdrop-blur-md">
            <span className="text-gray-500 dark:text-cyan-400 animate-pulse">❖</span>
            <span className="text-lg font-medium text-gray-500 uppercase dark:text-cyan-50 dark:tracking-widest">About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 dark:drop-shadow-xl">
            Who I <span className="dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500">Am.</span>
          </h2>
          <div className="mx-auto max-w-2xl text-base md:text-lg font-normal leading-relaxed text-gray-600 dark:text-gray-300 space-y-6">
            <p>
              I am a Computer Science and Engineering student at ASTU focused on full-stack development. I build scalable web applications with modern technologies, turning ideas into real, user-focused systems.
            </p>
            <p>
              Through projects like the EDOT Platform, CRM dashboards, and performance evaluation systems, I’ve gained hands-on experience in system design, backend development, and responsive UI. I continuously improve by building real-world solutions and solving practical problems.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((item) => (
            <div 
              key={item.title} 
              className={`group relative bg-white dark:bg-[#050A14]/80 border border-gray-100 dark:border-white/[0.05] dark:hover:border-${item.glowColor}-500/40 rounded-2xl p-8 overflow-hidden hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] transition-all duration-300 dark:backdrop-blur-xl`}
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
