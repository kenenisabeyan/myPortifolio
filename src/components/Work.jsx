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
    image: 'https://placehold.co/800x400/e0f7fa/000?text=Ryde+App',
    color: 'bg-[#1d1836]',
  },
  {
    title: 'YC Directory - A Startup Showcase App',
    description: 'Manage your account, pitch your startup, connect with entrepreneurs.',
    image: 'https://placehold.co/800x400/ffebee/000?text=YC+Directory',
    color: 'bg-[#1d1836]',
  },
]

const Work = () => {
  return (
    <section id="work" className="py-24 px-6 bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Tech "Balls" (Simulated with floating white circles representing the icosahedron 3D balls from screenshot 3) */}
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-10 mb-32 max-w-4xl mx-auto">
          {technologies.map((tech, idx) => (
            <div 
              key={idx} 
              className="w-28 h-28 bg-[#f3f3f3] rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] flex items-center justify-center transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              style={{
                 // giving it a slight 3D sphere gradient feel
                 background: 'radial-gradient(circle at 30% 30%, #ffffff, #d3d3d3)'
              }}
            >
              {tech.icon}
            </div>
          ))}
        </div>

        {/* Projects Header */}
        <div className="w-full text-left mb-16">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-medium">My Work</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Projects.
          </h2>
          <p className="text-gray-300 text-[17px] leading-[30px] max-w-3xl">
            Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className={`${project.color} p-5 rounded-2xl w-full border border-[#2d2252]`}>
              <div className="relative w-full h-[230px]">
                 <img 
                   src={project.image} 
                   alt="Project Mockup" 
                   className="w-full h-full object-cover rounded-2xl" 
                 />
              </div>
              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px] mb-2">{project.title}</h3>
                <p className="mt-2 text-gray-400 text-[14px] leading-[1.6]">
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