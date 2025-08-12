import React from 'react';
import './ServicesPage.css';

// You would use actual SVG components for icons in a real project
// For this example, we will use placeholder SVGs
const DigitalMarketingIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm-2.29-6.41C7.29 9.87 8.01 9 9 9c.74 0 1.34.25 1.76.69l.71-.71C10.15 8.24 9.61 8 9 8c-1.12 0-2.09.43-2.83 1.17l.71.71zM15 17h-2v-2h2v2zm-2.29-6.41c.42.44 1.02.69 1.76.69.99 0 1.71-.87 1.71-1.87 0-.74-.25-1.34-.69-1.76l.71-.71C15.76 8.24 16.3 8 17 8c1.12 0 2.09.43 2.83 1.17l-.71.71C18.71 9.87 18 10.61 18 11.61c0 1.12-.43 2.09-1.17 2.83l-.71.71c.44.42.69 1.02.69 1.76 0 .99-.87 1.71-1.87 1.71-1.12 0-2.09-.43-2.83-1.17l.71-.71z" fill="#000000"/>
    </svg>
);

const WebDevelopmentIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 14h-2l-1.5-3.5L12 16h-2.5l-2.5 6H17.5l-2.5-6zM12 4c.55 0 1 .45 1 1v6h-2V5c0-.55.45-1 1-1z" fill="#000000"/>
    </svg>
);

const AppDevelopmentIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7 17.5v-11h10v11H7zm1.5-1.5h7V7H8.5v9z" fill="#000000"/>
    </svg>
);

const GraphicDesignIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 4c.55 0 1 .45 1 1v1h-2V5c0-.55.45-1 1-1zm-4 4h8v8H8V8zm4 12c-2.76 0-5-2.24-5-5H7v2h10v-2h-2c0 2.76-2.24 5-5 5z" fill="#000000"/>
    </svg>
);

// Array of service data
const services = [
  {
    title: 'Digital Marketing',
    description: 'We help you to promote your products or services using digital channels and technologies.',
    icon: <DigitalMarketingIcon />,
  },
  {
    title: 'Web Development',
    description: 'We create powerful and responsive websites that perform well across all devices.',
    icon: <WebDevelopmentIcon />,
  },
  {
    title: 'App Development',
    description: 'We build user-friendly and feature-rich mobile applications for iOS and Android platforms.',
    icon: <AppDevelopmentIcon />,
  },
  {
    title: 'Graphic Design',
    description: 'We craft stunning visuals and compelling designs that will captivate your audience.',
    icon: <GraphicDesignIcon />,
  },
];

// Reusable Service Card Component
const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card">
    <div className="service-icon">{icon}</div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
  </div>
);

// Main Services Page Component
const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Our Services</h1>
        <p>Explore our comprehensive range of services designed to help you achieve your business goals.</p>
      </section>

      {/* Services Grid Section */}
      <section className="services-grid-section">
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Want to work with us?</h2>
          <p>Let's build something amazing together.</p>
          <button className="cta-button">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;