import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Hero Component - Main landing section
 * Features: Compelling headline, subtext, CTA button, background animation
 */
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-primary">
      {/* Background Animation Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-primary-400/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/20 border border-primary-400/30 text-primary-300 text-sm font-medium mb-8 animate-fade-in">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          🚀 Powering Africa's Digital Transformation
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight animate-slide-up">
          Powering{' '}
          <span className="text-gradient">Africa's</span>{' '}
          Digital Future
        </h1>

        {/* Sub-headline */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
          We deliver innovative software solutions, expert IT consultancy, and cutting-edge 
          technology services that drive business growth across Africa.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{animationDelay: '0.4s'}}>
          <Link
            to="/contact"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center group"
          >
            Get a Free Consultation
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          
          <Link
            to="/portfolio"
            className="btn-secondary text-lg px-8 py-4 inline-flex items-center"
          >
            View Our Work
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 animate-slide-up" style={{animationDelay: '0.6s'}}>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">50+</div>
            <div className="text-gray-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">5+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
