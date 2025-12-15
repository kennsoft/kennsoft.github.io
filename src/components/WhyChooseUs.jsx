import React from 'react'

/**
 * WhyChooseUs Component - Key differentiators
 * Features: 4 key value propositions with icons and descriptions
 */
const WhyChooseUs = () => {
  const differentiators = [
    {
      id: 1,
      title: "Local Expertise",
      description: "Deep understanding of African markets, regulations, and business cultures with on-ground presence in Nairobi.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stats: "5+ Years"
    },
    {
      id: 2,
      title: "Global Standards",
      description: "International best practices, industry certifications, and cutting-edge technologies that meet global quality standards.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      stats: "ISO 27001"
    },
    {
      id: 3,
      title: "24/7 Support",
      description: "Round-the-clock technical support, monitoring, and maintenance to ensure your systems run smoothly at all times.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stats: "24/7/365"
    },
    {
      id: 4,
      title: "Proven Track Record",
      description: "Successfully delivered 50+ projects across various industries with 100% client satisfaction and on-time delivery.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      stats: "100% Success"
    }
  ]

  return (
    <section className="section-padding bg-dark-900">
      <div className="container-max">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Why Choose <span className="text-gradient">KennSoft</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We combine local market knowledge with global expertise to deliver 
            exceptional technology solutions that drive real business results.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <div 
              key={item.id} 
              className="text-center group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {item.icon}
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {item.stats}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-semibold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="bg-dark-800 rounded-2xl p-8 lg:p-12 border border-dark-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Content */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-6">
                Ready to Scale Your Business with Technology?
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Join over 50+ businesses across Africa who have transformed their operations 
                with our innovative technology solutions. From startups to enterprise companies, 
                we've got the expertise to accelerate your growth.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-primary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Free initial consultation and project assessment
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-primary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Dedicated project manager and development team
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-primary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Post-launch support and maintenance
                </li>
              </ul>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-dark-900 rounded-xl p-6 text-center border border-dark-600">
                <div className="text-3xl font-bold text-gradient mb-2">50+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="bg-dark-900 rounded-xl p-6 text-center border border-dark-600">
                <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
              <div className="bg-dark-900 rounded-xl p-6 text-center border border-dark-600">
                <div className="text-3xl font-bold text-gradient mb-2">5+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="bg-dark-900 rounded-xl p-6 text-center border border-dark-600">
                <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
