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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#030610]/70 backdrop-blur-2xl border-b border-white/[0.05] py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
        : 'bg-gradient-to-b from-[#030610]/90 to-transparent py-5 border-b border-transparent'
    } px-6 md:px-12`}>
      {/* Decorative top border gradient line on scroll */}
      <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}></div>

      <div className="max-w-[75rem] mx-auto flex justify-between items-center text-sm font-medium relative z-10">
        
        {/* Logo */}
        <div className="flex items-center group relative cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="absolute inset-0 bg-cyan-400 blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-300 rounded-full animate-pulse"></div>
          <div className="relative w-[46px] h-[46px] rounded-full bg-[#030610] border border-cyan-500/50 flex items-center justify-center text-cyan-50 font-black text-[22px] shadow-[0_0_15px_rgba(34,211,238,0.3)] group-hover:bg-gradient-to-br from-cyan-500 to-blue-600 group-hover:border-transparent transition-all duration-500">
            K
          </div>
        </div>

        {/* Center Nav */}
        <ul className="hidden md:flex space-x-10 text-gray-400">
          {navItems.map((item) => (
            <li key={item} className="relative group flex flex-col items-center">
              <button 
                onClick={() => scrollToSection(item)}
                className={`hover:text-white transition-colors duration-300 tracking-wider font-semibold py-1 ${item === 'Home' ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]' : ''}`}
              >
                {item}
              </button>
              {/* Animated underline indicator */}
              <span className={`absolute -bottom-2 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-300 ${item === 'Home' ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}></span>
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
          
          <button className="relative group overflow-hidden flex items-center justify-center gap-2 bg-[#030610] text-cyan-50 font-bold tracking-wider py-2.5 px-7 rounded-full border border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-300">
            {/* Glowing sweep effect on hover */}
            <span className="absolute inset-0 w-[200%] -translate-x-[150%] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></span>
            <span className="relative z-10 group-hover:text-cyan-300 transition-colors">Resume</span> 
            <FiArrowUpRight className="relative z-10 text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform group-hover:text-cyan-300" />
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