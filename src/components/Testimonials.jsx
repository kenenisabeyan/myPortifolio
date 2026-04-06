import React from 'react'

const testimonials = [
  {
    text: "I can't say enough good things about Kenenisa. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    name: 'Ermias Alemayehu',
    handle: '@ermiasalemayehu',
  },
  {
    text: 'Collaborating with Kenenisa was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Kenenisa\'s enthusiasm for every facet of development truly stands out.',
    name: 'Yohannes Mandafro',
    handle: '@yohannesmandafro',
  },
  {
    text: 'Working with Kenenisa was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched.',
    name: 'Firomsa Guteta',
    handle: '@firomsaguteta',
  },
  {
    text: 'Kenenisa was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that\'s both modern and easy to navigate. Fantastic work overall.',
    name: 'Yohannes Belete',
    handle: '@yohannesbelete',
  },
  {
    text: "Kenenisa's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional!",
    name: 'Medhin Banti',
    handle: '@medhinbanti',
  },
  {
    text: 'Kenenisa was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations.',
    name: 'Kidus Tilahun',
    handle: '@kidustilahun',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Customer Feedback Highlights</h2>
        <p className="text-center text-gray-300 mb-12 text-lg">What People Say About Me?</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-900/50 p-6 rounded-xl hover:bg-gray-900/70 transition">
              <div className="flex text-yellow-400 mb-3">★★★★★</div>
              <p className="text-gray-300 mb-4">"{t.text}"</p>
              <div className="flex items-center gap-2">
                <span className="font-semibold">{t.name}</span>
                <span className="text-gray-500 text-sm">{t.handle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials