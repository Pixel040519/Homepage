import { Link } from 'react-router-dom';
import { SCHOOL } from '../data/siteInfo';

const QUICK_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__col">
          <h3>{SCHOOL.name}</h3>
          <p>
            Building future-ready learners through strong academics, values-centered formation, and
            community partnership.
          </p>
        </div>

        <nav className="site-footer__col" aria-label="Quick links">
          <h4>Quick Links</h4>
          {QUICK_LINKS.map(({ to, label }) => (
            <Link key={to} className="footer-link" to={to}>{label}</Link>
          ))}
        </nav>

        <div className="site-footer__col">
          <h4>Contact</h4>
          <p>
            Email: <a className="footer-link footer-link--inline" href={`mailto:${SCHOOL.emails[0]}`}>{SCHOOL.emails[0]}</a>
          </p>
          <p>
            Phone:{' '}
            {SCHOOL.phones.map((phone, i) => (
              <span key={phone.href}>
                {i > 0 && ' / '}
                <a className="footer-link footer-link--inline" href={phone.href}>{phone.label}</a>
              </span>
            ))}
          </p>
          <p>{SCHOOL.address[1]}</p>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>&copy; {new Date().getFullYear()} {SCHOOL.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
