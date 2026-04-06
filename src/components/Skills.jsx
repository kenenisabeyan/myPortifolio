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

const techIcons = [
  { icon: <FaReact />, name: 'React', color: '#61DAFB' },
  { icon: <SiTailwindcss />, name: 'Tailwind', color: '#06B6D4' },
  { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
  { icon: <SiExpress />, name: 'Express', color: '#ffffff' },
  { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
  { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#4169E1' },
  { icon: <FaDatabase />, name: 'SQL', color: '#4479A1' },
  { icon: <FaGitAlt />, name: 'Git', color: '#F05032' },
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

        {/* Tech stack icons */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold mb-6">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {techIcons.map((tech, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 p-3 bg-gray-900/50 rounded-lg w-24">
                <div className="text-3xl" style={{ color: tech.color }}>{tech.icon}</div>
                <span className="text-sm text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quality cards (same as in Work, but can be kept) */}
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
    </section>
  )
}

export default Skills