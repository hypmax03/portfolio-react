import React from 'react'

export default function Contact() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Get In <span className="text-outline">Touch</span></h2>
          <p className="text-gray-600">Have a project in mind or want to connect? Feel free to reach out.</p>
        </div>

        <div className="md:flex md:gap-8">
          <div className="md:w-5/12">
            <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
            <p className="mb-2"><i className="fa-solid fa-envelope mr-2" /> manuanandam@gmail.com</p>
            <p className="mb-2"><i className="fa-solid fa-phone mr-2" /> +91 8129330074</p>
            <p className="mb-4"><i className="fa-solid fa-location-dot mr-2" /> Calicut, India</p>

            <div className="flex gap-4 mt-4">
              <a href="https://github.com/hypmax03" className="contact-icon  fo-icon"><i className="fa-brands fa-github " /></a>
              <a href="https://www.linkedin.com/in/manu-anand-a-3027b5305/" className="contact-icon fo-icon"><i className="  fa-brands fa-linkedin" /></a>
              <a href="mailto:manuanandam@gmail.com" className="contact-icon fo-icon"><i className="fa-solid fa-envelope " /></a>
              <a href="https://www.instagram.com/manu_x03/?__pwa=1" className="contact-icon fo-icon"><i className=" fa-brands fa-instagram" /></a>
            </div>
          </div>

          <div className="md:w-7/12 mt-8 md:mt-0">
            <form action="https://formspree.io/f/mzdlakzq" method="POST">
              <div className="mb-4"><input name="name" type="text" required className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Your Name" /></div>
              <div className="mb-4"><input name="email" type="email" required className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Your Email" /></div>
              <div className="mb-4"><textarea name="message" required className="w-full border border-gray-300 rounded px-4 py-2" rows="5" placeholder="Your Message"></textarea></div>
              <button className="bg-black text-white px-6 py-2 rounded" id="send-btn" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
