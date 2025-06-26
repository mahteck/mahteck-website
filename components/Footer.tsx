import Link from 'next/link'
import { FaLinkedin, FaGithub, FaEnvelope, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-gray-300 pt-12 pb-6 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">MAH-TECK</h2>
          <p className="text-sm text-gray-400">
            Innovative software solutions to accelerate your business.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/clients" className="hover:text-white">Clients</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><a href="mailto:contact@mahteck.com" className="hover:text-white">Email Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm">📞 +92 331 1343814</p>
          <p className="text-sm">✉️ mahteckteach@mahteck.com</p>
          <p className="text-sm">📍 Karachi, Pakistan</p>
        </div>
      </div>

      <hr className="border-gray-700 my-6" />

     <div className="flex flex-col items-center justify-center gap-4 mt-8">
      {/* Social Icons */}
      <div className="flex gap-4">
        {/* <a href="https://linkedin.com/company/mahteck" target="_blank" rel="noopener noreferrer" className="hover:text-white text-xl">
          <i className="ri-linkedin-fill"></i>
        </a>
        <a href="https://github.com/mahteck" target="_blank" rel="noopener noreferrer" className="hover:text-white text-xl">
          <i className="ri-github-fill"></i>
        </a>
        <a href="mailto:contact@mahteck.com" className="hover:text-white text-xl">
          <i className="ri-mail-fill"></i>
        </a>
      </div> */}

        <div className="flex gap-4 text-xl">
          <a href="https://www.youtube.com/@mahteck" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://github.com/mahteck" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:contact@mahteck.com"><FaEnvelope /></a>
        </div>
      </div>
        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Mahteck Software Solutions. All rights reserved.
        </p>
      </div>

    </footer>
  )
}

export default Footer
