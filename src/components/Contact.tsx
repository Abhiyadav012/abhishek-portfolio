import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-4 md:px-10 py-24 relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black">
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Open to collaborations, internships, freelance opportunities, and
            exciting tech discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left */}
          <div
            className="
            rounded-3xl
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-8
            hover:border-purple-500/30
            hover:shadow-[0_0_50px_rgba(168,85,247,0.15)]
            transition-all
            duration-500
            "
          >
            <span className="inline-flex px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm">
              🚀 Actively Looking for MERN Stack Internship Opportunities
            </span>

            <div className="flex flex-wrap gap-3 mt-6">
              <h4 className="font-semibold mb-3">Currently Looking For:</h4>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-2 rounded-full border border-cyan-500/20">
                  MERN Internship
                </span>

                <span className="px-3 py-2 rounded-full border border-purple-500/20">
                  Full Stack Projects
                </span>

                <span className="px-3 py-2 rounded-full border border-pink-500/20">
                  Open Source Collaboration
                </span>
              </div>
            </div>
            <br />

            <h3 className="text-4xl font-bold leading-tight">
              Let's Build
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Something Extraordinary
              </span>
            </h3>

            <p className="text-gray-400 mt-5 leading-8">
              Whether you have an exciting project, internship opportunity,
              startup idea, or just want to connect, I'd love to hear from you.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <a
                href="mailto:abhisekyadav03017@gmail.com"
                className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition"
              >
                Preferred Contact Method
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-purple-500 hover:bg-purple-500/10 transition"
              >
                📄 View Resume
              </a>
            </div>
          </div>

          {/* Right */}
          <div
            className="
            rounded-3xl
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-8
            "
          >
            <div className="space-y-5">
              <a
                href="mailto:abhisekyadav03017@gmail.com"
                className="
                flex items-center gap-4
                p-5
                rounded-2xl
                border border-white/10
                hover:border-purple-500/30
                hover:bg-white/[0.05]
                transition-all
                "
              >
                <MdEmail className="text-red-500 text-3xl" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="break-all">abhisekyadav03017@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/Abhiyadav012"
                target="_blank"
                className="
                flex items-center gap-4
                p-5
                rounded-2xl
                border border-white/10
                hover:border-purple-500/30
                hover:bg-white/[0.05]
                transition-all
                "
              >
                <SiGithub className="text-white text-3xl" />
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <p className="break-all">@Abhiyadav012</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/abhishek-01-mern-dev/"
                target="_blank"
                className="
                flex items-center gap-4
                p-5
                rounded-2xl
                border border-white/10
                hover:border-purple-500/30
                hover:bg-white/[0.05]
                transition-all
                "
              >
                <FaLinkedin className="text-blue-500 text-3xl" />
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <p>Abhishek Kumar</p>
                </div>
              </a>

              <div
                className="
                p-5
                rounded-2xl
                border border-white/10
                "
              >
                <p className="text-sm text-gray-500">Location</p>

                <p className="mt-1">Patna, Bihar, India</p>

                <p className="text-sm text-gray-500 mt-2">
                  Available for Remote Opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
