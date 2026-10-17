import { Suspense, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import ButtonLink from './ButtonLink';
import Footer from './Footer';
import { SCHOOL } from '../data/siteInfo';

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/announcements', label: 'Announcements' },
  { to: '/contact', label: 'Contact' },
];

const linkClass = ({ isActive }) => (isActive ? 'active' : undefined);

export default function Layout() {
  const { pathname } = useLocation();

  // SPA navigation keeps the old scroll position; reset it on every route change.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <a className="skip-link" href="#content-area">Skip to main content</a>

      <nav className="navbar" aria-label="Primary navigation">
        <div className="nav-links">
          {NAV_ITEMS.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={linkClass}>{label}</NavLink>
          ))}
        </div>
        <ButtonLink to="/contact" variant="accent" className="nav-cta">Contact School</ButtonLink>
      </nav>

      {pathname === '/' && (
        <header className="hero">
          <NavLink to="/" aria-label={`${SCHOOL.name} home`}>
            <img src="/school.png" className="hero-img" alt={SCHOOL.name} decoding="async" />
          </NavLink>
        </header>
      )}

      <main id="content-area" tabIndex={-1}>
        <Suspense fallback={<p className="loading" role="status">Loading…</p>}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
