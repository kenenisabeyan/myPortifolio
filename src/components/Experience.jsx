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
    iconColor: '#383E56',
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
    iconColor: '#E6DEDD',
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
    iconColor: '#383E56',
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-[#050816] relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="w-full text-center md:text-left">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-medium">What I have done so far</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-20">
            Work Experience.
          </h2>
        </div>

        <div className="relative w-full max-w-5xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-white z-0"></div>

          <div className="flex flex-col gap-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-center w-full z-10">
                  
                  {/* Left Side (Desktop) */}
                  <div className={`hidden md:flex w-1/2 ${isEven ? 'justify-end pr-12' : 'justify-start pl-12'} ${isEven ? 'order-1' : 'order-3'}`}>
                    {isEven ? (
                      <div className="bg-[#1d1836] p-8 rounded-b-2xl rounded-tl-2xl rounded-tr-sm border-b-4 border-[#915EFF] w-full max-w-[450px]">
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-gray-400 font-semibold mb-6">{exp.company}</p>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start text-[14px] text-white/80 tracking-wide">
                              <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="w-full flex justify-start items-center">
                         <p className="text-gray-300 font-bold">{exp.period}</p>
                      </div>
                    )}
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#050816] z-10 order-2">
                    <div 
                      className="w-full h-full rounded-full flex items-center justify-center text-[#1d1836] shadow-lg shadow-black/20"
                      style={{ backgroundColor: exp.iconColor }}
                    >
                      <span className="text-sm font-black">{exp.company.charAt(0)}</span>
                    </div>
                  </div>

                  {/* Right Side (Desktop) & Full Body (Mobile) */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'justify-start md:pl-12' : 'justify-start md:pr-12 md:justify-end'} pl-16 order-3 md:order-none`}>
                    {isEven ? (
                      <div className="w-full flex justify-start items-center">
                         <p className="text-gray-300 font-bold hidden md:block">{exp.period}</p>
                         <p className="text-gray-300 font-bold block md:hidden mb-4">{exp.period}</p>
                      </div>
                    ) : (
                      <div className="bg-[#1d1836] p-8 rounded-b-2xl rounded-tr-2xl rounded-tl-sm border-b-4 border-[#915EFF] w-full max-w-[450px]">
                        <p className="text-gray-300 font-bold block md:hidden mb-4">{exp.period}</p>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-gray-400 font-semibold mb-6">{exp.company}</p>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start text-[14px] text-white/80 tracking-wide">
                              <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Mobile Card for Evens */}
                    {isEven && (
                      <div className="bg-[#1d1836] p-8 rounded-b-2xl rounded-tr-2xl rounded-tl-sm border-b-4 border-[#915EFF] w-full block md:hidden mt-2">
                        <p className="text-gray-300 font-bold block md:hidden mb-4">{exp.period}</p>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-gray-400 font-semibold mb-6">{exp.company}</p>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start text-[14px] text-white/80 tracking-wide">
                              <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
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