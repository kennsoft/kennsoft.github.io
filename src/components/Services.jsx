import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Services Component - Overview of core services
 * Features: Grid layout with service cards, icons, descriptions, and hover effects
 */
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Custom Software Development",
      description: "Web and mobile applications tailored to your business needs using modern frameworks and technologies.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: ["Web Applications", "Mobile Apps", "API Development", "Cloud Solutions"]
    },
    {
      id: 2,
      title: "IT Consultancy",
      description: "Digital transformation strategies, cloud migration planning, and technology roadmap development.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: ["Digital Strategy", "Cloud Migration", "Tech Assessment", "Process Optimization"]
    },
    {
      id: 3,
      title: "Data Analytics & BI",
      description: "Transform raw data into actionable insights with advanced analytics and business intelligence solutions.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: ["Data Visualization", "Predictive Analytics", "Dashboard Creation", "Report Automation"]
    },
    {
      id: 4,
      title: "Managed IT Services",
      description: "Comprehensive network management, cybersecurity, and maintenance services for your IT infrastructure.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      features: ["24/7 Monitoring", "Security Management", "Backup Solutions", "Help Desk Support"]
    }
  ]

  return (
    <section className="section-padding bg-dark-800">
      <div className="container-max">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey across Africa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="card group hover:scale-105"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Icon */}
              <div className="text-primary-400 mb-6 group-hover:text-accent-400 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-heading font-semibold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <svg className="w-4 h-4 text-primary-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <Link 
                to="/services"
                className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium transition-colors duration-300 group"
              >
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-dark-900 rounded-2xl p-8 border border-dark-700">
            <h3 className="text-2xl font-heading font-semibold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your digital transformation goals 
              and drive sustainable growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Get a Free Consultation
              </Link>
              <Link
                to="/portfolio"
                className="btn-secondary"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
