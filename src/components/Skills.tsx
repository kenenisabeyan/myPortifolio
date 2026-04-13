import React from 'react'
import { FaLaptopCode, FaMobileAlt, FaServer, FaVideo } from 'react-icons/fa'

const services = [
  { title: "Web Developer", icon: <FaLaptopCode size={40} className="text-[#a074fe]" /> },
  { title: "React Native Developer", icon: <FaMobileAlt size={40} className="text-[#65def1]" /> },
  { title: "Backend Developer", icon: <FaServer size={40} className="text-[#ff98ca]" /> },
  { title: "Content Creator", icon: <FaVideo size={40} className="text-[#848efe]" /> },
]

const Skills = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-medium">Introduction</p>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
          Overview.
        </h2>

        <p className="text-gray-300 text-[17px] leading-[30px] max-w-3xl mb-16">
          I'm a skilled software developer with experience in TypeScript and JavaScript, and
          expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and
          collaborate closely with clients to create efficient, scalable, and user-friendly solutions
          that solve real-world problems. Let's work together to bring your ideas to life!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-[#151030] rounded-2xl p-[1px] border border-[#2d2252] shadow-card hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
            >
              <div 
                className="bg-[#151030] rounded-2xl py-12 px-12 min-h-[280px] flex flex-col justify-evenly items-center shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]"
              >
                {service.icon}
                <h3 className="text-white text-[20px] font-bold text-center mt-6">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills