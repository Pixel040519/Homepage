import ButtonLink from '../components/ButtonLink';
import PageHeader from '../components/PageHeader';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { SCHOOL } from '../data/siteInfo';

export default function Contact() {
  useDocumentTitle('Contact');

  return (
    <section className="page">
      <PageHeader title="Contact Us" subtitle={`Get in touch with ${SCHOOL.name}`} />

      <div className="panel-row">
        <article className="panel panel--left">
          <h2>Our Location</h2>
          <address>
            {SCHOOL.address[0]}
            <br />
            {SCHOOL.address[1]}
          </address>

          <hr className="divider" />

          <h2>Call Us</h2>
          <p>
            {SCHOOL.phones.map((phone, i) => (
              <span key={phone.href}>
                {i > 0 && ' / '}
                <a className="contact-link" href={phone.href}>{phone.label}</a>
              </span>
            ))}
          </p>
        </article>

        <article className="panel panel--left">
          <h2>Email Addresses</h2>
          <ul className="plain-list">
            {SCHOOL.emails.map((email) => (
              <li key={email}>
                <a className="contact-link" href={`mailto:${email}`}>{email}</a>
              </li>
            ))}
          </ul>

          <hr className="divider" />

          <h2>Facebook Page</h2>
          <p>For announcements and updates:</p>
          <ButtonLink href={SCHOOL.facebook} className="btn--spaced">Visit our Facebook Page</ButtonLink>
          <p className="note">Note: We do not accept document submissions via this website.</p>
        </article>
      </div>

      <div className="page-actions">
        <ButtonLink to="/">Back to Home</ButtonLink>
      </div>
    </section>
  );
}
