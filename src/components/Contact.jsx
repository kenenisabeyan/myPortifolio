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
    <section id="contact" className="py-20 px-6 bg-dark/80">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get in Touch – Let’s Connect</h2>
        <p className="text-center text-gray-300 mb-12">I'm always open to discussing new projects or opportunities.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Your name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}
              placeholder="What's your good name?" required
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 text-white" />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Your Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}
              placeholder="What's your email address?" required
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 text-white" />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Your Message</label>
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange}
              placeholder="How can I help you?" required
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 text-white"></textarea>
          </div>
          <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact