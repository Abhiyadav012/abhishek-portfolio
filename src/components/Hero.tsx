"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";

import { motion } from "framer-motion";

function FloatingIcon({
  children,
  className,
  duration = 3,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="px-4 py-8 md:px-10">
      <div className="max-w-7xl mx-auto rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 p-8 md:p-14">
          {/* Left Side */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-purple-400 text-lg mb-3">Hello, World 👋</p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Abhishek
              </span>
            </h1>

            <p className="mt-5 text-xl text-gray-300">
              Full Stack Developer • AI Enthusiast • Content Creator
            </p>

            <p className="mt-6 text-gray-400 max-w-xl">
              BCA student and Full Stack Developer passionate about building
              scalable web applications, AI-powered products, and real-world
              projects using React, Next.js, Node.js, and MongoDB.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-7 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-7 py-3 rounded-full border border-purple-500 hover:bg-purple-500/10 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-[45%] flex justify-center items-end">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-purple-600 blur-[100px] opacity-40 rounded-full"></div>

              {/* icons */}
              <FloatingIcon
                duration={3}
                className="hidden md:block absolute top-10 left-0 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
              >
                <SiReact className="text-cyan-400 text-3xl" />
              </FloatingIcon>

              <FloatingIcon
                duration={4}
                className="hidden md:block absolute top-20 right-0 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
              >
                <SiNextdotjs className="text-white text-3xl" />
              </FloatingIcon>

              <FloatingIcon
                duration={5}
                className="hidden md:block absolute bottom-24 left-4 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
              >
                <SiTypescript className="text-blue-500 text-3xl" />
              </FloatingIcon>

              <FloatingIcon
                duration={6}
                className="hidden md:block absolute bottom-10 right-2 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
              >
                <SiNodedotjs className="text-green-500 text-3xl" />
              </FloatingIcon>

              <img
                src="/profile.png"
                alt="Abhishek"
                className="relative w-[280px] sm:w-[340px] md:w-[450px] lg:w-[700px] translate-y-6 md:translate-y-10 lg:translate-y-15"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
