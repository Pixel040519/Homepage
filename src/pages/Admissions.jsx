import Accordion from '../components/Accordion';
import ButtonLink from '../components/ButtonLink';
import PageHeader from '../components/PageHeader';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { admissionSections } from '../data/admissions';

function Requirement({ label, detail, note }) {
  return (
    <li>
      {label && <strong>{label}</strong>} {detail}
      {note && <div className="note note--tight">{note}</div>}
    </li>
  );
}

export default function Admissions() {
  useDocumentTitle('Admissions');

  return (
    <section className="page">
      <PageHeader title="Admissions Inquiry" subtitle="Click a section to view the details" />

      {/* Always visible: not part of the accordion. */}
      <aside className="notice" aria-labelledby="privacy-title">
        <h2 id="privacy-title">Privacy Notice</h2>
        <p>
          This page is for <strong>information only</strong>. We do not collect, upload, or store
          personal documents here. Requirements are submitted directly to the school office.
        </p>
        <p className="note">
          Admission follows the age requirements set by the Department of Education (DepEd).
        </p>
      </aside>

      <Accordion
        sections={admissionSections}
        defaultOpen="tots-new"
        renderPanel={({ intro, items, note, actions }) => (
          <>
            {intro && <p>{intro}</p>}
            {items && (
              <ul className="plain-list">
                {items.map((item) => <Requirement key={item.label ?? item.detail} {...item} />)}
              </ul>
            )}
            {note && <p className="note">{note}</p>}
            {actions && (
              <div className="button-row">
                <ButtonLink to="/contact">Contact Us for Schedule</ButtonLink>
                <ButtonLink to="/programs">View Programs</ButtonLink>
              </div>
            )}
          </>
        )}
      />

      <div className="page-actions">
        <ButtonLink to="/">Back to Home</ButtonLink>
      </div>
    </section>
  );
}
