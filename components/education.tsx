"use client"

import { useEffect, useState } from "react"

const educationData = [
  {
    year: "May 2025",
    title: "Master of Computer Applications (MCA)",
    institution: "SASTRA Deemed University, Thanjavur",
    cgpa: "7.0/10",
    description: "Advanced studies in computer applications and software development.",
    icon: "🎓",
  },
  {
    year: "May 2023",
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Idhaya College for Women, Kumbakonam",
    cgpa: "8.60/10",
    description: "Comprehensive foundation in computer science, programming, and web technologies.",
    icon: "📚",
  },
  {
    year: "2021",
    title: "Higher Diploma in Computer Applications (HDCA)",
    institution: "CSC (Common Service Centers)",
    description: "Practical training in computer applications and professional skills.",
    icon: "💼",
  },
  {
    year: "2020",
    title: "HSC & SSLC",
    institution: "C.P.Vidhya Mandir Matric HSS, Kumbakonam",
    description: "SSLC: 87.8% | HSC: 65%",
    icon: "🏫",
  },
]

export default function Education() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="education" className="py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          Education & Certifications
        </h2>

        <div className="relative">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-purple-500/30"></div>

          {/* Timeline Grid */}
          <div className="grid md:grid-cols-2 gap-16 mt-10">

            {educationData.map((edu, index) => {
              const isLeft = index % 2 === 0 // even → left, odd → right

              return (
                <div
                  key={index}
                  className={`relative flex ${isLeft ? "md:justify-end" : "md:justify-start"}`}
                >

                  {/* TIMELINE DOT ICON */}
                  <div
                    className={`absolute top-0 
                      ${isLeft ? "right-[-2.8rem]" : "left-[-2.8rem]"} 
                      w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-3xl border-4 border-slate-950 shadow-lg`}
                  >
                    {edu.icon}
                  </div>

                  {/* CARD */}
                  <div
                    className={`
                      w-[90%] sm:w-[70%] md:w-[85%]
                      p-6 bg-slate-900 border border-slate-700 rounded-xl shadow-lg
                      hover:shadow-purple-500/20 hover:border-purple-500/40
                      transition-all duration-700 ease-out backdrop-blur-sm

                      ${loaded
                        ? "opacity-100 translate-y-0 translate-x-0"
                        : isLeft
                        ? "opacity-0 translate-y-10 -translate-x-10"
                        : "opacity-0 translate-y-10 translate-x-10"}

                      ${isLeft ? "text-right mr-auto" : "text-left ml-auto"}
                    `}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-100">{edu.title}</h3>
                        <p className="text-slate-400">{edu.institution}</p>
                      </div>
                      <span className="text-purple-400 font-bold">{edu.year}</span>
                    </div>

                    {edu.cgpa && (
                      <p className="text-sm text-purple-300/70 mb-2">CGPA: {edu.cgpa}</p>
                    )}

                    <p className="text-slate-400">{edu.description}</p>
                  </div>

                </div>
              )
            })}

          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
            Certifications
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-slate-900 border border-slate-700 rounded-lg hover:border-purple-500/50 transition-all transform hover:scale-105 duration-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🏆</span>
                <p className="font-semibold text-slate-100">Internet of Things (IoT)</p>
              </div>
              <p className="text-sm text-slate-400">NPTEL - Score: 70%</p>
            </div>

            <div className="p-4 bg-slate-900 border border-slate-700 rounded-lg hover:border-purple-500/50 transition-all transform hover:scale-105 duration-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🎨</span>
                <p className="font-semibold text-slate-100">Graphics & Web Designing</p>
              </div>
              <p className="text-sm text-slate-400">NCVRT Diploma</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
