import Image from 'next/image'

export const metadata = {
  title: 'About Us | Mahteck Software Solutions',
  description: 'Learn about Mahteck – a passionate team building digital solutions for modern businesses.',
}

export default function AboutPage() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">About Mahteck</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mahteck is a forward-thinking software company focused on building smart, scalable, and secure solutions for startups, enterprises, and governments.
          </p>
        </div>

        {/* Mission & Stats */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
          {/* Mission/Vision */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To empower businesses with cutting-edge technology, intuitive systems, and unparalleled support — helping them grow in a digital-first world.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be recognized globally as a reliable software innovation partner that transforms industries and drives meaningful change.
            </p>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: '8+', label: 'Years of Experience' },
              { value: '50+', label: 'Projects Delivered' },
              { value: '20+', label: 'Happy Clients' },
              { value: '5', label: 'Team Members' },
            ].map((stat, i) => (
              <div key={i} className="bg-gray-100 p-6 rounded-lg text-center shadow">
                <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder / Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Founder</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Image
              src="/founder.jpg"
              alt="Founder"
              width={160}
              height={160}
              className="rounded-full object-cover shadow-lg"
            />
            <div className="max-w-xl text-left">
              <h3 className="text-xl font-semibold text-gray-700">Shoaib Munir</h3>
              <p className="text-sm text-gray-500 italic mb-2">Founder & Technology Consultant</p>
              <p className="text-gray-600 text-sm">
                Shoaib brings 20+ years of experience in enterprise applications, infrastructure, and consulting. His leadership combines technical excellence with a vision for sustainable digital growth.
              </p>
            </div>
          </div>
        </div>

        {/* Optional: Company Timeline (future-ready) */}
        {/* Uncomment this section later if you want a timeline/journey */}
        {/*
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Journey</h2>
          <ul className="max-w-2xl mx-auto text-left space-y-4 text-gray-600">
            <li><strong>2017:</strong> Mahteck was founded as a freelance software group.</li>
            <li><strong>2019:</strong> We expanded into full-time development & ERP support.</li>
            <li><strong>2023:</strong> Launched Mahteck Cloud Services & Data Analytics Division.</li>
          </ul>
        </div>
        */}
      </div>
    </section>
  )
}
