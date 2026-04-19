import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaSun, FaMoon, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'

const Navbar = ({ isDarkMode, toggleDarkMode }: { isDarkMode?: boolean, toggleDarkMode?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = ['Home', 'Overview', 'Work', 'Experience', 'Skills', 'Contact']

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
        ? 'bg-white/80 dark:bg-[#060D1F]/60 backdrop-blur-3xl border-b border-gray-200 dark:border-cyan-500/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
        : 'bg-white/90 dark:bg-gradient-to-b dark:from-[#030610]/95 dark:to-transparent py-5 border-b border-transparent'
    } px-6 md:px-12`}>
      {/* Decorative top border gradient line on scroll */}
      <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-cyan-500/50 to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}></div>

      <div className="max-w-[75rem] mx-auto flex justify-between items-center text-sm font-medium relative z-10">
        
        {/* Logo */}
        <div className="flex items-center group relative cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="absolute inset-0 bg-gray-200 dark:bg-cyan-400 blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-300 rounded-full dark:animate-pulse"></div>
          <div className="relative w-[46px] h-[46px] rounded-full bg-white dark:bg-[#030610] border border-gray-200 dark:border-cyan-500/50 flex items-center justify-center text-gray-900 dark:text-cyan-50 text-lg md:text-xl font-bold tracking-wide shadow-sm dark:shadow-[0_0_15px_rgba(34,211,238,0.3)] group-hover:bg-gray-50 dark:group-hover:bg-gradient-to-br dark:from-cyan-500 dark:to-blue-600 group-hover:border-gray-300 dark:group-hover:border-transparent transition-all duration-500">
            K
          </div>
        </div>

        {/* Center Nav */}
        <ul className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <li key={item} className="relative group flex flex-col items-center">
              <button 
                onClick={() => scrollToSection(item)}
                className={`text-sm md:text-base transition duration-300 py-1 ${item === 'Home' ? 'font-semibold text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-cyan-400' : 'font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-6 text-gray-500 dark:text-gray-400">
          
          <div className="flex space-x-4 items-center">
            <button 
              onClick={toggleDarkMode} 
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <FaSun className="text-[1.1rem]" /> : <FaMoon className="text-[1.1rem]" />}
            </button>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors"><FaGithub className="text-[1.1rem]" /></a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors"><FaLinkedin className="text-[1.1rem]" /></a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors"><FaTwitter className="text-[1.1rem]" /></a>
          </div>
          
          <button className="relative group overflow-hidden flex items-center justify-center gap-2 bg-gray-900 dark:bg-[#030610] text-white dark:text-cyan-50 font-bold tracking-wider py-2.5 px-7 rounded-full border border-transparent dark:border-cyan-500/50 dark:shadow-[0_0_15px_rgba(34,211,238,0.2)] dark:hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-300 hover:bg-gray-800 hover:shadow-md">
            {/* Glowing sweep effect on hover for dark mode */}
            <span className="hidden dark:block absolute inset-0 w-[200%] -translate-x-[150%] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></span>
            <span className="relative z-10 transition-colors dark:group-hover:text-cyan-300">Resume</span> 
            <FiArrowUpRight className="relative z-10 text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform dark:group-hover:text-cyan-300" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-2xl z-50 text-gray-900 dark:text-white relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.1] hover:bg-gray-200 dark:hover:bg-white/[0.1] transition-colors" onClick={() => setIsOpen(!isOpen)}>
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
             <button onClick={toggleDarkMode} className="hover:text-white transition-colors p-2 bg-gray-800 rounded-full">
               {isDarkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
             </button>
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