import React from 'react';
import './Facilities.css';

const facilitiesData = [
  {
    title: 'Yoga',
    days: 'Wednesday & Saturday',
    description: 'Find your inner peace and improve flexibility with our expert-led yoga sessions.',
    icon: '🧘‍♀️'
  },
  {
    title: 'Zumba',
    days: 'Monday & Friday',
    description: 'Dance your way to fitness with high-energy Zumba classes. Fun and effective!',
    icon: '💃'
  },
  {
    title: 'Floor Workouts',
    days: 'Wednesday & Thursday',
    description: 'Dedicated floor sections for core training, stretching, and bodyweight exercises.',
    icon: '🏋️‍♂️'
  }
];

const Facilities = () => {
  return (
    <section id="facilities" className="facilities-section">
      <div className="container">
        <h2 className="section-title">Our Facilities</h2>
        <div className="facilities-grid">
          {facilitiesData.map((facility, index) => (
            <div className="glass-panel facility-card" key={index}>
              <div className="facility-icon">{facility.icon}</div>
              <h3>{facility.title}</h3>
              <p className="days-badge">{facility.days}</p>
              <p className="facility-desc">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
