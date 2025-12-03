"use client"

import type React from "react"
import { useState } from "react"
import { AiOutlineMail, AiOutlineLinkedin, AiOutlinePhone } from "react-icons/ai"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <>
      <section id="contact" className="py-20 px-4 bg-slate-900/50 backdrop-blur">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Get In Touch
          </h2>
          <p className="text-center text-slate-400 mb-12 text-lg">
            I'm currently looking for job opportunities. Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 transition-all">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg flex-shrink-0">
                  <AiOutlineMail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-100 mb-1">Email</h3>
                  <p className="text-slate-400">swedhaa145@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex-shrink-0">
                  <AiOutlinePhone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-100 mb-1">Phone</h3>
                  <p className="text-slate-400">+91 74185 40340</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all">
                <div className="p-3 bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-lg flex-shrink-0">
                  <AiOutlineLinkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-100 mb-1">LinkedIn</h3>
                  <p className="text-slate-400">linkedin.com/in/swedhaa2003</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-purple-500/50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur py-6 mt-12 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center text-slate-400 flex flex-wrap justify-center items-center gap-4">
          <span>© {new Date().getFullYear()} Swedhaa</span>
          <span className="mx-2">|</span>
          <span>Designed & Developed by <span className="text-purple-400 font-semibold">Swedhaa</span></span>
          <span className="mx-2">|</span>
          <a href="mailto:swedhaa145@gmail.com" className="flex items-center gap-1 hover:text-white transition-colors">
            <AiOutlineMail /> Email
          </a>
          <span className="mx-2">|</span>
          <a href="tel:+917418540340" className="flex items-center gap-1 hover:text-white transition-colors">
            <AiOutlinePhone /> Phone
          </a>
          <span className="mx-2">|</span>
          <a href="https://linkedin.com/in/swedhaa2003" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
            <AiOutlineLinkedin /> LinkedIn
          </a>
        </div>
      </footer>
    </>
  )
}
