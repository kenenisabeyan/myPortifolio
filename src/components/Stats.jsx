import React from 'react'

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '200+', label: 'Satisfied Clients' },
  { value: '108+', label: 'Completed Projects' },
  { value: '90%', label: 'Client Retention Rate' },
]

const Stats = () => {
  return (
    <section className="py-16 px-6 bg-black relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-[#0E0E0E] p-8 rounded-xl border border-[#1a1a1a] flex flex-col justify-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-gray-400 text-[15px]">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats