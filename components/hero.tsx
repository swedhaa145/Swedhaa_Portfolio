"use client"

import { useEffect, useState } from "react"

interface HeroProps {
  setActiveSection: (section: string) => void
}

interface Particle {
  id: number
  left: number
  top: number
  size: number
  delay: number
  speed: number
}

export default function Hero({ setActiveSection }: HeroProps) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 6 + 3,
      delay: Math.random() * 5,
      speed: Math.random() * 8 + 5,
    }))
    setParticles(newParticles)
  }, [])

  const handleScroll = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">

        {/* Animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-blue-900 to-purple-900 animate-gradient-bg" />

        {/* Rotating rings */}
        <div className="absolute w-[900px] h-[900px] border-[1px] border-purple-500/20 rounded-full animate-rotate-slow -top-40 left-1/2 -translate-x-1/2"></div>
        <div className="absolute w-[600px] h-[600px] border-[1px] border-blue-400/20 rounded-full animate-rotate-reverse top-1/3 left-1/2 -translate-x-1/2"></div>

        {/* Pulse glow center */}
        <div className="absolute w-[350px] h-[350px] bg-purple-500/10 blur-[120px] rounded-full animate-pulse-mid top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

        {/* Moving blobs */}
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob1 top-1/4 left-1/3" />
        <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-blob2 bottom-1/4 right-1/4" />
        <div className="absolute w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-blob3 top-1/2 left-1/2" />

        {/* Floating particles */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-gradient-to-br from-purple-400 to-blue-400"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
              animation: `floatParticle ${p.speed}s ease-in-out ${p.delay}s infinite alternate, twinkle 3s ease-in-out ${p.delay}s infinite`,
              opacity: 0.7,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-medium text-purple-400 mb-2">Hi, I'm</h2>
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-blue-400">
            Swedhaa Murugan
          </h1>
          <h3 className="text-2xl md:text-3xl text-slate-300 mb-6 font-semibold whitespace-nowrap overflow-hidden border-r-4 border-slate-300 animate-type-ltr">
            Turning Ideas into Interactive Web Magic
          </h3>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Building responsive, scalable web applications with modern technologies. Specialized in frontend and backend
            development with a passion for clean code and exceptional user experience.
          </p>
        </div>

        <div className="flex gap-4 justify-center mb-12 flex-wrap">
          <button
            onClick={() => handleScroll("projects")}
            className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 font-semibold text-lg"
          >
            View My Work
          </button>

          <button
            onClick={() => handleScroll("contact")}
            className="px-10 py-4 border-2 border-purple-500 text-purple-300 rounded-lg hover:bg-purple-500/10 transition-all duration-300 font-semibold text-lg"
          >
            Get In Touch
          </button>

          <a
            href="/Swedhaa Murugan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold text-lg"
          >
            See My CV
          </a>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes floatParticle {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-25px) translateX(15px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes type-ltr {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blob1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(60px, -40px) scale(1.15); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-50px, 50px) scale(1.1); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(40px, 60px) scale(1.15); }
        }

        @keyframes rotate-slow {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes rotate-reverse {
          0% { transform: translate(-50%, -50%) rotate(360deg); }
          100% { transform: translate(-50%, -50%) rotate(0deg); }
        }

        @keyframes pulse-mid {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.3); opacity: 0.3; }
        }

        .animate-rotate-slow { animation: rotate-slow 28s linear infinite; }
        .animate-rotate-reverse { animation: rotate-reverse 32s linear infinite; }
        .animate-pulse-mid { animation: pulse-mid 6s ease-in-out infinite; }

        .animate-gradient-bg {
          background-size: 200% 200%;
          animation: gradient-bg 15s ease infinite;
        }

        @keyframes gradient-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-type-ltr { animation: type-ltr 3s steps(35, end) forwards; }
      `}</style>
    </section>
  )
}
