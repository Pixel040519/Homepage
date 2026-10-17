import React from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Programs from './assets/pages/Programs';
import Contact from './assets/pages/Contact';
import Mission from './assets/pages/Mission';
import Admissions from './assets/pages/Admissions';
import Facilities from './assets/pages/Facilities';
import Announcements from './pages/Announcements';
import Footer from './footer';
import './style.css';

const navLinkClass = ({ isActive }) => (isActive ? 'active' : undefined);

function App() {
  const location = useLocation();

  return (
    
    <div className="App">
      <nav className="navbar" aria-label="Primary navigation">
        <div className="nav-links">
          <NavLink end to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/programs" className={navLinkClass}>Programs</NavLink>
          <NavLink to="/admissions" className={navLinkClass}>Admissions</NavLink>
          <NavLink to="/announcements" className={navLinkClass}>Announcements</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </div>
        <NavLink className="login-btn" to="/contact">Log In</NavLink>
      </nav>

      {location.pathname === '/' && (
        <header className="hero">
          <NavLink to="/" aria-label="Northern Rizal Yorklin School home">
            <img src="/school.png" className="hero-img" alt="Northern Rizal Yorklin School" />
          </NavLink>
        </header>
      )}

      <main id="content-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/announcements" element={<Announcements />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;