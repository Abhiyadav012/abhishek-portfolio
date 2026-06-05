"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav
        className="
        fixed top-0 left-0 w-full z-50
        bg-[#050816]/80 backdrop-blur-lg
        border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div>
          <h1 className="text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Abhishek.
          </h1>

          <p className="text-[10px] uppercase tracking-[4px] text-gray-500">
            Full Stack Developer
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => {
                  setActive(link.href.replace("#", ""));
                  setIsOpen(false);
                }}
                className={`transition-colors ${
                  active === link.href.replace("#", "")
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-purple-400"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-700 transition"
          >
            📄 Resume
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-6 pb-6">
          <ul className="flex flex-col gap-4 text-lg text-gray-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActive(link.href.replace("#", ""));
                    setIsOpen(false);
                  }}
                  className={`transition-colors ${
                    active === link.href.replace("#", "")
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-purple-400"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
           href="/resume.pdf"
           target="_blank"
           rel="noopener noreferrer"
           className="mt-5 block text-center w-full py-3 rounded-full bg-purple-600"
          >
  📄 Resume
</a>
        </div>
      )}
    </nav>
  );
}
