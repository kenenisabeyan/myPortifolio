import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = ['Work', 'Experience', 'Skills', 'Testimonials', 'Contact']

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark/95 backdrop-blur-md py-2' : 'bg-dark/80 backdrop-blur-sm py-4'
    } px-6 md:px-12 border-b border-gray-800`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-3xl text-blue-400" />
          <span className="hidden sm:inline text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Kenenisa Beyan
          </span>
        </div>

        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <button onClick={() => scrollToSection(item)} className="hover:text-blue-400 transition">
                {item}
              </button>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-2xl z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`md:hidden fixed top-16 left-0 w-full bg-dark/95 backdrop-blur-md transition-transform duration-300 z-40 ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <ul className="flex flex-col items-center py-6 space-y-4">
          {navItems.map((item) => (
            <li key={item}>
              <button onClick={() => scrollToSection(item)} className="text-lg hover:text-blue-400">
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