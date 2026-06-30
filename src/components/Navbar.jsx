import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur sticky top-0 z-50 shadow-md">
      <div className="relative max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-2xl font-bold"
          href="#"
        >
          ManuAnand
        </motion.a>

        <ul className="hidden md:flex gap-8 text-lg">
          <li>
            <a
              className="font-medium text-black hover:scale-105 transition"
              href="#about"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              className="font-medium text-black hover:scale-105 transition"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="font-medium text-black hover:scale-105 transition"
              href="#project"
            >
              Project
            </a>
          </li>
          <li>
            <a
              className="font-medium text-black hover:scale-105 transition"
              href="#contact"
            >
              Contact Me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            className="hidden md:inline-block bg-black text-white px-4 py-2 rounded-md"
            href="#"
            onClick={() => window.open("/Manu_Anand_CV.pdf", "_blank")}
          >
            Resume
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl p-2"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="absolute top-full right-6 mt-2 w-56 bg-white rounded-lg shadow-lg p-4 md:hidden">
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  onClick={() => setOpen(false)}
                  className="block px-2 py-2 rounded hover:bg-gray-100"
                  href="#about"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  onClick={() => setOpen(false)}
                  className="block px-2 py-2 rounded hover:bg-gray-100"
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  onClick={() => setOpen(false)}
                  className="block px-2 py-2 rounded hover:bg-gray-100"
                  href="#project"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  onClick={() => setOpen(false)}
                  className="block px-2 py-2 rounded hover:bg-gray-100"
                  href="#contact"
                >
                  Contact Me
                </a>
              </li>
              <li>
                <a
                  className="block mt-2 bg-black text-white text-center px-3 py-2 rounded"
                  href="#"
                  onClick={() => window.open("/Manu_Anand_CV.pdf", "_blank")}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
