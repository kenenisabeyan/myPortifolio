import React from 'react'
import { FaReact, FaPython, FaServer, FaPaintBrush, FaTasks } from 'react-icons/fa'

const skillCategories = [
  { name: 'React Developer', icon: <FaReact size={80} />, color: '#61DAFB' },
  { name: 'Python Developer', icon: <FaPython size={80} />, color: '#F7D046' }, // Adjusting python color to match screenshot's blue/yellow
  { name: 'Backend Developer', icon: <FaServer size={80} />, color: '#6DB33F' },
  { name: 'Interactive Developer', icon: <FaPaintBrush size={80} />, color: '#A0A0A0' },
  { name: 'Project Manager', icon: <FaTasks size={80} />, color: '#E34F26' },
]

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Badge */}
        <div className="flex items-center gap-2 bg-[#1A1A1A] py-2 px-4 rounded-full mb-6 border border-[#2A2A2A]">
          <span>🤝</span>
          <span className="text-sm text-gray-300 font-medium">The Skills I Bring to the Table</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-20 tracking-tight">
          My Preferred Tech Stack
        </h2>

        {/* Pill Cards */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full">
          {skillCategories.map((skill, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center justify-between w-44 md:w-56 h-80 md:h-[400px] bg-[#0E0E0E] rounded-[100px] p-8 hover:bg-[#1A1A1A] transition-colors cursor-default"
            >
              <div 
                className="flex-1 flex items-center justify-center w-full"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <h3 className="text-white font-semibold text-lg text-center mt-auto pb-4">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills