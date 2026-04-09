import React from 'react'

const projects = [
  {
    title: 'Origin',
    subtitle: 'DAN BROWN ORIGIN',
    description: 'Your ride, your way. Let\'s get started!',
    tags: ['React Native', 'Expo', 'TailwindCSS'],
    image: 'https://placehold.co/600x400/1e1e2f/ffffff?text=Origin+App',
  },
  {
    title: 'Ryde App',
    subtitle: 'On-Demand Rides Made Simple',
    description: 'A powerful, user-friendly app called Ryde.',
    tags: ['React Native', 'Expo', 'TailwindCSS'],
    image: 'https://placehold.co/600x400/1e1e2f/ffffff?text=Ryde+App',
  },
  {
    title: 'The Library Management Platform',
    subtitle: 'YC Directory - A Startup Showcase App',
    description: 'Manage your account, pitch your startup, connect with entrepreneurs.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'https://placehold.co/600x400/1e1e2f/ffffff?text=Library+Platform',
  },
  {
    title: 'YC Directory',
    subtitle: 'Startup Showcase',
    description: 'Discover and showcase innovative startups.',
    tags: ['Next.js', 'TailwindCSS', 'Appwrite'],
    image: 'https://placehold.co/600x400/1e1e2f/ffffff?text=YC+Directory',
  },
]

const logos = ['Adobe', 'appwrite', 'nVIDIA', 'Vercel', 'Linear', 'loom', 'shopify']

const Work = () => {
  return (
    <section id="work" className="py-20 px-6 bg-dark/80">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Let's get started</h2>
        <p className="text-center text-gray-300 mb-12 text-lg">Explore my featured projects</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-gray-900/50 rounded-xl overflow-hidden hover:scale-[1.02] transition duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-blue-400 text-sm mb-3">{project.subtitle}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold mb-6">Technologies & Partners</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {logos.map((logo, idx) => (
              <div key={idx} className="text-gray-400 text-lg font-medium bg-gray-900/50 px-4 py-2 rounded-lg">{logo}</div>
            ))}
          </div>
        </div>

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

export default Work