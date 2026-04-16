import React from 'react'
import { FaReact, FaPython, FaNodeJs, FaProjectDiagram, FaGitAlt } from 'react-icons/fa'

const services = [
  { title: "Frontend Architecture", icon: <FaReact size={64} className="text-[#61DAFB] drop-shadow-[0_0_15px_rgba(97,218,251,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(97,218,251,1)] transition-all duration-300" /> },
  { title: "Backend Systems", icon: <FaNodeJs size={64} className="text-[#68A063] drop-shadow-[0_0_15px_rgba(104,160,99,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(104,160,99,1)] transition-all duration-300" /> },
  { title: "Data Engines", icon: <FaPython size={64} className="text-[#FFD43B] drop-shadow-[0_0_15px_rgba(255,212,59,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(255,212,59,1)] transition-all duration-300" /> },
  { title: "Interactive WebGL", icon: <FaProjectDiagram size={64} className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(34,211,238,1)] transition-all duration-300" /> },
  { title: "Version Matrix", icon: <FaGitAlt size={64} className="text-[#F05032] drop-shadow-[0_0_15px_rgba(240,80,50,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(240,80,50,1)] transition-all duration-300" /> },
]

const Skills = () => {
  return (
    <section id="about" className="py-32 px-6 relative z-10 border-t border-white/[0.05] bg-[#030610]">
      
      {/* Deep space ambient glow map */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mt-12 mb-20">
          <div className="flex items-center justify-center gap-3 bg-blue-900/20 border border-blue-500/30 py-2.5 px-6 rounded-full mb-6 w-max shadow-[0_0_20px_rgba(59,130,246,0.15)] backdrop-blur-md">
            <span className="text-cyan-400 animate-pulse">❖</span>
            <span className="text-sm text-cyan-50 font-semibold tracking-widest uppercase">System Capabilities</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter drop-shadow-xl">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">Service Modules.</span>
          </h2>
        </div>

        {/* Floating Skill Capsules */}
        <div className="flex flex-wrap items-center justify-center gap-8 w-full max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative bg-[#050A14]/80 backdrop-blur-xl hover:bg-[#080d1a]/90 rounded-full py-16 px-6 border border-white/[0.05] hover:border-cyan-500/40 transition-all duration-500 flex flex-col items-center justify-center w-[220px] h-[380px] hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] cursor-default overflow-hidden transform hover:-translate-y-2"
            >
              {/* Containment ambient glow ring */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-b-full"></div>
              
              {/* Primary Icon Engine */}
              <div className="w-24 h-24 mb-10 flex items-center justify-center transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 relative z-10">
                {service.icon}
              </div>

              {/* Data readouts */}
              <h3 className="text-white text-[22px] font-black text-center tracking-tight leading-tight group-hover:text-cyan-300 transition-colors duration-300 relative z-10 w-[90%]">
                {service.title.split(' ').map((word, i) => <React.Fragment key={i}>{word}<br/></React.Fragment>)}
              </h3>

              {/* Decorative base lock */}
              <div className="absolute bottom-6 w-8 h-1 rounded-full bg-white/10 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,1)] transition-colors duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills