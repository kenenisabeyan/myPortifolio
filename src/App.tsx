import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Work from './components/Work'
import Experience from './components/Experience'
import Skills from './components/Skills'
import TechStack from './components/TechStack'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background3D from './components/Background3D'
import ScrollArrow from './components/ScrollArrow'

function App() {
  return (
    <div className="relative">
      <Background3D />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Stats />
        <Work />
        <Experience />
        <Skills />
        <TechStack />
        <Testimonials />
        <Contact />
        <Footer />
        <ScrollArrow />
      </div>
    </div>
  )
}

export default App