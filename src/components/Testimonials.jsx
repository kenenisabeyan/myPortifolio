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
    text: "Kenenisa's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional!",
    name: 'Medhin Banti',
    handle: '@medhinbanti',
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
    text: 'Kenenisa was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations.',
    name: 'Kidus Tilahun',
    handle: '@kidustilahun',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Badge */}
        <div className="flex items-center gap-2 bg-[#1A1A1A] py-2 px-4 rounded-full mb-6 border border-[#2A2A2A]">
          <span>⭐</span>
          <span className="text-sm text-gray-300 font-medium">Client Feedback Highlights</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 tracking-tight">
          What People Say About Me?
        </h2>

        {/* 3 Column Grid layout */}
        <div className="w-full flex flex-col md:flex-row gap-6 items-start">
          
          {/* Column 1 */}
          <div className="w-full md:w-1/3 flex flex-col gap-6">
             <TestimonialCard t={testimonials[0]} />
             <TestimonialCard t={testimonials[3]} />
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-1/3 flex flex-col gap-6">
             <TestimonialCard t={testimonials[1]} />
             <TestimonialCard t={testimonials[4]} />
          </div>

          {/* Column 3 */}
          <div className="w-full md:w-1/3 flex flex-col gap-6">
             <TestimonialCard t={testimonials[2]} />
             <TestimonialCard t={testimonials[5]} />
          </div>

        </div>

      </div>
    </section>
  )
}

function TestimonialCard({ t }) {
  return (
    <div className="bg-[#0E0E0E] p-8 rounded-2xl border border-[#1a1a1a] flex flex-col h-full">
      <div className="flex text-white mb-6 space-x-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-lg">★</span>
        ))}
      </div>
      <p className="text-gray-300 text-[15px] leading-relaxed mb-8 flex-1">
        {t.text}
      </p>
      
      <div className="flex items-center gap-4 mt-auto">
        {/* Avatar Placeholder */}
        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold text-lg overflow-hidden shrink-0">
          {t.name.charAt(0)}
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-white text-[15px] tracking-wide">{t.name}</span>
          <span className="text-gray-500 text-sm">{t.handle}</span>
        </div>
      </div>
    </div>
  );
}

export default Testimonials