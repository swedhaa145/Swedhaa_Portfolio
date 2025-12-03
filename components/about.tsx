"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-900/50 backdrop-blur">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE - IMAGE + INFO */}
          <div className="flex flex-col items-center gap-10">
            {/* Profile Image */}
            <div className="relative group mt-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-500" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-slate-900 bg-slate-800 shadow-2xl transform group-hover:scale-105 transition duration-300">
                <img
                  src="/swe.jpg"
                  alt="Swedhaa Murugan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              </div>
            </div>

            {/* Internship + Location Cards */}
            <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
              {[
                { label: "Internship", value: "CodeBind Technologies" },
                { label: "Location", value: "Chennai, India" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center p-4 rounded-xl bg-slate-800/60 border border-slate-700 hover:border-purple-500/60 transition cursor-default"
                >
                  <h4 className="text-purple-400 font-semibold text-sm">{item.label}</h4>
                  <p className="text-slate-300 text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - TEXT CONTENT */}
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate Full Stack Web Developer driven by creativity, modern technology,
              and the goal of delivering impactful digital solutions. I focus on building scalable
              web applications with clean design, secure architecture and high performance.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              I completed my Master's degree in Computer Applications from SASTRA Deemed University
              and currently work at CodeBind Technologies, where I explore trending technologies and
              build real-world full-stack applications.
            </p>

            {/* WHAT I DO */}
            <div className="pt-4 space-y-4">
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                What I Do
              </h3>

              <div className="space-y-3">
                {[
                  "Build responsive & dynamic web applications",
                  "Develop full-stack systems using latest frameworks",
                  "Create performance-optimized and secure solutions",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/40 border border-slate-700 hover:bg-slate-800 hover:border-purple-500/70 hover:scale-[1.02] transition cursor-pointer"
                  >
                    <span className="text-purple-400 text-2xl">⚡</span>
                    <span className="text-slate-300">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
