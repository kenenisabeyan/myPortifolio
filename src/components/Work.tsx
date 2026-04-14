import React from 'react'
import { SiReact, SiPython, SiNodedotjs, SiTailwindcss, SiMongodb, SiTypescript, SiJavascript, SiHtml5, SiCss, SiDocker } from 'react-icons/si'

const technologies = [
  { icon: <SiHtml5 size={45} className="text-[#E34F26]" /> },
  { icon: <SiCss size={45} className="text-[#1572B6]" /> },
  { icon: <SiJavascript size={45} className="text-[#F7DF1E]" /> },
  { icon: <SiTypescript size={45} className="text-[#3178C6]" /> },
  { icon: <SiReact size={45} className="text-[#61DAFB]" /> },
  { icon: <SiNodedotjs size={45} className="text-[#339933]" /> },
  { icon: <SiTailwindcss size={45} className="text-[#38B2AC]" /> },
  { icon: <SiMongodb size={45} className="text-[#47A248]" /> },
  { icon: <SiDocker size={45} className="text-[#2496ED]" /> },
  { icon: <SiPython size={45} className="text-[#3776AB]" /> },
]

const projects = [
  {
    title: 'On-Demand Rides Made Simple',
    description: 'An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.',
    image: 'https://placehold.co/800x400/1e293b/334155?text=Ryde+App',
    color: 'from-[#1e1b4b] to-[#312e81]',
  },
  {
    title: 'YC Directory - A Startup Showcase App',
    description: 'Manage your account, pitch your startup, connect with entrepreneurs.',
    image: 'https://placehold.co/800x400/1e293b/334155?text=YC+Directory',
    color: 'from-[#172554] to-[#1e3a8a]',
  },
]

const Work = () => {
  return (
    <section id="work" className="py-24 px-6 relative z-10 border-t border-white/[0.05] bg-black/20 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto flex flex-col relative z-10">
        
        {/* Tech "Balls" */}
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-10 mb-32 max-w-4xl mx-auto relative">
          <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
          {technologies.map((tech, idx) => (
            <div 
              key={idx} 
              className="w-24 h-24 bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/[0.05] hover:border-cyan-500/50 flex items-center justify-center transform hover:-translate-y-2 hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.05)] hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              {tech.icon}
            </div>
          ))}
        </div>

        {/* Projects Header */}
        <div className="w-full text-left mb-16">
          <div className="flex items-center gap-2 bg-white/[0.02] border border-white/[0.05] py-2 px-4 rounded-full mb-6 w-max">
            <span className="text-cyan-400">❖</span>
            <span className="text-sm text-gray-300 font-medium tracking-wide">My Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects.</span>
          </h2>
          <p className="text-gray-400 text-[17px] leading-relaxed max-w-3xl font-light">
            The following projects showcase my skills and experience through real-world examples of my work. Each project is accompanied by brief descriptions and visual insights. It reflects my ability to solve complex problems, build dynamic user interfaces, and deliver production-ready software efficiently.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${project.color} rounded-3xl border border-white/[0.05] relative group overflow-hidden flex flex-col`}>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
              
              {/* Edge-to-Edge Image Header */}
              <div className="relative z-10 w-full h-[280px] overflow-hidden shadow-2xl border-b border-white/10 group-hover:-translate-y-2 transition-transform duration-500">
                 <img 
                   src={project.image} 
                   alt="Project Mockup" 
                   className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                 />
              </div>
              
              {/* Text Content Area with Padding */}
              <div className="relative z-10 p-8 flex-1 flex flex-col">
                <h3 className="text-white font-bold text-2xl mb-2 tracking-wide group-hover:text-cyan-300 transition-colors duration-300">{project.title}</h3>
                <p className="mt-2 text-gray-400 text-[15px] font-light leading-relaxed flex-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work