import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 px-6 relative z-10 border-t border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm font-medium tracking-wide">© 2025 Kenenisa Beyan. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors duration-300">Terms & Conditions</a>
          <a href="#" className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors duration-300">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer