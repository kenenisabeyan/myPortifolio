import { skills } from '../data/data';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What I Bring to the Table
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          How I Can Contribute & My Key Skills
        </p>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-6 py-3 bg-gray-800 rounded-full text-gray-200 hover:bg-gray-700 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;