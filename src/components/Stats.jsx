import React from 'react'

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '200+', label: 'Satisfied Clients' },
  { value: '108+', label: 'Completed Projects' },
  { value: '90%', label: 'Client Retention Rate' },
]

const Stats = () => {
  return (
    <section className="py-16 px-6 bg-dark/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-blue-400">{stat.value}</div>
            <div className="text-gray-300 mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats