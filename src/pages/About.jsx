import ButtonLink from '../components/ButtonLink';
import PageHeader from '../components/PageHeader';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { history, hymn, mission, preface, vision } from '../data/about';

export default function About() {
  useDocumentTitle('About');

  return (
    <div className="about-page">
      <section className="page">
        <PageHeader title="About Our School" subtitle="Our Heritage, Identity, and Commitment to Excellence" />

        <div className="panel-row" id="preface">
          <article className="panel panel--wide panel--preface">
            <h2>Preface</h2>
            {preface.map((text) => <p key={text.slice(0, 24)}>{text}</p>)}
          </article>
        </div>

        <div className="panel-row" id="history">
          <article className="panel panel--wide panel--history">
            <h2>Brief History of the School</h2>
            {history.map((text) => <p key={text.slice(0, 24)}>{text}</p>)}
          </article>
        </div>

        <div className="panel-row" id="vision-mission">
          <article className="panel panel--half panel--vision">
            <h2>Vision</h2>
            <p>We envision a Yorklinian...</p>
            {vision.map(({ lead, points }) => (
              <div className="vision-group" key={lead}>
                <p className="vision-lead">{lead}</p>
                <ul className="plain-list">
                  {points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
            ))}
          </article>

          <article className="panel panel--half panel--mission">
            <h2>Mission</h2>
            <ul className="plain-list plain-list--spaced">
              {mission.map((item) => <li key={item.slice(0, 24)}>{item}</li>)}
            </ul>
          </article>
        </div>

        <div className="panel-row" id="hymn">
          <article className="panel panel--wide panel--hymn">
            <h2>School Hymn</h2>
            {hymn.map((stanza) => <p className="hymn-text" key={stanza.slice(0, 24)}>{stanza}</p>)}
          </article>
        </div>

        <div className="page-actions">
          <ButtonLink to="/">Back to Home</ButtonLink>
        </div>
      </section>
    </div>
  );
}
