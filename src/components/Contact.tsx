import React, { useState } from 'react'
import homePageImg from '../assets/home-page.png'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! (Demo)')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-16 md:py-24 px-6 relative z-10 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col justify-center relative z-10">
        
        {/* Badge */}
        <div className="flex w-max mx-auto md:mx-0 items-center gap-3 px-5 py-2.5 rounded-full bg-gray-50 border border-gray-200 mb-6 shadow-sm">
          <span className="text-gray-500 animate-pulse">❖</span>
          <span className="text-sm text-gray-500 font-semibold tracking-widest uppercase">Contact Matrix</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left text-gray-900 mb-16 tracking-tight w-full">
          Initialize Connection.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          
          {/* Left Form Container */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200 transition-all duration-300 relative group shadow-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600 ml-1">Vessel ID (Name)</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange}
                  placeholder="Enter your name" 
                  required
                  className="w-full px-5 py-4 bg-white border border-gray-200 text-base font-normal text-gray-900 placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all shadow-sm" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600 ml-1">Commlink (Email)</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  placeholder="Enter your email address" 
                  required
                  className="w-full px-5 py-4 bg-white border border-gray-200 text-base font-normal text-gray-900 placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all shadow-sm" 
                />
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="text-sm font-medium text-gray-600 ml-1">Payload (Message)</label>
                <textarea 
                  name="message" 
                  rows={6} 
                  value={formData.message} 
                  onChange={handleChange}
                  placeholder="Transmit your message here..." 
                  required
                  className="w-full px-5 py-4 bg-white border border-gray-200 text-base font-normal text-gray-900 placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all resize-none shadow-sm"
                ></textarea>
                <p className="text-xs text-gray-400 ml-1 mt-1">Please include project details if applicable.</p>
              </div>

              <button 
                type="submit" 
                className="w-full mt-6 py-4 bg-gray-900 hover:bg-gray-800 text-white text-base font-semibold tracking-wide rounded-xl shadow-md transition-all duration-300"
              >
                Transmit Signal
              </button>

            </form>
          </div>

          {/* Right Graphic Container */}
          <div className="bg-gray-100 rounded-3xl min-h-[500px] flex justify-center items-center relative overflow-hidden border border-gray-200 group shadow-sm">
            <div className="absolute inset-0 z-10 w-full h-full overflow-hidden">
               <img 
                 src={homePageImg} 
                 alt="Interactive Showcase" 
                 className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-[1.03]"
               />
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Contact