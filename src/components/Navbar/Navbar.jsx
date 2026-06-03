import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          Power<span>Punch</span>
        </a>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#facilities" onClick={() => setMobileMenuOpen(false)}>Facilities</a>
          <a href="#activities" onClick={() => setMobileMenuOpen(false)}>Activities</a>
          <a href="#membership" onClick={() => setMobileMenuOpen(false)}>Membership</a>
          <a href="https://wa.me/919054727259?text=Hi%20Power%20Punch!%20I%20would%20like%20to%20join%20the%20gym." target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-btn" onClick={() => setMobileMenuOpen(false)}>Join Now</a>
        </div>

        <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className={`bar ${mobileMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${mobileMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${mobileMenuOpen ? 'active' : ''}`}></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
