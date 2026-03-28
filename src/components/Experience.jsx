import { experiences } from '../data/data';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Work Experience
        </h2>
        <div className="space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-4 border-blue-500 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-blue-400">{exp.company}</p>
                </div>
                <p className="text-gray-400 text-sm">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;