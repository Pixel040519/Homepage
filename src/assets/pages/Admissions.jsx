import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admissions = () => {
  const navigate = useNavigate();

  // Accordion sections (privacy notice is NOT here — it's always visible)
  const items = useMemo(
    () => [
      {
        id: 'tots-new',
        title: 'Tots (Pre‑Nursery to Kindergarten) — New Students: What to Bring',
        content: (
          <ul className="mv-points">
            <li>
              <strong>6 copies</strong> of <strong>2&quot; x 2&quot;</strong> recent colored ID picture
            </li>

            <li>
              <strong>Photocopy of PSA Birth Certificate</strong> (Filipino students)
              <div style={{ fontSize: '12px', opacity: 0.75, marginTop: '4px' }}>
                Bring the original copy for verification.
              </div>
            </li>

            <li>
              <strong>Photocopy of I-Card</strong> (Foreign students)
              <div style={{ fontSize: '12px', opacity: 0.75, marginTop: '4px' }}>
                Bring the original copy for verification.
              </div>
            </li>

            <li>
                <strong>Accomplished Information Sheet</strong>{' '}
                 <span style={{ fontSize: '12px', opacity: 0.75 }}>
                  (provided by the school / to be filled out during enrollment)
                 </span>
            </li>
            <li>
              <strong>Medical / Dental Record</strong> (school form/record, as required)
            </li>

            <li>
              <strong>Entrance exam and/or interview</strong> (if required; as scheduled)
            </li>
            <li>
              <strong>Other requirements</strong> as may be required by the school
            </li>
          </ul>
        ),
      },

      {
        id: 'elem-shs-new',
        title: 'Elementary to Senior High — New / Transferee Students: What to Bring',
        content: (
          <ul className="mv-points">
            <li>
              <strong>6 copies</strong> of <strong>2&quot; x 2&quot;</strong> recent colored ID picture
            </li>

            <li>
              <strong>Photocopy of PSA Birth Certificate</strong> (Filipino students)
              <div style={{ fontSize: '12px', opacity: 0.75, marginTop: '4px' }}>
                Bring the original copy for verification.
              </div>
            </li>

            <li>
              <strong>Photocopy of I-Card</strong> (Foreign students)
              <div style={{ fontSize: '12px', opacity: 0.75, marginTop: '4px' }}>
                Bring the original copy for verification.
              </div>
            </li>

            <li>
              <strong>Certificate of Good Moral Character</strong>
            </li>
            <li>
              <strong>Original Progress Report Card / Form 138</strong> (signed by the School Principal)
            </li>

            <li>
              <strong>Accomplished Information Sheet</strong> (school form)
            </li>
            <li>
              <strong>Medical / Dental Record</strong> (school form/record, as required)
            </li>

            <li>
              <strong>Entrance exam and/or interview</strong> (if required; as scheduled)
            </li>
            <li>
              <strong>Other requirements</strong> as may be required by the school
            </li>

            <li style={{ marginTop: '10px', fontSize: '12px', opacity: 0.75 }}>
              Note: Specific requirements may still vary by grade level. Please confirm with the Admissions Office.
            </li>
          </ul>
        ),
      },

      {
        id: 'old',
        title: 'Old Students (Continuing) — What to Bring',
        content: (
          <ul className="mv-points">
            <li>
              <strong>4 copies</strong> of <strong>2&quot; x 2&quot;</strong> recent colored picture
            </li>
            <li>
              <strong>Other requirements</strong> as may be required by the school
            </li>
          </ul>
        ),
      },

      {
        id: 'returning',
        title: 'Returning Students',
        content: (
          <p style={{ lineHeight: '1.75' }}>
            Returning students are typically processed as <strong>new students</strong> and follow the
            applicable new student requirements and screening.
          </p>
        ),
      },

      {
        id: 'payment',
        title: 'Fees & Payment (Basic Info)',
        content: (
          <>
            <ul className="mv-points">
              <li>
                School fees are paid at the <strong>Accounting Office</strong>.
              </li>
              <li>
                Enrollment is on a <strong>school-year basis</strong>.
              </li>
              <li>
                Payment may be collected on a <strong>semestral</strong> or <strong>quarterly</strong> basis.
              </li>
            </ul>
            <p style={{ marginTop: '10px', fontSize: '12px', opacity: 0.75 }}>
              For the latest fee breakdown, deadlines, and schedules, please contact the school directly.
            </p>
          </>
        ),
      },
    ],
    []
  );

  const [openId, setOpenId] = useState('tots-new');

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section className="content">
      <div className="mission-page">
        <h1>Admissions Inquiry</h1>

        <div className="subtitle-container">
          <span className="line"></span>
          <p>Click a section to view the details</p>
          <span className="line"></span>
        </div>

        {/* ALWAYS VISIBLE (NOT clickable / NOT collapsible) */}
        <div className="privacy-banner" role="note" aria-label="Privacy Notice">
          <div className="privacy-title">
            <span>Privacy Notice</span>
          </div>

          <p className="privacy-text">
            This page is for <strong>information only</strong>. We do not collect, upload, or store
            personal documents here. Requirements are submitted directly to the school office.
          </p>

          <p className="privacy-subtext">
            Admission follows the age requirements set by the Department of Education (DepEd).
          </p>
        </div>

        {/* ACCORDION */}
        <div className="admissions-accordion" style={{ marginTop: '14px' }}>
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

                  {(item.id === 'tots-new' || item.id === 'elem-shs-new') && (
                    <div style={{ marginTop: '14px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      <button className="card-btns" onClick={() => navigate('/contact')}>
                        Contact Us for Schedule
                      </button>
                      <button className="card-btns" onClick={() => navigate('/programs')}>
                        View Programs
                      </button>
                    </div>
                  )}
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

export default Admissions;