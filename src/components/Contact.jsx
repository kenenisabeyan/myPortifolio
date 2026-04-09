import React, { useState } from 'react'

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
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Badge */}
        <div className="flex items-center gap-2 bg-[#1A1A1A] py-2 px-4 rounded-full mb-6 border border-[#2A2A2A]">
          <span>✉️</span>
          <span className="text-sm text-gray-300 font-medium">Contact Information</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 tracking-tight">
          Get In Touch With Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Left Form Container */}
          <div className="bg-[#0E0E0E] rounded-3xl p-8 border border-[#1a1a1a]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-300 ml-1">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange}
                  placeholder="Your name" 
                  required
                  className="w-full px-4 py-4 bg-[#2b6de4] text-white placeholder-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-300 ml-1">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  placeholder="Your email address" 
                  required
                  className="w-full px-4 py-4 bg-[#2b6de4] text-white placeholder-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                />
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="text-sm text-gray-300 ml-1">Message</label>
                <textarea 
                  name="message" 
                  rows="6" 
                  value={formData.message} 
                  onChange={handleChange}
                  placeholder="Your message" 
                  required
                  className="w-full px-4 py-4 bg-[#2b2b36] border border-[#3a3a4a] text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a4a5a] resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full mt-2 py-4 bg-[#e5f0ff] hover:bg-white text-black font-semibold rounded-lg transition-colors"
              >
                SEND MESSAGE
              </button>

            </form>
          </div>

          {/* Right Orange Graphic Container */}
          <div className="bg-[#de8d42] rounded-3xl min-h-[400px] flex items-center justify-center relative overflow-hidden">
             {/* 
                This is where the 3D computer model from the screenshot should go.
                We're keeping the layout container ready for it.
             */}
             <div className="text-black/30 font-bold text-2xl px-6 text-center">
               [ 3D Computer Desk Model Holder ]
             </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Contact