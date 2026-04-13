import React from 'react'

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '200+', label: 'Satisfied Clients' },
  { value: '108+', label: 'Completed Projects' },
  { value: '90%', label: 'Client Retention Rate' },
]

const Stats = () => {
  return (
    <section className="py-20 px-6 relative z-10 border-t border-white/[0.05] bg-black/20 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="group relative bg-white/[0.02] hover:bg-white/[0.04] p-8 rounded-2xl border border-white/[0.05] hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-center overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-3 group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-300">{stat.value}</div>
            <div className="relative z-10 text-gray-400 font-medium tracking-wide text-sm uppercase">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats