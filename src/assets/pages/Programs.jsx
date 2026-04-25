import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Programs = () => {
  const navigate = useNavigate();

  const items = useMemo(
    () => [
      {
        id: 'tots',
        title: 'Tots (Pre‑Nursery to Kindergarten)',
        content: (
          <>
            <p style={{ lineHeight: '1.75' }}>
              Our Tots program focuses on early learning foundations—language, numeracy, social skills,
              and values formation in a supportive environment.
            </p>
            <ul className="mv-points" style={{ marginTop: '10px' }}>
              <li>Pre‑Nursery</li>
              <li>Nursery</li>
              <li>Pre‑Kindergarten</li>
              <li>Kindergarten</li>
            </ul>
          </>
        ),
      },
      {
        id: 'elem',
        title: 'Elementary (Grade 1 – Grade 6)',
        content: (
          <>
            <p style={{ lineHeight: '1.75' }}>
              Our Elementary program builds strong academic skills and good study habits through
              guided learning and student activities.
            </p>
            <ul className="mv-points" style={{ marginTop: '10px' }}>
              <li>Grade 1</li>
              <li>Grade 2</li>
              <li>Grade 3</li>
              <li>Grade 4</li>
              <li>Grade 5</li>
              <li>Grade 6</li>
            </ul>
          </>
        ),
      },
      {
        id: 'jhs',
        title: 'Junior High School (Grade 7 – Grade 10)',
        content: (
          <>
            <p style={{ lineHeight: '1.75' }}>
              Junior High supports academic growth, character building, and preparedness for Senior High.
            </p>
            <ul className="mv-points" style={{ marginTop: '10px' }}>
              <li>Grade 7</li>
              <li>Grade 8</li>
              <li>Grade 9</li>
              <li>Grade 10</li>
            </ul>
          </>
        ),
      },
      {
        id: 'shs',
        title: 'Senior High School (Grade 11 – Grade 12)',
        content: (
          <>
            <p style={{ lineHeight: '1.75' }}>
              Senior High prepares learners for college, employment, and lifelong learning through
              specialized tracks and practical experiences.
            </p>
            <ul className="mv-points" style={{ marginTop: '10px' }}>
              <li>Grade 11</li>
              <li>Grade 12</li>
            </ul>
            <p style={{ marginTop: '10px', fontSize: '12px', opacity: 0.75 }}>
              Track/strand offerings may vary. Please contact the school for the latest list.
            </p>
          </>
        ),
      },
    ],
    []
  );

  const [openId, setOpenId] = useState('tots');

  const toggle = (id) => setOpenId((prev) => (prev === id ? '' : id));

  return (
    <section className="content">
      <div className="mission-page">
        <h1>Programs</h1>

        <div className="subtitle-container">
          <span className="line"></span>
          <p>Click a level to view details</p>
          <span className="line"></span>
        </div>

        <div className="admissions-accordion">
          {items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className={`acc-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="acc-header"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${item.id}`}
                >
                  <span className="acc-title">{item.title}</span>
                  <span className="acc-icon">{isOpen ? '▴' : '▾'}</span>
                </button>

                <div
                  id={`panel-${item.id}`}
                  className="acc-panel"
                  style={{ display: isOpen ? 'block' : 'none' }}
                >
                  {item.content}

                  <div style={{ marginTop: '14px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <button className="card-btns" onClick={() => navigate('/admissions')}>
                      View Admissions Requirements
                    </button>
                    <button className="card-btns" onClick={() => navigate('/contact')}>
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mission-action" style={{ marginTop: '25px' }}>
          <button className="card-btns" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;