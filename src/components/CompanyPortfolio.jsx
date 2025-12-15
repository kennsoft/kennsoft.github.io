import React from 'react'
import { Link } from 'react-router-dom'

/**
 * CompanyPortfolio Component - Showcase of company projects
 * Features: Project cards with descriptions and view buttons
 */
const CompanyPortfolio = () => {
  const projects = [
    {
      id: 1,
      title: "AfriBanking Platform",
      description: "Comprehensive digital banking solution serving 100,000+ users across East Africa with mobile-first design and advanced security features.",
      category: "FinTech",
      image: "🏦",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      client: "Regional Bank",
      duration: "8 months",
      results: ["100K+ Active Users", "99.9% Uptime", "40% Cost Reduction"]
    },
    {
      id: 2,
      title: "Kenya Health Dashboard",
      description: "Real-time health analytics platform for the Ministry of Health, providing data-driven insights for public health decision making.",
      category: "Healthcare",
      image: "🏥",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      client: "Ministry of Health",
      duration: "6 months",
      results: ["50+ Hospitals Connected", "Real-time Analytics", "Policy Impact"]
    },
    {
      id: 3,
      title: "AgriSmart Supply Chain",
      description: "End-to-end agricultural supply chain management system connecting farmers, distributors, and retailers across the region.",
      category: "Agriculture",
      image: "🌾",
      technologies: ["React Native", "Django", "Redis", "IoT"],
      client: "AgriCorp Ltd",
      duration: "10 months",
      results: ["500+ Farmers", "30% Efficiency Gain", "Reduced Waste"]
    }
  ]

  return (
    <section className="section-padding bg-dark-800">
      <div className="container-max">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across Africa transform their operations 
            with innovative technology solutions.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="card group hover:scale-105"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Project Image/Icon */}
              <div className="text-6xl mb-6 text-center">
                {project.image}
              </div>

              {/* Category Badge */}
              <div className="inline-block px-3 py-1 bg-primary-600/20 text-primary-300 text-xs font-semibold rounded-full mb-4">
                {project.category}
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-semibold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <span className="text-gray-400">Client:</span>
                  <p className="text-white font-medium">{project.client}</p>
                </div>
                <div>
                  <span className="text-gray-400">Duration:</span>
                  <p className="text-white font-medium">{project.duration}</p>
                </div>
              </div>

              {/* Results */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Results:</h4>
                <ul className="space-y-1">
                  {project.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-center text-gray-300 text-sm">
                      <svg className="w-3 h-3 text-primary-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              {/* View Project Button */}
              <button className="w-full btn-secondary text-sm group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                View Case Study
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 border border-dark-700">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our proven 
              technology solutions and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Start Your Project
              </Link>
              <Link
                to="/portfolio"
                className="btn-secondary"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyPortfolio
