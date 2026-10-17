import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__col">
          <h3>Northern Rizal Yorklin School</h3>
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
          <p>Email: nrys_1939@yahoo.com.ph</p>
          <p>Phone: 8296-1782 / 8365-9318</p>
          <p>Grace Park West, Caloocan City</p>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>&copy; {new Date().getFullYear()} Northern Rizal Yorklin School. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
