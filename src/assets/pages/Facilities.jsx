import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auditoriumImage from '../../../facilities/AUDITORIUM.JPG';
import classroomImage from '../../../facilities/Classroom.JPG';
import computerLaboratoryImage from '../../../facilities/Computer Laboratory2.JPG';
import dancingRoomImage from '../../../facilities/Dancing Room2.JPG';
import gymnasiumImage from '../../../facilities/GYMNASIUM8.JPG';
import libraryImage from '../../../facilities/LIBRARY6.JPG';
import schoolImage from '../../../facilities/SCHOOL2.JPG';
import totsClassroomImage from '../../../facilities/TOTS CLASSROOM 1.JPG';
import totsSchoolImage from '../../../facilities/TOTS SCHOOL.JPG';
import sleepingRoomImage from '../../../facilities/Tots School Sleeping Room.JPG';

const facilities = [
  { title: 'Our Campus', image: schoolImage },
  { title: 'Modern Classrooms', image: classroomImage },
  { title: 'Computer Laboratory', image: computerLaboratoryImage },
  { title: 'Library', image: libraryImage },
  { title: 'Auditorium', image: auditoriumImage },
  { title: 'Gymnasium', image: gymnasiumImage },
  { title: 'Dancing Room', image: dancingRoomImage },
  { title: 'Tots Classroom', image: totsClassroomImage },
  { title: 'Tots Playground', image: totsSchoolImage },
  { title: 'Sleeping Room', image: sleepingRoomImage },
];

function Facilities() {
  const navigate = useNavigate();
  const [selectedFacility, setSelectedFacility] = useState(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedFacility(null);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  useEffect(() => {
    if (!selectedFacility) return undefined;

    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedFacility]);

  const closeLightbox = () => {
    setSelectedFacility(null);
    triggerRef.current?.focus();
  };

  return (
    <section className="content">
      <div className="mission-page">
        <h1>Our Facilities</h1>

        <div className="subtitle-container">
          <span className="line"></span>
          <p>Spaces that inspire learning, creativity, and community</p>
          <span className="line"></span>
        </div>

        <div className="gallery-grid">
          {facilities.map((facility) => (
            <article className="gallery-item" key={facility.title}>
              <button
                type="button"
                className="gallery-image-button"
                onClick={(event) => {
                  triggerRef.current = event.currentTarget;
                  setSelectedFacility(facility);
                }}
                aria-label={`Zoom in on ${facility.title}`}
              >
                <img src={facility.image} alt={facility.title} loading="lazy" />
              </button>
              <div className="gallery-caption">{facility.title}</div>
            </article>
          ))}
        </div>

        <div className="mission-action" style={{ marginTop: '25px' }}>
          <button className="card-btns" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </div>

      {selectedFacility && (
        <div
          className="facility-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedFacility.title} enlarged view`}
          onClick={closeLightbox}
        >
          <div className="facility-lightbox__content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="facility-lightbox__close"
              ref={closeButtonRef}
              onClick={closeLightbox}
              aria-label="Close enlarged image"
            >
              x
            </button>
            <img src={selectedFacility.image} alt={selectedFacility.title} />
            <p>{selectedFacility.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Facilities;