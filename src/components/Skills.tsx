import { SiReact, SiNextdotjs } from "react-icons/si";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="px-4 md:px-10 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-black">
            Tech{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to build modern web applications and
            digital experiences.
          </p>
          <div className="flex justify-center gap-3 mt-6 flex-wrap">
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03]">
              MERN Stack
            </span>

            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03]">
              Full Stack Development
            </span>

            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03]">
              AI Assisted Workflow
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* React */}
          <div className="lg:col-span-2 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-transparent p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.2)]">
            <SiReact className="text-cyan-400 text-5xl mb-4" />
            <h3 className="text-2xl font-bold">React</h3>
            <p className="text-gray-400 mt-2">
              Building interactive and scalable user interfaces.
            </p>
          </div>

          {/* Next */}
          <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_50px_rgba(168,85,247,0.2)]">
            <SiNextdotjs className="text-white text-5xl mb-4" />
            <h3 className="text-2xl font-bold">Next.js</h3>
            <p className="text-gray-400 mt-2">
              Full-stack applications with modern web architecture.
            </p>
          </div>

          {/* AI Card */}
          <div
            className="
              md:col-span-2
              lg:col-span-4
              relative
              overflow-hidden
              rounded-3xl
              border
              border-purple-500/20
              bg-gradient-to-r
              from-purple-900/20
              via-pink-900/10
              to-cyan-900/20
              p-8
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-[0_0_80px_rgba(168,85,247,0.25)]"
          >
            <div className="absolute -top-20 right-0 w-72 h-72 bg-purple-500/20 blur-[120px]" />
            <div className="absolute -bottom-20 left-0 w-72 h-72 bg-cyan-500/20 blur-[120px]" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">🤖</span>

                <div>
                  <h3 className="text-2xl font-bold">
                    AI Tools & Productivity
                  </h3>

                  <p className="text-gray-400">
                    ChatGPT • Gemini • GitHub Copilot • Antigravity • Prompt Engineering • AI Workflow Automation
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  Prompt Engineering
                </span>

                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  AI-Assisted Development
                </span>

                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  Workflow Automation
                </span>
              </div>
            </div>
          </div>

          {/* Small Cards */}
          {skills.map((skill) => {
  const Icon = skill.icon;

  return (
    <div
      key={skill.name}
      className="
      group
      rounded-3xl
      border border-white/10
      bg-white/[0.03]
      p-6
      transition-all
      duration-500
      hover:-translate-y-3
      hover:scale-[1.03]
      hover:border-purple-500/30
      hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]
      "
    >
      <div className="text-5xl mb-4 transition-all duration-500 group-hover:rotate-6">
        <Icon className={skill.color} />
      </div>

      <h3 className="font-semibold text-lg">
        {skill.name}
      </h3>
    </div>
  );
})}
        </div>
      </div>
    </section>
  );
}
