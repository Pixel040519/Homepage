import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="content">
      {/* WELCOME SECTION */}
      <div className="welcome">
        <h1>Welcome to Northern Rizal Yorklin School</h1>
        <div className="subtitle-container">
          <span className="line"></span>
          <p>育仁中学 · Educating for Knowledge and Virtue.</p>
          <span className="line"></span>
        </div>

        {/* short intro (not personal info / not contact details) */}
        <p style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.7' }}>
          A Chinese-Filipino school committed to holistic formation—developing learners through
          strong academics, character building, culture, and service.
        </p>
      </div>

      {/* MAIN ACTION CARDS */}
      <div className="card-container">
        <div className="card mission-card">
          <h2>About Yorklin</h2>
          <p>
            Learn our school background, heritage, hymn, and the values that guide Yorklinians.
          </p>
          <button className="card-btn" onClick={() => navigate('/about')}>
            Read More
          </button>
        </div>

        <div className="card admissions-card">
          <h2>Programs</h2>
          <p>
            Explore our offerings from <strong>Pre-Nursery</strong> to <strong>Senior High School</strong>.
          </p>
          <button className="card-btn" onClick={() => navigate('/programs')}>
            View Programs
          </button>
        </div>
      </div>

      {/* SCHOOL HIGHLIGHTS */}
      <div className="highlights">
        <h2>Why Choose Yorklin?</h2>
        <div className="highlight-grid">
          <div className="highlight-item">
            <h3>Quality Education</h3>
            <p>Strong academic programs designed to help students succeed.</p>
          </div>

          <div className="highlight-item">
            <h3>Student Formation</h3>
            <p>Guidance, values, and leadership activities that build character.</p>
          </div>

          <div className="highlight-item">
            <h3>Culture & Language</h3>
            <p>Chinese language learning and cultural appreciation in school life.</p>
          </div>

          <div className="highlight-item">
            <h3>Service & Outreach</h3>
            <p>Programs that encourage compassion, stewardship, and community service.</p>
          </div>
        </div>

        {/* CTA (simple, not redundant) */}
        <div className="mission-action" style={{ marginTop: '35px' }}>
          <button className="card-btns" onClick={() => navigate('/contact')}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;