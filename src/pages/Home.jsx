import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import CompanyPortfolio from '../components/CompanyPortfolio'

/**
 * Home Page - Main landing page
 * Combines all main sections: Hero, Services, Why Choose Us, Portfolio
 */
const Home = () => {
  return (
    <div className="pt-16"> {/* Account for fixed header */}
      <Hero />
      <Services />
      <WhyChooseUs />
      <CompanyPortfolio />
    </div>
  )
}

export default Home
