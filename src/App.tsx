import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Work from './components/Work'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollArrow from './components/ScrollArrow'

function App() {
  return (
    <div className="dark min-h-screen text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-50 relative overflow-x-hidden transition-colors duration-500">
      <div className="relative w-full">
        <Navbar />
        <Hero />
        <Overview />
        <Work />
        <Experience />
        <Skills />
        <Testimonials />
        <Contact />
        <Footer />
        <ScrollArrow />
      </div>
    </div>
  )
}

export default App