import Accordion from '../components/Accordion';
import ButtonLink from '../components/ButtonLink';
import PageHeader from '../components/PageHeader';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { programs } from '../data/programs';

export default function Programs() {
  useDocumentTitle('Programs');

  return (
    <section className="page">
      <PageHeader title="Programs" subtitle="Click a level to view details" />

      <Accordion
        sections={programs}
        defaultOpen="tots"
        renderPanel={({ intro, levels, note }) => (
          <>
            <p>{intro}</p>
            <ul className="plain-list">
              {levels.map((level) => <li key={level}>{level}</li>)}
            </ul>
            {note && <p className="note">{note}</p>}
            <div className="button-row">
              <ButtonLink to="/admissions">View Admissions Requirements</ButtonLink>
              <ButtonLink to="/contact">Contact Us</ButtonLink>
            </div>
          </>
        )}
      />

      <div className="page-actions">
        <ButtonLink to="/">Back to Home</ButtonLink>
      </div>
    </section>
  );
}
