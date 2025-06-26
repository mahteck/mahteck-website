import { FaLaptopCode, FaMobileAlt, FaServer, FaHandsHelping, FaCloud, FaChartLine } from 'react-icons/fa'

const services = [
  { title: 'Software Development', icon: <FaLaptopCode />, desc: 'Custom web & desktop solutions tailored to your business needs.' },
  { title: 'Mobile App Development', icon: <FaMobileAlt />, desc: 'Cross-platform mobile apps with modern UI/UX.' },
  { title: 'Backend & API Integration', icon: <FaServer />, desc: 'Secure and scalable backend systems and REST APIs.' },
  { title: 'IT Consultancy & Support', icon: <FaHandsHelping />, desc: 'On-demand tech consultancy and issue resolution.' },
  { title: 'Cloud & Hosting Services', icon: <FaCloud />, desc: 'Deploy and scale on AWS, Azure, Vercel, or your private server.' },
  { title: 'Financial & ERP Solutions', icon: <FaChartLine />, desc: 'Digitize your finance, accounting, and business workflows.' },
]

const Services = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-800">Our Core Services</h2>
        <p className="text-lg text-gray-600 mb-12">
          At Mahteck, we craft digital experiences that drive success and streamline business operations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 text-left"
            >
              <div className="text-blue-600 text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
