export default function About() {
  const cardClass = `
    group
    relative
    overflow-hidden
    rounded-3xl
    border border-white/10
    bg-gradient-to-br from-white/[0.06] to-white/[0.02]
    backdrop-blur-xl
    p-8
    transition-all
    duration-500
    hover:-translate-y-3
    hover:border-purple-500/40
    hover:shadow-[0_0_80px_rgba(168,85,247,0.25)]
  `;

  return (
    <section
      id="about"
      className="relative px-4 md:px-10 py-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Passionate developer focused on building modern web applications,
            exploring AI technologies, and creating impactful digital
            experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Card */}
          <div className={cardClass}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm mb-5">
                🚀 Full Stack Developer & AI Enthusiast
              </div>

              <h3 className="text-2xl font-bold tracking-tight">Who Am I?</h3>

              <div className="w-12 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 my-5"></div>

              <p className="text-gray-400 leading-7 md:leading-8 text-sm md:text-base">
                Hi, I'm Abhishek Kumar, a BCA student and Full Stack Developer
                passionate about building modern web applications and solving
                real-world problems through technology.
              </p>

              <p className="text-gray-400 leading-7 md:leading-8 text-sm md:text-base mt-4">
                I have hands-on experience with React, Next.js, Node.js,
                Express.js, MongoDB, and Tailwind CSS. I enjoy transforming
                ideas into responsive, user-friendly, and scalable digital
                products.
              </p>

              <p className="text-gray-400 leading-7 md:leading-8 text-sm md:text-base mt-4">
                Beyond development, I actively participate in hackathons, AI
                workshops, and developer communities to continuously improve my
                skills and stay updated with emerging technologies.
              </p>
              <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start">
                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">3+</h3>
                  <p className="text-gray-400 text-sm">Projects</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-purple-400">10+</h3>
                  <p className="text-gray-400 text-sm">Technologies</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-pink-400">6+</h3>
                  <p className="text-gray-400 text-sm">Certifications</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className={cardClass}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold tracking-tight">Quick Info</h3>

              <div className="w-12 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 my-5"></div>

              <div className="grid grid-cols-2 gap-5">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-400/30 hover:bg-white/[0.05]">
                  <p className="text-gray-500 text-sm">Education</p>
                  <p className="font-medium mt-1">BCA Student </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-400/30 hover:bg-white/[0.05]">
                  <p className="text-gray-500 text-sm">Focus</p>
                  <p className="font-medium mt-1">MERN Stack & AI</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-400/30 hover:bg-white/[0.05]">
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="font-medium mt-1">Patna, India</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-400/30 hover:bg-white/[0.05]">
                  <p className="text-gray-500 text-sm">Vision</p>
                  <p className="font-medium mt-1">
                    Building innovative digital products that create real-world
                    impact
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-400/30 hover:bg-white/[0.05]">
                  <p className="text-gray-500 text-sm">Projects</p>
                  <p className="font-medium mt-1">3+ Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
