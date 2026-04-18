import React from 'react'
import { SiReact, SiPython, SiNodedotjs, SiTailwindcss, SiMongodb, SiTypescript, SiJavascript, SiHtml5, SiCss, SiDocker, SiNextdotjs, SiExpress, SiDjango, SiMysql, SiPostgresql, SiCplusplus, SiGit, SiGithub, SiFastapi, SiTensorflow, SiPytorch, SiKeras, SiScikitlearn, SiSelenium } from 'react-icons/si'
import { FaJava, FaServer, FaDatabase, FaTools, FaLayerGroup, FaAws, FaBrain, FaRobot, FaSyncAlt, FaMicrochip, FaNetworkWired } from 'react-icons/fa'
import { projects } from '../data/data'

const categorizedTech = {
  Frontend: [
    { name: "Next.js", icon: <SiNextdotjs size={20} /> },
    { name: "React.js", icon: <SiReact size={20} /> },
    { name: "JavaScript", icon: <SiJavascript size={20} /> },
    { name: "TypeScript", icon: <SiTypescript size={20} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={20} /> },
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs size={20} /> },
    { name: "Express", icon: <SiExpress size={20} /> },
    { name: "Django", icon: <SiDjango size={20} /> },
    { name: "Python", icon: <SiPython size={20} /> },
  ],
  Databases: [
    { name: "PostgreSQL", icon: <SiPostgresql size={20} /> },
    { name: "MongoDB", icon: <SiMongodb size={20} /> },
    { name: "AWS", icon: <FaAws size={20} /> },
  ],
  DevTools: [
    { name: "Docker", icon: <SiDocker size={20} /> },
    { name: "CI/CD Pipelines", icon: <FaSyncAlt size={20} /> },
    { name: "Automation", icon: <FaRobot size={20} /> },
    { name: "Web-Scraping", icon: <SiSelenium size={20} /> },
  ],
}

const categoriesInfo = [
  { name: "Frontend Development", id: "Frontend", icon: <FaLayerGroup size={22} />, cornerColor: "bg-blue-500/20" },
  { name: "Backend Development", id: "Backend", icon: <FaServer size={22} />, cornerColor: "bg-purple-500/20" },
  { name: "Database & Cloud", id: "Databases", icon: <FaDatabase size={22} />, cornerColor: "bg-teal-500/20" },
  { name: "DevOps & Automation", id: "DevTools", icon: <FaTools size={22} />, cornerColor: "bg-orange-500/20" },
]

const highlightsTech = [
  { name: "Next.js", icon: <SiNextdotjs size={28} /> },
  { name: "React.js", icon: <SiReact size={28} /> },
  { name: "JavaScript", icon: <SiJavascript size={28} /> },
  { name: "TypeScript", icon: <SiTypescript size={28} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={28} /> },
  { name: "Node.js", icon: <SiNodedotjs size={28} /> },
  { name: "Express", icon: <SiExpress size={28} /> },
  { name: "Python", icon: <SiPython size={28} /> },
  { name: "Django", icon: <SiDjango size={28} /> },
  { name: "Java", icon: <FaJava size={28} /> },
  { name: "C++", icon: <SiCplusplus size={28} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={28} /> },
  { name: "MongoDB", icon: <SiMongodb size={28} /> },
  { name: "AWS", icon: <FaAws size={28} /> },
  { name: "Docker", icon: <SiDocker size={28} /> },
  { name: "Web-Scraping", icon: <SiSelenium size={28} /> },
  { name: "Data Structures", icon: <FaNetworkWired size={28} /> },
]

const Work = () => {
  return (
    <section id="work" className="py-16 md:py-24 px-6 relative z-10 bg-white">
      
      <div className="max-w-4xl mx-auto flex flex-col relative z-10">
        
        {/* Core Tech Header */}
        <div className="w-full text-center flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gray-200 mb-4 bg-gray-50 text-gray-500 text-xs font-bold uppercase tracking-widest shadow-sm">
            MY EXPERTISE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block">
            Technical Skills
          </h2>
        </div>

        {/* Core Tech Categorized Sections - Vertical Cards Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-24 w-full items-start">
          
          {categoriesInfo.map((cat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col bg-gray-50 rounded-2xl border border-gray-100 p-8 shadow-sm relative hover:shadow-md transition-all duration-300 h-auto"
            >
              
              {/* Title & Icon Header */}
              <div className="relative z-10 flex flex-col items-start mb-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-gray-200 mb-4 text-gray-600 transition-colors duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                   {cat.name}
                </h3>
              </div>

              {/* List */}
              <div className="relative z-10 flex flex-col gap-4">
                {categorizedTech[cat.id]?.map((item, i) => (
                   <div key={i} className="flex items-center gap-4 group/item cursor-default">
                     <div className="text-gray-400 transition-colors duration-300">
                        {item.icon}
                     </div>
                     <span className="text-sm md:text-base font-medium text-gray-700 transition-colors duration-300">
                        {item.name}
                     </span>
                   </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Tech stack Highlights Header */}
        <div className="w-full text-center flex flex-col items-center mb-10">
          <h3 className="text-2xl font-bold text-white tracking-wide">
            Tech stack Highlights
          </h3>
        </div>
        
        {/* Highlights Row (Marquee) */}
        <div className="w-full overflow-hidden relative py-4 mb-24 max-w-7xl mx-auto">
           {/* Edge fade gradients for smooth entry and exit */}
           <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#030610] to-transparent z-20 pointer-events-none" />
           <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#030610] to-transparent z-20 pointer-events-none" />
           
           <div className="animate-marquee-left hover:animation-play-state-paused w-max flex items-center gap-6">
              {[...highlightsTech, ...highlightsTech, ...highlightsTech].map((item, idx) => (
               <div 
                 key={idx} 
                 className="flex flex-col items-center justify-center py-4 px-2 w-[120px] bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-lg group/item cursor-default flex-shrink-0"
               >
                 <div className="text-white/60 group-hover/item:text-cyan-400 transition-colors duration-300 mb-3">
                   {item.icon}
                 </div>
                 <span className="text-[12px] text-gray-400 font-semibold tracking-wider group-hover/item:text-white text-center">
                   {item.name}
                 </span>
               </div>
            ))}
           </div>
        </div>

        {/* Projects Header */}
        <div className="w-full text-center md:text-left mb-16 flex flex-col items-center md:items-start">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gray-100 border border-gray-200 mb-6 shadow-sm">
            <span className="text-gray-500 animate-pulse">❖</span>
            <span className="text-sm text-gray-500 font-semibold tracking-widest uppercase">My Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Featured Deployments.
          </h2>
          <p className="text-base md:text-lg font-normal leading-relaxed text-gray-600 max-w-2xl text-center md:text-left">
            The following projects showcase my ability to solve complex problems, build dynamic user interfaces, and deliver production-ready software efficiently using modern high-tech stacks.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative z-10 w-full h-[300px] overflow-hidden border-b border-gray-100 bg-gray-50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content Container */}
              <div className="relative z-10 p-8 sm:p-10 flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base font-normal text-gray-600 leading-relaxed flex-1 mb-6">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech?.map((tech, techIdx) => (
                    <span key={techIdx} className="px-4 py-1.5 bg-gray-50 border border-gray-200 text-sm font-medium text-gray-500 rounded-full">
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