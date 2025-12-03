"use client"

const projects = [
  {
    id: 1,
    title: "Dynamic Product Showcase with Online Rental & Booking",
    description:
      "Built a dynamic product showcase web app with online rental and booking features enabling real-time product browsing, availability checks, and secure reservations.",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    image: "/ecommerce-website-interface.jpg",
    icon: "🛍️",
  },
  {
    id: 2,
    title: "Citrus Diseases and Pests Detection Model",
    description:
      "Developed a deep learning model using YOLOv8 with Self-Attention for accurate detection of citrus crop diseases and pests with improved precision and real-time performance.",
    tech: ["Deep Learning", "YOLOv8", "Self-Attention", "Python"],
    image: "/machine-learning-dashboard.jpg",
    icon: "🤖",
  },
  {
    id: 3,
    title: "Responsive Frontend Projects",
    description:
      "Developed a strong understanding of best practices in HTML, CSS, and JavaScript through practical challenges and real-world project implementations.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    image: "/frontend-web-design.jpg",
    icon: "🎨",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/50 backdrop-blur">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-xl overflow-hidden border border-slate-700 bg-slate-900 hover:border-purple-500 hover:shadow-lg transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute top-3 right-3 text-3xl bg-slate-900/80 p-2 rounded-lg border border-slate-700">
                  {project.icon}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-slate-300 rounded border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
