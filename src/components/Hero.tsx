import React from 'react'

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Shaping Ideas into
          <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Real Projects that Deliver Results
          </span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
          Hi, I'm Kenenisa, a developer based in Croatia with a passion for code.
        </p>
        <button
          onClick={scrollToWork}
          className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition transform hover:scale-105"
        >
          SEE MY WORK
        </button>
      </div>
    </section>
  )
}

export default Hero