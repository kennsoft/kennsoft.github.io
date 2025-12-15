# KennSoft Technologies React SPA - Project Plan

## Project Overview
Create a professional, high-performance single-page React application for KennSoft Technologies with integrated personal portfolio section.

## Technology Stack
- React.js (functional components and hooks)
- Tailwind CSS (dark-mode aesthetic)
- React Router DOM (client-side routing)
- Vite (build tool for optimal performance)

## Project Structure
```
kennsoft.github.io/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── CompanyPortfolio.jsx
│   │   ├── PersonalPortfolio.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── tailwind.config.js
├── package.json
└── vite.config.js
```

## Company Sections & Content Structure

### 1. Header/Navigation Component
- Logo placeholder: [KennSoft Logo]
- Navigation links: Home, Services, Portfolio, About, Contact
- Primary CTA: "Get a Free Consultation" button
- Responsive mobile menu

### 2. Hero Section
- Headline: "Powering Africa's Digital Future"
- Sub-headline: Brief company value proposition
- Primary CTA: "Get a Free Consultation"
- Hero background with subtle animations

### 3. Services Overview Component
- Custom Software Development (Web & Mobile)
- IT Consultancy (Digital transformation, cloud strategy)
- Data Analytics & BI (Actionable insights)
- Managed IT Services (Network, security, maintenance)
- Grid layout with icons and descriptions

### 4. Why Choose Us Component
- Local Expertise (African market understanding)
- Global Standards (International best practices)
- 24/7 Support (Round-the-clock assistance)
- Proven Track Record (Case studies/statistics)

### 5. Company Portfolio Component
- 3 project showcase cards
- Brief descriptions and "View Details" buttons
- Filter capabilities by service type

### 6. Personal Portfolio Section (MyPortfolio.jsx)
- Personal Summary (Professional bio)
- Skills Matrix (Visual bar charts/tags)
- Featured Projects (3 cards with "View Project" buttons)
- Dedicated Contact section

### 7. Contact/Footer Component
- Contact form with validation
- Contact details (Nairobi, Kenya location)
- Social media icons
- Copyright information

## Design Specifications

### Color Scheme (Dark Mode Inspired)
- Primary: Deep blues (#0f172a, #1e293b)
- Secondary: Blacks and grays (#000000, #374151)
- Accent: Electric blue (#3b82f6) or lime green (#10b981)
- Text: White/light gray (#f8fafc, #e2e8f0)
- Background: Dark gradients

### Typography
- Headings: Inter or Poppins (clean, modern)
- Body: System fonts for performance
- Responsive font sizes

### Interactive Elements
- Smooth scrolling navigation
- Hover effects on cards and buttons
- Loading animations
- Form validation feedback
- Mobile-responsive design

## Technical Implementation Details

### State Management
- React Hooks (useState, useEffect)
- Context API for theme management
- Local state for form handling

### Performance Optimizations
- Lazy loading for components
- Optimized images and assets
- Minimal bundle size
- Fast loading times

### Accessibility Features
- ARIA labels
- Keyboard navigation
- Screen reader compatibility
- High contrast ratios

## Development Steps
1. Initialize React project with Vite
2. Configure Tailwind CSS
3. Set up React Router
4. Create base layout components
5. Implement individual sections
6. Add responsive design
7. Test functionality
8. Optimize performance

## Deliverables
- Complete React component code
- Tailwind configuration
- Responsive CSS utilities
- Interactive navigation
- Contact forms with validation
- Professional dark-mode aesthetic
- Documentation comments
