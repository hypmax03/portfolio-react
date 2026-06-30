import React from 'react'

export default function About() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-0 w-full md:w-2/5 text-center">
          <img src="/cropped_circle_image.png" className="mx-auto rounded-2xl max-h-96 object-contain" alt="profile" />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">About <span className="text-outline">Me</span></h1>
          <p className="text-gray-600 mt-4">Full stack developer specializing in the MERN stack, focused on building scalable and high-performance web applications. I have a strong interest in developing clean, efficient backend systems and intuitive user interfaces, combining both functionality and user experience.
            With a background in computer engineering, I have developed a solid understanding of core programming concepts and practical development through internships and real-world projects. I am currently expanding my expertise with modern tools and frameworks like Next.js while continuously refining my problem-solving and development skills.
            Driven by curiosity and growth, I am committed to learning new technologies and building impactful digital solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
