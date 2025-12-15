import React from 'react'
import Contact from '../components/Contact'

/**
 * Contact Page - Contact form and company information
 * Features: Full contact form, company details, location info, CTA sections
 */
const ContactPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-dark-900">
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your digital transformation journey? Let's discuss how we can 
            help accelerate your business growth with our innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Contact Component */}
      <Contact />

      {/* Additional CTA Section */}
      <section className="section-padding bg-dark-800">
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Don't wait for tomorrow to start your digital transformation. 
              Join the growing number of African businesses that have chosen KennSoft 
              as their technology partner.
            </p>
            
            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { step: "1", title: "Free Consultation", desc: "Discuss your needs" },
                { step: "2", title: "Project Planning", desc: "Define scope & timeline" },
                { step: "3", title: "Development", desc: "Build your solution" },
                { step: "4", title: "Launch & Support", desc: "Deploy & maintain" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Schedule Free Consultation
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
