import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaSun, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = ['Home', 'Work', 'Skills', 'Projects', 'Contact']

  const scrollToSection = (section: string) => {
    if (section === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(section.toLowerCase())
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0B1121]/90 backdrop-blur-md border-b border-gray-800 py-4 shadow-lg' : 'bg-[#0B1121] py-5 border-b border-transparent'
    } px-6 md:px-12`}>
      <div className="max-w-[75rem] mx-auto flex justify-between items-center text-sm font-medium">
        
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-[42px] h-[42px] rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-[22px] shadow-[0_0_15px_rgba(59,130,246,0.5)] cursor-pointer hover:bg-blue-400 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            K
          </div>
        </div>

        {/* Center Nav */}
        <ul className="hidden md:flex space-x-9 text-gray-400">
          {navItems.map((item) => (
            <li key={item} className="relative group flex flex-col items-center">
              <button 
                onClick={() => scrollToSection(item)}
                className={`hover:text-white transition-colors tracking-wide py-1 ${item === 'Home' ? 'text-blue-500 hover:text-blue-400' : ''}`}
              >
                {item}
              </button>
              {item === 'Home' && <span className="absolute -bottom-1.5 w-[5px] h-[5px] bg-blue-500 rounded-full"></span>}
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-6 text-gray-400">
          <button className="hover:text-white transition-colors" aria-label="Toggle theme"><FaSun className="text-lg" /></button>
          
          <div className="w-[1px] h-5 bg-gray-700/80"></div>
          
          <div className="flex space-x-4 items-center">
            <a href="#" className="hover:text-white transition-colors"><FaGithub className="text-[1.1rem]" /></a>
            <a href="#" className="hover:text-white transition-colors"><FaLinkedin className="text-[1.1rem]" /></a>
            <a href="#" className="hover:text-white transition-colors"><FaTwitter className="text-[1.1rem]" /></a>
          </div>
          
          <button className="group flex items-center justify-center gap-1.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-6 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            Resume <FiArrowUpRight className="text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-2xl z-50 text-white relative w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-30" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Menu Content */}
      <div className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-[#0B1121] border-l border-gray-800 shadow-2xl transition-transform duration-300 z-40 flex flex-col pt-24 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <ul className="flex flex-col px-8 space-y-6">
          {navItems.map((item) => (
            <li key={item} className="w-full">
              <button 
                onClick={() => scrollToSection(item)}
                className={`w-full text-left text-lg font-medium transition-colors ${item === 'Home' ? 'text-blue-500' : 'text-gray-300 hover:text-white'}`}
              >
                {item}
              </button>
            </li>
          ))}
          <li className="w-full pt-6 flex space-x-4 text-gray-400">
             <a href="#" className="hover:text-white transition-colors p-2 bg-gray-800 rounded-full"><FaGithub className="text-lg" /></a>
             <a href="#" className="hover:text-white transition-colors p-2 bg-gray-800 rounded-full"><FaLinkedin className="text-lg" /></a>
             <a href="#" className="hover:text-white transition-colors p-2 bg-gray-800 rounded-full"><FaTwitter className="text-lg" /></a>
          </li>
          <li className="w-full pt-4">
            <button className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-3 rounded-xl font-bold shadow-lg">
              Resume <FiArrowUpRight />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar