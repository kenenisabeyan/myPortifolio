import React from 'react'
import { SiReact, SiPython, SiNodedotjs, SiTailwindcss, SiMongodb, SiTypescript, SiJavascript, SiHtml5, SiCss, SiDocker } from 'react-icons/si'
import { projects } from '../data/data'

const technologies = [
  { icon: <SiHtml5 size={38} className="text-white hover:text-[#E34F26] transition-colors duration-300" /> },
  { icon: <SiCss size={38} className="text-white hover:text-[#1572B6] transition-colors duration-300" /> },
  { icon: <SiJavascript size={38} className="text-white hover:text-[#F7DF1E] transition-colors duration-300" /> },
  { icon: <SiTypescript size={38} className="text-white hover:text-[#3178C6] transition-colors duration-300" /> },
  { icon: <SiReact size={38} className="text-white hover:text-[#61DAFB] transition-colors duration-300" /> },
  { icon: <SiNodedotjs size={38} className="text-white hover:text-[#339933] transition-colors duration-300" /> },
  { icon: <SiTailwindcss size={38} className="text-white hover:text-[#38B2AC] transition-colors duration-300" /> },
  { icon: <SiMongodb size={38} className="text-white hover:text-[#47A248] transition-colors duration-300" /> },
  { icon: <SiDocker size={38} className="text-white hover:text-[#2496ED] transition-colors duration-300" /> },
  { icon: <SiPython size={38} className="text-white hover:text-[#3776AB] transition-colors duration-300" /> },
]

const Work = () => {
  return (
    <section id="work" className="py-24 px-6 relative z-10 bg-black border-t border-white/[0.05]">
      
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-black to-black pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col relative z-10">
        
        {/* Core Tech Quick-Glance */}
        <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-10 mt-10 mb-24 max-w-5xl mx-auto relative">
          <div className="absolute inset-0 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
          {technologies.map((tech, idx) => (
            <div 
              key={idx} 
              className="w-20 h-20 sm:w-24 sm:h-24 bg-white/[0.02] backdrop-blur-xl rounded-full border border-white/10 flex items-center justify-center transform hover:-translate-y-2 hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:border-blue-400/50 hover:bg-white/[0.05] cursor-pointer group"
            >
              <div className="group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300">
                {tech.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Projects Header */}
        <div className="w-full text-center md:text-left mb-20 flex flex-col items-center md:items-start">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-900/20 border border-blue-500/30 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)]">
            <span className="text-cyan-400 animate-pulse">❖</span>
            <span className="text-sm text-blue-100 font-semibold tracking-widest uppercase">My Work</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter drop-shadow-xl">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">Deployments.</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-3xl font-light text-center md:text-left">
            The following projects showcase my ability to solve complex problems, build dynamic user interfaces, and deliver production-ready software efficiently using modern high-tech stacks.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#050A14]/80 backdrop-blur-lg rounded-[2.5rem] border border-white/10 relative group overflow-hidden flex flex-col hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative z-10 w-full h-[300px] overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-20 pointer-events-none mix-blend-overlay" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content Container */}
              <div className="relative z-10 p-8 sm:p-10 flex-1 flex flex-col">
                <h3 className="text-white font-black text-3xl mb-4 tracking-tight group-hover:text-cyan-400 transition-colors duration-300 drop-shadow-md">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed flex-1 mb-8">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech?.map((tech, techIdx) => (
                    <span key={techIdx} className="px-4 py-1.5 bg-blue-900/30 border border-blue-500/20 text-cyan-100 text-xs sm:text-sm font-semibold tracking-wider rounded-full shadow-inner">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Button */}
                {project.link && project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-cyan-400 font-bold uppercase tracking-widest hover:text-white transition-colors duration-300 w-max group/btn"
                  >
                    <span>Deploy Link</span>
                    <span className="w-10 h-10 rounded-full border border-cyan-400/30 flex items-center justify-center group-hover/btn:bg-cyan-500 group-hover/btn:border-cyan-500 group-hover/btn:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work