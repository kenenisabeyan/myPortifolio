const Hero = () => {
  return (
    <section id="work" className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Shaping Ideas into <br />
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Real Projects
          </span>{' '}
          that Deliver Results
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Hi, I'm Adrian, a developer based in Croatia with a passion for code.
        </p>
        <a
          href="#projects"
          className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
        >
          SEE MY WORK
        </a>
      </div>
    </section>
  );
};

export default Hero;