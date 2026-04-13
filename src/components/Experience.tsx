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
    iconColor: '#2563eb', // blue-600
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
    iconColor: '#3b82f6', // blue-500
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
    iconColor: '#60a5fa', // blue-400
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative z-10 border-t border-white/[0.05] bg-black/20 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        <div className="w-full text-center md:text-left mb-16">
          <div className="flex items-center gap-2 bg-white/[0.02] border border-white/[0.05] py-2 px-4 rounded-full mb-6 w-max mx-auto md:mx-0">
            <span className="text-blue-400">❖</span>
            <span className="text-sm text-gray-300 font-medium tracking-wide">What I have done so far</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Experience.</span>
          </h2>
        </div>

        <div className="relative w-full max-w-5xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-indigo-500/50 to-transparent z-0"></div>

          <div className="flex flex-col gap-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-center w-full z-10 group">
                  
                  {/* Left Side (Desktop) */}
                  <div className={`hidden md:flex w-1/2 ${isEven ? 'justify-end pr-12' : 'justify-start pl-12'} ${isEven ? 'order-1' : 'order-3'}`}>
                    {isEven ? (
                      <div className="bg-white/[0.02] hover:bg-white/[0.04] p-8 rounded-3xl border border-white/[0.05] hover:border-blue-500/30 transition-all duration-300 w-full max-w-[450px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md relative overflow-hidden group-hover:-translate-y-1">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h3 className="relative z-10 text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">{exp.title}</h3>
                        <p className="relative z-10 text-gray-400 font-medium mb-6">{exp.company}</p>
                        <ul className="relative z-10 space-y-3">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start text-[14px] text-gray-300 tracking-wide font-light leading-relaxed">
                              <span className="mr-3 mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0 shadow-[0_0_10px_rgba(96,165,250,0.8)]"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="w-full flex justify-start items-center">
                         <p className="text-gray-400 font-medium tracking-widest uppercase text-sm">{exp.period}</p>
                      </div>
                    )}
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 border-black bg-black z-10 order-2 group-hover:scale-110 transition-transform duration-300">
                    <div 
                      className="w-full h-full rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                      style={{ backgroundColor: exp.iconColor }}
                    >
                      <span className="text-sm font-black">{exp.company.charAt(0)}</span>
                    </div>
                  </div>

                  {/* Right Side (Desktop) & Full Body (Mobile) */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'justify-start md:pl-12' : 'justify-start md:pr-12 md:justify-end'} pl-16 order-3 md:order-none`}>
                    {isEven ? (
                      <div className="w-full flex justify-start items-center">
                         <p className="text-gray-400 font-medium tracking-widest uppercase text-sm hidden md:block">{exp.period}</p>
                         <p className="text-gray-400 font-medium tracking-widest uppercase text-xs block md:hidden mb-4">{exp.period}</p>
                      </div>
                    ) : (
                      <div className="bg-white/[0.02] hover:bg-white/[0.04] p-8 rounded-3xl border border-white/[0.05] hover:border-blue-500/30 transition-all duration-300 w-full max-w-[450px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md relative overflow-hidden group-hover:-translate-y-1">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <p className="text-gray-400 font-medium tracking-widest uppercase text-xs block md:hidden mb-4 relative z-10">{exp.period}</p>
                        <h3 className="relative z-10 text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">{exp.title}</h3>
                        <p className="relative z-10 text-gray-400 font-medium mb-6">{exp.company}</p>
                        <ul className="relative z-10 space-y-3">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start text-[14px] text-gray-300 tracking-wide font-light leading-relaxed">
                              <span className="mr-3 mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0 shadow-[0_0_10px_rgba(96,165,250,0.8)]"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Mobile Card for Evens */}
                    {isEven && (
                      <div className="bg-white/[0.02] hover:bg-white/[0.04] p-8 rounded-3xl border border-white/[0.05] hover:border-blue-500/30 transition-all duration-300 w-full block md:hidden mt-2 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
                        <p className="relative z-10 text-gray-400 font-medium tracking-widest uppercase text-xs block md:hidden mb-4">{exp.period}</p>
                        <h3 className="relative z-10 text-2xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="relative z-10 text-gray-400 font-medium mb-6">{exp.company}</p>
                        <ul className="relative z-10 space-y-3">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start text-[14px] text-gray-300 tracking-wide font-light leading-relaxed">
                              <span className="mr-3 mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0 shadow-[0_0_10px_rgba(96,165,250,0.8)]"></span>
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