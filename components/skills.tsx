"use client"

import { useEffect, useState } from "react"

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    skills: [
      { name: "C", icon: "🅲" },
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "PHP", icon: "🐘" },
    ],
    color: "from-purple-500 to-purple-400",
  },
  {
    title: "Frameworks & Libraries",
    icon: "⚛️",
    skills: [
      { name: "Bootstrap", icon: "🅱️" },
      { name: "React JS", icon: "⚛️" },
    ],
    color: "from-blue-500 to-blue-400",
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: [{ name: "MySQL", icon: "🗄️" }],
    color: "from-cyan-500 to-cyan-400",
  },
  {
    title: "Tools & Software",
    icon: "🛠️",
    skills: [
      { name: "VS Code", icon: "💻" },
      { name: "Figma", icon: "🎨" },
      { name: "Git", icon: "🌿" },
      { name: "GitHub", icon: "🐙" },
    ],
    color: "from-indigo-500 to-indigo-400",
  },
  {
    title: "Soft Skills",
    icon: "💡",
    skills: [
      { name: "Problem Solving", icon: "🧩" },
      { name: "Adaptability", icon: "🌱" },
      { name: "Time Management", icon: "⏰" },
      { name: "Communication", icon: "💬" },
      { name: "Leadership", icon: "👑" },
    ],
    color: "from-pink-500 to-pink-400",
  },
]

export default function Skills() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          Skills & Expertise
        </h2>

        {/* Custom 2-2-1 Layout */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`
                w-full md:w-[90%] lg:w-[85%] 
                bg-slate-800 border border-slate-700 rounded-xl p-6 
                transform transition-all duration-500 
                ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} 
                hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-slate-700/50 
                flex flex-col
                ${index === 4 ? "md:col-span-2 md:w-1/2 lg:w-1/2 justify-self-center" : ""}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-slate-100">{category.title}</h3>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`min-w-[120px] flex items-center justify-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-slate-100 bg-gradient-to-r ${category.color} bg-opacity-20 border border-slate-700 hover:border-slate-500 hover:scale-105 hover:shadow-md hover:bg-opacity-30 transition-all duration-200`}
                  >
                    <span>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
