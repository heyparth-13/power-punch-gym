import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <h1>Unleash Your True <span className="highlight">Power</span></h1>
          <p>
            Welcome to <strong>Power Punch</strong>. The ultimate destination for fitness enthusiasts.
            Transform your body, elevate your mind, and push your limits with our premium facilities.
          </p>
          <div className="hero-actions">
            <a href="https://wa.me/919054727259?text=Hi%20Power%20Punch!%20I%20want%20to%20start%20my%20fitness%20journey." target="_blank" rel="noopener noreferrer" className="btn btn-primary">Start Your Journey</a>
            <a href="#facilities" className="btn btn-outline">Explore Facilities</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
