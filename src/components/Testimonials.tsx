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
    <section id="testimonials" className="py-16 md:py-24 px-6 relative z-10 bg-gray-50">
      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Badge */}
        <div className="flex items-center gap-3 bg-white border border-gray-200 py-2.5 px-6 rounded-full mb-6 w-max shadow-sm">
          <span className="text-gray-500 animate-pulse">❖</span>
          <span className="text-sm text-gray-500 font-semibold tracking-widest uppercase">Client Feedback Highlights</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16 tracking-tight">
          What People Say About Me.
        </h2>

        {/* 3 Column Grid layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          
          {/* Column 1 */}
          <div className="w-full flex flex-col gap-6">
             <TestimonialCard t={testimonials[0]} />
             <TestimonialCard t={testimonials[3]} />
          </div>

          {/* Column 2 */}
          <div className="w-full flex flex-col gap-6">
             <TestimonialCard t={testimonials[1]} />
             <TestimonialCard t={testimonials[4]} />
          </div>

          {/* Column 3 */}
          <div className="w-full flex flex-col gap-6">
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
    <div className="group relative bg-white border border-gray-200 p-8 rounded-3xl transition-all duration-300 flex flex-col h-full overflow-hidden shadow-sm hover:shadow-md cursor-default">
      <div className="relative z-10 flex text-gray-400 mb-6 space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="relative z-10 text-gray-600 text-sm md:text-base leading-relaxed mb-8 flex-1 font-normal italic">
        "{t.text}"
      </p>
      
      <div className="relative z-10 flex items-center gap-4 mt-auto">
        {/* Avatar Placeholder */}
        <div className="w-12 h-12 rounded-full border border-gray-200 bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-lg overflow-hidden shrink-0">
          {t.name.charAt(0)}
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-gray-900 text-base">{t.name}</span>
          <span className="text-gray-500 text-sm font-medium">{t.handle}</span>
        </div>
      </div>
    </div>
  );
}

export default Testimonials