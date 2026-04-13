import React, { useEffect, useRef } from 'react'

const experiences = [
  {
    title: 'Senior Full Stack Engineer',
    company: 'Freelance / Remote',
    period: 'January 2023 - Present',
    responsibilities: [
      'Architected and delivered scalable web applications for diverse international clients.',
      'Specialized in React, Next.js, and Node.js solutions, decreasing client load times by up to 40%.',
      'Consistently maintained a 100% Job Success Score through effective communication.',
    ],
    iconColor: '#10b981', // emerald-500
    icon: (
      <span className="text-white font-bold text-lg">F</span>
    ),
    testimonial: {
      text: "Kenenisa brought immense technical expertise to our team, drastically improving our frontend performance. His problem-solving mindset was key to delivering exactly what we needed.",
      companyName: "TechNova Inc.",
    }
  },
  {
    title: 'Frontend Developer',
    company: 'Tech Startup / Remote',
    period: 'June 2021 - December 2022',
    responsibilities: [
      'Led the frontend development for a dynamic SaaS platform, resulting in a 25% increase in user retention.',
      'Implemented complex state management and seamless REST/GraphQL API integrations.',
      'Collaborated closely with UI/UX designers to achieve pixel-perfect, highly responsive interfaces.',
    ],
    iconColor: '#3b82f6', // blue-500
    icon: (
      <span className="text-white font-bold text-lg">T</span>
    ),
    testimonial: {
      text: "His contributions to our web applications have been outstanding. He approaches challenges with a professional, scalable mindset and seamlessly integrates complex APIs.",
      companyName: "StartupFlow",
    }
  },
  {
    title: 'Web Developer',
    company: 'Digital Agency / Contract',
    period: 'March 2019 - May 2021',
    responsibilities: [
      'Developed custom e-commerce interfaces and portfolio websites for over 20+ businesses.',
      'Optimized legacy codebases, significantly improving SEO scores and web core vitals.',
      'Set up CI/CD pipelines for streamlined automated deployments to Vercel and AWS.',
    ],
    iconColor: '#8b5cf6', // violet-500
    icon: (
      <span className="text-white font-bold text-lg">D</span>
    ),
    testimonial: {
      text: "Kenenisa completely revitalized our client properties. SEO scores skyrocketed, and the sleek designs helped us land major new agency accounts.",
      companyName: "Creative Digital",
    }
  },
]

const StarRating = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (ref.current) observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="transition-all duration-1000 transform opacity-0 translate-y-12 ease-out w-full">
      {children}
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative z-10 border-t border-white/[0.05] bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-2 bg-[#1C1F26] border border-white/[0.05] py-2 px-5 rounded-full mb-6 w-max shadow-lg">
            <span className="text-orange-400">💼</span>
            <span className="text-sm text-gray-300 font-medium tracking-wide">My Career Overview</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Professional Work Experience
          </h2>
        </div>

        <div className="relative w-full max-w-6xl mx-auto">
          {/* Vertical Gradient Center Line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 z-0"></div>

          <div className="flex flex-col gap-12 md:gap-24">
            {experiences.map((exp, idx) => (
              <RevealOnScroll key={idx}>
                <div className="relative flex flex-col md:flex-row items-center md:items-start w-full z-10">
                  
                  {/* Left Side: Testimonial Card */}
                  <div className="hidden md:flex w-1/2 justify-end pr-16 mt-4">
                    <div className="bg-[#0B0C10] p-8 rounded-2xl border border-white/[0.08] w-full max-w-[420px] shadow-2xl relative">
                      <StarRating />
                      <p className="text-gray-300 text-[15px] leading-relaxed mb-6 font-light">
                        {exp.testimonial.text}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                          {exp.testimonial.companyName.charAt(0)}
                        </div>
                        <span className="text-white font-bold text-lg tracking-wide">{exp.testimonial.companyName}</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-0 md:left-1/2 transform translate-x-1 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#050505] bg-black z-10 mt-6 md:mt-8">
                    <div 
                      className="w-full h-full rounded-full flex items-center justify-center bg-white/[0.1] backdrop-blur-md"
                      style={{ borderColor: exp.iconColor, borderWidth: '2px' }}
                    >
                      {exp.icon}
                    </div>
                  </div>

                  {/* Right Side: Role Details & Mobile Formats */}
                  <div className="w-full md:w-1/2 flex justify-start pl-20 md:pl-16 mt-6 md:mt-8">
                    <div className="w-full max-w-[500px]">
                      <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">{exp.title}</h3>
                      <div className="flex items-center gap-2 mb-6 text-gray-400">
                        <span>📅</span>
                        <p className="text-sm tracking-wide font-medium">{exp.period}</p>
                      </div>
                      
                      <p className="text-gray-500 italic text-sm mb-4">Responsibilities</p>
                      <ul className="space-y-4">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start text-[15px] text-gray-300 tracking-wide font-light leading-relaxed">
                            <span className="mr-3 mt-2 w-1.5 h-1.5 bg-gray-500 rounded-full flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Mobile Testimonial Appended */}
                      <div className="md:hidden mt-8 bg-[#0B0C10] p-6 rounded-2xl border border-white/[0.08] w-full shadow-2xl relative">
                        <StarRating />
                        <p className="text-gray-300 text-sm leading-relaxed mb-4 font-light">
                          {exp.testimonial.text}
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
                            {exp.testimonial.companyName.charAt(0)}
                          </div>
                          <span className="text-white font-bold tracking-wide">{exp.testimonial.companyName}</span>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </RevealOnScroll>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience