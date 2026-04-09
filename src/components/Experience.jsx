import React from 'react'

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Hostinger',
    period: 'January 2023 - Present',
    responsibilities: [
      'Developed and maintained user-facing features for the Hostinger website.',
      'Collaborated closely with UI/UX designers to ensure seamless user experiences.',
      'Optimized web applications for maximum speed and scalability.',
    ],
    testimonial: 'Kenenisa\'s expertise in frontend development helped us revamp our user interface successfully. His attention to detail is outstanding.',
    iconColor: '#673AB7',
  },
  {
    title: 'Full Stack Developer',
    company: 'Docker',
    period: 'June 2020 - December 2023',
    responsibilities: [
      'Led the development of Docker’s web applications, focusing on scalability.',
      'Worked with backend engineers to integrate APIs seamlessly with the frontend.',
      'Contributed to open-source projects within the Docker ecosystem.',
    ],
    testimonial: 'Kenenisa\'s contributions to Docker\'s web applications have been outstanding. He approaches challenges with a problem-solving mindset.',
    iconColor: '#2496ED',
  },
  {
    title: 'React Native Developer',
    company: 'Appwrite',
    period: 'March 2019 - May 2020',
    responsibilities: [
      'Built cross-platform mobile apps using React Native, integrating with Appwrite’s backend services.',
      'Improved app performance and user experience through code optimization and testing.',
      'Coordinated with the product team to implement features based on feedback.',
    ],
    testimonial: 'Kenenisa\'s work on Appwrite\'s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience.',
    iconColor: '#F02E65',
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-20 tracking-tight">
          Work Experience
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#1a1a1a]"></div>

          <div className="flex flex-col gap-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-center w-full">
                  
                  {/* Left Side: Testimonial Card for Evens, Responsibilities for Odds */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'justify-end pr-8' : 'justify-start pl-8'} md:order-1 order-2`}>
                    {isEven ? (
                      <div className="bg-[#0E0E0E] p-6 rounded-2xl border border-[#1a1a1a] max-w-md w-full">
                        <div className="flex text-white mb-4 space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-lg">★</span>
                          ))}
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                          {exp.testimonial}
                        </p>
                        <div className="mt-auto">
                          <h4 className="font-bold text-white tracking-wide">{exp.company}</h4>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full max-w-md">
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider">
                          📅 {exp.period}
                        </p>
                        <h4 className="text-gray-500 text-sm font-semibold mb-3 uppercase tracking-wider">Responsibilities</h4>
                        <ul className="space-y-4 text-gray-300">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 border-black bg-gray-800 z-10 md:order-2">
                    <div 
                      className="w-full h-full rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: exp.iconColor }}
                    >
                      <span className="text-xs font-bold">{exp.company.charAt(0)}</span>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'justify-start pl-8' : 'justify-end pr-8'} md:order-3 order-1 mb-8 md:mb-0`}>
                    {isEven ? (
                      <div className="w-full max-w-md">
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider">
                          📅 {exp.period}
                        </p>
                        <h4 className="text-gray-500 text-sm font-semibold mb-3 uppercase tracking-wider">Responsibilities</h4>
                        <ul className="space-y-4 text-gray-300">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="bg-[#0E0E0E] p-6 rounded-2xl border border-[#1a1a1a] max-w-md w-full">
                        <div className="flex text-white mb-4 space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-lg">★</span>
                          ))}
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                          {exp.testimonial}
                        </p>
                        <div className="mt-auto">
                          <h4 className="font-bold text-white tracking-wide">{exp.company}</h4>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience