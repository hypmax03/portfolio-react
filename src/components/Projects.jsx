import React from 'react'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <section className="py-12 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="md:flex md:items-center md:gap-8 mb-12">
          <div className="md:w-5/12 overflow-hidden rounded-lg">
            <motion.img src="/img/Gemini_Generated_Image_l76tdhl76tdhl76t.png" className="w-full h-72 object-cover rounded-lg" whileHover={{ scale: 1.06 }} transition={{ duration: 0.5 }} alt="project-1" />
          </div>
          <div className="md:w-7/12 mt-6 md:mt-0">
            <h1 className="text-xl">01</h1>
            <h3 className="text-2xl font-bold">Local Shop Marketing</h3>
            <p className="mt-4 text-gray-200">Developed a web platform to promote local shops and improve visibility. Designed responsive UI and structured layout for better user experience.</p>
            <p className="mt-4">
              <span className="inline-block bg-gray-800 text-white px-2 py-1 rounded mr-2">HTML</span>
              <span className="inline-block bg-gray-600 text-white px-2 py-1 rounded mr-2">CSS</span>
              <span className="inline-block bg-gray-800 text-white px-2 py-1 rounded mr-2">Bootstrap</span>
            </p>
          </div>
        </div>

        <div className="md:flex md:items-center md:gap-8">
          <div className="md:w-7/12">
            <h1 className="text-xl">02</h1>
            <h3 className="text-2xl font-bold">Personal Portfolio Website</h3>
            <p className="mt-4 text-gray-200">Designed and developed a responsive personal portfolio to showcase my skills, projects, and development journey. Focused on clean UI, structured layout, and user-friendly design.</p>
            <ul className="list-disc pl-6 mt-3 text-gray-200">
              <li>Responsive design using Bootstrap</li>
              <li>Structured project and skills sections</li>
              <li>Optimized layout for different screen sizes</li>
              <li>Continuously updated with new technologies</li>
            </ul>
          </div>
          <div className="md:w-5/12 mt-6 md:mt-0">
            <div className="overflow-hidden rounded-lg">
              <motion.img src="/img/Screenshot 2026-04-16 223213.png" className="w-full h-72 object-cover rounded-lg" whileHover={{ scale: 1.06 }} transition={{ duration: 0.5 }} alt="project-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
