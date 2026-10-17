import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="content about-page">
      <div className="mission-page">
        <h1>About Our School</h1>

        <div className="subtitle-container">
          <span className="line"></span>
          <p>Our Heritage, Identity, and Commitment to Excellence</p>
          <span className="line"></span>
        </div>

        {/* PREFACE */}
        <div className="mv-section" id="preface">
          <div className="mv-card about-card about-card--preface">
            <div className="about-card__header">
              
              <h2>Preface</h2>
            </div>

            <p>
              Yorklin is a Chinese-Filipino school, expectedly, we integrate the
              best of the two cultures, with nurturing knowledge, benevolence,
              and courage as the core of its education.
            </p>

            <p style={{ marginTop: '15px' }}>
              To ensure that we, the administrators, faculty, staff, parents,
              students and other stakeholders, share a common vision, carry out
              and serve the same mission, and are guided by standard policies and
              procedures, hence the creation of this Yorklin Student Handbook.
            </p>

            <p style={{ marginTop: '15px' }}>
              In knowing the content of this handbook, students will be guided
              and be inspired to actively perform their duties and
              responsibilities as Yorklinians. For the parents, the institution
              hopes to collaborate and build a strong partnership with them for
              the continuing growth and development of their children. For the
              teachers, this handbook will be a reference in the implementation
              of the school policies, rules and regulations in line with the
              vision-mission of the school. And for the other stakeholders, this
              will serve as a guide on how you can work hand in hand with us for
              the development of the institution as a pillar for nation building
              and a cradle for future leaders of the world.
            </p>
          </div>
        </div>

        {/* HISTORY */}
        <div className="mv-section" id="history">
          <div className="mv-card about-card about-card--history">
            <div className="about-card__header">
              
              <h2>Brief History of the School</h2>
            </div>

            <p>
              This institution, then known as Philippine Chinese Yok Lin School,
              was established in 1939 by a group of Chinese businessmen. Yok Lin
              was then housed in a borrowed residence along Julian Teodoro St.,
              Caloocan City.
            </p>

            <p style={{ marginTop: '15px' }}>
              When the Pacific War broke out in 1941, Yorklin stopped its
              operation and many Yorklin teachers and students joined and
              sacrificed their lives in fighting the Japanese.
            </p>

            <p style={{ marginTop: '15px' }}>
              When the war ended in 1945, the businessmen found a building in
              the riverbank of Malabon St., started classes, and held the first
              graduation ceremony for elementary in 1946.
            </p>

            <p style={{ marginTop: '15px' }}>
              The great increase in the enrollment prompted the founders to rent
              a portion in the then fast developing Grace Park, Caloocan City to
              serve as a Yoklin Branch. The founders, seeing the continuous
              increase in the enrollment of both schools, decided to look for
              another lot and construct a new school building, hence, a new
              building was inaugurated in 1947, at the present address, to
              conduct classes for the students of the two campuses.
            </p>

            <p style={{ marginTop: '15px' }}>
              The first kindergarten classes were held in 1958, high school
              classes started in 1977; and the school was named Northern Rizal
              Yorklin School.
            </p>

            <p style={{ marginTop: '15px' }}>
              The latest was the implementation of the K to 12 basic education which
              added two years of senior high school starting school year 2012-2013.
            </p>
          </div>
        </div>

        {/* VISION + MISSION */}
        <div className="mv-section" id="vision-mission">
          <div className="mv-card about-card about-card--vision">
            <div className="about-card__header">
              
              <h2>Vision</h2>
            </div>

            <p style={{ marginBottom: '10px' }}>We envision a Yorklinian...</p>

            <ul className="mv-points">
              <li>As a learner with an inquisitive mind</li>
              <li>A compassionate heart</li>
              <li>Creative hands</li>
              <li>Agile footsteps</li>

              <li style={{ marginTop: '10px' }}>
                As a person who believes in and realizes his/her own worth
              </li>
              <li>Values and cares for his/her family</li>
              <li>Appreciates and honors his/her alma mater</li>
              <li>Contributes to and excels in his/her chosen field</li>

              <li style={{ marginTop: '10px' }}>
                As an advocate who promotes integrity and excellence in oneself
              </li>
              <li>Love and harmony in the home</li>
              <li>Proactivity and self-sufficiency in the community</li>
              <li>Peace and equity in the world</li>

              <li style={{ marginTop: '10px' }}>
                As a steward who treasures the past for the valuable lessons it contributes
              </li>
              <li>Lives the present for the enriching experiences it offers</li>
              <li>Prepares for the future for the better opportunities it promises</li>
              <li>Maximizes every moment for the essence of life lies in it</li>
            </ul>
          </div>

          <div className="mv-card about-card about-card--mission">
            <div className="about-card__header">
              
              <h2>Mission</h2>
            </div>

            <ul className="mv-points">
              <li>
                To offer the Yorklinians a rich and rigorous curriculum designed
                to stimulate creative inquiry, intellectual achievements,
                ethical decisions, and prompt actions, in a world united by
                commonalities and enriched by diversity.
              </li>
              <li style={{ marginTop: '10px' }}>
                To support them to go beyond their limits in athletics and to go
                in-depth in expressing their artistic abilities.
              </li>
              <li style={{ marginTop: '10px' }}>
                To challenge them to unleash their intellectual potentials and
                set higher ethical standards.
              </li>
              <li style={{ marginTop: '10px' }}>
                To enjoin them to be proactive in taking stewardship of the
                natural world and in improving themselves to be of service to
                others.
              </li>
            </ul>
          </div>
        </div>

        {/* HYMN */}
        <div className="mv-section" id="hymn">
          <div className="mv-card about-card about-card--hymn">
            <div className="about-card__header">
              
              <h2>School Hymn</h2>
            </div>

            <p className="hymn-text">
              Oh mighty YORKLIN mother dear <br />
              Pride of the Orient Sea <br />
              Youth come from thy bosom with integrity <br />
              Onwards to serve society <br />
              <br />
              Hear the chanting hymn of classics <br />
              See the molding soul of epic <br />
              Blending the west with the east code of ethics <br />
              Culminating thy peak
            </p>
          </div>
        </div>

        <div className="mission-action" style={{ marginTop: '20px' }}>
          <button className="card-btns" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;