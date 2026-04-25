import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__col">
          <h3>School Portal</h3>
          <p>
            Building future-ready learners through strong academics,
            values-centered formation, and community partnership.
          </p>
        </div>

        <div className="site-footer__col">
          <h4>Quick Links</h4>
          <Link className="footer-link" to="/about">About</Link>
          <Link className="footer-link" to="/programs">Programs</Link>
          <Link className="footer-link" to="/admissions">Admissions</Link>
          <Link className="footer-link" to="/contact">Contact</Link>
        </div>

        <div className="site-footer__col">
          <h4>Contact</h4>
          <p>Email: info@school.edu</p>
          <p>Phone: +63 900 000 0000</p>
          <p>Mon-Fri: 8:00 AM - 5:00 PM</p>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>&copy; {new Date().getFullYear()} School Portal. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
