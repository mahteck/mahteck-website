'use client'

import { FaWhatsapp } from "react-icons/fa"

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923311343814"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition"
      title="Chat on WhatsApp"
    >
      {/* <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        
        <path d="M...z" />
      </svg> */}
      <div className="w-5 h-5">
      <FaWhatsapp />
      </div>
    </a>
    
  )
}

export default WhatsAppButton
