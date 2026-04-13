import React from 'react'
import FluidBackground from './FluidBackground'
import { 
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiNodedotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiMysql, 
  SiDocker, SiPython, SiDjango, SiCplusplus,
  SiThreedotjs, SiFigma, SiVercel, SiNetlify, SiGit, SiGithub
} from 'react-icons/si'
import { FaJava, FaSitemap } from 'react-icons/fa'

const rowOne = [
  { name: 'HTML5', icon: <SiHtml5 className="text-[#E34F26]" size={42} /> },
  { name: 'CSS3', icon: <SiCss className="text-[#1572B6]" size={42} /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" size={42} /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" size={42} /> },
  { name: 'React', icon: <SiReact className="text-[#61DAFB]" size={42} /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" size={42} /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" size={42} /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" size={42} /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" size={42} /> },
]

const rowTwo = [
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" size={42} /> },
  { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" size={42} /> },
  { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" size={42} /> },
  { name: 'Python', icon: <SiPython className="text-[#3776AB]" size={42} /> },
  { name: 'Django', icon: <SiDjango className="text-[#092E20]" size={42} /> },
  { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" size={42} /> },
  { name: 'Java', icon: <FaJava className="text-[#5382a1]" size={42} /> },
  { name: 'Data Structures', icon: <FaSitemap className="text-purple-400" size={42} /> },
]

const rowThree = [
  { name: 'Three.js', icon: <SiThreedotjs className="text-white" size={42} /> },
  { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" size={42} /> },
  { name: 'Vercel', icon: <SiVercel className="text-white" size={42} /> },
  { name: 'Netlify', icon: <SiNetlify className="text-[#00C7B7]" size={42} /> },
  { name: 'Git', icon: <SiGit className="text-[#F05032]" size={42} /> },
  { name: 'GitHub', icon: <SiGithub className="text-white" size={42} /> },
]

const TechCard = ({ tech }) => (
  <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center bg-[#0a0f18]/60 backdrop-blur-md border border-blue-500/10 rounded-2xl md:rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-[#111a28]/80 hover:border-blue-400/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 group cursor-pointer relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="flex flex-col items-center justify-center gap-2 transform group-hover:scale-110 transition-transform duration-300 relative z-10">
      {tech.icon}
    </div>
  </div>
)

const TechStack = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/[0.05]">
      {/* 3D Fluid Animation Background */}
      <FluidBackground />
      
      {/* Edge Fades for infinite marquee illusion */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
      
      {/* Ambient static glows for extra depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-[100vw] mx-auto flex flex-col gap-8 relative z-10">
        
        {/* Row 1: Flowing Left */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee-left whitespace-nowrap gap-8 hover:animation-play-state-paused">
            {[...rowOne, ...rowOne, ...rowOne, ...rowOne, ...rowOne].map((tech, idx) => (
              <TechCard key={idx} tech={tech} />
            ))}
          </div>
        </div>

        {/* Row 2: Flowing Right */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee-right whitespace-nowrap gap-8 hover:animation-play-state-paused -ml-[200px]">
            {[...rowTwo, ...rowTwo, ...rowTwo, ...rowTwo, ...rowTwo].map((tech, idx) => (
              <TechCard key={idx} tech={tech} />
            ))}
          </div>
        </div>

        {/* Row 3: Flowing Left */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee-left whitespace-nowrap gap-8 hover:animation-play-state-paused -ml-[100px]">
            {[...rowThree, ...rowThree, ...rowThree, ...rowThree, ...rowThree].map((tech, idx) => (
              <TechCard key={idx} tech={tech} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default TechStack
