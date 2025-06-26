'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import BackToTopButton from './BackToTopButton'
import WhatsAppButton from './WhatsAppButton'
import ContactBar from './ContactBar'

const LayoutClient = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return <>
  {children}
  <BackToTopButton />
  <WhatsAppButton />
  <ContactBar />
  </>
  
}

export default LayoutClient
