import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <section className="content">
      <div className="mission-page">
        <h1>Contact Us</h1>

        <div className="subtitle-container">
          <span className="line"></span>
          <p>Get in touch with Northern Rizal Yorklin School</p>
          <span className="line"></span>
        </div>

        <div className="mv-section">
          {/* LEFT CARD */}
          <div className="mv-card" style={{ textAlign: 'left' }}>
            <h2>Our Location</h2>
            <p style={{ lineHeight: '1.7' }}>
              #253 C. Cordero Bet. 5th &amp; 6th Ave.
              <br />
              Grace Park West, Caloocan City
            </p>

            <hr style={{ margin: '18px 0', border: 0, borderTop: '1px solid #eee' }} />

            <h2>Call Us</h2>
            <p style={{ lineHeight: '1.7' }}>8296-1782 / 8365-9318</p>
          </div>

          {/* RIGHT CARD */}
          <div className="mv-card" style={{ textAlign: 'left' }}>
            <h2>Email Addresses</h2>
            <ul className="mv-points" style={{ marginTop: '12px' }}>
              <li>
                <a
                  href="mailto:nrys_1939@yahoo.com.ph"
                  style={{ color: '#0b2e4e', fontWeight: 800, textDecoration: 'underline' }}
                >
                  nrys_1939@yahoo.com.ph
                </a>
              </li>
              <li>
                <a
                  href="mailto:nrys.1939@gmail.com"
                  style={{ color: '#0b2e4e', fontWeight: 800, textDecoration: 'underline' }}
                >
                  nrys.1939@gmail.com
                </a>
              </li>
            </ul>

            <hr style={{ margin: '18px 0', border: 0, borderTop: '1px solid #eee' }} />

            <h2>Facebook Page</h2>
            <p style={{ lineHeight: '1.7' }}>
              For announcements and updates:
            </p>

            <a
              className="card-btns"
              href="https://www.facebook.com/NRYS1939"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '10px',
                textDecoration: 'none',
                textAlign: 'center',
              }}
            >
              Visit our Facebook Page
            </a>

            <p style={{ marginTop: '12px', fontSize: '12px', opacity: 0.75, lineHeight: '1.6' }}>
              Note: We do not accept document submissions via this website.
            </p>
          </div>
        </div>

        <div className="mission-action">
          <button className="card-btns" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;