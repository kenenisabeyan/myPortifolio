import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaCircleNotch } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = ['Work', 'Experience', 'About', 'Testimonials', 'Contact']

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 rounded-b-3xl ${
      scrolled ? 'bg-[#030610]/80 backdrop-blur-xl py-4 border-b border-white/[0.05] shadow-[0_10px_40px_rgba(34,211,238,0.05)]' : 'bg-transparent py-6 border-b border-transparent'
    } px-6 md:px-12`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Glowing Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
            <FaCircleNotch className="text-2xl text-blue-400 group-hover:rotate-180 transition-transform duration-700 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          </div>
          <span className="text-2xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300 tracking-tight">
            Kenenisa.
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-1 items-center bg-white/[0.02] border border-white/[0.05] px-2 py-1.5 rounded-full backdrop-blur-md">
          {navItems.map((item) => (
            <li key={item} className="relative group">
              <button 
                onClick={() => scrollToSection(item)} 
                className="px-5 py-2 rounded-full text-sm font-semibold tracking-wide text-gray-300 hover:text-white transition-all duration-300 relative z-10"
              >
                {item}
              </button>
              {/* Neon Underline Hover Effect */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 group-hover:w-8 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-300"></div>
            </li>
          ))}
        </ul>

        {/* Right Side Action (Desktop) */}
        <div className="hidden md:block">
          <button 
             onClick={() => scrollToSection('Contact')}
             className="px-6 py-2.5 bg-blue-600/20 hover:bg-blue-500/30 border border-blue-500/30 text-cyan-300 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:text-white"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-2xl z-50 text-white relative w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-30" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Menu Content */}
      <div className={`md:hidden fixed top-0 right-0 h-screen w-[80vw] max-w-[320px] bg-[#030610]/95 backdrop-blur-2xl border-l border-white/[0.05] shadow-[0_0_50px_rgba(34,211,238,0.1)] transition-transform duration-500 z-40 flex flex-col justify-center ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <ul className="flex flex-col items-center justify-center p-8 space-y-6">
          {navItems.map((item) => (
            <li key={item} className="w-full text-center">
              <button 
                onClick={() => scrollToSection(item)} 
                className="w-full text-2xl font-black tracking-widest text-gray-400 hover:text-cyan-400 transition-colors uppercase border-b border-white/[0.05] pb-6"
              >
                {item}
              </button>
            </li>
          ))}
          <li className="w-full pt-8">
            <button 
               onClick={() => scrollToSection('Contact')}
               className="w-full px-8 py-4 bg-blue-600 text-white rounded-xl font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(37,99,235,0.4)]"
            >
              Hire Me
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar