import { projects } from "@/data/projects";


export default function Projects() {
  return (
    <section id="projects" className="px-4 md:px-10 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of projects focused on modern web experiences,
            interactive UI, and AI-powered applications.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-purple-500/30
                hover:shadow-[0_0_80px_rgba(168,85,247,0.15)]
                "
            >
              {/* Glow Effects */}
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-500/10 blur-[120px]" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-cyan-500/10 blur-[120px]" />

              <div className="relative z-10 grid lg:grid-cols-2 gap-8 p-6 md:p-8">
                {/* Screenshot */}
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-105
                      "
                   />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  {project.featured && (
                    <div className="inline-flex w-fit items-center px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm mb-5">
                      Featured Project
                    </div>
                  )}

                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-8 mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {project.features.map((feature) => (
                      <div key={feature}>✅ {feature}</div>
                    ))}
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                        px-4 py-2
                        rounded-full
                        border border-white/10
                        bg-white/[0.03]
                        text-sm
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div><p>🟢 Live & Deployed</p></div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      className="
                       px-6 py-3
                       rounded-xl
                       bg-gradient-to-r
                       from-cyan-500
                       to-purple-500
                       font-medium
                       transition-all
                       hover:scale-105
                       "
                    >
                      🚀 Live Demo
                    </a>

                    {project.dashboard && (
                      <a
                        href={project.dashboard}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                         px-6 py-3
                         rounded-xl
                         border border-cyan-500/20
                         bg-cyan-500/10
                         hover:bg-cyan-500/20
                         transition-all
                         "
                      >
                        📊 Dashboard
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      className="
                        px-6 py-3
                        rounded-xl
                        border border-white/10
                        bg-white/[0.03]
                        hover:bg-white/[0.05]
                        transition-all
                        "
                    >
                      💻 GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
