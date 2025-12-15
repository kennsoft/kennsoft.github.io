import React, { useState } from 'react'

/**
 * PersonalPortfolio Component - Personal projects and skills showcase
 * Features: Personal summary, skills matrix, featured projects, contact section
 */
const PersonalPortfolio = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState('frontend')

  // Personal information
  const personalInfo = {
    name: "Kennedy Mwangi",
    title: "Full Stack Software Engineer & Tech Entrepreneur",
    bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications and mobile solutions. Specialized in modern JavaScript frameworks, cloud architecture, and African fintech solutions. Based in Nairobi, Kenya.",
    location: "Nairobi, Kenya",
    email: "kennedy@kennsoft.com",
    github: "github.com/kennsoft",
    linkedin: "linkedin.com/in/kennedy-mwangi"
  }

  // Skills organized by categories
  const skills = {
    frontend: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 }
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "Python/Django", level: 85 },
      { name: "PostgreSQL", level: 87 },
      { name: "MongoDB", level: 83 }
    ],
    cloud: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 82 },
      { name: "Kubernetes", level: 75 },
      { name: "DevOps", level: 78 }
    ]
  }

  // Featured personal projects
  const personalProjects = [
    {
      id: 1,
      title: "AfriSkills EdTech Platform",
      description: "Comprehensive online learning platform designed specifically for African educators and students. Features offline-first design, mobile optimization, and multi-language support for local languages.",
      image: "🎓",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      features: ["Video Streaming", "Offline Mode", "Multi-language", "Progress Tracking"],
      github: "https://github.com/kennsoft/afriskills",
      demo: "https://afriskills-demo.vercel.app",
      category: "Education Technology"
    },
    {
      id: 2,
      title: "Smart IoT Monitoring System",
      description: "Real-time IoT dashboard for monitoring environmental conditions in smart cities. Built for Nairobi's smart city initiative with real-time alerts and predictive analytics.",
      image: "📊",
      technologies: ["Vue.js", "Python", "InfluxDB", "MQTT"],
      features: ["Real-time Monitoring", "Predictive Analytics", "Mobile App", "API Integration"],
      github: "https://github.com/kennsoft/smart-iot",
      demo: "https://iot-demo.vercel.app",
      category: "IoT & Analytics"
    },
    {
      id: 3,
      title: "Flutter Mobile Banking App",
      description: "Secure and user-friendly mobile banking application with biometric authentication, real-time transactions, and integration with mobile money services popular in East Africa.",
      image: "📱",
      technologies: ["Flutter", "Dart", "Firebase", "REST API"],
      features: ["Biometric Auth", "Real-time Transactions", "Mobile Money Integration", "Offline Support"],
      github: "https://github.com/kennsoft/flutter-banking",
      demo: "https://banking-demo.netlify.app",
      category: "Mobile Development"
    }
  ]

  const skillCategories = [
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: '☁️' }
  ]

  return (
    <section className="section-padding bg-dark-900">
      <div className="container-max">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            My <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my personal projects, technical skills, and passion for building 
            innovative solutions that solve real-world problems.
          </p>
        </div>

        {/* Personal Summary */}
        <div className="bg-dark-800 rounded-2xl p-8 lg:p-12 border border-dark-700 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Profile Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white">{personalInfo.name}</h3>
                  <p className="text-primary-400 font-medium">{personalInfo.title}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {personalInfo.location}
                </div>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center text-gray-400 hover:text-primary-400 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
              <div className="space-y-3">
                <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" 
                   className="flex items-center p-3 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors group">
                  <svg className="w-6 h-6 mr-3 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-gray-300 group-hover:text-white">GitHub</span>
                </a>
                <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer"
                   className="flex items-center p-3 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors group">
                  <svg className="w-6 h-6 mr-3 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-gray-300 group-hover:text-white">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Matrix */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-white mb-8 text-center">Technical Skills</h3>
          
          {/* Skill Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveSkillCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeSkillCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills Bars */}
          <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills[activeSkillCategory].map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-primary-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-accent h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-white mb-8 text-center">Featured Projects</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="card group hover:scale-105"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Project Icon */}
                <div className="text-5xl mb-4 text-center">
                  {project.image}
                </div>

                {/* Category Badge */}
                <div className="inline-block px-3 py-1 bg-accent-600/20 text-accent-300 text-xs font-semibold rounded-full mb-4">
                  {project.category}
                </div>

                {/* Title */}
                <h4 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h4>

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

                {/* Features */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h5>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <svg className="w-3 h-3 text-accent-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary text-sm text-center"
                  >
                    View Demo
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary text-sm text-center"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Contact Section */}
        <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700 text-center">
          <h3 className="text-2xl font-heading font-bold text-white mb-4">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always excited to collaborate on innovative projects and discuss new opportunities. 
            Whether you have a project in mind or just want to connect, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-primary"
            >
              Send Email
            </a>
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalPortfolio
