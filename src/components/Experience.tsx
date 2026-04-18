import React, { useEffect, useRef } from 'react'

const experiences = [
  {
    title: 'Full Stack Engineer',
    company: 'edotplatform',
    period: 'October 2025 - Present',
    responsibilities: [
      'Architecting and developing scalable, production-ready web applications using MERN, PERN, and Django (Python) stacks.',
      'Designing modern, responsive user interfaces and robust backend systems, improving performance and system efficiency.',
      'Building and managing fullstack platforms, including EDOT, with multi-role dashboards and structured workflows.',
      'Delivering reliable solutions through clean code, clear communication, and consistent project execution.',
    ],
    iconColor: '#22d3ee', // cyan-400
    icon: (
      <span className="text-white font-bold text-lg">E</span>
    ),
    testimonial: {
      text: "Through my journey, I designed modern, responsive user interfaces and developed strong backend logic, improving performance and overall system usability. One of my key projects is the EDOT Platform, where I built a complete system with multi-role dashboards for students, instructors, and administrators, along with structured workflows and interactive features. This experience has strengthened my ability to design real-world applications, solve practical problems, and continuously improve through hands-on development.",
      companyName: "edotplatform Solutions",
    }
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'TechFlow Agency',
    period: 'August 2025 - September 2025',
    responsibilities: [
      'Designed and implemented a full-stack Employee Performance Evaluation Dashboard using Next.js 15+ (App Router) and MongoDB, enabling structured evaluation workflows for organizations.',
      'Built secure authentication and role-based access control using NextAuth.js, supporting Admin and Employee dashboards with different permissions.',
      'Developed core evaluation features including self-assessments, peer reviews, and admin evaluations with real-time performance tracking.',
      'Implemented data visualization and performance analytics using chart-based UI components to improve transparency and decision-making.',
    ],
    iconColor: '#818cf8', // indigo-400
    icon: (
      <span className="text-white font-bold text-lg">D</span>
    ),
    testimonial: {
      text: "Through this project, I designed and built a full-stack Employee Performance Evaluation Dashboard using Next.js (App Router) and MongoDB, enabling structured workflows for organizational evaluations. I implemented secure authentication and role-based access using NextAuth.js, creating separate Admin and Employee dashboards with different permissions. I also developed key features such as self-assessments, peer reviews, and admin evaluations with real-time performance tracking, along with chart-based analytics to improve data visualization and decision-making. This experience strengthened my ability to build secure, data-driven applications and handle real-world system requirements.",
      companyName: "Astu IT directorate",
    }
  },
  {
    title: 'Frontend Developer',
    company: '',
    period: 'November 2024 - April 2025',
    responsibilities: [
      'Developed responsive and user-focused web interfaces using modern JavaScript and UI technologies, improving usability and engagement.',
      'Integrated frontend systems with backend APIs, ensuring smooth data flow and real-time interaction across applications.',
      'Collaborated on UI/UX implementation to deliver clean, consistent, and highly responsive user experiences.',
    ],
    iconColor: '#3b82f6', // blue-500
    icon: (
      <span className="text-white font-bold text-lg">T</span>
    ),
    testimonial: {
      text: "Started my full-stack journey by focusing on frontend development as a CSE student at ASTU. Built responsive UI interfaces, integrated backend APIs, and learned real-world web application structure. This phase shaped my decision to pursue full-stack development.",
      companyName: "CSE student at ASTU",
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
    <section id="experience" className="py-16 md:py-24 px-6 relative z-10 bg-gray-50">
      
      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 bg-white border border-gray-200 py-2.5 px-6 rounded-full mb-6 max-w-max shadow-sm">
            <span className="text-gray-500 animate-pulse">❖</span>
            <span className="text-sm text-gray-500 font-semibold tracking-widest uppercase">Career Timeline</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            Professional History.
          </h2>
        </div>

        <div className="relative w-full max-w-6xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-200 z-0"></div>

          <div className="flex flex-col gap-16 md:gap-32">
            {experiences.map((exp, idx) => (
              <RevealOnScroll key={idx}>
                <div className="relative flex flex-col md:flex-row items-center md:items-start w-full z-10">
                  
                  {/* Left Side: Detail & Testimonial Container */}
                  <div className="hidden md:flex w-1/2 justify-end pr-16 mt-4">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 w-full max-w-[420px] shadow-sm hover:shadow-md transition-shadow duration-300 relative group">
                      
                      <div className="relative z-10">
                        <StarRating />
                        <p className="text-gray-600 text-[15px] leading-relaxed mb-6 font-normal italic">
                          "{exp.testimonial.text}"
                        </p>
                        <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                          <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 font-bold text-sm">
                            {exp.testimonial.companyName.charAt(0)}
                          </div>
                          <span className="text-gray-900 font-semibold text-sm tracking-wide">{exp.testimonial.companyName}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Node Icon */}
                  <div className="absolute left-0 md:left-1/2 transform translate-x-1 md:-translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full border-4 border-gray-50 bg-white z-10 mt-6 md:mt-8 shadow-sm">
                    <div 
                      className="w-full h-full rounded-full flex items-center justify-center border border-gray-200 bg-gray-50 transition-all duration-300 group-hover:scale-110 cursor-default"
                    >
                      <span className="text-gray-600 font-bold text-lg">{exp.company ? exp.company.charAt(0) : 'T'}</span>
                    </div>
                  </div>

                  {/* Right Side: Role Overview */}
                  <div className="w-full md:w-1/2 flex justify-start pl-20 md:pl-16 mt-6 md:mt-8">
                    <div className="w-full max-w-[420px]">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{exp.title}</h3>
                      
                      <div className="flex items-center gap-2 mb-6">
                        <span className="text-sm font-medium text-gray-500">{exp.company} {exp.company && '•'} {exp.period}</span>
                      </div>
                      
                      <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4 pb-2 border-b border-gray-100">Technical Execution</p>
                      <ul className="space-y-4">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start text-sm md:text-base text-gray-600 font-normal leading-relaxed group">
                            <span className="mr-3 mt-2 w-1.5 h-1.5 bg-gray-300 rounded-full flex-shrink-0 group-hover:bg-gray-500 transition-colors duration-300"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Mobile Testimonial Add-on */}
                      <div className="md:hidden mt-8 bg-white p-6 rounded-2xl border border-gray-100 w-full shadow-sm relative">
                        <StarRating />
                        <p className="text-gray-600 text-sm leading-relaxed mb-6 font-normal italic">
                          "{exp.testimonial.text}"
                        </p>
                        <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                          <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 font-bold text-xs">
                            {exp.testimonial.companyName.charAt(0)}
                          </div>
                          <span className="text-gray-900 font-semibold text-xs tracking-wide">{exp.testimonial.companyName}</span>
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