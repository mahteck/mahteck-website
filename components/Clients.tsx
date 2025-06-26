'use client'

import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const logos = [
  '/client1.png',
  '/client2.png',
  '/client3.png',
  '/client4.png',
  '/client5.png',
  '/client6.png',
]

const Clients = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 2 },
      },
      '(max-width: 1024px)': {
        slides: { perView: 3 },
      },
    },
    autoplay: true,
  })

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-800">Trusted by Our Clients</h2>
        <p className="text-lg text-gray-600 mb-12">
          Companies that trust Mahteck for their digital transformation.
        </p>

        <div ref={sliderRef} className="keen-slider">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="keen-slider__slide flex items-center justify-center grayscale hover:grayscale-0 transition duration-300"
            >
              <Image
                src={logo}
                alt={`Client ${i + 1}`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
