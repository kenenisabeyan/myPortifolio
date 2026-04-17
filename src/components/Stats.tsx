import React from 'react'

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '200+', label: 'Satisfied Clients' },
  { value: '108+', label: 'Completed Projects' },
  { value: '90%', label: 'Client Retention Rate' },
]

const Stats = () => {
  return (
    <section className="py-20 px-6 relative z-10 border-t border-white/[0.05] bg-[#030610]">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {stats.map((stat, idx) => (
          <div key={idx} className="group relative bg-[#050A14]/80 backdrop-blur-xl hover:bg-[#080d1a]/90 p-10 rounded-[2rem] border border-white/[0.05] hover:border-cyan-500/40 transition-all duration-500 flex flex-col justify-center overflow-hidden hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:-translate-y-2 cursor-default">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4 group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-500 drop-shadow-md">{stat.value}</div>
            <div className="relative z-10 text-cyan-100/70 font-semibold tracking-widest text-sm uppercase">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats