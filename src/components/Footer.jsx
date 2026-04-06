import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-gray-800 bg-dark">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">© 2025 Kenenisa Beyan. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms & Conditions</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer