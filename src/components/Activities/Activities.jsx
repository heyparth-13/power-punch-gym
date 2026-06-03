import React from 'react';
import './Activities.css';

const activities = [
  { name: 'Cardio Training', img: '🏃‍♂️' },
  { name: 'Weight Lifting', img: '🏋️‍♀️' },
  { name: 'CrossFit', img: '🤸' },
  { name: 'Boxing', img: '🥊' },
  { name: 'Personal Training', img: '👥' },
  { name: 'Stretching', img: '🧘‍♂️' }
];

const Activities = () => {
  return (
    <section id="activities" className="activities-section">
      <div className="container">
        <h2 className="section-title">Gym Activities</h2>
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div className="activity-card glass-panel" key={index}>
              <div className="activity-icon">{activity.img}</div>
              <h4>{activity.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
