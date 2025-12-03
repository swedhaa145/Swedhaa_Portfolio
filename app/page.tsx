"use client"

import { useState } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")

  return (
    <main className="dark bg-background text-foreground min-h-screen">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* 1. Home */}
      <Hero setActiveSection={setActiveSection} />

      {/* 2. About */}
      <About />

      {/* 3. Education */}
      <Education />

      {/* 4. Skills */}
      <Skills />

      {/* 5. Projects */}
      <Projects />

      {/* 6. Contact */}
      <Contact />
    </main>
  )
}
