import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = ['Overview', 'Work', 'Experience', 'About', 'Testimonials', 'Contact']

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/60 backdrop-blur-xl py-3 border-b border-white/[0.05] shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'bg-transparent py-5 border-b border-transparent'
    } px-6 md:px-12`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <FaUserCircle className="text-3xl text-blue-400 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline text-xl font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent hover:from-blue-400 hover:to-indigo-400 transition-all duration-300">
            Kenenisa.
          </span>
        </div>

        <ul className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <li key={item}>
              <button 
                onClick={() => scrollToSection(item)} 
                className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/[0.05] transition-all duration-300"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-2xl z-50 text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-30" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Menu Content */}
      <div className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-black/90 backdrop-blur-xl border-l border-white/[0.05] shadow-2xl transition-transform duration-500 z-40 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <li key={item}>
              <button 
                onClick={() => scrollToSection(item)} 
                className="text-xl font-medium text-gray-300 hover:text-blue-400 transition-colors"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar