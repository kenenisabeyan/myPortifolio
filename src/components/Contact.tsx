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
    <section id="contact" className="py-24 px-6 relative z-10 border-t border-white/[0.05] bg-black/20 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Badge */}
        <div className="flex items-center gap-2 bg-white/[0.02] border border-white/[0.05] py-2 px-4 rounded-full mb-6 relative hover:border-emerald-500/30 transition-colors">
          <span className="text-emerald-400">✉️</span>
          <span className="text-sm text-gray-300 font-medium tracking-wide">Contact Information</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-center text-white mb-16 tracking-tight">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Left Form Container */}
          <div className="bg-white/[0.02] rounded-3xl p-8 border border-white/[0.05] hover:border-emerald-500/20 transition-all duration-300 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 ml-1 font-medium tracking-wide">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange}
                  placeholder="Your name" 
                  required
                  className="w-full px-5 py-4 bg-white/[0.03] border border-white/[0.1] text-white placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all backdrop-blur-md" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 ml-1 font-medium tracking-wide">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  placeholder="Your email address" 
                  required
                  className="w-full px-5 py-4 bg-white/[0.03] border border-white/[0.1] text-white placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all backdrop-blur-md" 
                />
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="text-sm text-gray-400 ml-1 font-medium tracking-wide">Message</label>
                <textarea 
                  name="message" 
                  rows={6} 
                  value={formData.message} 
                  onChange={handleChange}
                  placeholder="Your message" 
                  required
                  className="w-full px-5 py-4 bg-white/[0.03] border border-white/[0.1] text-white placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all backdrop-blur-md resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full mt-4 py-4 bg-white text-black font-bold tracking-wide rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300"
              >
                SEND MESSAGE
              </button>

            </form>
          </div>

          {/* Right Graphic Container */}
          <div className="bg-gradient-to-br from-white/[0.03] to-emerald-500/5 rounded-3xl min-h-[500px] flex justify-center items-center relative overflow-hidden border border-white/[0.05] group">
            <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] scale-150 transform opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative z-10 w-11/12 h-[90%] rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md flex items-center justify-center shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-700">
               <img 
                 src={homePageImg} 
                 alt="Interactive Showcase" 
                 className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
               />
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Contact