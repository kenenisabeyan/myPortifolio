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
    <section id="skills" className="py-16 md:py-24 px-6 relative z-10 bg-white">
      
      <div className="max-w-4xl mx-auto flex flex-col relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mt-12 mb-16">
          <div className="flex items-center justify-center gap-3 bg-gray-50 border border-gray-200 py-2.5 px-6 rounded-full mb-6 w-max shadow-sm">
            <span className="text-gray-500 animate-pulse">❖</span>
            <span className="text-sm text-gray-500 font-semibold tracking-widest uppercase">System Capabilities</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            My Service Modules.
          </h2>
        </div>

        {/* Floating Skill Capsules */}
        <div className="flex flex-wrap items-center justify-center gap-8 w-full max-w-4xl mx-auto">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative bg-gray-50 hover:bg-white rounded-full py-16 px-6 border border-gray-200 transition-all duration-300 flex flex-col items-center justify-center w-[220px] h-[380px] hover:shadow-md cursor-default overflow-hidden transform hover:-translate-y-2"
            >
              
              {/* Primary Icon Engine */}
              <div className="w-24 h-24 mb-10 flex items-center justify-center transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 relative z-10 text-gray-400 group-hover:opacity-100 opacity-80">
                {service.icon}
              </div>

              {/* Data readouts */}
              <h3 className="text-gray-900 text-lg font-semibold text-center tracking-tight leading-tight transition-colors duration-300 relative z-10 w-[90%]">
                {service.title.split(' ').map((word, i) => <React.Fragment key={i}>{word}<br/></React.Fragment>)}
              </h3>

              {/* Decorative base lock */}
              <div className="absolute bottom-6 w-8 h-1 rounded-full bg-gray-300 group-hover:bg-gray-500 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills