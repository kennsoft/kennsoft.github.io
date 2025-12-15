import React, { useState } from 'react'
import CompanyPortfolio from '../components/CompanyPortfolio'
import PersonalPortfolio from '../components/PersonalPortfolio'

/**
 * Portfolio Page - Combined company and personal portfolio
 * Features: Tab navigation between company projects and personal projects
 */
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('company')

  const tabs = [
    {
      id: 'company',
      name: 'Company Projects',
      icon: '🏢',
      description: 'Professional projects delivered for clients across Africa'
    },
    {
      id: 'personal',
      name: 'Personal Portfolio',
      icon: '👨‍💻',
      description: 'Personal projects and technical skills showcase'
    }
  ]

  return (
    <div className="pt-16 min-h-screen bg-dark-900">
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our successful project implementations and technical expertise 
            across various industries and technologies.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-dark-800 border-b border-dark-700">
        <div className="container-max">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-4 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                }`}
              >
                <span className="text-2xl mr-3">{tab.icon}</span>
                <div className="text-left">
                  <div className="font-semibold">{tab.name}</div>
                  <div className="text-sm opacity-75">{tab.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <div className="min-h-screen">
        {activeTab === 'company' && (
          <div className="animate-fade-in">
            <CompanyPortfolio />
          </div>
        )}
        
        {activeTab === 'personal' && (
          <div className="animate-fade-in">
            <PersonalPortfolio />
          </div>
        )}
      </div>

      {/* Bottom CTA Section */}
      <section className="section-padding bg-dark-800">
        <div className="container-max text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 border border-dark-700">
            <h2 className="text-3xl font-heading font-bold text-white mb-6">
              Inspired by Our Work?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Ready to start your own digital transformation journey? Let's discuss 
              how we can bring your vision to life with our proven expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Your Project
              </button>
              <button className="btn-secondary">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
