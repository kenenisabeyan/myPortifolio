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
    <section id="contact" className="py-32 px-6 relative z-10 border-t border-white/[0.05] bg-[#030610]">
      {/* Background ambient lighting - Matching Hero/Background3D */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col justify-center relative z-10">
        
        {/* Glowing Badge */}
        <div className="flex w-max mx-auto md:mx-0 items-center gap-3 px-5 py-2.5 rounded-full bg-blue-900/20 border border-blue-500/30 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)] group relative overflow-hidden">
          <div className="absolute inset-0 bg-cyan-500/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
          <span className="text-cyan-400 relative z-10 animate-pulse">❖</span>
          <span className="text-sm text-cyan-50 font-semibold tracking-widest uppercase relative z-10">Contact Matrix</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-black text-center md:text-left text-white mb-16 tracking-tighter drop-shadow-xl w-full">
          Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">Connection.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          
          {/* Left Form Container */}
          <div className="bg-[#050A14]/80 rounded-[2.5rem] p-8 md:p-12 border border-white/[0.05] hover:border-cyan-500/30 transition-all duration-500 backdrop-blur-xl relative overflow-hidden group shadow-2xl">
            {/* Corner glowing accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-[80px] opacity-50 group-hover:opacity-100 group-hover:bg-cyan-500/20 transition-all duration-700 pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              
              <div className="flex flex-col gap-2">
                <label className="text-sm text-cyan-100 ml-1 font-semibold tracking-wider uppercase">Vessel ID (Name)</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange}
                  placeholder="Enter your name" 
                  required
                  className="w-full px-5 py-4 bg-white/[0.02] border border-white/[0.05] text-white placeholder-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all backdrop-blur-md shadow-inner" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-cyan-100 ml-1 font-semibold tracking-wider uppercase">Commlink (Email)</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  placeholder="Enter your email address" 
                  required
                  className="w-full px-5 py-4 bg-white/[0.02] border border-white/[0.05] text-white placeholder-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all backdrop-blur-md shadow-inner" 
                />
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="text-sm text-cyan-100 ml-1 font-semibold tracking-wider uppercase">Payload (Message)</label>
                <textarea 
                  name="message" 
                  rows={6} 
                  value={formData.message} 
                  onChange={handleChange}
                  placeholder="Transmit your message here..." 
                  required
                  className="w-full px-5 py-4 bg-white/[0.02] border border-white/[0.05] text-white placeholder-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all backdrop-blur-md resize-none shadow-inner"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full mt-6 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-black tracking-widest uppercase rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:-translate-y-1 transition-all duration-300"
              >
                Transmit Signal
              </button>

            </form>
          </div>

          {/* Right Graphic Container */}
          <div className="bg-gradient-to-br from-[#050A14] to-blue-900/20 rounded-[2.5rem] min-h-[500px] flex justify-center items-center relative overflow-hidden border border-white/[0.05] group shadow-2xl">
            {/* Animated glowing backdrops */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-[120px] scale-150 transform opacity-30 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative z-10 w-11/12 h-[90%] rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-xl flex items-center justify-center shadow-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
               {/* Vignette overly to blend the image into the sci-fi theme */}
               <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-20 pointer-events-none group-hover:bg-transparent transition-colors duration-700"></div>
               <img 
                 src={homePageImg} 
                 alt="Interactive Showcase" 
                 className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
               />
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Contact