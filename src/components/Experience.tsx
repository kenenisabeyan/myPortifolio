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
    iconColor: '#22d3ee', // cyan-400
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
    iconColor: '#818cf8', // indigo-400
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
  <div className="flex gap-1 mb-6">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" fill="currentColor" viewBox="0 0 20 20">
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
    <section id="experience" className="py-32 px-6 relative z-10 border-t border-white/[0.05] bg-[#030610]">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center gap-3 bg-blue-900/20 border border-blue-500/30 py-2.5 px-6 rounded-full mb-6 w-max shadow-[0_0_20px_rgba(59,130,246,0.15)] backdrop-blur-md">
            <span className="text-cyan-400 animate-pulse">❖</span>
            <span className="text-sm text-cyan-50 font-semibold tracking-widest uppercase">Career Timeline</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter drop-shadow-xl">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">History.</span>
          </h2>
        </div>

        <div className="relative w-full max-w-6xl mx-auto">
          {/* Neon Vertical Gradient Center Line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-600 to-transparent z-0 shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>

          <div className="flex flex-col gap-16 md:gap-32">
            {experiences.map((exp, idx) => (
              <RevealOnScroll key={idx}>
                <div className="relative flex flex-col md:flex-row items-center md:items-start w-full z-10">
                  
                  {/* Left Side: Detail & Testimonial Container */}
                  <div className="hidden md:flex w-1/2 justify-end pr-16 mt-4">
                    <div className="bg-[#050A14]/80 p-8 rounded-[2rem] border border-white/[0.05] w-full max-w-[460px] shadow-2xl relative backdrop-blur-xl group hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                      {/* Ambient hover glow inside card */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none" />
                      
                      <div className="relative z-10">
                        <StarRating />
                        <p className="text-gray-300 text-[16px] leading-relaxed mb-8 font-light italic">
                          "{exp.testimonial.text}"
                        </p>
                        <div className="flex items-center gap-4 border-t border-white/[0.05] pt-6">
                          <div className="w-12 h-12 rounded-full border border-white/10 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-black text-lg shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                            {exp.testimonial.companyName.charAt(0)}
                          </div>
                          <span className="text-cyan-50 font-bold text-lg tracking-wide">{exp.testimonial.companyName}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Node Icon */}
                  <div className="absolute left-0 md:left-1/2 transform translate-x-1 md:-translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full border-[5px] border-[#030610] bg-black z-10 mt-6 md:mt-8 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                    <div 
                      className="w-full h-full rounded-full flex items-center justify-center bg-white/[0.05] backdrop-blur-md transition-all duration-300 hover:scale-110 cursor-default"
                      style={{ borderColor: exp.iconColor, borderWidth: '2px', boxShadow: `0 0 15px ${exp.iconColor}40` }}
                    >
                      {exp.icon}
                    </div>
                  </div>

                  {/* Right Side: Role Overview */}
                  <div className="w-full md:w-1/2 flex justify-start pl-20 md:pl-16 mt-6 md:mt-8">
                    <div className="w-full max-w-[500px]">
                      <h3 className="text-4xl font-black text-white mb-4 tracking-tighter drop-shadow-md">{exp.title}</h3>
                      
                      <div className="flex items-center gap-3 mb-8 bg-white/[0.02] border border-white/5 w-max px-4 py-2 rounded-lg backdrop-blur-sm">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                        <p className="text-sm tracking-widest font-semibold text-cyan-200 uppercase">{exp.period}</p>
                      </div>
                      
                      <p className="text-cyan-500/80 font-bold tracking-widest uppercase text-sm mb-6 border-b border-white/5 pb-2">Technical Execution</p>
                      <ul className="space-y-6">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start text-[16px] text-gray-300 tracking-wide font-light leading-relaxed group">
                            <span className="mr-4 mt-2.5 w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0 group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Mobile Testimonial Add-on */}
                      <div className="md:hidden mt-12 bg-[#050A14]/80 p-8 rounded-[2rem] border border-white/[0.05] w-full shadow-2xl relative backdrop-blur-lg">
                        <StarRating />
                        <p className="text-gray-300 text-[15px] leading-relaxed mb-6 font-light italic">
                          "{exp.testimonial.text}"
                        </p>
                        <div className="flex items-center gap-4 border-t border-white/[0.05] pt-6">
                          <div className="w-10 h-10 rounded-full border border-white/10 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-black text-sm shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                            {exp.testimonial.companyName.charAt(0)}
                          </div>
                          <span className="text-cyan-50 font-bold tracking-wide">{exp.testimonial.companyName}</span>
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