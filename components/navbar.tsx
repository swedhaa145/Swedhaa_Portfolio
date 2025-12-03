"use client"

import { useState } from "react"
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineBook, AiOutlineMail } from "react-icons/ai"
import { GiSkills } from "react-icons/gi"

interface NavbarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: "hero", label: "Home", icon: <AiOutlineHome className="text-white w-5 h-5" /> },
    { id: "about", label: "About", icon: <AiOutlineUser className="text-white w-5 h-5" /> },
     { id: "education", label: "Education", icon: <AiOutlineBook className="text-white w-5 h-5" /> },
    { id: "skills", label: "Skills", icon: <GiSkills className="text-white w-5 h-5" /> },
    { id: "projects", label: "Projects", icon: <AiOutlineProject className="text-white w-5 h-5" /> },
    { id: "contact", label: "Contact", icon: <AiOutlineMail className="text-white w-5 h-5" /> },
  ]

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    setIsOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-slate-900/95 via-indigo-900/80 to-slate-900/95 backdrop-blur-xl shadow-xl z-50 border-b border-indigo-700/50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center font-[Poppins]">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex justify-center items-center
            shadow-[0_0_18px_6px_rgba(109,40,217,0.7)] border border-purple-400/70 backdrop-blur-md">
            <span className="text-2xl font-extrabold text-white tracking-widest">SM</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 ml-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative flex items-center justify-start px-4 py-2 transition-all text-lg font-extrabold tracking-wide rounded-lg group
                ${activeSection === item.id
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
                  : "text-slate-300 hover:text-white"
                }`}
            >
              <span className="mr-2">{item.icon}</span>
              <span className="align-middle">{item.label}</span>

              {/* Hover Glow Box */}
              <span className="absolute inset-0 rounded-lg border border-purple-500/60 scale-0 opacity-0
                group-hover:scale-110 group-hover:opacity-100 transition-all duration-300
                group-hover:shadow-[0_0_25px_8px_rgba(168,85,247,0.9)]"></span>
            </button>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-lg border-b border-slate-800 md:hidden">
            <div className="flex flex-col p-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center py-3 px-4 text-left text-lg font-semibold text-slate-300 hover:bg-slate-800/60 rounded-lg transition-all"
                >
                  <span className="mr-2">{item.icon}</span>
                  <span className="align-middle">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

      </div>
    </nav>
  )
}
