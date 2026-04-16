import React from 'react'
import { HiOutlineLightBulb, HiOutlineUsers, HiOutlineSparkles } from 'react-icons/hi'

const stats = [
  {
    title: 'Architectural Design',
    description: 'Crafting modern, scalable web applications with intuitive sci-fi interfaces and polished high-frame-rate animations. I prioritize performance, accessibility, and robust code.',
    icon: <HiOutlineLightBulb size={38} className="text-cyan-400 group-hover:rotate-12 transition-transform duration-500" />,
    glowColor: 'cyan'
  },
  {
    title: 'Collaborative Synergy',
    description: 'I interface directly with ambitious founders and fast-moving agencies who require elegant, high-converting digital products that scale seamlessly across platforms.',
    icon: <HiOutlineUsers size={38} className="text-blue-400 group-hover:-rotate-12 transition-transform duration-500" />,
    glowColor: 'blue'
  },
  {
    title: 'Measurable Velocity',
    description: 'Empowering brands to spike user engagement and increase telemetry conversions. I ship fast without ever sacrificing pixel-perfect visual quality.',
    icon: <HiOutlineSparkles size={38} className="text-indigo-400 group-hover:scale-110 transition-transform duration-500" />,
    glowColor: 'indigo'
  },
]

const Overview = () => {
  return (
    <section id="overview" className="py-32 px-6 relative z-10 border-t border-white/[0.05] bg-[#030610]">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-900/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header container */}
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <div className="flex items-center gap-3 bg-blue-900/20 border border-blue-500/30 py-2.5 px-6 rounded-full mb-8 shadow-[0_0_20px_rgba(59,130,246,0.15)] backdrop-blur-md">
            <span className="text-cyan-400 animate-pulse">❖</span>
            <span className="text-sm text-cyan-50 font-semibold tracking-widest uppercase">Overview Protocol</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter drop-shadow-xl mb-6">
            Analyzing my <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">Core Engine.</span>
          </h2>
          <p className="mx-auto max-w-3xl text-gray-400 text-lg md:text-xl font-light leading-relaxed tracking-wide">
            I engineer strategic digital experiences powered by bleeding-edge web tools and deep space design logic. From product launches to massive platform overhauls, I ship systems that feel lightning-fast.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((item) => (
            <div 
              key={item.title} 
              className="group relative bg-[#050A14]/80 backdrop-blur-xl border border-white/[0.05] rounded-[2rem] p-10 overflow-hidden hover:border-cyan-500/40 hover:-translate-y-2 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] cursor-default"
            >
              
              {/* Internal neon hover glow */}
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-${item.glowColor}-500/20 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-700 pointer-events-none`}></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Container */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#030610] mb-8 border border-white/5 shadow-inner group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-shadow duration-500`}>
                  {item.icon}
                </div>
                
                {/* Typography */}
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-cyan-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light flex-grow">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default Overview
