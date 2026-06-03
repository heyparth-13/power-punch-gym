import React from 'react';
import './Membership.css';

const memberships = [
  {
    title: '1 Month',
    price: '₹2,500',
    duration: '/ month',
    features: ['Access to all equipment', 'Locker room access', 'Standard support']
  },
  {
    title: '3 Months',
    price: '₹5,000',
    duration: '/ 3 months',
    features: ['Access to all equipment', 'Locker room access', '1 Free personal training session', 'Diet plan basics'],
    popular: true
  },
  {
    title: '6 Months',
    price: '₹8,000',
    duration: '/ 6 months',
    features: ['Access to all equipment', 'Locker room access', '3 Free personal training sessions', 'Advanced diet plan', 'Free gym bag']
  },
  {
    title: '1 Year',
    price: '₹10,000',
    duration: '/ year',
    features: ['Access to all equipment', 'Locker room access', 'Unlimited group classes', 'Premium diet plan', 'Free gym merchandise', 'VIP support']
  }
];

const Membership = () => {
  return (
    <section id="membership" className="membership-section">
      <div className="container">
        <h2 className="section-title">Membership Plans</h2>
        <div className="membership-grid">
          {memberships.map((plan, index) => (
            <div className={`glass-panel pricing-card ${plan.popular ? 'popular' : ''}`} key={index}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.title}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="duration">{plan.duration}</span>
              </div>
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="check-icon">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href={`https://wa.me/919054727259?text=Hi%20Power%20Punch!%20I%20am%20interested%20in%20the%20${encodeURIComponent(plan.title)}%20membership%20plan.`}
                target="_blank" 
                rel="noopener noreferrer"
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} plan-btn`}
                style={{ display: 'block', textAlign: 'center' }}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
