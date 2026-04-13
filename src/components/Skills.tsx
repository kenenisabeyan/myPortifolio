import React from 'react'
import { FaReact, FaPython, FaNodeJs, FaProjectDiagram, FaGitAlt } from 'react-icons/fa'

const services = [
  { title: "React Developer", icon: <FaReact size={80} className="text-[#61DAFB] drop-shadow-lg" /> },
  { title: "Python Developer", icon: <FaPython size={80} className="text-[#FFD43B] drop-shadow-lg" /> },
  { title: "Backend Developer", icon: <FaNodeJs size={80} className="text-[#68A063] drop-shadow-lg" /> },
  { title: "Interactive Developer", icon: <FaProjectDiagram size={80} className="text-gray-300 drop-shadow-lg" /> },
  { title: "Project Manager", icon: <FaGitAlt size={80} className="text-[#F05032] drop-shadow-lg" /> },
]

const Skills = () => {
  return (
    <section id="about" className="py-24 px-6 relative z-10 border-t border-white/[0.05] bg-black/20 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto flex flex-col relative z-10">
        
        <div className="flex flex-col items-center text-center mt-12">
          <div className="flex items-center justify-center gap-2 bg-[#1C1F26] border border-white/[0.05] py-2 px-5 rounded-full mb-6 w-max shadow-lg">
            <span className="text-yellow-500">🤝</span>
            <span className="text-sm text-gray-300 font-medium tracking-wide">What I Bring to the Table</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-16 tracking-tight">
            How I Can Contribute & My Key Skills
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 w-full max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative bg-[#0B0E14] hover:bg-[#1E2330] rounded-full py-16 px-6 border border-white/[0.05] transition-colors duration-500 flex flex-col items-center justify-center w-[200px] h-[360px] shadow-2xl cursor-pointer"
            >
              <div className="w-24 h-24 mb-10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-white text-xl font-bold text-center tracking-wide leading-snug">
                {service.title.split(' ').map((word, i) => <React.Fragment key={i}>{word}<br/></React.Fragment>)}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills