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
    <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-gray-200 selection:text-gray-900 relative overflow-x-hidden">
      <div className="relative z-10 w-full">
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