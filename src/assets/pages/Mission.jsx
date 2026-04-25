import React from 'react';
import { useNavigate } from 'react-router-dom';

const Mission = () => {
  const navigate = useNavigate();
  return (
    <section className="content">
      <div className="mission-page">
        <h1>Mission & Vision</h1>
        <div className="mv-section">
          <div className="mv-card">
            <h2>🎯 Our Mission</h2>
            <p>To provide quality education that nurtures knowledge, discipline, and moral integrity among students.</p>
          </div>
          <div className="mv-card">
            <h2>🌟 Our Vision</h2>
            <p>To be a leading educational institution that develops future leaders who contribute positively to the community.</p>
          </div>
        </div>
        <div className="mission-action">
          <button className="card-btns" onClick={() => navigate('/')}>Back to Home</button>
        </div>
      </div>
    </section>
  );
};
export default Mission;