'use client'

import { FaPhone, FaEnvelope } from 'react-icons/fa'

const ContactBar = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      <a
        href="tel:+923311343814"
        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 shadow"
        title="Call Us"
      >
        <FaPhone />
      </a>
      <a
        href="mailto:mahteckteach@mahteck.com"
        className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 shadow"
        title="Email Us"
      >
        <FaEnvelope />
      </a>
    </div>
  )
}

export default ContactBar
