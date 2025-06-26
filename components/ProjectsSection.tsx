import { FaReact, FaDatabase, FaChartBar } from 'react-icons/fa'

const projects = [
  {
    name: 'School Management System',
    tech: 'React, .NET Core, SQL Server',
    icon: <FaDatabase />,
    desc: 'Robust School and Accounting system with reporting dashboard (Baseerat Schooling System).',
  },
  {
    name: 'eCommerce Website',
    tech: 'Next.js, MongoDB, Node.js',
    icon: <FaReact />,
    desc: 'Created ecommerce website for clothing Faision (Sairas Collections).',
  },
  {
    name: 'Financial Analytics Dashboard',
    tech: 'Python, Power BI, PostgreSQL',
    icon: <FaChartBar />,
    desc: 'Interactive dashboard for business intelligence and KPIs.',
  },
]

const Projects = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-800">Our Recent Projects</h2>
        <p className="text-lg text-gray-600 mb-12">
          Here’s a glimpse of what we’ve built for our clients — practical, scalable, and beautiful.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300 text-left bg-gray-50"
            >
              <div className="text-blue-600 text-4xl mb-4">{project.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
              <p className="text-sm text-gray-500 italic mb-2">Tech Stack: {project.tech}</p>
              <p className="text-gray-600 text-sm">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
