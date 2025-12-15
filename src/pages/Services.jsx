import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../components/Services'

/**
 * Services Page - Detailed services information
 * Features: Expanded services with detailed descriptions and pricing
 */
const ServicesPage = () => {
  const detailedServices = [
    {
      id: 1,
      title: "Custom Software Development",
      shortDesc: "Web and mobile applications tailored to your business needs",
      fullDesc: "Our custom software development services deliver scalable, secure, and high-performance applications using modern frameworks and best practices. We specialize in building solutions that grow with your business.",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: [
        "Custom Web Applications (React, Vue, Angular)",
        "Mobile App Development (React Native, Flutter)",
        "API Development & Integration",
        "Legacy System Modernization",
        "Cloud-Native Applications",
        "Microservices Architecture"
      ],
      technologies: ["React", "Vue.js", "Angular", "Node.js", "Python", "Java", "Flutter", "React Native"],
      pricing: "Starting from $5,000",
      timeline: "8-16 weeks"
    },
    {
      id: 2,
      title: "IT Consultancy",
      shortDesc: "Digital transformation strategies and cloud migration planning",
      fullDesc: "Our IT consultancy services help organizations navigate their digital transformation journey with strategic planning, technology assessments, and implementation roadmaps tailored to African market needs.",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: [
        "Digital Transformation Strategy",
        "Cloud Migration Planning",
        "Technology Stack Assessment",
        "Process Optimization",
        "Team Training & Development",
        "Vendor Selection & Management"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "DevOps"],
      pricing: "Starting from $2,000/month",
      timeline: "Ongoing support"
    },
    {
      id: 3,
      title: "Data Analytics & BI",
      shortDesc: "Transform raw data into actionable business insights",
      fullDesc: "Our data analytics and business intelligence services help organizations make data-driven decisions by implementing advanced analytics, creating interactive dashboards, and providing predictive insights.",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: [
        "Business Intelligence Dashboards",
        "Predictive Analytics Models",
        "Data Warehouse Design",
        "Real-time Analytics",
        "Report Automation",
        "Data Visualization"
      ],
      technologies: ["Python", "R", "Tableau", "Power BI", "PostgreSQL", "MongoDB", "Apache Spark"],
      pricing: "Starting from $3,000",
      timeline: "6-12 weeks"
    },
    {
      id: 4,
      title: "Managed IT Services",
      shortDesc: "Comprehensive network and infrastructure management",
      fullDesc: "Our managed IT services provide 24/7 monitoring, maintenance, and support for your IT infrastructure, ensuring optimal performance, security, and reliability for your business operations.",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      features: [
        "24/7 System Monitoring",
        "Network Security Management",
        "Backup & Disaster Recovery",
        "Help Desk Support",
        "Patch Management",
        "Performance Optimization"
      ],
      technologies: ["Windows Server", "Linux", "VMware", "Active Directory", "Firewall", "Backup Solutions"],
      pricing: "Starting from $500/month",
      timeline: "Ongoing service"
    }
  ]

  return (
    <div className="pt-16 min-h-screen bg-dark-900">
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation across Africa.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding">
        <div className="container-max">
          <div className="space-y-16">
            {detailedServices.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="text-primary-400 mb-6">
                    {service.icon}
                  </div>
                  
                  <h2 className="text-3xl font-heading font-bold text-white mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4">What's Included:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <svg className="w-4 h-4 text-primary-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-dark-700 text-gray-300 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="bg-dark-800 rounded-lg p-4 border border-dark-700">
                      <h4 className="text-sm font-semibold text-gray-400 mb-1">Starting Price</h4>
                      <p className="text-white font-bold">{service.pricing}</p>
                    </div>
                    <div className="bg-dark-800 rounded-lg p-4 border border-dark-700">
                      <h4 className="text-sm font-semibold text-gray-400 mb-1">Timeline</h4>
                      <p className="text-white font-bold">{service.timeline}</p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/contact"
                      className="btn-primary text-center"
                    >
                      Get Quote
                    </Link>
                    <button className="btn-secondary">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700 text-center">
                    <div className="text-6xl mb-6">
                      {index === 0 && '💻'}
                      {index === 1 && '💡'}
                      {index === 2 && '📊'}
                      {index === 3 && '🛡️'}
                    </div>
                    <div className="space-y-4">
                      <div className="text-2xl font-bold text-gradient">
                        {index === 0 && '95%'}
                        {index === 1 && '100+'}
                        {index === 2 && '50+'}
                        {index === 3 && '24/7'}
                      </div>
                      <div className="text-gray-400">
                        {index === 0 && 'Client Satisfaction'}
                        {index === 1 && 'Successful Projects'}
                        {index === 2 && 'Analytics Deployed'}
                        {index === 3 && 'Monitoring'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-800">
        <div className="container-max text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 border border-dark-700">
            <h2 className="text-3xl font-heading font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Let's discuss which services best fit your needs and create a customized 
              solution that drives real results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Schedule Free Consultation
              </Link>
              <Link
                to="/portfolio"
                className="btn-secondary"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
