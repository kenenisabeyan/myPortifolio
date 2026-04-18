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
    <section id="contact" className="py-16 md:py-24 px-6 relative z-10 bg-white dark:bg-transparent border-t border-gray-100 dark:border-white/[0.05]">
      
      {/* Dark background ambients */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent pointer-events-none hidden dark:block" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none hidden dark:block" />

      <div className="max-w-4xl dark:max-w-7xl mx-auto flex flex-col justify-center relative z-10 transition-all duration-300">
        
        {/* Badge */}
        <div className="flex w-max mx-auto md:mx-0 items-center gap-3 px-5 py-2.5 rounded-full bg-gray-50 dark:bg-blue-900/20 border border-gray-200 dark:border-blue-500/30 mb-6 shadow-sm dark:shadow-[0_0_20px_rgba(59,130,246,0.15)] dark:backdrop-blur-md">
          <span className="text-gray-500 dark:text-cyan-400 animate-pulse">❖</span>
          <span className="text-sm text-gray-500 dark:text-cyan-50 font-semibold tracking-widest uppercase">Contact Matrix</span>
        </div>

        <h2 className="text-3xl md:text-4xl dark:text-5xl dark:md:text-7xl font-bold dark:font-black text-center md:text-left text-gray-900 dark:text-white mb-16 tracking-tight dark:tracking-tighter dark:drop-shadow-xl w-full transition-all duration-300">
          Initialize <span className="dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500">Connection.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          
          {/* Left Form Container */}
          <div className="bg-gray-50 dark:bg-[#050A14]/80 rounded-3xl dark:rounded-[2.5rem] p-8 md:p-12 border border-gray-200 dark:border-white/[0.05] dark:hover:border-cyan-500/30 transition-all duration-300 dark:duration-500 relative group shadow-sm dark:shadow-2xl dark:backdrop-blur-xl">
            {/* Corner glowing accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-[80px] opacity-50 group-hover:opacity-100 group-hover:bg-cyan-500/20 transition-all duration-700 pointer-events-none hidden dark:block" />
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium dark:font-semibold text-gray-600 dark:text-cyan-100 ml-1 dark:tracking-wider dark:uppercase">Vessel ID (Name)</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange}
                  placeholder="Enter your name" 
                  required
                  className="w-full px-5 py-4 bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.05] text-base font-normal text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-cyan-500/50 transition-all shadow-sm dark:shadow-inner dark:backdrop-blur-md" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium dark:font-semibold text-gray-600 dark:text-cyan-100 ml-1 dark:tracking-wider dark:uppercase">Commlink (Email)</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  placeholder="Enter your email address" 
                  required
                  className="w-full px-5 py-4 bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.05] text-base font-normal text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-cyan-500/50 transition-all shadow-sm dark:shadow-inner dark:backdrop-blur-md" 
                />
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="text-sm font-medium dark:font-semibold text-gray-600 dark:text-cyan-100 ml-1 dark:tracking-wider dark:uppercase">Payload (Message)</label>
                <textarea 
                  name="message" 
                  rows={6} 
                  value={formData.message} 
                  onChange={handleChange}
                  placeholder="Transmit your message here..." 
                  required
                  className="w-full px-5 py-4 bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.05] text-base font-normal text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-cyan-500/50 transition-all resize-none shadow-sm dark:shadow-inner dark:backdrop-blur-md"
                ></textarea>
                <p className="text-xs text-gray-400 dark:text-gray-500 ml-1 mt-1">Please include project details if applicable.</p>
              </div>

              <button 
                type="submit" 
                className="w-full mt-6 py-4 bg-gray-900 hover:bg-gray-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-black text-base font-semibold dark:font-black tracking-wide dark:tracking-widest dark:uppercase rounded-xl shadow-md transition-all duration-300 dark:shadow-[0_0_20px_rgba(34,211,238,0.4)] dark:hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] dark:hover:-translate-y-1"
              >
                Transmit Signal
              </button>

            </form>
          </div>

          {/* Right Graphic Container */}
          <div className="bg-gray-100 dark:bg-gradient-to-br dark:from-[#050A14] dark:to-blue-900/20 rounded-3xl dark:rounded-[2.5rem] min-h-[500px] flex justify-center items-center relative overflow-hidden border border-gray-200 dark:border-white/[0.05] group shadow-sm dark:shadow-2xl transition-all duration-300">
            {/* Animated glowing backdrops */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-[120px] scale-150 transform opacity-30 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none hidden dark:block" />
            
            <div className="absolute inset-0 z-10 w-full h-full overflow-hidden">
               {/* Vignette overly to blend the image into the sci-fi theme */}
               <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-20 pointer-events-none group-hover:bg-transparent transition-colors duration-700 hidden dark:block"></div>
               <img 
                 src={homePageImg} 
                 alt="Interactive Showcase" 
                 className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-[1.03] dark:group-hover:scale-110"
               />
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Contact