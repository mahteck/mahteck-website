'use client'

import Slider from 'react-slick'

const bannerImages = [
  '/banner1.jpg',
  '/banner2.jpg',
  '/banner3.jpg',
]

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
  }

  return (
    <section className="relative text-white">
      <Slider {...settings}>
        {bannerImages.map((img, index) => (
          <div key={index}>
            <div className="relative w-full h-[600px]">
              <img
                src={img}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
              <div className="absolute z-10 inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                  Empowering Your Business with <br />
                  <span className="text-yellow-400">Smart Software Solutions</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-100 max-w-2xl mb-6">
                  Mahteck builds scalable and secure digital systems — so your business can thrive in the modern world.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-full transition"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default Banner
