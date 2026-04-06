import React from 'react'
import { FaReact, FaPython, FaServer, FaPaintBrush, FaTasks, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiExpress, SiPostgresql } from 'react-icons/si'

const skillCategories = [
  { name: 'React Developer', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Python Developer', icon: <FaPython />, color: '#3776AB' },
  { name: 'Backend Developer', icon: <FaServer />, color: '#6DB33F' },
  { name: 'Interactive Developer', icon: <FaPaintBrush />, color: '#FF6B6B' },
  { name: 'Project Manager', icon: <FaTasks />, color: '#FFD93D' },
]

// Flowing tech stack items (icons + names)
const flowingTech = [
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
  { name: 'SQL', icon: <FaDatabase />, color: '#4479A1' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-dark/80">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What I Bring to the Table</h2>
        <p className="text-center text-gray-300 mb-12 text-lg">How I Can Contribute & My Key Skills</p>

        {/* Skill categories with icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {skillCategories.map((skill, idx) => (
            <div key={idx} className="bg-gray-900/50 p-6 rounded-xl text-center hover:scale-105 transition">
              <div className="text-4xl mb-3" style={{ color: skill.color }}>{skill.icon}</div>
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>

        {/* Flowing tech stack marquee - like water */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold mb-6">Technologies I Work With</h3>
          
          {/* Marquee container - smooth infinite scroll */}
          <div className="relative overflow-hidden w-full py-6">
            <div className="marquee flex gap-12 whitespace-nowrap animate-flow">
              {/* Double the items for seamless loop */}
              {[...flowingTech, ...flowingTech].map((tech, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2 p-4 bg-gray-900/50 rounded-xl min-w-[100px] backdrop-blur-sm hover:scale-105 transition"
                >
                  <div className="text-3xl" style={{ color: tech.color }}>{tech.icon}</div>
                  <span className="text-sm font-medium text-gray-200">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-gray-900/50 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Quality Focus</h3>
            <p className="text-gray-400">Delivering high-quality results while maintaining attention to every detail.</p>
          </div>
          <div className="text-center p-6 bg-gray-900/50 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Reliable Communication</h3>
            <p className="text-gray-400">Keeping you updated at every step to ensure transparency and clarity.</p>
          </div>
          <div className="text-center p-6 bg-gray-900/50 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">On-Time Delivery</h3>
            <p className="text-gray-400">Making sure projects are completed on schedule, with quality & attention to detail.</p>
          </div>
        </div>
      </div>

      {/* Add custom CSS for smooth flowing animation */}
      <style jsx>{`
        @keyframes flow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-flow {
          animation: flow 20s linear infinite;
          display: flex;
          width: fit-content;
        }
        .marquee {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  )
}

export default Skills