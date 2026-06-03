import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer-section">
      <div className="container footer-container">
        <div className="footer-info">
          <h2>Power<span>Punch</span></h2>
          <p className="tagline">Unleash your true power with the best gym in town.</p>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#facilities">Facilities</a></li>
            <li><a href="#activities">Activities</a></li>
            <li><a href="#membership">Membership</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><strong>Timings:</strong> 6:00 AM - 11:00 PM (Everyday)</p>
          <p><strong>Phone:</strong> +91 90547 27259</p>
          <p><strong>Address:</strong> 123 Fitness Street, Gym City</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Power Punch. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
