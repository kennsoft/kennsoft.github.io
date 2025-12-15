
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServicesPage from './pages/Services'
import Portfolio from './pages/Portfolio'
import ContactPage from './pages/Contact'

/**
 * Main App Component - KennSoft Technologies SPA
 * Manages routing and overall application layout
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-white">
        {/* Global Header/Navigation */}
        <Header />
        

        {/* Main Content Area with Routing */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
