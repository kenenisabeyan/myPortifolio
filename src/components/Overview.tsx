import React from 'react'
import { HiOutlineLightBulb, HiOutlineUsers, HiOutlineSparkles } from 'react-icons/hi'

const stats = [
  {
    title: 'What I Do',
    description: 'Craft modern, responsive web applications with intuitive interfaces and polished animations. I prioritize performance, accessibility, and maintainable code.',
    icon: <HiOutlineLightBulb size={34} className="text-cyan-400" />,
  },
  {
    title: 'Who I Work With',
    description: 'I collaborate with startups, agencies, and ambitious founders who need elegant digital products that scale and convert.',
    icon: <HiOutlineUsers size={34} className="text-violet-400" />,
  },
  {
    title: 'My Impact',
    description: 'I help brands improve user engagement, boost conversions, and ship fast without sacrificing design quality.',
    icon: <HiOutlineSparkles size={34} className="text-yellow-400" />,
  },
]

const Overview = () => {
  return (
    <section id="overview" className="py-24 px-6 relative z-10 border-t border-white/[0.05] bg-black/20 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/70 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#111827]/80 border border-white/[0.06] py-2 px-4 rounded-full mb-6">
            <span className="text-cyan-300">✨</span>
            <span className="text-sm text-gray-300 font-medium tracking-wide">Overview</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
            A clear look at my work, skills, and impact.
          </h2>
          <p className="mx-auto max-w-3xl text-gray-400 text-base md:text-lg leading-relaxed">
            I build strategic digital experiences powered by modern web tools and clean design. From product launches to polished portfolios, I create solutions that feel fast, look professional, and deliver results.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <div key={item.title} className="bg-white/5 border border-white/[0.05] rounded-3xl p-8 shadow-[0_20px_60px_rgba(15,23,42,0.2)] hover:border-cyan-400/30 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan-500/10 mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Overview
