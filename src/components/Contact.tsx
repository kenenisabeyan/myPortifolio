import React, { useState } from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! (Demo)')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-16 md:py-24 px-6 relative z-10 bg-white dark:bg-transparent border-t border-gray-100 dark:border-white/[0.05]">
      
      {/* Dark background ambients */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent pointer-events-none hidden dark:block" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none hidden dark:block" />

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center relative z-10 transition-all duration-300">
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Left Container - Contact Info */}
          <div className="lg:col-span-2 bg-gray-50 dark:bg-[#050A14]/80 rounded-3xl dark:rounded-[2.5rem] p-8 md:p-10 border border-gray-200 dark:border-white/[0.05] dark:hover:border-cyan-500/30 transition-all duration-300 dark:duration-500 flex flex-col gap-10 shadow-sm dark:shadow-2xl dark:backdrop-blur-xl group">
            
            {/* Location */}
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-500 dark:text-cyan-400 shrink-0">
                <FaMapMarkerAlt size={24} />
              </div>
              <div className="flex flex-col justify-center h-14 w-full overflow-hidden">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Location</h3>
                <p className="text-gray-600 dark:text-gray-400 text-base flex-1 overflow-hidden">Adama, Ethiopia</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-500 dark:text-purple-400 shrink-0">
                <FaEnvelope size={22} />
              </div>
              <div className="flex flex-col justify-center h-14 w-full overflow-hidden">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Email</h3>
                <a href="mailto:kenenisab05@gmail.com" className="text-blue-600 dark:text-cyan-400 text-base hover:underline transition-all truncate block">
                  kenenisab05@gmail.com
                </a>
              </div>
            </div>

            {/* Follow Me */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Follow Me</h3>
              <div className="flex items-center gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-cyan-500 hover:text-gray-900 dark:hover:text-black transition-all duration-300 shadow-sm dark:shadow-none">
                  <FaGithub size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-cyan-500 hover:text-gray-900 dark:hover:text-black transition-all duration-300 shadow-sm dark:shadow-none">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-cyan-500 hover:text-gray-900 dark:hover:text-black transition-all duration-300 shadow-sm dark:shadow-none">
                  <FaYoutube size={20} />
                </a>
              </div>
            </div>

            {/* Map container */}
            <div className="mt-auto w-full h-[220px] rounded-2xl overflow-hidden relative group/map border border-gray-200 dark:border-white/10 shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.11524316931!2d39.188!3d8.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b1fe3dafd5785%3A0x6bba8479ba0a5eb5!2sAdama!5e0!3m2!1sen!2set!4v1714470830154!5m2!1sen!2set" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full opacity-80 group-hover/map:opacity-100 transition-opacity duration-300 dark:filter dark:grayscale dark:contrast-125 dark:opacity-70 dark:group-hover/map:opacity-90 z-0"
              ></iframe>
              <a href="https://maps.google.com/?q=Adama,Ethiopia" target="_blank" rel="noopener noreferrer" className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-black/80 px-4 py-2 rounded-lg text-sm font-semibold text-blue-600 dark:text-cyan-400 flex items-center gap-2 shadow-lg hover:scale-105 transition-transform backdrop-blur-sm">
                Open in Maps
                <FiExternalLink />
              </a>
            </div>
          </div>
          
          {/* Right Container - Form */}
          <div className="lg:col-span-3 bg-gray-50 dark:bg-[#050A14]/80 rounded-3xl dark:rounded-[2.5rem] p-8 md:p-12 border border-gray-200 dark:border-white/[0.05] dark:hover:border-cyan-500/30 transition-all duration-300 dark:duration-500 relative group shadow-sm dark:shadow-2xl dark:backdrop-blur-xl transform hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
            {/* Corner glowing accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-[80px] opacity-50 group-hover:opacity-100 group-hover:bg-cyan-500/20 transition-all duration-700 pointer-events-none hidden dark:block" />
            
            <div className="mb-10 text-center md:text-left relative z-10">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white inline-block mb-4">Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500">Me</span></h2>
               <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">Have a project in mind or want to discuss a collaboration? Feel free to reach out.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-sm font-medium dark:font-semibold text-gray-600 dark:text-gray-300 ml-1">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    placeholder="Your name" 
                    required
                    className="w-full px-5 py-4 bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.05] text-base font-normal text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-cyan-500/50 transition-all shadow-sm dark:shadow-inner dark:backdrop-blur-md" 
                  />
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-sm font-medium dark:font-semibold text-gray-600 dark:text-gray-300 ml-1">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    placeholder="Your email" 
                    required
                    className="w-full px-5 py-4 bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.05] text-base font-normal text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-cyan-500/50 transition-all shadow-sm dark:shadow-inner dark:backdrop-blur-md" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="text-sm font-medium dark:font-semibold text-gray-600 dark:text-gray-300 ml-1">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange}
                  placeholder="Subject" 
                  required
                  className="w-full px-5 py-4 bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.05] text-base font-normal text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-cyan-500/50 transition-all shadow-sm dark:shadow-inner dark:backdrop-blur-md" 
                />
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="text-sm font-medium dark:font-semibold text-gray-600 dark:text-gray-300 ml-1">Message</label>
                <textarea 
                  name="message" 
                  rows={6} 
                  value={formData.message} 
                  onChange={handleChange}
                  placeholder="Your message" 
                  required
                  className="w-full px-5 py-4 bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.05] text-base font-normal text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-cyan-500/50 transition-all resize-none shadow-sm dark:shadow-inner dark:backdrop-blur-md"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full md:w-max px-10 mt-2 py-4 bg-gray-900 dark:bg-cyan-500 text-white dark:text-black border border-transparent dark:border-transparent rounded-xl font-bold dark:font-black text-sm uppercase tracking-widest hover:bg-gray-800 dark:hover:bg-[#030610] dark:hover:text-cyan-50 dark:hover:border-cyan-400/50 transition-colors shadow-md dark:shadow-[0_0_20px_rgba(34,211,238,0.4)] dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:-translate-y-1"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Contact