import React, { useState, useEffect } from 'react'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

const ScrollArrow = () => {
  const [showUp, setShowUp] = useState(false)
  const [showDown, setShowDown] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 0
      setShowDown(window.scrollY < heroHeight - 100)
      setShowUp(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const scrollToWork = () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      {showDown && (
        <button onClick={scrollToWork} className="fixed bottom-8 right-8 z-40 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg animate-bounce">
          <FaArrowDown size={20} />
        </button>
      )}
      {showUp && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 z-40 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg">
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  )
}

export default ScrollArrow