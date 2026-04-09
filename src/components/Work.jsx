import React from 'react'

const projects = [
  {
    title: 'On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde',
    description: 'An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.',
    image: 'https://placehold.co/800x400/e0f7fa/000?text=Ryde+App',
    color: 'bg-[#e0f7fa]'
  },
  {
    title: 'YC Directory - A Startup Showcase App',
    description: 'Manage your account, pitch your startup, connect with entrepreneurs.',
    image: 'https://placehold.co/800x400/ffebee/000?text=YC+Directory',
    color: 'bg-[#ffebee]'
  },
]

const logos = ['▲ Vercel', 'Linear', 'loom', 'shopify', 'Microsoft', 'adidas', 'docker', 'HOSTINGER', 'Adobe']

const Work = () => {
  return (
    <section id="work" className="py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Projects Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          {projects.map((project, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <div className={`${project.color} rounded-2xl overflow-hidden aspect-video flex items-center justify-center p-4`}>
                 <img src={project.image} alt="Project Mockup" className="w-full h-full object-cover rounded-xl shadow-lg border border-black/10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 leading-tight">{project.title}</h3>
                <p className="text-gray-400 text-[15px]">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Logos List */}
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 mb-32 opacity-50">
          {logos.map((logo, idx) => (
            <div key={idx} className="text-gray-300 text-xl md:text-2xl font-semibold tracking-wide flex items-center hover:opacity-100 transition-opacity">
               {logo}
            </div>
          ))}
        </div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-[#0E0E0E] p-8 rounded-2xl border border-[#1a1a1a] flex flex-col hover:bg-[#151515] transition-colors cursor-default">
            <div className="text-[#F7D046] text-2xl mb-6">🏢</div>
            <h3 className="text-xl font-bold mb-3">Quality Focus</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering high-quality results while maintaining attention to every detail.
            </p>
          </div>

          <div className="bg-[#0E0E0E] p-8 rounded-2xl border border-[#1a1a1a] flex flex-col hover:bg-[#151515] transition-colors cursor-default">
            <div className="text-[#3b82f6] text-2xl mb-6">💬</div>
            <h3 className="text-xl font-bold mb-3">Reliable Communication</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Keeping you updated at every step to ensure transparency and clarity.
            </p>
          </div>

          <div className="bg-[#0E0E0E] p-8 rounded-2xl border border-[#1a1a1a] flex flex-col hover:bg-[#151515] transition-colors cursor-default">
            <div className="text-[#f43f5e] text-2xl mb-6">⏱️</div>
            <h3 className="text-xl font-bold mb-3">On-Time Delivery</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Making sure projects are completed on schedule, with quality & attention to detail.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Work