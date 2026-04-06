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
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-dark">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-gray-900/50 rounded-xl p-6 md:p-8 hover:bg-gray-900/70 transition">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold">{exp.title}</h3>
                  <p className="text-blue-400 mt-1">{exp.company}</p>
                </div>
                <p className="text-gray-400 text-sm md:text-base">{exp.period}</p>
              </div>
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience