import React from 'react'
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="inline-block bg-black text-white px-4 py-2 rounded-full mb-4">Open To Work</span>
          <h1 className="text-3xl font-light">Hello I’am <span className="font-bold">Manu Anand.</span></h1>
          <h1 className="text-3xl font-bold">MERN Stack <span className="text-outline">Developer</span></h1>
          <h2 className="text-xl font-light mt-2">Based in <span className="font-bold">India</span></h2>
          <p className="text-gray-600 mt-4">Passionate MERN Stack Developer building modern, responsive and scalable web applications with clean UI and great user experiences.</p>

          <div className="flex gap-4 mt-6">
            <motion.a whileHover={{ scale: 1.08 }} transition={{ duration: 0.5, ease: 'easeInOut' }} href="https://github.com/hypmax03" className="icon-box"><i className="fa-brands fa-github" /></motion.a>
            <motion.a whileHover={{ scale: 1.08 }} transition={{ duration: 0.5, ease: 'easeInOut' }} href="https://www.linkedin.com/in/manu-anand-a-3027b5305/" className="icon-box"><i className="fa-brands fa-linkedin" /></motion.a>
            <motion.a whileHover={{ scale: 1.08 }} transition={{ duration: 0.5, ease: 'easeInOut' }} href="mailto:manuanandam@gmail.com" className="icon-box"><i className="fa-solid fa-envelope" /></motion.a>
            <motion.a whileHover={{ scale: 1.08 }} transition={{ duration: 0.5, ease: 'easeInOut' }} href="https://www.instagram.com/manu_x03/?__pwa=1" className="icon-box"><i className="fa-brands fa-instagram" /></motion.a>
          </div>
        </div>

        <div className="text-center">
          <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
            {[
              { cls: 'fa-brands fa-react', left: '6%', top: '6%' },
              { cls: 'fa-brands fa-js', left: '70%', top: '4%' },
              { cls: 'fa-brands fa-html5', left: '4%', top: '68%' },
              { cls: 'fa-brands fa-python', left: '60%', top: '60%' },
              { cls: 'fa-solid fa-code', left: '40%', top: '34%' },
              { cls: 'fa-brands fa-css3-alt', left: '26%', top: '6%' },
              { cls: 'fa-brands fa-node-js', left: '78%', top: '46%' },
              { cls: 'fa-brands fa-github', left: '48%', top: '74%' },
              { cls: 'fa-brands fa-docker', left: '72%', top: '74%' },
              { cls: 'fa-brands fa-python', left: '18%', top: '44%' },
            ].map((icon, i) => (
              <motion.div
                key={i}
                role="img"
                aria-label={icon.cls}
                className="absolute flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-black text-white shadow-md text-2xl md:text-3xl"
                style={{ left: icon.left, top: icon.top }}
                initial={{ y: 0, x: 0 }}
                animate={{ x: [0, 100, 0], y: [0, -10, 0] }}
                whileHover={{ scale: 1.18, rotate: 6 }}
                transition={{
                  x: { duration: 4 + i * 0.4, repeat: Infinity, ease: 'easeInOut' },
                  y: { duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut' },
                  default: { duration: 0.35, ease: 'easeInOut', delay: i * 0.08 }
                }}
              >
                <i className={icon.cls} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
