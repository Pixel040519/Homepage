import ButtonLink from '../components/ButtonLink';
import PageHeader from '../components/PageHeader';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { homeFacilities } from '../data/facilities';

const HIGHLIGHTS = [
  { title: 'Quality Education', text: 'Strong academic programs designed to help students succeed.' },
  { title: 'Student Formation', text: 'Guidance, values, and leadership activities that build character.' },
  { title: 'Culture & Language', text: 'Chinese language learning and cultural appreciation in school life.' },
  { title: 'Service & Outreach', text: 'Programs that encourage compassion, stewardship, and community service.' },
];

export default function Home() {
  useDocumentTitle('');

  return (
    <>
      <div className="welcome">
        <PageHeader
          title="Welcome to Northern Rizal Yorklin School"
          subtitle={<><span lang="zh-Hans">育仁中学</span> · Educating for Knowledge and Virtue.</>}
        />
        <p className="welcome__intro">
          A Chinese-Filipino school committed to holistic formation—developing learners through
          strong academics, character building, culture, and service.
        </p>
      </div>

      <div className="card-container">
        <div className="card card--blue">
          <h2>About Yorklin</h2>
          <p>Learn our school background, heritage, hymn, and the values that guide Yorklinians.</p>
          <ButtonLink to="/about" variant="light">Read More</ButtonLink>
        </div>

        <div className="card card--amber">
          <h2>Programs</h2>
          <p>
            Explore our offerings from <strong>Pre-Nursery</strong> to <strong>Senior High School</strong>.
          </p>
          <ButtonLink to="/programs" variant="light">View Programs</ButtonLink>
        </div>
      </div>

      <section className="highlights" aria-labelledby="highlights-title">
        <h2 id="highlights-title">Why Choose Yorklin?</h2>
        <div className="highlight-grid">
          {HIGHLIGHTS.map(({ title, text }) => (
            <div className="highlight-item" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className="page-actions">
          <ButtonLink to="/contact">Contact Us</ButtonLink>
        </div>
      </section>

      <section className="home-facilities" aria-labelledby="facilities-title">
        <div className="home-facilities__header">
          <h2 id="facilities-title">Explore Our Facilities</h2>
          <p>Spaces that inspire learning, discovery, and growth.</p>
        </div>

        <div className="home-facilities__grid">
          {homeFacilities.map(({ title, tagline, image, alt }) => (
            <article className="home-facility-card" key={title}>
              <img src={image} alt={alt} loading="lazy" decoding="async" />
              <h3>{title}</h3>
              <p>{tagline}</p>
            </article>
          ))}
        </div>

        <div className="home-facilities__cta">
          <ButtonLink to="/facilities" variant="accent">
            View All Facilities <span aria-hidden="true">→</span>
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
